import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Internships from "./components/Internships";
import Education from "./components/Education";
import UniversitySpotlight from "./components/UniversitySpotlight";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Education />
        <Certifications />
        <UniversitySpotlight />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ImageModal />
    </div>
  );
}
