export default function Features() {
  const features = [
    {
      title: "Quality Printing",
      desc: "State-of-the-art offset printing technology",
    },
    {
      title: "Fast Turnaround",
      desc: "Quick delivery without compromising quality",
    },
    {
      title: "Competitive Pricing",
      desc: "Best rates for bulk and individual orders",
    },
    {
      title: "Custom Designs",
      desc: "Tailored solutions for your unique needs",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-6 sm:p-8
                text-center
                transition-all duration-300
                active:scale-[0.97]
              "
            >
              {/* Number Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full
                bg-gradient-to-br from-indigo-500 to-violet-500
                flex items-center justify-center
                text-white text-xl sm:text-2xl font-bold
                shadow-lg shadow-indigo-500/30
              ">
                {idx + 1}
              </div>

              {/* Content */}
              <h4 className="text-base sm:text-xl font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-indigo-200">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
