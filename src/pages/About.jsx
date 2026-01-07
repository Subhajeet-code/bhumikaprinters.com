import aboutImg from "../assets/Offset-Printing-Press.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Bhumika Printers
            </h3>

            <p className="text-indigo-200 text-lg mb-4">
              With years of experience in offset printing, Bhumika Printers has
              established itself as a trusted name in the printing industry. We
              combine traditional craftsmanship with modern technology to
              deliver exceptional results.
            </p>

            <p className="text-indigo-200 text-lg mb-6">
              Our commitment to quality, timely delivery, and customer
              satisfaction has made us the preferred choice for businesses,
              organizations, and individuals across the region.
            </p>

            {/* POINTS */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full"></span>
                <span className="text-indigo-100">
                  State-of-the-art printing equipment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full"></span>
                <span className="text-indigo-100">
                  Experienced and skilled team
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full"></span>
                <span className="text-indigo-100">
                  Eco-friendly printing practices
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Image card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-violet-900/40 z-10"></div>

              <img
                src={aboutImg}
                alt="About Bhumika Printers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-white shadow-xl">
              <p className="text-sm text-indigo-200">Excellence in</p>
              <p className="text-xl font-bold">Every Print</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
