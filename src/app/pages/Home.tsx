import { Link } from 'react-router';
import { GraduationCap, Users, Shield, TrendingUp, Cpu, Microscope, Box, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { RunningBanner } from '../components/RunningBanner';
import { Seo } from '../components/Seo';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <>
      <Seo
        title="Alpha Research Academic Content and Journal Publication Consultancy"
        description="Alpha Research offers end-to-end academic research support: thesis writing, statistics, editing, research papers, and journal publication (Scopus, SCI, IEEE, PubMed, ABDC) with zero plagiarism and zero AI detection."
        keywords={[
          'thesis assistance help', 'journal publication help', 'journal publication', 'thesis publication',
          'thesis preparation', 'thesis content', 'manuscript preparation', 'manuscript publication',
          'dissertation help', 'academic content preparation', 'academic research', 'thesis writing',
          'research paper writing', 'PhD synopsis', 'thesis statistics', 'academic editing',
          'academic proofreading', 'research proposal writing', 'literature review writing',
          'Scopus publication', 'SCI journal publication', 'IEEE paper publication', 'PubMed publication',
          'ABDC journal', 'plagiarism removal', 'zero plagiarism', 'zero AI detection', 'PhD thesis help',
        ]}
      />

      {/* Running marquee banner */}
      <RunningBanner />

      {/* Hero Section - Simplified */}
      <section className="bg-teal-50 py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-lg border-2 border-teal-200">
              <span className="text-teal-700">✨ Zero Plagiarism • Zero AI Detection • 100% Human-Written Content</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
              {['Your Research.', 'Our Expertise.', 'Global Impact.'].map((line, i) => {
                const dir = i % 2 === 0 ? -80 : 80;
                return (
                  <motion.span
                    key={i}
                    className={i === 2 ? 'block text-teal-600' : 'block'}
                    animate={{ opacity: [0, 1, 1, 0], x: [dir, 0, 0, dir] }}
                    transition={{
                      duration: 4,
                      times: [0, 0.15, 0.85, 1],
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: 'easeInOut',
                    }}
                  >
                    {line}
                  </motion.span>
                );
              })}
            </h1>

            <p className="text-lg sm:text-xl md:text-3xl text-gray-700 mb-8 md:mb-12 leading-relaxed">
              Complete academic research, content development, statistical analysis, and end-to-end journal publishing support by <strong>IIM & IIT alumni</strong>.
            </p>

            <Link to="/services" className="inline-flex items-center gap-3 bg-teal-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl hover:bg-teal-700 hover:shadow-2xl transition font-bold text-lg md:text-xl group">
              Explore Our Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
            </Link>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20">
              {[
                { number: '1000+', label: 'Published Papers' },
                { number: '500+', label: 'PhD Scholars' },
                { number: '100%', label: 'Original Content' },
                { number: '24/7', label: 'Expert Support' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-teal-200">
                  <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose Alpha Research?</h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for world-class academic research excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Led by IIM & IIT Alumni',
                description: 'Founded and operated by distinguished alumni from Indian Institute of Management and Indian Institute of Technology, ensuring top-tier academic expertise.',
                color: 'bg-teal-600',
                bg: 'bg-teal-50'
              },
              {
                icon: Shield,
                title: 'Zero Plagiarism & Zero AI',
                description: 'Guaranteed 100% original, human-written content with zero plagiarism and zero AI detection. Every piece is crafted by expert researchers.',
                color: 'bg-emerald-600',
                bg: 'bg-emerald-50'
              },
              {
                icon: TrendingUp,
                title: 'Top Journal Publications',
                description: 'Expert support for publishing in Scopus, SCI, ABDC, IEEE, PubMed, and other reputed indexed journals worldwide.',
                color: 'bg-cyan-600',
                bg: 'bg-cyan-50',
                links: [
                  { name: 'Scopus', url: '/journals/scopus' },
                  { name: 'SCI/SCIE', url: '/journals/sci' },
                  { name: 'IEEE', url: '/journals/ieee' },
                  { name: 'PubMed', url: '/journals/pubmed' },
                  { name: 'ABDC', url: '/journals/abdc' }
                ]
              },
              {
                icon: Microscope,
                title: 'Multi-Domain Expertise',
                description: 'Comprehensive research support across Engineering, Management, Medical, Finance, Architecture, and more.',
                color: 'bg-teal-700',
                bg: 'bg-teal-50'
              },
              {
                icon: Box,
                title: 'Engineering Specializations',
                description: 'Expert support across Mechanical, Thermal, Computer Science, Aerospace, Civil, Electrical, and all engineering domains.',
                color: 'bg-emerald-700',
                bg: 'bg-emerald-50'
              },
              {
                icon: Cpu,
                title: 'Advanced Tools & Formats',
                description: 'Expertise in LaTeX, ANSYS, CFD, Simulink, MATLAB, SPSS, and all professional formatting standards.',
                color: 'bg-cyan-700',
                bg: 'bg-cyan-50',
                links: [
                  { name: 'LaTeX', url: '/formats/latex' },
                  { name: 'ANSYS', url: '/tools/ansys' },
                  { name: 'MATLAB', url: '/tools/matlab' },
                  { name: 'SPSS', url: '/tools/spss' }
                ]
              }
            ].map((item, index) => (
              <div key={index} className={`${item.bg} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-400 hover:scale-105`}>
                <div className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                {item.links && (
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.url}
                        className="text-xs bg-white px-3 py-1.5 rounded-full text-teal-700 hover:bg-teal-100 transition font-semibold border border-teal-300"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Core Services</h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Complete research, content development, and publishing support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Thesis & Dissertation', desc: 'Complete PhD and Masters thesis support from synopsis to final submission', items: ['Synopsis Writing', 'Chapter Writing', 'Statistical Analysis', 'Editing & Formatting'] },
              { title: 'Research Papers', desc: 'Zero plagiarism, zero AI research papers for international journals', items: ['Original Research', 'Literature Review', 'Data Analysis', 'Journal Submission'] },
              { title: 'Journal Publication', desc: 'End-to-end support for Scopus, SCI, IEEE, PubMed publications', items: ['Journal Selection', 'Manuscript Prep', 'Peer Review Response', 'Publication Support'] }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-3 bg-teal-600 text-white px-10 py-4 rounded-xl hover:bg-teal-700 hover:shadow-2xl transition font-bold text-lg group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section (GEO / rich-result optimized) */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Elevate Your Research?</h2>
          <p className="text-lg md:text-2xl mb-6 leading-relaxed">
            Let's discuss how we can support your academic journey and help you achieve your research goals with world-class quality.
          </p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <Shield className="w-6 h-6 flex-shrink-0" />
            <span className="text-base md:text-xl font-semibold">Zero Plagiarism • Zero AI Detection • 100% Original Content</span>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-teal-600 px-10 py-4 rounded-xl hover:shadow-2xl transition font-bold text-lg">
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
