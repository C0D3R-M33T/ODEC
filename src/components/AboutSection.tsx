import { Eye, Scale, Leaf } from 'lucide-react';
import { WorldMap } from './ui/world-map';

export default function AboutSection() {
  const pillars = [
    {
      icon: Eye,
      title: 'Transparency & Accountability',
      description:
        'Ensuring that orbital data operations are visible, auditable, and accountable to all stakeholders globally.',
    },
    {
      icon: Scale,
      title: 'Fairness & Inclusivity',
      description:
        'Guaranteeing equitable access to orbital data benefits across nations, organizations, and communities.',
    },
    {
      icon: Leaf,
      title: 'Sustainability & Stewardship',
      description:
        'Protecting the long-term viability of orbital infrastructure and promoting responsible data practices.',
    },
  ];

  const mapConnections = [
    {
      start: { lat: 37.7749, lng: -122.4194, label: 'San Francisco' },
      end: { lat: 51.5074, lng: -0.1278, label: 'London' },
    },
    {
      start: { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
      end: { lat: -33.8688, lng: 151.2093, label: 'Sydney' },
    },
    {
      start: { lat: 1.3521, lng: 103.8198, label: 'Singapore' },
      end: { lat: 35.6762, lng: 139.6503, label: 'Tokyo' },
    },
    {
      start: { lat: 40.7128, lng: -74.006, label: 'New York' },
      end: { lat: -23.5505, lng: -46.6333, label: 'São Paulo' },
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-6">
            About ODEC
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The Orbital Data Ethics Council is a proposed international framework designed to establish ethical, transparent, and sustainable governance for orbital data operations.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            As satellite networks expand and orbital data becomes central to global infrastructure, ODEC provides the principles, standards, and oversight needed to ensure this new frontier serves humanity responsibly.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-[#0F1B40] text-center mb-12">
            Our Three Ethical Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F1B40] rounded-full mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#0F1B40] mb-4">
                  {pillar.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 overflow-hidden rounded-3xl bg-[#050B1F] px-6 py-10 text-white shadow-lg">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              Global Collaboration
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              A Worldwide Coalition of Orbital Stakeholders
            </h3>
            <p className="mt-4 text-lg text-white/70">
              ODEC unites space agencies, regulators, researchers, and industry partners across continents to
              co-create ethical guardrails for orbital data. Each connection below represents active working groups
              contributing to the framework.
            </p>
          </div>
          <WorldMap
            className="aspect-[5/3]"
            dots={mapConnections}
            lineColor="#38BDF8"
            theme="dark"
            backgroundColor="#050B1F"
            dotColor="#1E3A8A60"
          />
        </div>

        <div className="text-center">
          <a
            href="#framework"
            className="inline-block px-8 py-4 bg-[#0F1B40] text-white font-medium rounded-lg hover:bg-[#00A7A7] transition-colors duration-200"
          >
            Explore Our Framework Timeline
          </a>
        </div>
      </div>
    </section>
  );
}
