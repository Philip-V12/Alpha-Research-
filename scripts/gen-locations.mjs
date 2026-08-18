// One-off generator: extracts city slugs from src/app/locations/cities.ts,
// then (1) injects <url> entries into public/sitemap.xml between the
// LOCATIONS markers, and (2) writes the slug list for prerender import.
import fs from 'fs';

const src = fs.readFileSync('src/app/locations/cities.ts', 'utf8');

function slugify(name) {
  return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const arraysText = src.slice(src.indexOf('const TOP_INDIA'), src.indexOf('function build'));
const re = /\[\s*'([^']+)'/g;
let m;
const set = new Set();
const order = [];
while ((m = re.exec(arraysText))) {
  const s = slugify(m[1]);
  if (!set.has(s)) { set.add(s); order.push(s); }
}

console.log('City slug count:', order.length);

// 1. Sitemap
const sitemapPath = 'public/sitemap.xml';
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
const START = '  <!-- LOCATIONS:START -->';
const END = '  <!-- LOCATIONS:END -->';
const block = [START,
  '  <url><loc>https://alpharesearch.study/blog/locations</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>',
  ...order.map((s) => `  <url><loc>https://alpharesearch.study/blog/locations/${s}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`),
  END].join('\n');

if (sitemap.includes(START) && sitemap.includes(END)) {
  sitemap = sitemap.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
} else {
  sitemap = sitemap.replace('</urlset>', `\n${block}\n</urlset>`);
}
fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap updated.');

// 2. Prerender slug list (imported by scripts/prerender.mjs)
fs.writeFileSync('scripts/location-slugs.json', JSON.stringify(order, null, 0));
console.log('Wrote scripts/location-slugs.json');
