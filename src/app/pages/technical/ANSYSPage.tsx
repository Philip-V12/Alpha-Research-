import { Cpu } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function ANSYSPage() {
  return (
    <TechnicalPageLayout
      title="ANSYS"
      subtitle="Advanced Engineering Simulation Software"
      description="ANSYS is the world's leading engineering simulation software used for finite element analysis, computational fluid dynamics, and multiphysics simulations in academic research and industry applications."
      icon={<Cpu className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'ANSYS simulation services',
        'ANSYS research support',
        'FEA analysis ANSYS',
        'ANSYS thesis help',
        'Academic ANSYS consulting'
      ]}
      secondaryKeywords={[
        'Finite element analysis',
        'Structural analysis ANSYS',
        'ANSYS Workbench',
        'ANSYS Fluent',
        'ANSYS mechanical simulation',
        'PhD ANSYS support',
        'Engineering simulation services',
        'ANSYS CFD analysis'
      ]}
      sections={[
        {
          title: 'What is ANSYS?',
          content: (
            <>
              <p>
                ANSYS is a comprehensive suite of engineering simulation software that enables researchers, engineers, and academics to test and validate their designs virtually before physical prototyping. It is widely recognized as the gold standard in finite element analysis (FEA), computational fluid dynamics (CFD), and multiphysics simulations.
              </p>
              <p>
                For academic research, particularly in engineering disciplines such as mechanical, civil, aerospace, and electrical engineering, ANSYS provides powerful tools to model complex physical phenomena, validate theoretical concepts, and generate publication-quality results for thesis and research papers.
              </p>
            </>
          )
        },
        {
          title: 'Our ANSYS Services for Academic Research',
          content: (
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Structural Analysis:</strong> Static, dynamic, thermal, and fatigue analysis for mechanical and civil engineering research</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Computational Fluid Dynamics:</strong> Fluid flow simulation, heat transfer analysis, and aerodynamics studies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Multiphysics Simulation:</strong> Coupled field analysis combining structural, thermal, electromagnetic, and fluid domains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Mesh Generation:</strong> High-quality mesh creation for accurate simulation results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Results Analysis:</strong> Post-processing and visualization of simulation data for thesis and publications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Optimization Studies:</strong> Design optimization and parametric analysis for research projects</span>
              </li>
            </ul>
          )
        },
        {
          title: 'Applications in Academic Research',
          content: (
            <>
              <p>
                ANSYS is extensively used across various engineering disciplines for academic research and thesis work:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Mechanical Engineering:</strong> Stress analysis, vibration studies, thermal management, and fatigue life prediction</li>
                <li><strong>Civil Engineering:</strong> Structural integrity assessment, seismic analysis, and infrastructure design validation</li>
                <li><strong>Aerospace Engineering:</strong> Aerodynamic analysis, structural optimization, and thermal protection systems</li>
                <li><strong>Automotive Engineering:</strong> Crashworthiness analysis, NVH (noise, vibration, harshness) studies, and thermal management</li>
                <li><strong>Biomedical Engineering:</strong> Biomechanics simulation, implant design, and medical device analysis</li>
                <li><strong>Materials Science:</strong> Material behavior simulation, composite analysis, and failure prediction</li>
              </ul>
            </>
          )
        },
        {
          title: 'Why Choose Alpha Research for ANSYS Support?',
          content: (
            <>
              <p>
                Our team of expert engineers and researchers, alumni from IIM and IIT, bring extensive experience in ANSYS simulation for academic research. We provide:
              </p>
              <ul className="space-y-2 mt-4">
                <li>✓ Expert guidance on simulation setup and methodology</li>
                <li>✓ High-quality, publication-ready results and visualizations</li>
                <li>✓ Comprehensive analysis and interpretation of simulation data</li>
                <li>✓ Support for journal paper and thesis writing with ANSYS results</li>
                <li>✓ Zero plagiarism, original simulation work</li>
                <li>✓ Timely delivery to meet your research deadlines</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'CFD Analysis', url: '/tools/cfd' },
          { name: 'MATLAB Services', url: '/tools/matlab' },
          { name: 'Simulink Support', url: '/tools/simulink' },
          { name: 'Thesis Writing', url: '/services/thesis-chapters' },
          { name: 'Research Papers', url: '/services/research-paper' },
          { name: 'Statistical Analysis', url: '/services/thesis-statistics' }
        ]
      }}
    />
  );
}
