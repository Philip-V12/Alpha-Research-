import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WhatsAppButton } from './WhatsAppButton';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '../seo/seo-config';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Alpha Academic Research Consultants',
  alternateName: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  email: 'alphaacademicresearch@gmail.com',
  telephone: ['+91-730-654-1212', '+44-7403-895087'],
  areaServed: 'Worldwide',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Olasco Ventures India Pvt. Ltd.',
  },
  knowsAbout: [
    'Academic research',
    'Thesis writing',
    'Journal publishing assistance',
    'Research paper writing',
    'Statistical analysis',
    'Scopus, SCI, IEEE, PubMed, ABDC publication',
  ],
};

const LOGO_SRC = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Site-wide structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shrink-0">
                <ImageWithFallback src={LOGO_SRC} alt="Alpha Research — Academic Content & Journal Publication Consultancy logo" className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <h1 className="text-2xl text-slate-900" style={{ fontFamily: "'Merriweather', serif", fontWeight: 900 }}>
                  Alpha <span className="text-teal-700">Research</span>
                </h1>
                <div className="text-[10px] tracking-[0.2em] uppercase text-teal-700 font-semibold">
                  Academic Excellence Guaranteed
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <Link to="/" className={`transition ${location.pathname === '/' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}>Home</Link>
              <Link to="/what-we-do" className={`transition ${location.pathname === '/what-we-do' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}>What We Do</Link>
              <Link to="/services" className={`transition ${location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}>Services</Link>
              <Link to="/blog" className={`transition ${location.pathname.startsWith('/blog') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}>Blog</Link>
              <Link to="/about" className={`transition ${location.pathname === '/about' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}>About</Link>
              <Link to="/contact" className={`transition ${location.pathname === '/contact' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}>Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 hover:shadow-xl transition font-semibold">
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-teal-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition">Home</Link>
              <Link to="/what-we-do" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition">What We Do</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition">Services</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition">Blog</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition">About</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition">Contact</Link>
            </nav>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main id="main-content">
        <Outlet />
      </main>

      {/* Floating WhatsApp button on every page */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shrink-0">
                  <ImageWithFallback src={LOGO_SRC} alt="Alpha Research — Academic Content & Journal Publication Consultancy logo" className="w-full h-full object-cover" />
                </div>
                <div className="leading-tight">
                  <h3 className="text-lg" style={{ fontFamily: "'Merriweather', serif", fontWeight: 900 }}>
                    Alpha Research
                  </h3>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-teal-400 font-semibold">
                    Academic Excellence Guaranteed
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Premier academic research consultancy led by IIM & IIT alumni
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-900 text-teal-300 px-2 py-1 rounded text-xs">Zero Plagiarism</span>
                <span className="bg-teal-800 text-teal-200 px-2 py-1 rounded text-xs">Zero AI</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services/statistical-analysis" className="hover:text-teal-400 transition">Statistical Analysis</Link></li>
                <li><Link to="/services/dissertation-writing" className="hover:text-teal-400 transition">Dissertation Writing</Link></li>
                <li><Link to="/services/manuscript-writing" className="hover:text-teal-400 transition">Manuscript Writing</Link></li>
                <li><Link to="/services/formatting" className="hover:text-teal-400 transition">Formatting (APA/MLA/IEEE)</Link></li>
                <li><Link to="/services/research-methodology" className="hover:text-teal-400 transition">Research Methodology</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/journals/scopus" className="hover:text-teal-400 transition">Scopus Journals</Link></li>
                <li><Link to="/journals/sci" className="hover:text-teal-400 transition">SCI Journals</Link></li>
                <li><Link to="/formats/latex" className="hover:text-teal-400 transition">LaTeX Formatting</Link></li>
                <li><Link to="/tools/matlab" className="hover:text-teal-400 transition">MATLAB Services</Link></li>
                <li><Link to="/tools/spss" className="hover:text-teal-400 transition">SPSS Analysis</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-teal-400 transition">About Us</Link></li>
                <li><Link to="/what-we-do" className="hover:text-teal-400 transition">What We Do</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition">Our Services</Link></li>
                <li><Link to="/blog" className="hover:text-teal-400 transition">Blog</Link></li>
                <li><Link to="/blog/locations" className="hover:text-teal-400 transition">Locations</Link></li>
                <li><Link to="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* Popular locations — site-wide backlinks to key city pages */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="font-bold mb-4 text-sm">Popular Locations</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
              {[
                ['Chennai', 'chennai'], ['Coimbatore', 'coimbatore'], ['Bengaluru', 'bengaluru'],
                ['Hyderabad', 'hyderabad'], ['Kochi', 'kochi'], ['Mumbai', 'mumbai'],
                ['New Delhi', 'new-delhi'], ['Kolkata', 'kolkata'], ['Pune', 'pune'],
                ['Dubai', 'dubai'], ['Abu Dhabi', 'abu-dhabi'], ['Doha', 'doha'],
                ['Riyadh', 'riyadh'], ['London', 'london'], ['New York', 'new-york'],
                ['Berlin', 'berlin'], ['Sydney', 'sydney'],
              ].map(([name, slug]) => (
                <Link key={slug} to={`/blog/locations/${slug}`} className="hover:text-teal-400 transition">{name}</Link>
              ))}
              <Link to="/blog/locations" className="text-teal-400 font-semibold hover:text-teal-300 transition">All locations →</Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400 mb-2">
              &copy; 2026 Alpha Academic Research Consultants. All rights reserved.
            </p>
            <p className="text-center text-xs text-gray-500">
              A venture of Olasco Ventures India Pvt. Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
