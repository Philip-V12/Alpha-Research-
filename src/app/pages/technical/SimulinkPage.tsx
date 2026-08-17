import { Cpu } from 'lucide-react';
import { TechnicalPageLayout } from '../../components/TechnicalPageLayout';

export function SimulinkPage() {
  return (
    <TechnicalPageLayout
      title="Simulink"
      subtitle="Model-Based Design and Simulation Platform"
      description="Simulink is a MATLAB-based graphical programming environment for modeling, simulating, and analyzing multidomain dynamical systems, widely used in control systems, signal processing, and communications research."
      icon={<Cpu className="w-12 h-12 text-white" />}
      primaryKeywords={[
        'Simulink simulation services',
        'Simulink thesis help',
        'Control systems Simulink',
        'Model-based design research',
        'Academic Simulink support'
      ]}
      secondaryKeywords={[
        'MATLAB Simulink',
        'Stateflow modeling',
        'Simulink control design',
        'Signal processing Simulink',
        'Embedded systems simulation',
        'Simulink for PhD',
        'Dynamic system modeling',
        'Simulink code generation'
      ]}
      sections={[
        {
          title: 'What is Simulink?',
          content: (
            <>
              <p>
                Simulink is a block diagram environment for multidomain simulation and Model-Based Design integrated with MATLAB. It supports system-level design, automatic code generation, and continuous testing of embedded systems. Simulink is the standard tool for control system design, signal processing, communications, and other dynamic systems in academic and industrial research.
              </p>
              <p>
                For academic research, Simulink provides an intuitive graphical interface to model complex systems, perform simulations, and validate control algorithms, making it invaluable for thesis work in electrical, mechanical, aerospace, and computer engineering.
              </p>
            </>
          )
        },
        {
          title: 'Our Simulink Services',
          content: (
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Control System Design:</strong> PID controllers, state-space models, and advanced control strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Signal Processing:</strong> Filter design, FFT analysis, and digital signal processing algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Power Systems:</strong> Electrical power system modeling and analysis using Simscape Power Systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Robotics:</strong> Robot kinematics, dynamics, and control algorithm development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Communications:</strong> Wireless communication systems and protocol simulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">•</span>
                <span><strong>Embedded Systems:</strong> Real-time simulation and hardware-in-the-loop testing</span>
              </li>
            </ul>
          )
        },
        {
          title: 'Applications in Research',
          content: (
            <>
              <p>
                Simulink is extensively used in various engineering research domains:
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong>Electrical Engineering:</strong> Power electronics, motor control, and renewable energy systems</li>
                <li><strong>Mechanical Engineering:</strong> Mechatronics, vehicle dynamics, and vibration analysis</li>
                <li><strong>Aerospace:</strong> Flight control systems, guidance algorithms, and UAV simulation</li>
                <li><strong>Automotive:</strong> Engine control, ADAS systems, and autonomous vehicle algorithms</li>
                <li><strong>Robotics:</strong> Robot path planning, manipulation, and sensor fusion</li>
                <li><strong>Biomedical:</strong> Physiological system modeling and medical device simulation</li>
              </ul>
            </>
          )
        }
      ]}
      relatedLinks={{
        title: 'Related Services',
        links: [
          { name: 'MATLAB Services', url: '/tools/matlab' },
          { name: 'ANSYS Simulation', url: '/tools/ansys' },
          { name: 'SPSS Analysis', url: '/tools/spss' },
          { name: 'Thesis Writing', url: '/services/thesis-chapters' },
          { name: 'Research Papers', url: '/services/research-paper' }
        ]
      }}
    />
  );
}
