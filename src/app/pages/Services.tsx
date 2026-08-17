import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { LineChart, FileText, BookOpen, Award, Cpu, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Seo } from '../components/Seo';

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const bannerServices = [
    {
      icon: LineChart,
      title: 'Statistical Analysis & Data Science',
      subtitle: 'Expert statistical support for research excellence',
      description: 'Comprehensive statistical analysis using industry-leading tools including MATLAB, SPSS, R, Python, and advanced machine learning techniques. From data collection to interpretation, we provide publication-ready results.',
      color: 'bg-teal-600',
      tools: [
        { name: 'MATLAB', link: '/tools/matlab' },
        { name: 'SPSS', link: '/tools/spss' },
        { name: 'Python', link: '#' },
        { name: 'R Language', link: '#' }
      ],
      link: '/services/thesis-statistics'
    },
    {
      icon: Cpu,
      title: 'Engineering Simulation & Modeling',
      subtitle: 'Advanced simulation for cutting-edge research',
      description: 'State-of-the-art simulation support using ANSYS, CFD, Simulink, COMSOL, and specialized engineering software. Perfect for mechanical, aerospace, civil, and electrical engineering research projects.',
      color: 'bg-emerald-600',
      tools: [
        { name: 'ANSYS', link: '/tools/ansys' },
        { name: 'CFD', link: '/tools/cfd' },
        { name: 'Simulink', link: '/tools/simulink' },
        { name: 'FEA', link: '#' }
      ],
      link: '/services/thesis-statistics'
    },
    {
      icon: FileText,
      title: 'Professional Academic Formatting',
      subtitle: 'Publication-ready formatting services',
      description: 'Expert formatting in LaTeX, IEEE, APA, MLA, Harvard, and all major academic styles. Ensure your thesis or paper meets the highest standards with pixel-perfect formatting for journal submissions.',
      color: 'bg-cyan-700',
      tools: [
        { name: 'LaTeX', link: '/formats/latex' },
        { name: 'IEEE Format', link: '/formats/ieee-format' },
        { name: 'APA/MLA', link: '/formats/apa-mla' },
        { name: 'Harvard', link: '/formats/harvard' }
      ],
      link: '/services/thesis-editing'
    },
    {
      icon: Award,
      title: 'Top-Tier Journal Publications',
      subtitle: 'Get published in prestigious indexed journals',
      description: 'Complete support for publishing in Scopus, SCI/SCIE, IEEE, PubMed, ABDC, and other reputed indexed journals. From manuscript preparation to acceptance, we guide you every step of the way.',
      color: 'bg-teal-700',
      tools: [
        { name: 'Scopus', link: '/journals/scopus' },
        { name: 'SCI/SCIE', link: '/journals/sci' },
        { name: 'IEEE', link: '/journals/ieee' },
        { name: 'PubMed', link: '/journals/pubmed' }
      ],
      link: '/services/journal-publication'
    },
    {
      icon: BookOpen,
      title: 'PhD Thesis & Dissertation Support',
      subtitle: 'Complete thesis writing and editing services',
      description: 'End-to-end PhD and Masters thesis support from synopsis writing to final submission. Expert guidance on all chapters including literature review, methodology, results, and discussion with unlimited revisions.',
      color: 'bg-emerald-700',
      tools: [
        { name: 'Synopsis', link: '/services/phd-synopsis' },
        { name: 'Chapters', link: '/services/thesis-chapters' },
        { name: 'Editing', link: '/services/thesis-editing' },
        { name: 'Statistics', link: '/services/thesis-statistics' }
      ],
      link: '/services/thesis-chapters'
    },
    {
      icon: FileText,
      title: 'Research Paper Writing',
      subtitle: 'Zero plagiarism, zero AI research papers',
      description: 'Original research papers written by expert researchers with guaranteed zero plagiarism and zero AI detection. From concept to publication, we deliver high-quality manuscripts for international journals.',
      color: 'bg-cyan-600',
      tools: [
        { name: 'Original Content', link: '/services/research-paper' },
        { name: 'Literature Review', link: '#' },
        { name: 'Methodology', link: '#' },
        { name: 'Results Analysis', link: '#' }
      ],
      link: '/services/research-paper'
    }
  ];

  const detailedServices = [
    { icon: LineChart, title: 'Thesis Statistics', link: '/services/thesis-statistics', desc: 'Expert statistical analysis using MATLAB, SPSS, R, Python for thesis and dissertations', iconBg: 'bg-teal-600', border: 'border-teal-200 hover:border-teal-600', hoverText: 'group-hover:text-teal-700' },
    { icon: FileText, title: 'Thesis Editing', link: '/services/thesis-editing', desc: 'Professional editing with zero plagiarism and zero AI detection guarantee', iconBg: 'bg-emerald-600', border: 'border-emerald-200 hover:border-emerald-600', hoverText: 'group-hover:text-emerald-700' },
    { icon: BookOpen, title: 'PhD Synopsis', link: '/services/phd-synopsis', desc: 'Comprehensive PhD synopsis and research proposal writing services', iconBg: 'bg-cyan-700', border: 'border-cyan-200 hover:border-cyan-700', hoverText: 'group-hover:text-cyan-700' },
    { icon: BookOpen, title: 'Thesis Chapters', link: '/services/thesis-chapters', desc: 'Complete chapter-wise thesis writing support with expert guidance', iconBg: 'bg-teal-700', border: 'border-teal-200 hover:border-teal-700', hoverText: 'group-hover:text-teal-800' },
    { icon: FileText, title: 'Research Papers', link: '/services/research-paper', desc: '100% original research papers for international journal publications', iconBg: 'bg-emerald-700', border: 'border-emerald-200 hover:border-emerald-700', hoverText: 'group-hover:text-emerald-800' },
    { icon: Award, title: 'Journal Publication', link: '/services/journal-publication', desc: 'Scopus, SCI, IEEE, PubMed, ABDC publication support from submission to acceptance', iconBg: 'bg-cyan-600', border: 'border-cyan-200 hover:border-cyan-600', hoverText: 'group-hover:text-cyan-700' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Our Services | Alpha Research Academic Consultancy"
        description="Explore Alpha Research services: thesis statistics, editing, PhD synopsis, thesis chapters, research paper writing, and journal publication support across MATLAB, SPSS, ANSYS, LaTeX, and more."
        keywords={['academic research services', 'thesis statistics', 'thesis editing', 'PhD synopsis', 'research paper writing', 'journal publication', 'MATLAB', 'SPSS', 'ANSYS', 'LaTeX']}
      />

      {/* Banner-Style Slider */}
      <section className="relative overflow-hidden">
        <div className="relative" ref={emblaRef}>
          <div className="flex">
            {bannerServices.map((service, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className={`relative h-auto py-16 md:py-0 md:h-[600px] ${service.color}`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                  {/* Content */}
                  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-full flex items-center">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                      {/* Left Content */}
                      <div className="text-white">
                        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                          <service.icon className="w-6 h-6" />
                          <span className="font-semibold text-sm uppercase tracking-wide">Specialized Service</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                          {service.title}
                        </h2>

                        <p className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-white/90">
                          {service.subtitle}
                        </p>

                        <p className="text-base md:text-xl text-white/90 leading-relaxed mb-6 md:mb-8">
                          {service.description}
                        </p>

                        <Link
                          to={service.link}
                          className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl transition group"
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
                        </Link>
                      </div>

                      {/* Right Content - Tools Grid */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {service.tools.map((tool, toolIndex) => (
                          <Link
                            key={toolIndex}
                            to={tool.link}
                            className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-6 rounded-2xl hover:bg-white/20 hover:border-white/40 transition text-white group"
                          >
                            <div className="text-base md:text-lg font-bold mb-1 md:mb-2 group-hover:scale-110 transition">{tool.name}</div>
                            <div className="text-xs md:text-sm text-white/80">Expert Support</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Slide Number */}
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-white/60 text-sm font-semibold">
                    {String(index + 1).padStart(2, '0')} / {String(bannerServices.length).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-full p-2.5 md:p-5 hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-teal-600" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-full p-2.5 md:p-5 hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-20 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-teal-600" />
        </button>

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {bannerServices.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-white w-16 shadow-lg'
                  : 'bg-white/40 w-3 hover:bg-white/60'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">All Our Services</h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Complete research, content development, and publishing support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${service.border} group hover:scale-105`}
              >
                <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${service.hoverText} transition`}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
