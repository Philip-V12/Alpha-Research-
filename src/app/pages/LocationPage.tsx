import { useParams, Navigate, Link } from 'react-router';
import { MapPin, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { Seo } from '../components/Seo';
import { SITE_URL } from '../seo/seo-config';
import { getCity, getRelatedCities } from '../locations/cities';
import { generateLocationContent } from '../locations/contentEngine';
import { renderKeywords } from '../locations/keywordTemplates';

export function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCity(slug) : undefined;

  if (!city) {
    return <Navigate to="/blog/locations" replace />;
  }

  const content = generateLocationContent(city);
  const related = getRelatedCities(city, 12);
  const allKeywords = renderKeywords(city.name);
  // Feature a rotating subset of keyword phrases as chips (kept readable).
  const chipKeywords = allKeywords.slice(0, 18);

  const title = `Research & PhD Support in ${city.name} | Alpha Research`;
  const metaDescription = `PhD thesis writing, research paper, statistics, and journal publication support in ${city.name}, ${city.region}. Zero plagiarism, zero AI — original, expert help from Alpha Research.`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Academic research, thesis writing and journal publication support',
    provider: { '@type': 'Organization', name: 'Alpha Research' },
    areaServed: { '@type': 'City', name: city.name, containedInPlace: city.region },
    url: `${SITE_URL}/blog/locations/${city.slug}`,
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo title={title} description={metaDescription} keywords={allKeywords.slice(0, 40)} path={`/blog/locations/${city.slug}`} type="article" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero */}
      <section className="bg-teal-600 text-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/70 mb-4">
            <Link to="/blog" className="hover:text-white">Blog</Link>
            {' / '}
            <Link to="/blog/locations" className="hover:text-white">Locations</Link>
            {' / '}
            <span className="text-white">{city.name}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide text-white/80">{city.region}, {city.country}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Research & PhD Support in {city.name}
          </h1>
          <p className="text-base md:text-xl text-white/95 leading-relaxed max-w-4xl">{content.heroIntro}</p>
        </div>
      </section>

      {/* Keyword chips */}
      <section className="bg-white py-8 border-b-2 border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase mb-3">Services in {city.name}</h2>
          <div className="flex flex-wrap gap-2">
            {chipKeywords.map((k) => (
              <span key={k} className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg text-sm border border-teal-100">
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
          {content.sections.map((section) => (
            <div key={section.title} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-4 border-teal-500 pl-4 md:pl-6">
                {section.title}
              </h2>
              <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          ))}

          {/* Popular services links */}
          <div className="bg-teal-50 p-6 md:p-8 rounded-2xl border border-teal-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore our services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Statistical Analysis', url: '/services/statistical-analysis' },
                { name: 'SPSS Analysis', url: '/services/spss-analysis' },
                { name: 'Dissertation Writing', url: '/services/dissertation-writing' },
                { name: 'Manuscript Writing', url: '/services/manuscript-writing' },
                { name: 'Research Methodology', url: '/services/research-methodology' },
                { name: 'Formatting (APA/MLA/IEEE)', url: '/services/formatting' },
              ].map((l) => (
                <Link key={l.url} to={l.url} className="bg-white p-3 rounded-xl flex items-center justify-between group border border-teal-200 hover:border-teal-500 transition">
                  <span className="font-semibold text-gray-800 group-hover:text-teal-700 text-sm">{l.name}</span>
                  <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition" />
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4 md:pl-6">
              Frequently asked questions — {city.name}
            </h2>
            <div className="space-y-6">
              {content.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                    {f.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-7">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby locations — internal backlinks between city pages */}
          {related.length > 0 && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-teal-500 pl-4 md:pl-6">
                Research support in nearby locations
              </h2>
              <p className="text-gray-600 mb-5">
                We also serve scholars in other cities across {city.region} and {city.country}:
              </p>
              <div className="flex flex-wrap gap-2">
                {related.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/blog/locations/${c.slug}`}
                    className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg text-sm border border-teal-100 hover:border-teal-500 hover:bg-teal-100 transition"
                    title={`Research & PhD support in ${c.name}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <div className="mt-5">
                <Link to="/blog/locations" className="inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-800">
                  View all service locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-teal-600 rounded-3xl p-6 md:p-12 text-white shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Research support in {city.name}</h2>
            <p className="text-base md:text-xl mb-8">{content.closing}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-bold text-lg">
              <Mail className="w-5 h-5" />
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
