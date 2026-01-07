import heroImg from "../assets/image.jpg";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] overflow-hidden"
    >
      {/* Floating lights */}
      <FloatingLight className="-top-20 -left-20 w-72 h-72 bg-indigo-500/20" />
      <FloatingLight className="bottom-0 right-0 w-96 h-96 bg-violet-500/20" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimatedFadeUp>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quality Printing Solutions <br />
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  For Business & Personal Needs
                </span>
              </h1>

              <p className="text-indigo-200 mb-8 max-w-xl mx-auto md:mx-0">
                Office stationery, marriage cards, brochures, flex banners,
                leaflets and all types of offset & screen printing with
                consistent quality and professional finishing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#services"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-white/30 text-white transition-all duration-300 transform hover:scale-105 hover:bg-white/10 active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </AnimatedFadeUp>

          {/* Image */}
          <AnimatedFadeUp delay={150}>
            <div className="relative">
              <FloatingImage>
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <img src={heroImg} alt="High-quality printing solutions by Bhumika Printers" />
                </div>
              </FloatingImage>
            </div>
          </AnimatedFadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   Floating background lights
---------------------------- */
function FloatingLight({ className }) {
  return (
    <div
      className={`${className} absolute rounded-full blur-3xl animate-float`}
    />
  );
}

/* ---------------------------
   Floating Image Motion
---------------------------- */
function FloatingImage({ children }) {
  return (
    <div className="relative animate-float-slow">{children}</div>
  );
}

/* ---------------------------
   Scroll fade-up animation
---------------------------- */
function AnimatedFadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {children}
    </div>
  );
}
