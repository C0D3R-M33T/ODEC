export default function UrgencyNumbers() {
  const stats = [
    {
      number: '10,000+',
      label: 'Active Satellites',
      sublabel: 'Projected 25,000 by 2030',
      color: 'text-[#00A7A7]',
    },
    {
      number: '82%',
      label: 'Private Sector Share',
      sublabel: 'Growing commercial dominance',
      color: 'text-[#00A7A7]',
    },
    {
      number: '5%',
      label: 'Ethical Disclosure Rate',
      sublabel: 'Critical transparency gap',
      color: 'text-[#00A7A7]',
    },
    {
      number: '2.5 EB/yr',
      label: 'Global Data Volume',
      sublabel: 'Expected 8 EB by 2030',
      color: 'text-[#00A7A7]',
    },
    {
      number: '$3.2T',
      label: 'ESG Investments',
      sublabel: 'Seeking sustainability standards',
      color: 'text-[#00A7A7]',
    },
    {
      number: '0',
      label: 'Global Data Ethics Frameworks',
      sublabel: 'ODEC addresses this void',
      color: 'text-[#00A7A7]',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-4">
            The Urgency in Numbers
          </h2>
          <p className="text-xl text-gray-600">
            A rapidly growing orbit — and a widening ethical gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5E7EB] rounded-lg p-8 hover:border-[#00A7A7] hover:shadow-lg transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-semibold mb-3 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-[#0F1B40] mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
