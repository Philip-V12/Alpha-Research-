// Post-build prerender: turns the SPA in dist/ into static HTML per route so
// non-JS crawlers (Bing, GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …)
// and social scrapers receive fully-rendered content.
//
// Runs after `vite build`. Designed to fail SOFT: if anything goes wrong the
// original SPA dist/ is left untouched so publishing still succeeds.
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import sirv from 'sirv';

// Prefer the full `puppeteer` package (ships its own Chromium — works on
// Netlify/CI). Fall back to `puppeteer-core` + a system Chromium (e.g. the
// Figma Make sandbox at /usr/bin/chromium).
let puppeteer;
let bundledExecPath;
try {
  puppeteer = (await import('puppeteer')).default;
  try { bundledExecPath = puppeteer.executablePath(); } catch { /* not downloaded */ }
} catch {
  puppeteer = (await import('puppeteer-core')).default;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4599;

// All crawlable routes (keep in sync with routes.tsx / sitemap.xml)
const ROUTES = [
  '/', '/about', '/services', '/contact',
  '/blog',
  '/blog/phd-thesis-help', '/blog/dissertation-writing', '/blog/research-proposal-writing',
  '/blog/literature-review-writing', '/blog/research-methodology-help', '/blog/thesis-data-analysis',
  '/blog/academic-proofreading-editing', '/blog/paper-formatting', '/blog/journal-publication-support',
  '/blog/conference-paper-writing', '/blog/synopsis-writing-help', '/blog/thesis-defense-preparation',
  '/blog/phd-research-guidance',
  '/blog/management-research-help', '/blog/finance-research-help', '/blog/hr-research-help',
  '/blog/logistics-supply-chain-research', '/blog/medical-thesis-help', '/blog/dental-thesis-help',
  '/blog/homeopathy-research-help', '/blog/mechanical-engineering-research',
  '/blog/electronics-engineering-research', '/blog/computer-science-research',
  '/blog/civil-engineering-research',
  '/services/thesis-statistics', '/services/thesis-editing', '/services/phd-synopsis',
  '/services/thesis-chapters', '/services/research-paper', '/services/journal-publication',
  '/tools/ansys', '/tools/cfd', '/tools/simulink', '/tools/matlab', '/tools/spss',
  '/formats/latex', '/formats/ieee-format', '/formats/apa-mla', '/formats/harvard',
  '/journals/scopus', '/journals/sci', '/journals/ieee', '/journals/pubmed', '/journals/abdc',
];

function findChromium() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    bundledExecPath && existsSync(bundledExecPath) ? bundledExecPath : null,
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
  ].filter(Boolean);
  return candidates.find((p) => existsSync(p));
}

async function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    throw new Error('dist/index.html not found — run vite build first');
  }
  // If full puppeteer is present it can locate its own browser, so a missing
  // system path is only fatal when we're on puppeteer-core.
  const exePath = findChromium();
  const usingFullPuppeteer = Boolean(bundledExecPath);
  if (!exePath && !usingFullPuppeteer) throw new Error('No Chromium/Chrome executable found');

  // Static server for dist with SPA fallback to index.html
  const serve = sirv(DIST, { single: true, dev: false });
  const server = createServer((req, res) => serve(req, res, () => {
    res.statusCode = 404;
    res.end('Not found');
  }));
  await new Promise((r) => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    ...(exePath ? { executablePath: exePath } : {}),
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  let ok = 0;
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      try {
        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });
        // Give React a beat to flush title/meta into <head>
        await new Promise((r) => setTimeout(r, 300));
        const html = '<!DOCTYPE html>' + (await page.evaluate(() => document.documentElement.outerHTML));

        const outDir = route === '/' ? DIST : join(DIST, route);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, 'index.html'), html, 'utf8');
        ok++;
        console.log(`prerendered ${route}`);
      } catch (err) {
        console.warn(`skip ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`prerender complete: ${ok}/${ROUTES.length} routes`);
}

main().catch((err) => {
  console.error(`prerender failed (SPA dist left intact): ${err.message}`);
  process.exit(0); // soft-fail: never block the deploy
});
