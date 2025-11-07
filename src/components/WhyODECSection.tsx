import { Shield, AlertTriangle, Network, Eye, Building, Globe2 } from 'lucide-react';

export default function WhyODECSection() {
  const reasons = [
    {
      icon: Shield,
      title: 'The Governance Gap',
      description:
        'Space law governs satellites; data law governs nations — yet orbital information remains ungoverned. Existing legal frameworks were not designed for the scale and complexity of modern orbital data operations. ODEC fills this critical void by creating unified governance principles that bridge space treaties and terrestrial data regulations.',
    },
    {
      icon: AlertTriangle,
      title: 'Ethical Risks in Orbit',
      description:
        'Progress also enables surveillance, bias, and misuse. ODEC safeguards integrity and transparency. The same technology that enables global connectivity can be weaponized for mass surveillance or perpetuate algorithmic bias on a planetary scale. Without ethical oversight, orbital data operations risk becoming tools of oppression rather than progress.',
    },
    {
      icon: Network,
      title: 'Fragmented Regulations',
      description:
        'Space and data laws operate in silos. ODEC unifies them under one shared ethical framework. Nations regulate data within their borders, while space activities are governed internationally — but orbital data falls between these jurisdictions. This fragmentation creates legal uncertainty, compliance nightmares, and ethical blind spots that only coordinated governance can resolve.',
    },
    {
      icon: Eye,
      title: 'The Need for Oversight',
      description:
        'With 10,000+ satellites and limited coordination, ODEC ensures oversight and accountability. The rapid commercialization of orbit has outpaced regulatory capacity. Private operators now control vast data networks with minimal transparency or accountability. ODEC provides independent verification, certification, and enforcement mechanisms to ensure responsible practices.',
    },
    {
      icon: Building,
      title: "ODEC's Role",
      description:
        'An independent, neutral body defining standards and certifying ethical responsibility. ODEC operates as a multi-stakeholder organization bringing together governments, industry, academia, and civil society. We develop technical standards, conduct ethical audits, issue certifications, and provide dispute resolution — serving as the trusted neutral arbiter for orbital data governance.',
    },
    {
      icon: Globe2,
      title: 'Towards a Shared Orbital Future',
      description:
        'Collaboration across nations and academia to keep space inclusive and sustainable. Orbit is a shared resource belonging to all humanity. ODEC ensures that orbital data operations serve the global good, prioritizing equitable access, environmental sustainability, and protection of fundamental rights. Through international cooperation, we can build an orbital ecosystem that reflects our highest values.',
    },
  ];

  return (
    <section id="why-odec" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-4">
            Why ODEC Exists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The orbital data ecosystem is growing exponentially — but governance, transparency, and ethical oversight have not kept pace.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F1B40] rounded-lg">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0F1B40] mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg mb-16">
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-[#E5E7EB] flex items-end justify-center pb-8">
              <span className="text-sm font-semibold tracking-wider text-[#0F172A]">
                SPACE TREATIES
              </span>
            </div>
            <div className="flex-1 bg-white flex items-end justify-center pb-8">
              <span className="text-sm font-semibold tracking-wider text-[#0F172A]">
                DATA REGULATIONS
              </span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 600 400"
              className="w-full h-full max-w-[600px]"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
            >
              <path
                d="M 100 200 L 240 200"
                stroke="#0F172A"
                strokeWidth="8"
                fill="none"
              />
              <path
                d="M 360 200 L 500 200"
                stroke="#0F172A"
                strokeWidth="8"
                fill="none"
              />

              <g transform="translate(300, 200)">
                <ellipse cx="0" cy="-20" rx="35" ry="25" fill="#0F172A" />
                <circle cx="-15" cy="-15" r="8" fill="white" />
                <circle cx="15" cy="-15" r="8" fill="white" />

                <ellipse cx="0" cy="20" rx="35" ry="25" fill="#0F172A" />
                <circle cx="-15" cy="15" r="8" fill="white" />
                <circle cx="15" cy="15" r="8" fill="white" />

                <path
                  d="M -30 -10 L -50 30 L -40 35 L -25 0"
                  fill="#0F172A"
                />
                <path
                  d="M 30 -10 L 50 30 L 40 35 L 25 0"
                  fill="#0F172A"
                />

                <path
                  d="M -25 10 L -45 -30 L -35 -35 L -20 5"
                  fill="#0F172A"
                />
                <path
                  d="M 25 10 L 45 -30 L 35 -35 L 20 5"
                  fill="#0F172A"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-[#0F1B40] mb-4">
            ODEC bridges this gap
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Establishing ethical principles for the Orbital Data Ecosystem through international cooperation and independent oversight.
          </p>
          <a
            href="#framework"
            className="inline-block px-8 py-4 bg-[#0F1B40] text-white font-medium rounded-lg hover:bg-[#00A7A7] transition-colors duration-200"
          >
            See Our Framework
          </a>
        </div>
      </div>
    </section>
  );
}
