import { FileText } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ThesisEditingPage() {
  return (
    <TechnicalPageLayout
      title="Thesis Editing Service"
      subtitle="Professional Academic Editing and Proofreading"
      description="Expert thesis editing services with zero plagiarism guarantee, grammar checking, style improvement, and formatting for PhD and Masters theses."
      icon={<FileText className="w-12 h-12 text-white" />}
      primaryKeywords={['Thesis editing', 'PhD editing services', 'Academic proofreading', 'Dissertation editing', 'Thesis proofreading']}
      secondaryKeywords={['Grammar checking', 'Plagiarism removal', 'Academic English editing', 'Thesis formatting', 'Zero AI content']}
      sections={[
        { title: 'Editing Services', content: 'Comprehensive editing including grammar, style, clarity, coherence, plagiarism removal, zero AI detection guarantee, and formatting according to university guidelines.' },
        { title: 'Quality Assurance', content: 'Multiple rounds of editing by expert editors, native English speakers, and subject matter experts ensure highest quality output.' }
      ]}
      relatedLinks={{ title: 'Related', links: [{ name: 'Thesis Chapters', url: '/services/thesis-chapters' }, { name: 'LaTeX Formatting', url: '/formats/latex' }] }}
    />
  );
}
