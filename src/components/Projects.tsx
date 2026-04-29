import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Code2, Globe, Shield, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Med-Q",
    subtitle: "AI Healthcare System",
    description: "Transforming patient-doctor interactions through AI-powered conversational UI. Gemini-driven medical summaries.",
    tech: ["FastAPI", "Gemini", "React", "PostgreSQL"],
    icon: Shield,
    link: "https://github.com/chethan1n1/Med-Q"
  },
  {
    title: "CVue",
    subtitle: "AI Resume Analysis",
    description: "Intelligent ATS feedback and resume scoring. Built with OpenAI GPT for real-time career optimization.",
    tech: ["Next.js", "OpenAI", "Node.js", "TypeScript"],
    icon: Code2,
    link: "https://cvue-resume-analyser.vercel.app"
  }, {
    title: "DocMind",
    subtitle: "RAG Document Intelligence",
    description: "Conversational document Q&A system using RAG architecture. Supports multi-turn queries with context-aware retrieval and page-level citations.",
    tech: ["LangChain", "ChromaDB", "Groq", "FastAPI", "Docker"],
    icon: Terminal,
    link: "https://github.com/chethan1n1/DocMind" // update if different
  },
  {
    title: "Portfolio",
    subtitle: "3D Digital Presence",
    description: "High-end 3D experience with Three.js and Framer Motion. Focused on interactive performance.",
    tech: ["Three.js", "React", "Framer Motion", "Tailwind"],
    icon: Globe,
    link: "https://github.com/chethan1n1/Chethan_site"
  },
  {
    title: "SCAJ",
    subtitle: "Cloud Security",
    description: "Novel encryption algorithm research for cloud infrastructure. Implementation of PSA architecture.",
    tech: ["Python", "Cryptography", "Security", "Cloud"],
    icon: Terminal,
    link: "/chethan-uploads/SCAJ.pdf"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none"
          >
            Curated <span className="text-muted-foreground">Works.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[350px]">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                className={`group relative bg-foreground/5 backdrop-blur-3xl rounded-[3rem] border border-foreground/10 p-8 flex flex-col justify-between overflow-hidden
                  will-change-transform will-change-opacity
                  ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                  ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60 scale-[0.98] blur-[1px] pointer-events-none' : 'opacity-100 scale-100 blur-0 pointer-events-auto'}
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                `}
              >
                {/* Spotlight Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none will-change-opacity"
                  style={{
                    background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(0, 122, 255, 0.13), transparent 40%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-500">
                      <project.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-foreground/5 hover:bg-primary text-background transition-all duration-500">
                      <ArrowUpRight className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-foreground tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-snug font-medium max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-foreground/5 rounded-full text-[10px] font-bold text-muted-foreground group-hover:text-foreground group-hover:bg-foreground/10 transition-all duration-500">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Decorative Layer */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                   <project.icon className="w-48 h-48 -rotate-12 translate-x-12 -translate-y-12 text-foreground" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
