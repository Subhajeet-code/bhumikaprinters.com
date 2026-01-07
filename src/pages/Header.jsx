// import React, { useState, useEffect } from "react";
// import { Menu, X, Phone, Mail } from "lucide-react";
// import logo from "../assets/logo.jpg";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = ["home", "services", "about", "contact"];

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-[#0F172A]/90 backdrop-blur-xl shadow-xl"
//           : "bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/60 to-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="h-16 md:h-20 flex items-center justify-between">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Bhumika Printers"
//               className="h-10 md:h-12 object-contain rounded-lg"
//             />
//             <div className="hidden sm:block">
//               <h1 className="text-white font-bold text-lg leading-tight">
//                 Bhumika Printers
//               </h1>
//               <p className="text-indigo-200 text-xs">
//                 Offset & Screen Printing Unit
//               </p>
//             </div>
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-6">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 className="text-indigo-100 hover:text-white transition relative"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-indigo-100"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           open ? "max-h-96" : "max-h-0"
//         }`}
//       >
//         <nav className="bg-[#0F172A] px-6 py-6 space-y-4">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item}`}
//               onClick={() => setOpen(false)}
//               className="block text-indigo-100 text-lg py-2 border-b border-white/10"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["home", "services", "about", "contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-xl shadow-2xl"
          : "bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Bhumika Printers"
              className="h-10 md:h-12 object-contain rounded-lg 
                         transition-transform duration-300 
                         group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg leading-tight group-hover:text-indigo-300 transition">
                Bhumika Printers
              </h1>
              <p className="text-indigo-200 text-xs">
                Offset & Screen Printing Unit
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-indigo-100 font-medium transition-all duration-300
                           hover:text-white group"
              >
                <span className="relative z-10">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>

                {/* Animated underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400
                             transition-all duration-300 group-hover:w-full"
                />

                {/* Glow */}
                <span
                  className="absolute inset-0 rounded-md bg-indigo-400/10 opacity-0
                             group-hover:opacity-100 transition duration-300 blur"
                />
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-indigo-100 p-2 rounded-lg
                       transition active:scale-90 hover:bg-white/10"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="bg-[#0F172A] px-6 py-6 space-y-4 animate-slideDown">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${index * 80}ms` }}
              className="block text-indigo-100 text-lg py-3 px-4 rounded-lg
                         border border-white/10
                         transition-all duration-300
                         hover:bg-indigo-500/10 hover:text-white
                         active:scale-95 animate-fadeInUp"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
