import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { ReactNode } from 'react';
import { Seo } from './Seo';
import { SITE_NAME } from '../seo/seo-config';

interface TechnicalPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  sections: {
    title: string;
    content: string | ReactNode;
  }[];
  relatedLinks?: {
    title: string;
    links: { name: string; url: string }[];
  };
}

export function TechnicalPageLayout({
  title,
  subtitle,
  description,
  icon,
  primaryKeywords,
  secondaryKeywords,
  sections,
  relatedLinks
}: TechnicalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Seo
        title={`${title} | ${SITE_NAME}`}
        description={description}
        keywords={[...primaryKeywords, ...secondaryKeywords]}
        type="article"
      />

      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 md:mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl w-fit">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">{title}</h1>
              <p className="text-lg md:text-2xl text-white/90">{subtitle}</p>
            </div>
          </div>
          <p className="text-base md:text-xl text-white/95 leading-relaxed max-w-4xl">{description}</p>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="bg-white py-8 border-b-2 border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-500 uppercase mb-3">Primary Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {primaryKeywords.map((keyword, index) => (
                <span key={index} className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-500 uppercase mb-3">Secondary Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {secondaryKeywords.map((keyword, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm border border-gray-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-4 border-teal-500 pl-4 md:pl-6">
                  {section.title}
                </h2>
                <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks && (
        <section className="py-12 bg-teal-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{relatedLinks.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="bg-white p-4 rounded-xl hover:shadow-lg transition flex items-center justify-between group border-2 border-teal-200 hover:border-teal-500"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-teal-600">{link.name}</span>
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-teal-600 rounded-3xl p-6 md:p-12 text-white shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Need Expert Assistance?</h2>
            <p className="text-base md:text-xl mb-8">
              Get professional support for your research project with zero plagiarism and zero AI detection guarantee.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-bold text-lg"
            >
              <Mail className="w-5 h-5" />
              Contact Us Today
            </Link>
            <p className="mt-6 text-sm text-white/90">
              Available to scholars across India and worldwide —{' '}
              <Link to="/blog/locations" className="underline font-semibold hover:text-white">
                find research support in your city
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
