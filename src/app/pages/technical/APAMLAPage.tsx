import { FileText } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function APAMLAPage() {
  return (
    <TechnicalPageLayout
      title="APA & MLA Formats"
      subtitle="American Psychological Association & Modern Language Association Styles"
      description="APA and MLA are the most widely used citation styles in social sciences, humanities, and liberal arts research. Alpha Research provides expert formatting services for both styles."
      icon={<FileText className="w-12 h-12 text-white" />}
      primaryKeywords={['APA format', 'MLA format', 'APA style', 'MLA style', 'Citation formatting']}
      secondaryKeywords={['APA 7th edition', 'MLA 9th edition', 'In-text citations', 'Reference page', 'Works cited', 'Academic formatting']}
      sections={[
        {
          title: 'APA & MLA Citation Styles',
          content: 'APA (American Psychological Association) format is used primarily in psychology, education, and social sciences. MLA (Modern Language Association) format is the standard for literature, languages, and humanities. Both styles have specific rules for in-text citations, reference lists, and document formatting.'
        },
        {
          title: 'Our Formatting Services',
          content: 'We provide complete APA and MLA formatting including in-text citations, reference lists/works cited, title pages, headers, and overall document structure according to the latest editions (APA 7th, MLA 9th).'
        }
      ]}
      relatedLinks={{
        title: 'Related',
        links: [
          { name: 'Harvard Style', url: '/formats/harvard' },
          { name: 'LaTeX', url: '/formats/latex' },
          { name: 'Thesis Editing', url: '/services/thesis-editing' }
        ]
      }}
    />
  );
}
