import { Award } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function JournalPublicationPage() {
  return (
    <TechnicalPageLayout
      title="Journal Publication Services"
      subtitle="Scopus, SCI, IEEE, PubMed Publication Support"
      description="Complete journal publication support including manuscript preparation, journal selection, formatting, submission, and revision assistance for top-tier indexed journals."
      icon={<Award className="w-12 h-12 text-white" />}
      primaryKeywords={['Journal publication services', 'Scopus publication', 'SCI publication', 'Academic publishing', 'Research publication support']}
      secondaryKeywords={['Journal submission', 'Manuscript preparation', 'Peer review response', 'Publication assistance', 'Impact factor journals']}
      sections={[
        { title: 'Publication Services', content: 'Comprehensive support for publishing in Scopus, SCI/SCIE, IEEE, PubMed, ABDC, and other reputed indexed journals including journal selection, manuscript preparation, and submission.' },
        { title: 'Success Factors', content: 'Expert team with proven track record, understanding of journal requirements, quality writing, and support until acceptance with revision assistance.' }
      ]}
      relatedLinks={{ title: 'Related', links: [{ name: 'Scopus Journals', url: '/journals/scopus' }, { name: 'SCI Journals', url: '/journals/sci' }, { name: 'Research Papers', url: '/services/research-paper' }] }}
    />
  );
}
