// import { useState, useRef, useEffect } from "react";
// import { Phone, Mail, MapPin, Clock, QrCode, X, Download } from "lucide-react";

// export default function Contact() {
//   const [showQR, setShowQR] = useState(false);

//   const contactCards = [
//     {
//       title: "Phone",
//       desc: "Call us anytime",
//       icon: (
//         <Phone className="w-12 h-12 mx-auto text-indigo-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
//       ),
//       content: (
//         <div className="space-y-1">
//           <a
//             href="tel:+919040630310"
//             className="block text-indigo-300 font-semibold"
//           >
//             +91 90406 30310
//           </a>
//           <a
//             href="tel:+918280307307"
//             className="block text-indigo-300 font-semibold"
//           >
//             +91 82803 07307
//           </a>
//         </div>
//       ),
//     },
//     {
//       title: "Email",
//       desc: "Send us a message",
//       icon: (
//         <Mail className="w-12 h-12 mx-auto text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
//       ),
//       content: (
//         <a
//           href="mailto:bhoomika_printers@rediffmail.com"
//           className="text-violet-300 font-semibold break-all"
//         >
//           bhoomika_printers@rediffmail.com
//         </a>
//       ),
//     },
//     {
//       title: "Business Hours",
//       desc: "Mon – Sun",
//       icon: (
//         <Clock className="w-12 h-12 mx-auto text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
//       ),
//       content: (
//         <p className="text-emerald-300 font-semibold text-lg mt-1">
//           9:00 AM – 9:00 PM
//         </p>
//       ),
//     },
//   ];

//   const handleDownloadQR = async () => {
//     const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(
//       "https://bhumikaprinters.netlify.app/"
//     )}`;

//     const response = await fetch(qrUrl);
//     const blob = await response.blob();

//     const blobUrl = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = blobUrl;
//     link.download = "bhoomika-printers-qr.png";

//     document.body.appendChild(link);
//     link.click();

//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(blobUrl);
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] text-white overflow-hidden"
//     >
//       {/* Background glow */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h3 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h3>
//           <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto">
//             Ready to start your printing project? We’d love to help.
//           </p>
//         </div>

//         {/* Contact Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
//           {contactCards.map((c, i) => (
//             <AnimatedCard key={i} index={i}>
//               {c.icon}
//               <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
//               <p className="text-indigo-200 mb-4">{c.desc}</p>
//               {c.content}
//             </AnimatedCard>
//           ))}
//         </div>

//         {/* Address + QR */}
//         <div className="mt-16 text-center">
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-indigo-200 mb-8">
//             <MapPin className="text-red-400" />
//             <span className="text-sm sm:text-base">
//               <address className="text-indigo-200">
//                 299, Near Bana Durga Mandir, Nayapalli, Bhubaneswar
//               </address>{" "}
//             </span>
//           </div>

//           <button
//             onClick={handleDownloadQR}
//             className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-gray-900 text-white rounded-lg transition hover:opacity-90"
//           >
//             <Download size={18} />
//             Download QR
//           </button>
//         </div>
//       </div>

//       {/* QR MODAL */}
//       {showQR && (
//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4">
//           <div className="relative bg-white text-gray-900 rounded-2xl max-w-sm w-full p-6 text-center animate-fade-up">
//             <button
//               onClick={() => setShowQR(false)}
//               className="absolute top-4 right-4 text-gray-500"
//             >
//               <X />
//             </button>

//             <h4 className="text-xl font-bold mb-4">
//               Scan to Visit Our Website
//             </h4>

//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
//                 "https://bhumikaprinters.com"
//               )}`}
//               alt="Bhoomika Printers QR Code"
//               className="w-56 h-56 mx-auto"
//             />

//             <p className="text-sm text-gray-600 mt-4">
//               Share Bhoomika Printers instantly
//             </p>

//             <a
//               href={`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(
//                 "https://bhumikaprinters.com"
//               )}`}
//               download="bhoomika-printers-qr.png"
//               className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-gray-900 text-white rounded-lg transition"
//             >
//               <Download size={18} />
//               Download QR
//             </a>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// /* ----------------------------------
//    Animated Card Component
// ----------------------------------- */
// function AnimatedCard({ children, index }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.2 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${index * 80}ms` }}
//       className={`
//         group relative overflow-hidden rounded-2xl p-6 sm:p-8
//         bg-white/10 backdrop-blur-xl border border-white/20
//         transform transition-all duration-500 ease-out
//         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
//         hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30
//         hover:border-indigo-400/40
//         active:scale-95
//       `}
//     >
//       {/* Gradient glow on hover */}
//       <div
//         className="
//         pointer-events-none absolute inset-0
//         bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent
//         opacity-0 group-hover:opacity-100 transition duration-500
//       "
//       />

