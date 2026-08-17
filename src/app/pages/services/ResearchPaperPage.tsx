import { FileText } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ResearchPaperPage() {
  return (
    <TechnicalPageLayout
      title="Research Paper Writing"
      subtitle="Zero Plagiarism, Zero AI Academic Papers"
      description="Complete research paper writing services for journal publications with guaranteed zero plagiarism, zero AI detection, and expert quality."
      icon={<FileText className="w-12 h-12 text-white" />}
      primaryKeywords={['Research paper writing', 'Journal paper writing', 'Academic paper writing', 'Research article writing', 'Scientific paper writing']}
      secondaryKeywords={['Original research', 'Zero plagiarism', 'Zero AI content', 'Journal publication', 'Manuscript preparation']}
      sections={[
        { title: 'Paper Writing Services', content: 'End-to-end research paper writing from topic selection to final manuscript including literature review, methodology, data analysis, results, discussion, and conclusions.' },
        { title: 'Publication Support', content: 'Expert support for Scopus, SCI, IEEE, PubMed journal submissions with formatting, revision, and submission assistance.' }
      ]}
      relatedLinks={{ title: 'Related', links: [{ name: 'Scopus Journals', url: '/journals/scopus' }, { name: 'SCI Journals', url: '/journals/sci' }, { name: 'Journal Publication', url: '/services/journal-publication' }] }}
    />
  );
}
