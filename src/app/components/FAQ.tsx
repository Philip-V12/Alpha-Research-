import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What thesis assistance and thesis preparation help do you provide?',
    a: 'Alpha Research offers complete thesis assistance help — from topic selection and thesis preparation to thesis content development, chapter writing, statistical analysis, editing, and formatting. Every deliverable is 100% human-written with zero plagiarism and zero AI detection.',
  },
  {
    q: 'Do you offer dissertation help for PhD and Masters students?',
    a: 'Yes. We provide end-to-end dissertation help including PhD synopsis writing, research proposal development, literature review, methodology, results, and discussion chapters, with unlimited revisions until your dissertation is submission-ready.',
  },
  {
    q: 'How does your journal publication help work?',
    a: 'Our journal publication help covers journal selection, manuscript preparation, formatting to journal guidelines, submission, and peer-review response handling. We support thesis publication and manuscript publication in Scopus, SCI/SCIE, IEEE, PubMed, and ABDC indexed journals.',
  },
  {
    q: 'What is included in manuscript preparation and manuscript publication support?',
    a: 'Manuscript preparation includes structuring your paper, academic content preparation, language editing, reference formatting (LaTeX, IEEE, APA, MLA, Harvard), and plagiarism/AI checks. For manuscript publication we guide you through submission and revisions until acceptance.',
  },
  {
    q: 'Can you help with thesis statistics and data analysis?',
    a: 'Absolutely. Our experts handle thesis statistics and statistical data analysis using SPSS, MATLAB, R, and Python — including regression, ANOVA, and factor analysis — with publication-quality tables, figures, and interpretation.',
  },
  {
    q: 'Do you guarantee zero plagiarism and zero AI detection?',
    a: 'Yes. All academic content preparation is original, human-written, and passes plagiarism and AI-detection checks, so your thesis, dissertation, research paper, or manuscript is authentic and defensible.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-2xl text-gray-600">
            Thesis assistance, dissertation help, manuscript preparation & journal publication
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-2 border-teal-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-teal-50 transition"
                aria-expanded={open === i}
              >
                <h3 className="font-bold text-gray-900">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-700 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
