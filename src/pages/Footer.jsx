import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-4 mb-16">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Bhumika Printers"
                className="h-12 w-auto rounded-lg"
              />
              <h4 className="text-2xl font-bold">Bhumika Printers</h4>
            </div>
            <p className="text-indigo-200 leading-relaxed">
              Your trusted partner for all offset printing needs. Quality,
              reliability, and excellence in every project.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-indigo-200 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <div className="text-indigo-200 text-sm space-y-1 leading-relaxed">
              <p>Visiting Cards • Business Cards</p>
              <p>ID Cards • Wedding Invitations</p>
              <p>T-Shirts • Banners • Brochures</p>
              <p>Calendars • Diaries • Pamphlets</p>
            </div>
          </div>

          {/* CONTACT + MAP */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>

            <div className="space-y-3 text-indigo-200 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-red-400" />
                <span className="text-sm leading-relaxed">
                  <address className="text-indigo-200">
                    299, Near Bana Durga Mandir, Nayapalli, Bhubaneswar
                  </address>{" "}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <a href="tel:+919040630310">+91 90406 30310</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400" />
                <a
                  href="mailto:bhoomika_printers@rediffmail.com"
                  className="break-all"
                >
                  bhoomika_printers@rediffmail.com
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                title="Bhumika Printers Location"
                src="https://www.google.com/maps?q=299%2C%20Near%20Bana%20Durga%20Mandir%2C%20Nayapalli%2C%20Bhubaneswar&output=embed"
                className="w-full h-40"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-indigo-300 text-sm">
            &copy; 2024 Bhumika Printers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
