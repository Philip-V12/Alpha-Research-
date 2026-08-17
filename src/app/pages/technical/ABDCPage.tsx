import { Award } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ABDCPage() {
  return (
    <TechnicalPageLayout
      title="ABDC Journal List"
      subtitle="Australian Business Deans Council Quality Journal Rankings"
      description="ABDC provides quality rankings (A*, A, B, C) for academic journals in business, management, and economics. ABDC-listed publications are highly valued in business academia."
      icon={<Award className="w-12 h-12 text-white" />}
      primaryKeywords={['ABDC journals', 'ABDC publication', 'Business journals', 'Management research', 'ABDC A* journals']}
      secondaryKeywords={['ABDC ranking', 'Business research', 'Management journals', 'Economics journals', 'Accounting journals', 'Finance journals']}
      sections={[
        {
          title: 'ABDC Journal Quality List',
          content: 'The ABDC Journal Quality List categorizes business, management, and economics journals into four quality tiers: A* (top 6-7%), A (20-25%), B (30-35%), and C (remaining). ABDC rankings are widely used for academic promotions and research assessment in business schools.'
        },
        {
          title: 'Our ABDC Publication Services',
          content: 'We provide specialized support for publishing in ABDC-ranked journals across management, accounting, finance, marketing, and economics including research design, data analysis, and manuscript preparation.'
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
