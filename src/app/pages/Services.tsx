import { Link } from 'react-router';
import {
  LineChart, Database, Search, TerminalSquare, Cpu, Cog, Briefcase,
  HeartPulse, Users, Sigma, FileText, FileSignature, BookMarked,
  ListOrdered, SearchCheck, Lightbulb, AlignLeft, Workflow, ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { serviceItems, serviceCategories } from '../services/serviceItems';

const ICONS: Record<string, LucideIcon> = {
  LineChart, Database, Search, TerminalSquare, Cpu, Cog, Briefcase,
  HeartPulse, Users, Sigma, FileText, FileSignature, BookMarked,
  ListOrdered, SearchCheck, Lightbulb, AlignLeft, Workflow,
};

const CATEGORY_STYLES: Record<string, { badge: string; icon: string; border: string; hover: string }> = {
  'Statistical & Data': { badge: 'bg-teal-600', icon: 'bg-teal-600', border: 'border-teal-200 hover:border-teal-600', hover: 'group-hover:text-teal-700' },
  'Research Topics': { badge: 'bg-emerald-600', icon: 'bg-emerald-600', border: 'border-emerald-200 hover:border-emerald-600', hover: 'group-hover:text-emerald-700' },
  'Writing & Dissertation': { badge: 'bg-cyan-700', icon: 'bg-cyan-700', border: 'border-cyan-200 hover:border-cyan-700', hover: 'group-hover:text-cyan-700' },
  'Formatting & Support': { badge: 'bg-teal-700', icon: 'bg-teal-700', border: 'border-teal-200 hover:border-teal-700', hover: 'group-hover:text-teal-800' },
};

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Our Services | Alpha Research Academic Consultancy"
        description="Explore Alpha Research services across statistical analysis, subject-wise research support, dissertation and manuscript writing, and academic formatting — each with dedicated, SEO-optimized guidance and zero plagiarism."
        keywords={['academic research services', 'statistical analysis services', 'dissertation writing services', 'manuscript writing', 'research methodology help', 'academic formatting services', 'SPSS analysis', 'R programming support']}
      />

      {/* Hero */}
      <section className="bg-teal-600 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Services</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            End-to-end academic research support — from statistical analysis to dissertation writing,
            subject-wise expertise, and precise formatting. Each service has its own detailed page.
          </p>
          <p className="mt-6 text-base md:text-lg text-white/80">
            Looking for how we work with you?{' '}
            <Link to="/what-we-do" className="underline font-semibold hover:text-white">
              See What We Do
            </Link>
          </p>
        </div>
      </section>

      {/* Category sections */}
      {serviceCategories.map((category) => {
        const items = serviceItems.filter((s) => s.category === category);
        const style = CATEGORY_STYLES[category];
        return (
          <section key={category} className="py-12 md:py-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <span className={`${style.badge} text-white text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full`}>
                  {category}
                </span>
                <span className="text-gray-400 text-sm">{items.length} services</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {items.map((item) => {
                  const Icon = ICONS[item.icon] ?? FileText;
                  return (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      className={`bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${style.border} group hover:-translate-y-1`}
                    >
                      <div className={`${style.icon} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className={`text-xl md:text-2xl font-bold mb-2 text-gray-900 ${style.hover} transition`}>
                        {item.cardTitle}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.cardBlurb}</p>
                      <span className="inline-flex items-center gap-2 font-semibold text-teal-600">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today to discuss your research needs and how we can help you achieve academic excellence.
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
