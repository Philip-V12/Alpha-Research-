import { Link } from 'react-router';
import { MapPin, ArrowRight } from 'lucide-react';
import { Seo } from '../components/Seo';
import { cities, topIndiaSlugs, INTERNATIONAL_COUNTRIES } from '../locations/cities';

export function LocationsHub() {
  const top = topIndiaSlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const moreIndia = cities.filter((c) => c.country === 'India' && !topIndiaSlugs.includes(c.slug));
  const uae = cities.filter((c) => c.country === 'UAE');

  const CityLink = ({ slug, name, region }: { slug: string; name: string; region: string }) => (
    <Link
      to={`/blog/locations/${slug}`}
      className="text-teal-700 hover:text-teal-900 hover:underline transition"
      title={`Research & PhD support in ${name}, ${region}`}
    >
      {name}
    </Link>
  );

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Research & PhD Support Locations | Alpha Research"
        description="Alpha Research supports PhD and Masters scholars across India, the UAE, Qatar, Saudi Arabia, the UK, the USA, Germany, Austria, and Australia. Find dedicated research, thesis writing, statistics, and journal publication support for your city."
        keywords={['research help locations', 'PhD thesis help near me', 'research paper writing in India', 'thesis writing UAE', 'academic research consultancy locations']}
        path="/blog/locations"
      />

      {/* Hero */}
      <section className="bg-teal-600 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-7 h-7" />
            <span className="text-sm font-bold uppercase tracking-wide text-white/80">Service Locations</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Research Support, City by City</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl">
            We support researchers and PhD scholars across India, the UAE, Qatar, Saudi Arabia,
            the UK, the USA, Germany, Austria, and Australia. Choose your city to see every
            research, writing, and publication service available there.
          </p>
        </div>
      </section>

      {/* Top cities */}
      <section className="py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Top cities in India</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {top.map((c) => (
              <Link
                key={c.slug}
                to={`/blog/locations/${c.slug}`}
                className="group bg-white p-5 rounded-2xl border-2 border-teal-100 hover:border-teal-500 hover:shadow-lg transition flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-teal-700 transition">{c.name}</div>
                  <div className="text-sm text-gray-500">{c.region}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More cities across India */}
      <section className="py-12 md:py-16 border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">More cities across India</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {moreIndia.map((c) => (
              <CityLink key={c.slug} slug={c.slug} name={c.name} region={c.region} />
            ))}
          </div>
        </div>
      </section>

      {/* UAE */}
      <section className="py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">United Arab Emirates</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {uae.map((c) => (
              <CityLink key={c.slug} slug={c.slug} name={c.name} region={c.region} />
            ))}
          </div>
        </div>
      </section>

      {/* International countries */}
      {INTERNATIONAL_COUNTRIES.map((country, idx) => {
        const list = cities.filter((c) => c.country === country);
        if (!list.length) return null;
        return (
          <section key={country} className={`py-12 md:py-16 ${idx % 2 === 0 ? 'bg-gray-50' : ''} border-b border-gray-100`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{country}</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                {list.map((c) => (
                  <CityLink key={c.slug} slug={c.slug} name={c.name} region={c.region} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Don't see your city?</h2>
          <p className="text-lg md:text-xl mb-8">
            We support scholars across India, the Gulf, Europe, the UK, the USA, and Australia —
            and we're always adding more. Get in touch and we'll help you wherever you are.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
