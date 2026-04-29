import React from 'react';
import { Code2, Brain, Wrench, Layers, Terminal, Database, Cloud, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    icon: Terminal,
    skills: ["Python", "SQL", "JavaScript", "Java"]
  },
  {
    category: "AI & LLM Systems",
    icon: Brain,
    skills: ["LangChain", "RAG Pipelines", "LLM Apps", "Prompt Engineering", "NLP"]
  },
  {
    category: "Data Engineering",
    icon: Database,
    skills: ["Airflow", "Snowflake", "ChromaDB", "ETL/ELT", "Data Modeling"]
  },
  {
    category: "Backend & APIs",
    icon: Cpu,
    skills: ["FastAPI", "Node.js", "REST APIs", "Vector Search"]
  },
  {
    category: "Cloud & Infra",
    icon: Cloud,
    skills: ["AWS S3", "Azure Blob", "Docker", "Linux", "Git"]
  },
  {
    category: "Tools & Visualization",
    icon: Wrench,
    skills: ["Power BI", "Superset", "VS Code", "Notion", "Draw.io"]
  }
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Competencies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tighter leading-none"
          >
            Toolkit <span className="text-muted-foreground">& Tech.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-foreground/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-foreground/10 hover:border-foreground/20 transition-all duration-700 overflow-hidden"
            >
              {/* Spotlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                    <category.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground tracking-tight leading-none">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-bold text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Background Icon */}
              <category.icon className="absolute -bottom-10 -right-10 w-40 h-40 text-foreground/5 -rotate-12 group-hover:scale-110 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
