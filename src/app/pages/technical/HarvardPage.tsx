import { FileText } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function HarvardPage() {
  return (
    <TechnicalPageLayout
      title="Harvard Referencing Style"
      subtitle="Author-Date Citation System for Academic Research"
      description="Harvard referencing is an author-date citation system widely used in UK universities and internationally across various disciplines including sciences, social sciences, and humanities."
      icon={<FileText className="w-12 h-12 text-white" />}
      primaryKeywords={['Harvard referencing', 'Harvard citation', 'Harvard style', 'Author-date citation', 'Harvard format']}
      secondaryKeywords={['Harvard bibliography', 'Harvard in-text citations', 'Harvard reference list', 'UK citation style', 'Academic referencing']}
      sections={[
        {
          title: 'Harvard Referencing System',
          content: 'Harvard referencing uses an author-date system with in-text citations like (Smith, 2020) and a corresponding reference list. It is one of the most popular citation styles used in UK universities and is accepted by many international journals.'
        },
        {
          title: 'Our Harvard Formatting Services',
          content: 'We provide expert Harvard referencing services including proper in-text citations, comprehensive reference lists, and formatting according to your university or journal requirements.'
        }
      ]}
      relatedLinks={{
        title: 'Related',
        links: [
          { name: 'APA/MLA', url: '/formats/apa-mla' },
          { name: 'LaTeX', url: '/formats/latex' },
          { name: 'Thesis Editing', url: '/services/thesis-editing' }
        ]
      }}
    />
  );
}
