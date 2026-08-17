import { BookOpen } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ThesisChaptersPage() {
  return (
    <TechnicalPageLayout
      title="Thesis Chapters Writing"
      subtitle="Complete PhD and Masters Thesis Writing Support"
      description="Expert thesis writing services covering all chapters from introduction to conclusion with zero plagiarism and zero AI detection guarantee."
      icon={<BookOpen className="w-12 h-12 text-white" />}
      primaryKeywords={['Thesis writing', 'PhD thesis help', 'Dissertation writing', 'Thesis chapters', 'Academic writing services']}
      secondaryKeywords={['Literature review writing', 'Methodology chapter', 'Results analysis', 'Discussion chapter', 'Thesis conclusion']}
      sections={[
        { title: 'Chapter Writing Services', content: 'Complete thesis writing support including introduction, literature review, research methodology, results and analysis, discussion, and conclusion chapters with expert guidance.' },
        { title: 'Quality Guarantee', content: '100% original content, zero AI detection, subject matter expert writers, and unlimited revisions until satisfaction.' }
      ]}
      relatedLinks={{ title: 'Related', links: [{ name: 'Synopsis Writing', url: '/services/phd-synopsis' }, { name: 'Statistical Analysis', url: '/services/thesis-statistics' }] }}
    />
  );
}
