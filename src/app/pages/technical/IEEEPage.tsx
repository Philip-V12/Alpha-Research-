import { Award } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function IEEEPage() {
  return (
    <TechnicalPageLayout
      title="IEEE Publications"
      subtitle="Institute of Electrical and Electronics Engineers Journals"
      description="IEEE publishes the leading journals and conference proceedings in electrical engineering, computer science, and electronics. IEEE publications are highly prestigious and globally recognized."
      icon={<Award className="w-12 h-12 text-white" />}
      primaryKeywords={['IEEE publication', 'IEEE journals', 'IEEE Xplore', 'IEEE conference', 'IEEE research papers']}
      secondaryKeywords={['IEEE Transactions', 'IEEE Access', 'IEEE publication services', 'Electrical engineering journals', 'Computer science journals']}
      sections={[
        {
          title: 'IEEE Publications',
          content: 'IEEE (Institute of Electrical and Electronics Engineers) is the world\'s largest technical professional organization. IEEE publishes over 200 peer-reviewed journals and hosts thousands of conferences annually in electrical engineering, computer science, telecommunications, and related fields.'
        },
        {
          title: 'Our IEEE Publication Services',
          content: 'We provide complete support for IEEE journal and conference publications including manuscript preparation, IEEE format compliance, submission assistance, and revision support.'
        }
      ]}
      relatedLinks={{
        title: 'Related',
        links: [
          { name: 'Scopus', url: '/journals/scopus' },
          { name: 'SCI/SCIE', url: '/journals/sci' },
          { name: 'IEEE Format', url: '/formats/ieee-format' }
        ]
      }}
    />
  );
}
