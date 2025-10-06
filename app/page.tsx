import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
// import Projects from "../components/sections/Projects";
import Events from "../components/sections/Events";
import Officers from "../components/sections/Officers";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Events />
      <Officers />
      <Contact />
      <Footer />
    </div>
  );
}
