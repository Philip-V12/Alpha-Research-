import { Cpu } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function CFDPage() {
  return (
    <TechnicalPageLayout
      title="CFD (Computational Fluid Dynamics)"
      subtitle="Advanced Fluid Flow Simulation for Research"
      description="Computational Fluid Dynamics (CFD) is a powerful simulation technique used to analyze fluid flow, heat transfer, and related physical phenomena in engineering and scientific research."
      icon={<Cpu className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'CFD analysis services',
        'Computational fluid dynamics research',
        'CFD simulation thesis',
        'Academic CFD support',
        'Fluid dynamics simulation'
      ]}
      secondaryKeywords={[
        'ANSYS Fluent',
        'OpenFOAM',
        'COMSOL CFD',
        'Heat transfer analysis',
        'Turbulence modeling',
        'Aerodynamics simulation',
        'CFD for thesis',
        'Multiphase flow simulation',
        'CFD mesh generation'
      ]}
      sections={[
        {
          title: 'What is Computational Fluid Dynamics (CFD)?',
          content: (
            <>
              <p>
                Computational Fluid Dynamics (CFD) is a branch of fluid mechanics that uses numerical analysis and algorithms to solve problems involving fluid flows. CFD enables researchers to simulate the behavior of fluids (liquids and gases) under various conditions, providing valuable insights into complex flow phenomena that are difficult or impossible to observe experimentally.
              </p>
              <p>
                In academic research, CFD is indispensable for studying aerodynamics, heat exchangers, combustion, environmental flows, biomedical flows, and numerous other applications across engineering and science disciplines.
              </p>
            </>
          )
        },
        {
          title: 'Our CFD Services for Academic Research',
          content: (
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>External Aerodynamics:</strong> Analysis of flow around vehicles, aircraft, buildings, and wind turbines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Internal Flow Analysis:</strong> Pipe networks, ducts, heat exchangers, and HVAC systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Heat Transfer Simulation:</strong> Conjugate heat transfer, thermal management, and cooling systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Multiphase Flow:</strong> Liquid-gas interactions, cavitation, and free surface flows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Turbulence Modeling:</strong> RANS, LES, and DNS simulations for complex turbulent flows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Reacting Flows:</strong> Combustion simulation and chemical reaction modeling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>FSI Analysis:</strong> Fluid-structure interaction for deformable bodies in flow</span>
              </li>
            </ul>
          )
        },
        {
          title: 'CFD Software We Support',
          content: (
            <>
              <p>
                We provide expert CFD analysis using industry-leading software platforms:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>ANSYS Fluent:</strong> General-purpose CFD software for complex fluid flow simulations</li>
                <li><strong>ANSYS CFX:</strong> Advanced CFD solver for turbomachinery and rotating flows</li>
                <li><strong>OpenFOAM:</strong> Open-source CFD platform for customized simulations</li>
                <li><strong>COMSOL Multiphysics:</strong> Coupled CFD and heat transfer analysis</li>
                <li><strong>STAR-CCM+:</strong> Industrial CFD software for automotive and aerospace applications</li>
                <li><strong>SimScale:</strong> Cloud-based CFD for rapid prototyping and analysis</li>
              </ul>
            </>
          )
        },
        {
          title: 'Applications in Research',
          content: (
            <>
              <p>
                CFD is widely used across multiple research domains:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Aerospace:</strong> Aircraft aerodynamics, propulsion systems, and hypersonic flows</li>
                <li><strong>Automotive:</strong> Vehicle aerodynamics, engine combustion, and thermal management</li>
                <li><strong>Renewable Energy:</strong> Wind turbine optimization, solar thermal systems, and hydropower</li>
                <li><strong>Biomedical:</strong> Blood flow simulation, respiratory system analysis, and drug delivery</li>
                <li><strong>Environmental:</strong> Pollution dispersion, coastal engineering, and atmospheric flows</li>
                <li><strong>Process Engineering:</strong> Mixing processes, chemical reactors, and separation systems</li>
              </ul>
            </>
          )
        },
        {
          title: 'Why Choose Alpha Research for CFD Analysis?',
          content: (
            <>
              <p>
                Our CFD experts provide comprehensive support for your research project:
              </p>
              <ul className="space-y-2 mt-4">
                <li>✓ Expert setup of CFD models with appropriate boundary conditions and turbulence models</li>
                <li>✓ High-quality mesh generation for accurate and efficient simulations</li>
                <li>✓ Post-processing and visualization of CFD results for publications</li>
                <li>✓ Validation and verification of simulation results</li>
                <li>✓ Detailed analysis and interpretation for thesis and research papers</li>
                <li>✓ Support for publication in top journals (Scopus, SCI, IEEE)</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'ANSYS Simulation', url: '/tools/ansys' },
          { name: 'Simulink Modeling', url: '/tools/simulink' },
          { name: 'MATLAB Analysis', url: '/tools/matlab' },
          { name: 'Research Paper Writing', url: '/services/research-paper' },
          { name: 'Journal Publication', url: '/services/journal-publication' },
          { name: 'Thesis Support', url: '/services/thesis-chapters' }
        ]
      }}
    />
  );
}
