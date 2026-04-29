import React from 'react';
import { Calendar, MapPin, Building2, TrendingUp, Database, BarChart3, Cpu, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Kantar",
    period: "2026",
    location: "On-site",
    icon: Briefcase,
    description: "Worked on large-scale market analytics projects, leveraging internal analytics platforms and simulators to derive actionable insights and optimize business strategies.",
    achievement: "Delivered high-impact insights using advanced simulation tools",
    skills: ["Data Analysis", "Simulation Modeling", "Analytics", "Business Insights", "SQL"],
  },
  {
    title: "Data Engineering Intern",
    company: "Tietoevry",
    period: "2025",
    location: "On-site",
    icon: Database,
    description: "Worked on data analytics and machine learning projects, contributing to enterprise-level data solutions across cloud platforms.",
    achievement: "Optimized ETL performance by 30%",
    skills: ["Airflow", "Snowflake", "Python", "SQL", "GCP"],
  },
  {
    title: "Data Engineering & BI Intern",
    company: "Six Phrase | Veranda",
    period: "2025",
    location: "On-site",
    icon: BarChart3,
    description: "Developed innovative BI dashboards and worked on modern web technologies for business insights and reporting.",
    achievement: "Built end-to-end dashboards for banking clients",
    skills: ["Power BI", "Tableau", "SQL", "ETL", "Analytics"],
  },
  {
    title: "Data Analytics Trainee",
    company: "Futurense Technologies",
    period: "2024",
    location: "Hybrid",
    icon: Cpu,
    description: "Built scalable web applications and analyzed financial datasets using ML techniques for fintech clients.",
    achievement: "Achieved 92% accuracy in fraud prediction prototype",
    skills: ["Python", "Pandas", "ML", "Flask", "Git"],
  }
];

function Experience() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(100, ((-rect.top + 200) / (rect.height)) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Career Odyssey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter leading-none"
          >
            Experience <span className="text-muted-foreground">& Impact.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Track */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2 hidden md:block">
             <div 
               className="w-full bg-gradient-to-b from-primary to-transparent transition-all duration-300"
               style={{ height: `${scrollProgress}%` }}
             />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,122,255,0.5)] hidden md:block" />

                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                     <div className="bg-foreground/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-foreground/10 group hover:bg-foreground/[0.08] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                           <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10 group-hover:bg-primary/20 transition-all duration-500">
                             <exp.icon className="h-6 w-6 text-primary" />
                           </div>
                           <div className="text-foreground/40 font-bold text-lg tracking-widest">{exp.period}</div>
                        </div>

                        <h3 className="text-3xl font-bold text-foreground mb-2 leading-none">{exp.title}</h3>
                        <div className={`text-primary font-bold text-lg mb-6 flex items-center gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <Building2 className="h-5 w-5" />
                          {exp.company}
                        </div>

                        <p className="text-muted-foreground text-lg leading-snug mb-8 font-medium">
                          {exp.description}
                        </p>

                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-bold text-muted-foreground group-hover:text-foreground transition-all duration-500">
                              {skill}
                            </span>
                          ))}
                        </div>
                     </div>
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;