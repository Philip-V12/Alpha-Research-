import { Award } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function PubMedPage() {
  return (
    <TechnicalPageLayout
      title="PubMed"
      subtitle="MEDLINE Biomedical Literature Database"
      description="PubMed is a free resource supporting the search and retrieval of biomedical and life sciences literature. PubMed-indexed journals are essential for medical and health sciences research."
      icon={<Award className="w-12 h-12 text-white" />}
      primaryKeywords={['PubMed publication', 'MEDLINE journals', 'Medical research publication', 'PubMed indexed journals', 'Biomedical publishing']}
      secondaryKeywords={['PubMed Central', 'NIH publications', 'Medical journals', 'Clinical research', 'Health sciences publication']}
      sections={[
        {
          title: 'PubMed & MEDLINE',
          content: 'PubMed comprises over 35 million citations for biomedical literature from MEDLINE, life science journals, and online books. PubMed-indexed publications are essential for medical research, clinical studies, and health sciences academia.'
        },
        {
          title: 'Our PubMed Publication Services',
          content: 'We provide complete support for publishing in PubMed-indexed medical and biomedical journals including manuscript preparation, medical writing, statistical analysis for clinical trials, and submission support.'
        }
      ]}
      relatedLinks={{
        title: 'Related',
        links: [
          { name: 'Scopus', url: '/journals/scopus' },
          { name: 'SCI/SCIE', url: '/journals/sci' },
          { name: 'Research Papers', url: '/services/research-paper' }
        ]
      }}
    />
  );
}
