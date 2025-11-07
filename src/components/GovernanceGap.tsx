export default function GovernanceGap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-4">
            The Governance Gap
          </h2>
          <p className="text-xl text-gray-600">
            Space laws governs hardware. Data laws governs territorial Datas. But no one governs Orbital information.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
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

        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-[#0F1B40] mb-4">
            ODEC bridges this gap
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Establishing ethical principles for the Orbital Data Ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
