import { FileText } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function LaTeXPage() {
  return (
    <TechnicalPageLayout
      title="LaTeX"
      subtitle="Professional Academic Document Preparation System"
      description="LaTeX is a high-quality typesetting system designed for the production of technical and scientific documentation. It is the de facto standard for academic papers, theses, and research publications in STEM fields."
      icon={<FileText className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'LaTeX formatting services',
        'LaTeX thesis writing',
        'Academic LaTeX support',
        'LaTeX journal paper',
        'Professional LaTeX formatting'
      ]}
      secondaryKeywords={[
        'LaTeX document preparation',
        'BibTeX references',
        'LaTeX templates',
        'IEEE LaTeX format',
        'Springer LaTeX',
        'Elsevier LaTeX',
        'Overleaf services',
        'LaTeX equations',
        'LaTeX for PhD thesis'
      ]}
      sections={[
        {
          title: 'What is LaTeX?',
          content: (
            <>
              <p>
                LaTeX is a document preparation system based on the TeX typesetting language. Unlike word processors like Microsoft Word, LaTeX uses plain text with markup commands to define document structure and formatting. It produces consistently beautiful, professional-quality documents with superior typesetting of mathematical equations, references, and citations.
              </p>
              <p>
                LaTeX is the preferred format for academic publications in mathematics, physics, computer science, engineering, and other technical fields. Most top-tier journals and conferences provide LaTeX templates and many require submissions in LaTeX format.
              </p>
            </>
          )
        },
        {
          title: 'Our LaTeX Services',
          content: (
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Thesis Formatting:</strong> Complete PhD and Masters thesis formatting in LaTeX with university-specific templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Journal Paper Formatting:</strong> IEEE, Elsevier, Springer, ACM, and other journal formats</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Conference Papers:</strong> LaTeX formatting for international conference submissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Mathematical Typesetting:</strong> Complex equations, theorems, and proofs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>BibTeX Bibliography:</strong> Automated reference management and citation formatting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Tables & Figures:</strong> Professional tables, figures, and caption formatting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Template Customization:</strong> Adapting LaTeX templates to specific requirements</span>
              </li>
            </ul>
          )
        },
        {
          title: 'Why Use LaTeX for Academic Writing?',
          content: (
            <>
              <p>
                LaTeX offers numerous advantages for academic research writing:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Professional Quality:</strong> Superior typography and consistent formatting throughout the document</li>
                <li><strong>Mathematical Excellence:</strong> Best-in-class mathematical equation typesetting</li>
                <li><strong>Automated Numbering:</strong> Automatic numbering of sections, equations, figures, and tables</li>
                <li><strong>Reference Management:</strong> Seamless integration with BibTeX for bibliography management</li>
                <li><strong>Cross-Referencing:</strong> Easy cross-referencing within documents</li>
                <li><strong>Journal Compliance:</strong> Ready-made templates for major publishers and journals</li>
                <li><strong>Version Control:</strong> Plain text format works well with Git and other version control systems</li>
                <li><strong>Separation of Content and Style:</strong> Focus on content while LaTeX handles formatting</li>
              </ul>
            </>
          )
        },
        {
          title: 'Applications in Academic Publishing',
          content: (
            <>
              <p>
                LaTeX is widely used for various academic documents:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>PhD & Masters Theses:</strong> Complete dissertation formatting with chapters, appendices, and bibliography</li>
                <li><strong>Research Papers:</strong> Journal articles, conference papers, and technical reports</li>
                <li><strong>Books & Monographs:</strong> Academic books and specialized monographs</li>
                <li><strong>Presentations:</strong> Beamer class for professional academic presentations</li>
                <li><strong>CVs & Resumes:</strong> Professional academic CV formatting</li>
                <li><strong>Posters:</strong> Conference posters and research summaries</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'IEEE Format', url: '/formats/ieee-format' },
          { name: 'APA/MLA', url: '/formats/apa-mla' },
          { name: 'Harvard Style', url: '/formats/harvard' },
          { name: 'Thesis Writing', url: '/services/thesis-chapters' },
          { name: 'Research Papers', url: '/services/research-paper' }
        ]
      }}
    />
  );
}
