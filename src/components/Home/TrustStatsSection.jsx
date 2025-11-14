export default function TrustStatsSection() {
  const stats = [
    {
      value: "190",
      label: "Countries Served"
    },
    {
      value: "215,000+",
      label: "Customers Worldwide"
    },
    {
      value: "450,000+",
      label: "Servers Running"
    },
    {
      value: "22 Years",
      label: "In Business"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="mb-8 text-center text-2xl font-light text-gray-700 sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl">
          Trusted by Thousands Worldwide
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Value */}
              <div className="mb-2 text-3xl font-bold text-blue-600 sm:mb-3 sm:text-4xl md:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-sm font-semibold text-gray-700 sm:text-base md:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}