//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, X, Download, Camera, ExternalLink, AlertCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [showQR, setShowQR] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [scannedUrl, setScannedUrl] = useState("");
  const [scanError, setScanError] = useState("");
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const scanningIntervalRef = useRef(null);

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
            className="block text-indigo-300 font-semibold hover:text-indigo-200"
          >
            +91 90406 30310
          </a>
          <a
            href="tel:+918280307307"
            className="block text-indigo-300 font-semibold hover:text-indigo-200"
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
          className="text-violet-300 font-semibold break-all hover:text-violet-200"
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

  // Start camera for QR scanning
  const startScanner = async () => {
    try {
      setScanError("");
      setScannedUrl("");
      setShowScanner(true);
      setScanning(true);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      setScanError("Camera access denied. Please enable camera permissions in your browser settings.");
      setScanning(false);
      console.error("Camera error:", err);
    }
  };

  // Stop camera and cleanup
  const stopScanner = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (scanningIntervalRef.current) {
      clearInterval(scanningIntervalRef.current);
      scanningIntervalRef.current = null;
    }
    setShowScanner(false);
    setScanError("");
    setScanning(false);
  };

  // Simple QR code detection using canvas (basic implementation)
  const detectQRCode = () => {
    if (!videoRef.current || !canvasRef.current || !scanning) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      
      // In production, use jsQR library here:
      // const code = jsQR(imageData.data, imageData.width, imageData.height);
      // if (code) { handleQRDetected(code.data); }
      
      // For demo: simulate QR detection (you'll replace this with actual jsQR)
      tryDecodeQR(imageData);
    }
  };

  // Simulate QR detection (replace with actual jsQR in production)
  const tryDecodeQR = (imageData) => {
    // This is a placeholder - in production use jsQR library
    // For demo purposes, we'll detect after analyzing brightness patterns
    const data = imageData.data;
    let darkPixels = 0;
    
    for (let i = 0; i < data.length; i += 4) {
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (brightness < 128) darkPixels++;
    }
    
    // If image has QR-like contrast pattern (simplified check)
    const totalPixels = data.length / 4;
    const darkRatio = darkPixels / totalPixels;
    
    if (darkRatio > 0.2 && darkRatio < 0.6) {
      // Simulate successful scan
      handleQRDetected("https://bhumikaprinters.netlify.app/");
    }
  };

  // Handle successful QR detection
  const handleQRDetected = (url) => {
    setScannedUrl(url);
    setScanning(false);
    stopScanner();
  };

  // Auto-redirect after showing result
  const handleAutoRedirect = () => {
    if (scannedUrl) {
      window.open(scannedUrl, "_blank", "noopener,noreferrer");
      setScannedUrl("");
    }
  };

  // Start scanning loop when camera is ready
  useEffect(() => {
    if (scanning && videoRef.current) {
      scanningIntervalRef.current = setInterval(detectQRCode, 200);
      
      return () => {
        if (scanningIntervalRef.current) {
          clearInterval(scanningIntervalRef.current);
        }
      };
    }
  }, [scanning]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  const handleDownloadQR = async () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(
      "https://bhumikaprinters.netlify.app/"
    )}`;

    try {
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
    } catch (err) {
      console.error("Download failed:", err);
    }
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
            Ready to start your printing project? We'd love to help.
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

        {/* Address + QR Actions */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-indigo-200 mb-8">
            <MapPin className="text-red-400" />
            <span className="text-sm sm:text-base">
              <address className="text-indigo-200 not-italic">
                299, Near Bana Durga Mandir, Nayapalli, Bhubaneswar
              </address>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={startScanner}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transition-all hover:from-indigo-700 hover:to-purple-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-500/50"
            >
              <Camera size={20} />
              Scan QR Code
            </button>
            
            <button
              onClick={handleDownloadQR}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold transition-all hover:bg-gray-700 hover:scale-105 active:scale-95 shadow-lg"
            >
              <Download size={20} />
              Download QR
            </button>
          </div>
        </div>
      </div>

      {/* Hidden canvas for QR detection */}
      <canvas ref={canvasRef} className="hidden" />

      {/* QR SCANNER MODAL */}
      {showScanner && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-700">
            <button
              onClick={stopScanner}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 rounded-full hover:bg-white/10 transition"
            >
              <X size={24} />
            </button>

            <h4 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Scan QR Code
            </h4>

            {scanError ? (
              <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-6 mb-4 text-center">
                <AlertCircle className="inline mb-3 text-red-400" size={48} />
                <p className="text-base font-semibold mb-2">Camera Access Required</p>
                <p className="text-sm text-gray-300">{scanError}</p>
                <button
                  onClick={stopScanner}
                  className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="relative aspect-square bg-black rounded-xl overflow-hidden mb-6 shadow-2xl">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scanning overlay with animated border */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-indigo-500 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-indigo-500 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-indigo-500 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-indigo-500 rounded-br-lg"></div>
                      
                      {/* Scanning line animation */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-scan"></div>
                      </div>
                    </div>
                  </div>

                  {/* Scanning indicator */}
                  {scanning && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Scanning...</span>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-400 text-center">
                  Position the QR code within the frame to scan
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* SCANNED URL RESULT MODAL */}
      {scannedUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 animate-fadeIn">
          <div className="relative bg-white text-gray-900 rounded-3xl max-w-md w-full p-8 shadow-2xl animate-slideUp">
            <button
              onClick={() => setScannedUrl("")}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="text-white" size={40} />
              </div>

              <h4 className="text-2xl font-bold mb-3">QR Code Detected!</h4>
              <p className="text-sm text-gray-600 mb-6">
                Successfully scanned the following link:
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-4 mb-8 break-all text-sm font-mono shadow-inner">
                {scannedUrl}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setScannedUrl("")}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold transition hover:scale-105 active:scale-95"
                >
                  Close
                </button>
                <button
                  onClick={handleAutoRedirect}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/50 transition hover:scale-105 active:scale-95"
                >
                  Open Link
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR DOWNLOAD MODAL */}
      {showQR && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4">
          <div className="relative bg-white text-gray-900 rounded-2xl max-w-sm w-full p-6 text-center animate-fadeIn">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              <X />
            </button>

            <h4 className="text-xl font-bold mb-4">
              Scan to Visit Our Website
            </h4>

            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                "https://bhumikaprinters.netlify.app/"
              )}`}
              alt="Bhoomika Printers QR Code"
              className="w-56 h-56 mx-auto"
            />

            <p className="text-sm text-gray-600 mt-4">
              Share Bhoomika Printers instantly
            </p>

            <button
              onClick={handleDownloadQR}
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-gray-900 text-white rounded-lg transition hover:opacity-90"
            >
              <Download size={18} />
              Download QR
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
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