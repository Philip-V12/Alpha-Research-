import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG_IMAGE } from '../seo/seo-config';

interface SeoProps {
  title: string;
  description?: string;
  /** Comma-free list of keywords for the meta keywords tag */
  keywords?: string[];
  /** Override the canonical path (defaults to the current route) */
  path?: string;
  /** og:type — "website" for landing pages, "article" for content pages */
  type?: 'website' | 'article';
  /** Prevent indexing (e.g. 404 page) */
  noindex?: boolean;
}

export function Seo({ title, description, keywords, path, type = 'website', noindex }: SeoProps) {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;
  const canonical = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;
  const desc = description ?? DEFAULT_DESCRIPTION;

  // Some hosting/preview templates inject a `<meta name="robots"
  // content="noindex, nofollow">` into the HTML shell, which blocks the
  // production site from being indexed. Remove any such injected tag (unless
  // this page genuinely wants noindex) so search engines can crawl the site.
  useEffect(() => {
    if (noindex) return;
    document
      .querySelectorAll('meta[name="robots"]')
      .forEach((el) => {
        const content = (el.getAttribute('content') || '').toLowerCase();
        if (content.includes('noindex') || content.includes('nofollow')) {
          el.remove();
        }
      });
  }, [noindex, canonicalPath]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}
