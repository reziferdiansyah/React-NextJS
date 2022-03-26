import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Porto from "../components/Porto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* PORTOFOLIO */}
      <div className="flex justify-items-center">
        <Porto />
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
