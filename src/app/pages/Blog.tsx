import { Link } from 'react-router';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Seo } from '../components/Seo';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SITE_NAME, SITE_URL } from '../seo/seo-config';
import { articles } from '../blog/articles';

const BLOG_TITLE = 'Research & PhD Blog — Thesis, Publication & Academic Guides';
const BLOG_DESCRIPTION =
  'Expert guides on PhD thesis help, dissertation writing, research methodology, data analysis, journal publication, and academic editing — with support across Kerala.';

// ItemList structured data so search engines and AI crawlers see the full index.
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${SITE_NAME} Research & PhD Blog`,
  url: `${SITE_URL}/blog`,
  description: BLOG_DESCRIPTION,
  blogPost: articles.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.h1,
    description: a.metaDescription,
    url: `${SITE_URL}/blog/${a.slug}`,
    keywords: [a.primaryKeyword, ...a.secondaryKeywords].join(', '),
  })),
};

export function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Seo
        title={`${BLOG_TITLE} | ${SITE_NAME}`}
        description={BLOG_DESCRIPTION}
        keywords={[
          'PhD thesis help',
          'dissertation writing',
          'research methodology help',
          'thesis data analysis',
          'journal publication support',
          'academic editing services',
          'PhD research guidance India',
        ]}
        path="/blog"
        type="website"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-teal-600 text-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-teal-100 mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-semibold">Research & PhD Blog</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Guides for Every Stage of Your Research Journey
          </h1>
          <p className="text-base md:text-xl text-white/95 leading-relaxed max-w-3xl">
            In-depth, expert-written articles on PhD thesis help, dissertation writing, research
            methodology, statistical data analysis, journal publication, and academic editing —
            supporting scholars across all 28 states of India and worldwide.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition leading-snug">
                    {article.h1}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-teal-600 font-semibold text-sm">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-teal-600 rounded-3xl p-6 md:p-12 text-white shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Need Help With Your Research?</h2>
            <p className="text-base md:text-xl mb-8">
              Get personalised, confidential support from IIM &amp; IIT alumni — zero plagiarism and
              zero AI detection, guaranteed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-bold text-lg"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
