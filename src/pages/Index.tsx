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
import ThemeToggle from "@/components/ThemeToggle";
import Scene3D from "@/components/Scene3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      <Scene3D />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Vision />
          <Experience />
          <Projects />
          <BusinessVentures />
          <TechnicalSkills />
          <Activities />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
