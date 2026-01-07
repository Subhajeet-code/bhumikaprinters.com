import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Services from "./pages/Services";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
const BhumikaPrinters = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] via-[#eef2f7] to-[#e2e8f0]">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default BhumikaPrinters;
