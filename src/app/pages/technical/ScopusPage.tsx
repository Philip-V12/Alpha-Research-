import { Award } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ScopusPage() {
  return (
    <TechnicalPageLayout
      title="Scopus"
      subtitle="World's Largest Abstract and Citation Database"
      description="Scopus is Elsevier's abstract and citation database covering peer-reviewed literature from science, technology, medicine, social sciences, and arts and humanities. Publishing in Scopus-indexed journals is crucial for academic career advancement."
      icon={<Award className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'Scopus publication services',
        'Scopus indexed journals',
        'Publish in Scopus',
        'Scopus journal paper',
        'Academic Scopus support'
      ]}
      secondaryKeywords={[
        'Scopus database',
        'Scopus citation',
        'High impact Scopus journals',
        'Fast publication Scopus',
        'Scopus research paper',
        'Scopus Q1 journals',
        'Scopus journal list',
        'Scopus for PhD'
      ]}
      sections={[
        {
          title: 'What is Scopus?',
          content: (
            <>
              <p>
                Scopus is the largest abstract and citation database of peer-reviewed literature, maintained by Elsevier. It contains over 27,000 titles from more than 7,000 publishers worldwide, covering scientific, technical, medical, and social sciences, as well as arts and humanities.
              </p>
              <p>
                Publishing in Scopus-indexed journals is highly valued in academia as it indicates quality, visibility, and impact. Scopus publications are recognized globally and are essential for academic promotions, PhD requirements, faculty positions, and research funding applications.
              </p>
            </>
          )
        },
        {
          title: 'Why Publish in Scopus Journals?',
          content: (
            <>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Global Recognition:</strong> Scopus is recognized worldwide by universities, research institutions, and funding agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Quality Assurance:</strong> Rigorous peer-review process ensures high-quality publications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Citation Metrics:</strong> H-index, CiteScore, and other metrics for research impact measurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Career Advancement:</strong> Essential for academic promotions, PhD completions, and tenure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Visibility:</strong> Wide reach and discoverability for your research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Multidisciplinary Coverage:</strong> Journals across all research domains</span>
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Our Scopus Publication Services',
          content: (
            <>
              <p>
                Alpha Research provides end-to-end support for Scopus journal publications:
              </p>
              <ul className="space-y-3 mt-4">
                <li><strong>Journal Selection:</strong> Identifying appropriate Scopus-indexed journals matching your research domain and impact factor requirements</li>
                <li><strong>Research Paper Writing:</strong> Complete paper writing with zero plagiarism and zero AI detection</li>
                <li><strong>Manuscript Formatting:</strong> Formatting according to journal guidelines (LaTeX, IEEE, APA, etc.)</li>
                <li><strong>Literature Review:</strong> Comprehensive literature survey and gap identification</li>
                <li><strong>Data Analysis:</strong> Statistical analysis using SPSS, MATLAB, R, Python</li>
                <li><strong>Peer Review Response:</strong> Addressing reviewer comments and manuscript revision</li>
                <li><strong>Submission Support:</strong> Journal submission and correspondence with editors</li>
                <li><strong>Fast-Track Options:</strong> Guidance on fast-track publication routes</li>
              </ul>
            </>
          )
        },
        {
          title: 'Scopus Journal Categories',
          content: (
            <>
              <p>
                We support publication across all Scopus categories:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Engineering:</strong> Mechanical, electrical, civil, computer science, aerospace, chemical</li>
                <li><strong>Medical & Health Sciences:</strong> Medicine, nursing, pharmacy, dentistry, public health</li>
                <li><strong>Physical Sciences:</strong> Physics, chemistry, mathematics, earth sciences</li>
                <li><strong>Life Sciences:</strong> Biology, biotechnology, genetics, biochemistry</li>
                <li><strong>Social Sciences:</strong> Psychology, economics, management, education</li>
                <li><strong>Multidisciplinary:</strong> Interdisciplinary research and applied sciences</li>
              </ul>
            </>
          )
        },
        {
          title: 'Why Choose Alpha Research for Scopus Publications?',
          content: (
            <>
              <p>
                Our team of expert researchers and editors, with IIM and IIT alumni, provide:
              </p>
              <ul className="space-y-2 mt-4">
                <li>✓ Proven track record of successful Scopus publications across disciplines</li>
                <li>✓ 100% original, human-written content (zero AI detection)</li>
                <li>✓ Expert knowledge of Scopus journal selection and requirements</li>
                <li>✓ Professional English editing and proofreading</li>
                <li>✓ Support until acceptance - revision and resubmission assistance</li>
                <li>✓ Fast turnaround with quality assurance</li>
                <li>✓ Complete confidentiality and ethical practices</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'SCI/SCIE Journals', url: '/journals/sci' },
          { name: 'IEEE Publications', url: '/journals/ieee' },
          { name: 'PubMed Journals', url: '/journals/pubmed' },
          { name: 'Research Paper Writing', url: '/services/research-paper' },
          { name: 'Journal Publication', url: '/services/journal-publication' }
        ]
      }}
    />
  );
}
