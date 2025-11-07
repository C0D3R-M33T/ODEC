import { Satellite, Database, Globe } from 'lucide-react';

export default function NewOrbitSection() {
  const cards = [
    {
      icon: Satellite,
      text: '10,000+ satellites transforming orbit into the new network layer.',
    },
    {
      icon: Database,
      text: 'Petabytes of data reshaping science and sustainability.',
    },
    {
      icon: Globe,
      text: 'A new ecosystem demanding ethical, cooperative governance.',
    },
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-4">
            The New Orbit of Data
          </h2>
          <p className="text-xl text-gray-600">
            The next digital revolution is not on Earth — it's above it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F1B40] rounded-full mb-6">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
