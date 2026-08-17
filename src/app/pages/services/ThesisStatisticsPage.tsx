import { LineChart } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ThesisStatisticsPage() {
  return (
    <TechnicalPageLayout
      title="Thesis Statistics Help"
      subtitle="Expert Statistical Analysis for Academic Research"
      description="Professional statistical analysis support for thesis and dissertations using MATLAB, SPSS, R, Python, and advanced statistical tools."
      icon={<LineChart className="w-12 h-12 text-white" />}
      primaryKeywords={['Thesis statistics help', 'Statistical analysis services', 'PhD statistics support', 'SPSS analysis', 'Data analysis for thesis']}
      secondaryKeywords={['Quantitative analysis', 'Regression analysis', 'ANOVA', 'Factor analysis', 'Research statistics', 'Thesis data analysis']}
      sections={[
        { title: 'Statistical Analysis Services', content: 'Complete statistical support including data collection, cleaning, analysis using SPSS, MATLAB, R, and Python, and interpretation of results for your thesis chapters.' },
        { title: 'Why Choose Us', content: 'Expert statisticians with PhD qualifications, zero plagiarism guarantee, publication-quality tables and figures, and comprehensive interpretation for your thesis.' }
      ]}
      relatedLinks={{ title: 'Related', links: [{ name: 'SPSS Services', url: '/tools/spss' }, { name: 'MATLAB', url: '/tools/matlab' }, { name: 'Research Papers', url: '/services/research-paper' }] }}
    />
  );
}
