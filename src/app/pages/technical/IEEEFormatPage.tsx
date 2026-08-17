import { FileText } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function IEEEFormatPage() {
  return (
    <TechnicalPageLayout
      title="IEEE Format"
      subtitle="Institute of Electrical and Electronics Engineers Publication Format"
      description="IEEE format is the standard citation and formatting style for publications in electrical engineering, computer science, and related technical fields. It is required by IEEE journals and conferences worldwide."
      icon={<FileText className="w-12 h-12 text-white" />}
      primaryKeywords={['IEEE format', 'IEEE citation style', 'IEEE paper format', 'IEEE referencing', 'Academic IEEE formatting']}
      secondaryKeywords={['IEEE conference format', 'IEEE journal template', 'IEEE LaTeX', 'IEEE references', 'IEEE bibliography', 'IEEE style guide']}
      sections={[
        {
          title: 'What is IEEE Format?',
          content: 'IEEE format is a citation style developed by the Institute of Electrical and Electronics Engineers for technical publications. It uses numbered citations in brackets [1] and is widely used in engineering and computer science research papers, conference proceedings, and technical reports.'
        },
        {
          title: 'Our IEEE Formatting Services',
          content: 'We provide complete IEEE formatting for journal papers, conference papers, and technical reports including proper citation style, reference formatting, figure and table formatting, and equation numbering according to IEEE standards.'
        }
      ]}
      relatedLinks={{
        title: 'Related',
        links: [
          { name: 'LaTeX', url: '/formats/latex' },
          { name: 'APA/MLA', url: '/formats/apa-mla' },
          { name: 'IEEE Journals', url: '/journals/ieee' }
        ]
      }}
    />
  );
}
