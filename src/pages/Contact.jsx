import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, QrCode, X, Download } from "lucide-react";

export default function Contact() {
  const [showQR, setShowQR] = useState(false);

  const contactCards = [
    {
      title: "Phone",
      desc: "Call us anytime",
      icon: (
        <Phone className="w-12 h-12 mx-auto text-indigo-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
      ),
      content: (
        <div className="space-y-1">
          <a
            href="tel:+919040630310"
            className="block text-indigo-300 font-semibold"
          >
            +91 90406 30310
          </a>
          <a
            href="tel:+918280307307"
            className="block text-indigo-300 font-semibold"
          >
            +91 82803 07307
          </a>
        </div>
      ),
    },
    {
      title: "Email",
      desc: "Send us a message",
      icon: (
        <Mail className="w-12 h-12 mx-auto text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
      ),
      content: (
        <a
          href="mailto:bhoomika_printers@rediffmail.com"
          className="text-violet-300 font-semibold break-all"
        >
          bhoomika_printers@rediffmail.com
        </a>
      ),
    },
    {
      title: "Business Hours",
      desc: "Mon – Sun",
      icon: (
        <Clock className="w-12 h-12 mx-auto text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
      ),
      content: (
        <p className="text-emerald-300 font-semibold text-lg mt-1">
          9:00 AM – 9:00 PM
        </p>
      ),
    },
  ];

  const handleDownloadQR = async () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(
      "https://bhumikaprinters.netlify.app/"
    )}`;

    const response = await fetch(qrUrl);
    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "bhoomika-printers-qr.png";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h3>
          <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to start your printing project? We’d love to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {contactCards.map((c, i) => (
            <AnimatedCard key={i} index={i}>
              {c.icon}
              <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
              <p className="text-indigo-200 mb-4">{c.desc}</p>
              {c.content}
            </AnimatedCard>
          ))}
        </div>

        {/* Address + QR */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-indigo-200 mb-8">
            <MapPin className="text-red-400" />
            <span className="text-sm sm:text-base">
              <address className="text-indigo-200">
                299, Near Bana Durga Mandir, Nayapalli, Bhubaneswar
              </address>{" "}
            </span>
          </div>

          <button
            onClick={handleDownloadQR}
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-gray-900 text-white rounded-lg transition hover:opacity-90"
          >
            <Download size={18} />
            Download QR
          </button>
        </div>
      </div>

      {/* QR MODAL */}
      {showQR && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4">
          <div className="relative bg-white text-gray-900 rounded-2xl max-w-sm w-full p-6 text-center animate-fade-up">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X />
            </button>

            <h4 className="text-xl font-bold mb-4">
              Scan to Visit Our Website
            </h4>

            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                "https://bhumikaprinters.com"
              )}`}
              alt="Bhoomika Printers QR Code"
              className="w-56 h-56 mx-auto"
            />

            <p className="text-sm text-gray-600 mt-4">
              Share Bhoomika Printers instantly
            </p>

            <a
              href={`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(
                "https://bhumikaprinters.com"
              )}`}
              download="bhoomika-printers-qr.png"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-gray-900 text-white rounded-lg transition"
            >
              <Download size={18} />
              Download QR
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* ----------------------------------
   Animated Card Component
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
        group relative overflow-hidden rounded-2xl p-6 sm:p-8
        bg-white/10 backdrop-blur-xl border border-white/20
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
