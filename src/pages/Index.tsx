
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BusinessVentures from "@/components/BusinessVentures";
import TechnicalSkills from "@/components/TechnicalSkills";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Vision />
      <Experience />
      <Projects />
      <BusinessVentures />
      <TechnicalSkills />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
