import { BookOpen } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function PhDSynopsisPage() {
  return (
    <TechnicalPageLayout
      title="PhD Synopsis Writing"
      subtitle="Comprehensive Research Proposal Development"
      description="Expert PhD synopsis writing services including research gap identification, literature review, methodology design, and proposal preparation."
      icon={<BookOpen className="w-12 h-12 text-white" />}
      primaryKeywords={['PhD synopsis writing', 'Research proposal', 'Thesis proposal', 'PhD proposal writing', 'Synopsis writing services']}
      secondaryKeywords={['Literature review', 'Research gap', 'Methodology design', 'Research objectives', 'PhD application']}
      sections={[
        { title: 'Synopsis Writing', content: 'Complete PhD synopsis preparation including topic selection, research gap identification, comprehensive literature review, research questions, objectives, and methodology design.' },
        { title: 'Expert Guidance', content: 'Guidance from IIM and IIT alumni with proven track record of synopsis approval across universities worldwide.' }
      ]}
      relatedLinks={{ title: 'Related', links: [{ name: 'Thesis Writing', url: '/services/thesis-chapters' }, { name: 'Research Papers', url: '/services/research-paper' }] }}
    />
  );
}
