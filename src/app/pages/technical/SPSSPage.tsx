import { LineChart } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function SPSSPage() {
  return (
    <TechnicalPageLayout
      title="SPSS"
      subtitle="Statistical Package for the Social Sciences"
      description="SPSS is a comprehensive statistical software package widely used for data analysis in social sciences, health sciences, business, and education research. It provides advanced statistical procedures in an easy-to-use interface."
      icon={<LineChart className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'SPSS analysis services',
        'SPSS thesis help',
        'Statistical analysis SPSS',
        'SPSS data analysis',
        'Academic SPSS support'
      ]}
      secondaryKeywords={[
        'SPSS for research',
        'Descriptive statistics',
        'Regression analysis SPSS',
        'ANOVA SPSS',
        'Factor analysis',
        'Chi-square test SPSS',
        'Correlation analysis',
        'SPSS for PhD thesis',
        'Quantitative data analysis'
      ]}
      sections={[
        {
          title: 'What is SPSS?',
          content: (
            <>
              <p>
                SPSS (Statistical Package for the Social Sciences) is a powerful software package used for statistical analysis. Developed by IBM, SPSS is one of the most popular tools for data analysis in academic research, particularly in social sciences, psychology, education, health sciences, marketing, and business research.
              </p>
              <p>
                SPSS provides an intuitive interface for performing complex statistical analyses without requiring programming knowledge, making it accessible for researchers at all levels. It is the go-to tool for quantitative data analysis in thesis work and research publications.
              </p>
            </>
          )
        },
        {
          title: 'Our SPSS Services',
          content: (
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Descriptive Statistics:</strong> Frequencies, means, standard deviations, and data summarization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Inferential Statistics:</strong> t-tests, ANOVA, MANOVA, and non-parametric tests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Regression Analysis:</strong> Linear, multiple, logistic, and ordinal regression</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Factor Analysis:</strong> Exploratory and confirmatory factor analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Correlation Analysis:</strong> Pearson, Spearman, and partial correlations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Reliability Testing:</strong> Cronbach's alpha and scale reliability analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Data Cleaning:</strong> Missing data handling, outlier detection, and data transformation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Survey Analysis:</strong> Questionnaire data analysis and reporting</span>
              </li>
            </ul>
          )
        },
        {
          title: 'Applications in Research',
          content: (
            <>
              <p>
                SPSS is extensively used across multiple research disciplines:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Psychology:</strong> Behavioral studies, experimental research, and psychometric analysis</li>
                <li><strong>Education:</strong> Educational outcomes assessment, student performance analysis</li>
                <li><strong>Health Sciences:</strong> Clinical trials, epidemiological studies, and health outcomes research</li>
                <li><strong>Business & Management:</strong> Market research, consumer behavior, and organizational studies</li>
                <li><strong>Social Sciences:</strong> Survey research, demographic analysis, and social policy evaluation</li>
                <li><strong>Economics:</strong> Econometric analysis and economic forecasting</li>
              </ul>
            </>
          )
        },
        {
          title: 'Why Choose Alpha Research for SPSS Analysis?',
          content: (
            <>
              <p>
                Our expert statisticians provide comprehensive SPSS support:
              </p>
              <ul className="space-y-2 mt-4">
                <li>✓ Expert guidance on appropriate statistical tests for your research questions</li>
                <li>✓ Data entry, coding, and cleaning services</li>
                <li>✓ Complete statistical analysis with interpretation</li>
                <li>✓ APA-formatted tables and figures for publications</li>
                <li>✓ Detailed explanation of results for thesis chapters</li>
                <li>✓ Support for methodology and results sections</li>
                <li>✓ Review and validation of your SPSS analysis</li>
                <li>✓ Training and guidance for self-directed analysis</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'MATLAB Analysis', url: '/tools/matlab' },
          { name: 'Statistical Analysis', url: '/services/thesis-statistics' },
          { name: 'Research Paper Writing', url: '/services/research-paper' },
          { name: 'Thesis Support', url: '/services/thesis-chapters' },
          { name: 'Data Analysis', url: '/services/thesis-statistics' }
        ]
      }}
    />
  );
}
