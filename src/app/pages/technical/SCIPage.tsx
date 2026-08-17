import { Award } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function SCIPage() {
  return (
    <TechnicalPageLayout
      title="SCI & SCIE"
      subtitle="Science Citation Index - Premier Research Databases"
      description="Science Citation Index (SCI) and Science Citation Index Expanded (SCIE) are prestigious citation indexes produced by Clarivate Analytics (Web of Science). Publishing in SCI/SCIE journals represents the highest standard of research quality."
      icon={<Award className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'SCI publication services',
        'SCIE indexed journals',
        'Web of Science publication',
        'SCI journal paper writing',
        'Academic SCI support'
      ]}
      secondaryKeywords={[
        'Science Citation Index',
        'Impact factor journals',
        'WOS publication',
        'High impact SCI journals',
        'SCI research paper',
        'Fast SCI publication',
        'SCI journal list',
        'SCI for PhD'
      ]}
      sections={[
        {
          title: 'What are SCI and SCIE?',
          content: (
            <>
              <p>
                The Science Citation Index (SCI) was created by Eugene Garfield and is now maintained by Clarivate Analytics as part of the Web of Science Core Collection. SCI covers the most influential journals in the sciences, while SCIE (Science Citation Index Expanded) provides broader coverage with over 9,500 journals across 178 scientific disciplines.
              </p>
              <p>
                SCI/SCIE journals are characterized by their rigorous peer-review process and high impact factors. Publications in these journals are considered the gold standard in academic research, essential for academic promotions, research funding, and global recognition.
              </p>
            </>
          )
        },
        {
          title: 'Why Publish in SCI/SCIE Journals?',
          content: (
            <>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Highest Prestige:</strong> SCI/SCIE represents the pinnacle of academic publishing quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Impact Factor:</strong> All SCI/SCIE journals have Journal Impact Factor (JIF), a key quality metric</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Career Advancement:</strong> Mandatory for tenure, promotions, and prestigious positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Research Funding:</strong> Critical for securing grants and research funding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>Global Citations:</strong> Maximum visibility and citation potential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-emerald-600">•</span>
                  <span><strong>PhD Requirements:</strong> Many universities require SCI/SCIE publications for PhD completion</span>
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Our SCI/SCIE Publication Services',
          content: (
            <>
              <p>
                Comprehensive support for publishing in high-impact SCI/SCIE journals:
              </p>
              <ul className="space-y-3 mt-4">
                <li><strong>Journal Targeting:</strong> Strategic selection of appropriate SCI/SCIE journals based on your research and target impact factor</li>
                <li><strong>Manuscript Preparation:</strong> Complete research paper writing with rigorous methodology and robust results</li>
                <li><strong>Literature Analysis:</strong> In-depth literature review and positioning of your research contribution</li>
                <li><strong>Statistical Rigor:</strong> Advanced statistical analysis to meet SCI/SCIE standards</li>
                <li><strong>Professional Editing:</strong> Language editing by native English speakers familiar with SCI/SCIE requirements</li>
                <li><strong>Submission Strategy:</strong> Cover letter writing and strategic submission planning</li>
                <li><strong>Revision Support:</strong> Expert handling of peer review comments and manuscript revisions</li>
                <li><strong>Resubmission Assistance:</strong> Support for revise-and-resubmit or resubmission to alternative journals</li>
              </ul>
            </>
          )
        },
        {
          title: 'SCI/SCIE Coverage Areas',
          content: (
            <>
              <p>
                We support publications across all major SCI/SCIE disciplines:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Engineering & Technology:</strong> All branches of engineering including computer science, electrical, mechanical, civil, chemical</li>
                <li><strong>Physical Sciences:</strong> Physics, chemistry, materials science, astronomy</li>
                <li><strong>Life Sciences & Biomedicine:</strong> Biology, medicine, pharmacy, biochemistry, genetics</li>
                <li><strong>Mathematics:</strong> Pure and applied mathematics, statistics, computational mathematics</li>
                <li><strong>Earth Sciences:</strong> Geology, geophysics, environmental sciences, meteorology</li>
                <li><strong>Agricultural Sciences:</strong> Agronomy, food science, agricultural engineering</li>
                <li><strong>Multidisciplinary Sciences:</strong> Nature, Science, PNAS, and other prestigious multidisciplinary journals</li>
              </ul>
            </>
          )
        },
        {
          title: 'Success Factors for SCI/SCIE Publication',
          content: (
            <>
              <p>
                Publishing in SCI/SCIE journals requires:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Novel Contribution:</strong> Significant, original research contribution to the field</li>
                <li><strong>Rigorous Methodology:</strong> Sound research design and robust experimental/analytical methods</li>
                <li><strong>Quality Writing:</strong> Clear, concise, professional academic English</li>
                <li><strong>Comprehensive Literature:</strong> Thorough understanding and citation of prior work</li>
                <li><strong>Statistical Validity:</strong> Appropriate statistical methods and valid conclusions</li>
                <li><strong>Proper Formatting:</strong> Adherence to journal guidelines and submission requirements</li>
              </ul>
              <p className="mt-4">
                Our team ensures your manuscript meets all these criteria for maximum acceptance probability.
              </p>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'Scopus Publications', url: '/journals/scopus' },
          { name: 'IEEE Journals', url: '/journals/ieee' },
          { name: 'ABDC Journals', url: '/journals/abdc' },
          { name: 'Research Paper Writing', url: '/services/research-paper' },
          { name: 'Statistical Analysis', url: '/services/thesis-statistics' }
        ]
      }}
    />
  );
}
