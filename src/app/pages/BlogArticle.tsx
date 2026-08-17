import { useParams, Link } from 'react-router';
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Mail } from 'lucide-react';
import { Seo } from '../components/Seo';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SITE_NAME, SITE_URL, OG_IMAGE } from '../seo/seo-config';
import { getArticle, articles } from '../blog/articles';
import { NotFound } from './NotFound';

export function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <NotFound />;

  const url = `${SITE_URL}/blog/${article.slug}`;

  // Article + Breadcrumb structured data for rich results and AI crawlers.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.h1,
        description: article.metaDescription,
        image: article.image,
        url,
        keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(', '),
        author: { '@type': 'Organization', name: SITE_NAME },
        publisher: {
          '@type': 'Organization',
          name: 'Alpha Academic Research Consultants',
          logo: { '@type': 'ImageObject', url: OG_IMAGE },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: article.h1, item: url },
        ],
      },
    ],
  };

  const relatedArticles = article.related
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={article.pageTitle}
        description={article.metaDescription}
        keywords={[article.primaryKeyword, ...article.secondaryKeywords]}
        path={`/blog/${article.slug}`}
        type="article"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb + hero */}
      <section className="bg-teal-600 text-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-teal-100 text-sm mb-6" aria-label="Breadcrumb">
            <Link to="/blog" className="inline-flex items-center gap-1 hover:text-white transition">
              <ArrowLeft className="w-4 h-4" /> Blog
            </Link>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{article.category}</span>
            <span className="flex items-center gap-1 text-teal-100 text-sm">
              <Clock className="w-4 h-4" /> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.h1}</h1>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl h-52 md:h-80">
          <ImageWithFallback src={article.image} alt={article.imageAlt} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 font-medium border-l-4 border-teal-500 pl-5">
          {article.excerpt}
        </p>

        {article.sections.map((section) => (
          <section key={section.h2} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.h2}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-2 mt-4">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Inline CTA */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 md:p-8 my-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Get Expert Help With {article.category}
          </h2>
          <p className="text-gray-700 mb-6">
            Confidential, 100% human-written support from IIM &amp; IIT alumni across India and worldwide.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition font-semibold"
          >
            <Mail className="w-5 h-5" /> Contact Alpha Research
          </Link>
        </div>

        {/* SEO metadata block — surfaced for transparency */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-10">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">SEO Details for This Article</h2>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-gray-800">Primary keyword</dt>
              <dd className="text-gray-600">{article.primaryKeyword}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800">Secondary keywords</dt>
              <dd className="text-gray-600">{article.secondaryKeywords.join(', ')}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800">Meta description</dt>
              <dd className="text-gray-600">{article.metaDescription}</dd>
            </div>
          </dl>
        </div>
      </article>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-16 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="h-32 overflow-hidden">
                    <ImageWithFallback src={a.image} alt={a.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition text-sm leading-snug">{a.h1}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-teal-600 text-xs font-semibold">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Re-export for any tooling that wants the full slug list.
export const blogSlugs = articles.map((a) => a.slug);
