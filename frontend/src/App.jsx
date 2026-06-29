import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Hackathon from "./components/Hackathon/Hackathon";
import Hero from "./components/Hero/Hero";
import Internship from "./components/Internship/Internship";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Publications from "./components/Publications/Publications";
import Skills from "./components/Skills/Skills";
import AnimatedBackground from "./ui/AnimatedBackground";


export default function App() {
  return (
    <>
      {/* ADDED: one global animated background, fixed behind every
          section — this is what makes the network the same everywhere
          instead of being unique to the Hero. */}
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathon />
        <Internship />
        <Publications />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
