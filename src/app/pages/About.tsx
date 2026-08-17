import { GraduationCap, Users, Shield, Award } from 'lucide-react';
import { Link } from 'react-router';
import { Seo } from '../components/Seo';

export function About() {
  return (
    <div className="min-h-screen">
      <Seo
        title="About Us | Alpha Research Academic Consultancy"
        description="Alpha Academic Research Consultants is led by distinguished IIM and IIT alumni, delivering academic research, statistical analysis, and journal publication support with zero plagiarism and zero AI detection."
        keywords={['about Alpha Research', 'academic research consultancy', 'IIM IIT alumni', 'PhD research support']}
      />
      <section className="bg-teal-600 text-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">About Alpha Research</h1>
          <p className="text-lg md:text-2xl">Premier academic research consultancy led by IIM & IIT alumni</p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Alpha Academic Research Consultants</strong> is a premier research consultancy firm established by three distinguished alumni from the Indian Institute of Management (IIM) and Indian Institute of Technology (IIT). We bring together decades of academic excellence and research expertise to support scholars, researchers, and academicians in their journey towards impactful publications.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              {[
                { icon: Users, title: 'IIM & IIT Alumni', desc: 'Founded by distinguished alumni with proven academic excellence' },
                { icon: Shield, title: 'Zero Plagiarism & AI', desc: '100% original, human-written content with quality guarantee' },
                { icon: Award, title: 'Global Impact', desc: 'Published in Scopus, SCI, IEEE, PubMed, and top journals' },
                { icon: GraduationCap, title: 'Expert Team', desc: 'PhD-qualified researchers across all domains' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
                  <item.icon className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 mb-4">
              Our mission is to democratize access to high-quality research support, ensuring that brilliant ideas reach the global academic community through prestigious publications. We provide complete research, content development, statistical analysis, and end-to-end publishing support with guaranteed zero plagiarism and zero AI detection.
            </p>

            <p className="text-sm text-gray-500 italic mt-8">
              A venture of Olasco Ventures India Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Research Journey?</h2>
          <Link to="/contact" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
