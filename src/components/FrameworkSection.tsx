export default function FrameworkSection() {
  const phases = [
    {
      phase: 'Phase I',
      years: '2025–2027',
      title: 'Foundation & Charter',
      items: [
        'Establish founding coalition of governments, agencies, and industry partners',
        'Draft the ODEC Charter and core ethical principles',
        'Create technical working groups for standards development',
        'Launch stakeholder consultation process',
        'Build initial governance structure and secretariat',
      ],
    },
    {
      phase: 'Phase II',
      years: '2027–2030',
      title: 'Pilot Certification & Audits',
      items: [
        'Deploy first certification framework for orbital data operators',
        'Conduct pilot audits with volunteer partners',
        'Establish Data Ethics Registry for transparency reporting',
        'Develop dispute resolution mechanisms',
        'Expand membership and stakeholder engagement',
      ],
    },
    {
      phase: 'Phase III',
      years: '2030+',
      title: 'Global Integration',
      items: [
        'Achieve formal recognition with UN entities (UNOOSA, ITU)',
        'Integrate with OECD, WTO, and regional governance bodies',
        'Mandatory certification for major orbital data operations',
        'Global enforcement and compliance monitoring',
        'Continuous framework evolution and adaptation',
      ],
    },
  ];

  return (
    <section id="framework" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-6">
            The ODEC Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A phased approach to building global ethical governance for orbital data operations, designed for scalability, inclusivity, and long-term sustainability.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-[#F5F7FA] rounded-lg p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex flex-col items-center justify-center w-24 h-24 bg-[#0F1B40] rounded-lg">
                    <span className="text-sm text-[#00A7A7] font-medium">
                      {phase.phase}
                    </span>
                    <span className="text-xs text-white mt-1">
                      {phase.years}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0F1B40] mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-[#00A7A7] flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-3 text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#timeline"
            className="inline-block px-8 py-4 bg-[#0F1B40] text-white font-medium rounded-lg hover:bg-[#00A7A7] transition-colors duration-200"
          >
            View Detailed Timeline
          </a>
        </div>
      </div>
    </section>
  );
}
