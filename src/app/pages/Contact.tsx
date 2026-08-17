import { Mail, Phone, MapPin } from 'lucide-react';
import { Seo } from '../components/Seo';

export function Contact() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Us | Alpha Research Academic Consultancy"
        description="Get in touch with Alpha Research for thesis writing, statistics, editing, research papers, and journal publication support. Email alphaacademicresearch@gmail.com or call +91 730 654 1212."
        keywords={['contact Alpha Research', 'academic research help', 'thesis writing contact', 'journal publication support']}
      />
      <section className="bg-teal-600 text-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
          <p className="text-lg md:text-2xl">Get in touch with our expert research consultants</p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br bg-teal-50 p-8 rounded-2xl border-2 border-teal-200">
              <Mail className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-700 break-words">
                <a href="mailto:alphaacademicresearch@gmail.com" className="hover:text-teal-600 transition">alphaacademicresearch@gmail.com</a>
              </p>
            </div>
            <div className="bg-gradient-to-br bg-teal-50 p-8 rounded-2xl border-2 border-teal-200">
              <Phone className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-700">
                <a href="tel:+917306541212" className="hover:text-teal-600 transition">+91 730 654 1212</a>
              </p>
              <p className="text-gray-700">
                <a href="tel:+447403895087" className="hover:text-teal-600 transition">+44 7403 895087</a>
              </p>
              <p className="text-gray-700">Available 24/7</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-6 md:p-12 rounded-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Research?</h2>
            <p className="text-base md:text-xl mb-6">Let's discuss how we can support your academic journey</p>
            <p className="text-sm md:text-lg">Zero Plagiarism • Zero AI Detection • 100% Original Content</p>
          </div>
        </div>
      </section>
    </div>
  );
}
