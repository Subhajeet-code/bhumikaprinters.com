// import React from "react";

// export default function Services() {
//   const services = [
//     {
//       name: "Marriage Cards",
//       desc: "Elegant wedding invitation designs",
//       icon: "💍",
//     },
//     {
//       name: "Birthday Cards",
//       desc: "Personalized cards for celebrations",
//       icon: "🎂",
//     },
//     {
//       name: "Visiting Cards",
//       desc: "Professional identity cards for business",
//       icon: "💼",
//     },
//     {
//       name: "Business Cards",
//       desc: "Premium cards with custom finishes",
//       icon: "📇",
//     },
//     {
//       name: "ID Cards",
//       desc: "Employee & institutional ID printing",
//       icon: "🆔",
//     },
//     {
//       name: "T-Shirts",
//       desc: "Custom printed apparel for teams & events",
//       icon: "👕",
//     },
//     { name: "Banners", desc: "Large format flex & vinyl banners", icon: "🖨️" },
//     { name: "Pamphlets", desc: "Promotional leaflets & handouts", icon: "📄" },
//     {
//       name: "Brochures",
//       desc: "Multi-page product & company brochures",
//       icon: "📘",
//     },
//     { name: "Calendars", desc: "Custom wall & desk calendars", icon: "📅" },
//     {
//       name: "Cloth Banners",
//       desc: "Durable fabric display banners",
//       icon: "🚩",
//     },
//     { name: "Diaries", desc: "Personalized notebooks & planners", icon: "📓" },
//     {
//       name: "Flex Banners",
//       desc: "High quality outdoor advertising prints",
//       icon: "📢",
//     },
//     { name: "Leaflets", desc: "Cost-effective marketing prints", icon: "🧾" },
//   ];

//   return (
//     <section
//       id="services"
//       className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81]"
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h3 className="text-4xl font-bold text-white mb-4">Our Services</h3>
//           <p className="text-indigo-200 max-w-2xl mx-auto">
//             Complete printing solutions designed for business and personal needs
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="
//                 bg-white/10 backdrop-blur-xl rounded-2xl p-6
//                 border border-white/20
//                 transition-all duration-300
//                 active:scale-95
//               "
//             >
//               <div className="text-4xl mb-4">{s.icon}</div>
//               <h4 className="text-xl font-semibold text-white mb-2">
//                 {s.name}
//               </h4>
//               <p className="text-indigo-200 text-sm">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

export default function Services() {
  const services = [
    { name: "Marriage Cards", desc: "Elegant wedding invitation designs", icon: "💍" },
    { name: "Birthday Cards", desc: "Personalized cards for celebrations", icon: "🎂" },
    { name: "Visiting Cards", desc: "Professional identity cards for business", icon: "💼" },
    { name: "Business Cards", desc: "Premium cards with custom finishes", icon: "📇" },
    { name: "ID Cards", desc: "Employee & institutional ID printing", icon: "🆔" },
    { name: "T-Shirts", desc: "Custom printed apparel for teams & events", icon: "👕" },
    { name: "Banners", desc: "Large format flex & vinyl banners", icon: "🖨️" },
    { name: "Pamphlets", desc: "Promotional leaflets & handouts", icon: "📄" },
    { name: "Brochures", desc: "Multi-page product & company brochures", icon: "📘" },
    { name: "Calendars", desc: "Custom wall & desk calendars", icon: "📅" },
    { name: "Cloth Banners", desc: "Durable fabric display banners", icon: "🚩" },
    { name: "Diaries", desc: "Personalized notebooks & planners", icon: "📓" },
    { name: "Flex Banners", desc: "High quality outdoor advertising prints", icon: "📢" },
    { name: "Leaflets", desc: "Cost-effective marketing prints", icon: "🧾" },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Complete printing solutions designed for business and personal needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <AnimatedCard key={i} index={i}>
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                {s.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {s.name}
              </h4>
              <p className="text-indigo-200 text-sm">{s.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------
   Scroll + Hover Animated Card
----------------------------------- */
function AnimatedCard({ children, index }) {
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
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`
        group relative overflow-hidden rounded-2xl p-6
        bg-white/10 backdrop-blur-xl
        border border-white/20

        transform transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}

        hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30
        hover:border-indigo-400/40
        active:scale-95
      `}
    >
      {/* Gradient glow on hover */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent
          opacity-0 group-hover:opacity-100 transition duration-500
        "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
