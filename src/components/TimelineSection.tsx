export default function TimelineSection() {
  const milestones = [
    {
      year: '2025',
      title: 'Charter Drafting & Stakeholder Engagement',
      description:
        'Form founding coalition, establish working groups, and begin drafting the ODEC Charter with input from global stakeholders.',
    },
    {
      year: '2026',
      title: 'Framework Design & Registry Prototype',
      description:
        'Finalize ethical standards, develop certification criteria, and launch prototype Data Ethics Registry for transparency.',
    },
    {
      year: '2027',
      title: 'Pilot Projects Begin',
      description:
        'Launch pilot certification programs with volunteer operators, conduct first ethical audits, and refine standards based on real-world implementation.',
    },
    {
      year: '2028–2029',
      title: 'Evaluation & Expansion',
      description:
        'Assess pilot results, expand certification framework, increase membership, and strengthen partnerships with international bodies.',
    },
    {
      year: '2030',
      title: 'Formal Global Recognition',
      description:
        'Achieve recognition from UN entities, integrate with international regulatory frameworks, and establish mandatory compliance for major operators.',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-4">
            Roadmap to a Global Ethical Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A strategic timeline for building comprehensive governance of orbital data operations through collaboration, testing, and international integration.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-[#00A7A7]"></div>
            <div className="grid grid-cols-5 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 bg-[#0F1B40] rounded-full flex items-center justify-center mb-4 relative z-10 border-4 border-[#F5F7FA]">
                      <span className="text-white font-semibold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-[#0F1B40] mb-3 min-h-[60px]">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 bg-[#0F1B40] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs">
                  {milestone.year}
                </span>
              </div>
              {index < milestones.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-[#00A7A7]"></div>
              )}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[#0F1B40] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#join"
            className="inline-block px-8 py-4 bg-[#0F1B40] text-white font-medium rounded-lg hover:bg-[#00A7A7] transition-colors duration-200"
          >
            Join a Working Group
          </a>
        </div>
      </div>
    </section>
  );
}
