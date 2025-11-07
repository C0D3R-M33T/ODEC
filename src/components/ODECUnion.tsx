import { Shield, AlertTriangle, Network, Eye, Building, Globe2 } from 'lucide-react';

export default function ODECUnion() {
  const points = [
    {
      icon: Shield,
      title: 'The Governance Gap',
      text: 'Space law governs satellites; data law governs nations — yet orbital information remains ungoverned.',
    },
    {
      icon: AlertTriangle,
      title: 'Ethical Risks in Orbit',
      text: 'Progress also enables surveillance, bias, and misuse. ODEC safeguards integrity and transparency.',
    },
    {
      icon: Network,
      title: 'Fragmented Regulations',
      text: 'Space and data laws operate in silos. ODEC unifies them under one shared ethical framework.',
    },
    {
      icon: Eye,
      title: 'The Need for Oversight',
      text: 'With 10,000+ satellites and limited coordination, ODEC ensures oversight and accountability.',
    },
    {
      icon: Building,
      title: "ODEC's Role",
      text: 'An independent, neutral body defining standards and certifying ethical responsibility.',
    },
    {
      icon: Globe2,
      title: 'Towards a Shared Orbital Future',
      text: 'Collaboration across nations and academia to keep space inclusive and sustainable.',
    },
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F1B40] mb-4 leading-tight">
            <span className="text-[#00A7A7]">ODEC</span> can be the global union for<br className="hidden md:block" /> Space-based data law and ethics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A7A7]"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0F1B40] rounded-lg mb-4">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F1B40] mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#why-odec"
            className="inline-block px-8 py-4 bg-[#0F1B40] text-white font-medium rounded-lg hover:bg-[#00A7A7] transition-colors duration-200"
          >
            Learn More About ODEC
          </a>
        </div>
      </div>
    </section>
  );
}
