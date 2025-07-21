
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BusinessVentures from "@/components/BusinessVentures";
import TechnicalSkills from "@/components/TechnicalSkills";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Vision />
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="ventures">
        <BusinessVentures />
      </div>
      <div id="skills">
        <TechnicalSkills />
      </div>
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
