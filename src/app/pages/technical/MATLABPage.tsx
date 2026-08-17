import { Cpu } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function MATLABPage() {
  return (
    <TechnicalPageLayout
      title="MATLAB"
      subtitle="Technical Computing and Algorithm Development"
      description="MATLAB (Matrix Laboratory) is a high-level programming language and interactive environment for numerical computation, visualization, and algorithm development, widely used in academic research across all STEM disciplines."
      icon={<Cpu className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'MATLAB research services',
        'MATLAB thesis help',
        'MATLAB programming for research',
        'Academic MATLAB support',
        'MATLAB data analysis'
      ]}
      secondaryKeywords={[
        'MATLAB coding',
        'MATLAB simulation',
        'Image processing MATLAB',
        'Machine learning MATLAB',
        'Signal processing',
        'MATLAB statistics',
        'Algorithm development',
        'MATLAB for PhD'
      ]}
      sections={[
        {
          title: 'What is MATLAB?',
          content: (
            <>
              <p>
                MATLAB is a proprietary multi-paradigm programming language and numeric computing environment developed by MathWorks. It allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages. MATLAB is the standard tool for researchers, engineers, and scientists worldwide.
              </p>
              <p>
                In academic research, MATLAB is invaluable for data analysis, algorithm development, simulation, and visualization. It is extensively used for thesis work, research papers, and projects across engineering, mathematics, physics, economics, and other quantitative disciplines.
              </p>
            </>
          )
        },
        {
          title: 'Our MATLAB Services',
          content: (
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Data Analysis & Visualization:</strong> Statistical analysis, data plotting, and scientific visualization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Algorithm Development:</strong> Custom algorithm implementation for research problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Signal & Image Processing:</strong> Filter design, FFT, image enhancement, and feature extraction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Machine Learning:</strong> Classification, regression, clustering, and deep learning models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Optimization:</strong> Linear, nonlinear, and constrained optimization problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Numerical Methods:</strong> ODE solvers, PDE solutions, and numerical integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Simulation:</strong> Monte Carlo simulations, system dynamics, and stochastic modeling</span>
              </li>
            </ul>
          )
        },
        {
          title: 'Applications Across Disciplines',
          content: (
            <>
              <p>
                MATLAB is used in virtually every field of quantitative research:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Engineering:</strong> Control systems, signal processing, communications, and power systems</li>
                <li><strong>Computer Science:</strong> Machine learning, computer vision, and algorithm analysis</li>
                <li><strong>Physics:</strong> Quantum mechanics, computational physics, and data analysis</li>
                <li><strong>Mathematics:</strong> Numerical analysis, optimization, and computational mathematics</li>
                <li><strong>Economics/Finance:</strong> Econometric analysis, financial modeling, and risk assessment</li>
                <li><strong>Biomedical:</strong> Medical image processing, biosignal analysis, and systems biology</li>
                <li><strong>Earth Sciences:</strong> Climate modeling, geophysics, and remote sensing</li>
              </ul>
            </>
          )
        },
        {
          title: 'Why Choose Alpha Research for MATLAB Support?',
          content: (
            <>
              <p>
                Our MATLAB experts provide comprehensive research support:
              </p>
              <ul className="space-y-2 mt-4">
                <li>✓ Custom MATLAB code development for your specific research problem</li>
                <li>✓ Optimization and debugging of existing MATLAB scripts</li>
                <li>✓ Publication-quality plots and visualizations</li>
                <li>✓ Detailed comments and documentation for reproducibility</li>
                <li>✓ Integration with Simulink for system-level simulations</li>
                <li>✓ Support for thesis, research papers, and journal publications</li>
                <li>✓ Zero plagiarism, original code development</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'Simulink Modeling', url: '/tools/simulink' },
          { name: 'SPSS Statistics', url: '/tools/spss' },
          { name: 'Statistical Analysis', url: '/services/thesis-statistics' },
          { name: 'Research Paper Writing', url: '/services/research-paper' },
          { name: 'Thesis Support', url: '/services/thesis-chapters' }
        ]
      }}
    />
  );
}
