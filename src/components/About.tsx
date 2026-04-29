import { Target, Sparkles, User, Brain, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Profile</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Passionate About <span className="text-muted-foreground">Innovation.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-tight font-medium"
          >
            A dedicated technologist creating scalable solutions that bridge the gap between complex data and human needs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-foreground/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-foreground/5"
            >
              <p className="text-lg text-muted-foreground leading-snug mb-6">
                I'm a <span className="text-foreground font-bold">Full-Stack Developer and Data Engineer</span> specializing in 
                <span className="text-foreground"> AI-powered pipelines</span> and large-scale fintech applications.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I focus on translating complex business requirements into elegant software through clean architecture, 
                thoughtful UX design, and high-performance backend systems.
              </p>
            </motion.div>

            {/* Core Values Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-foreground/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-foreground/5"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Brain className="h-6 w-6 text-primary" />
                Core Philosophy
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Purpose', desc: 'Driven by meaningful impact' },
                  { title: 'Excellence', desc: 'Precision in every line of code' },
                  { title: 'Growth', desc: 'Continuous iterative learning' }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-foreground font-bold text-sm tracking-tight">{item.title}</div>
                    <div className="text-muted-foreground text-xs leading-tight font-medium">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Expertise Sidebar */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-foreground/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-foreground/5"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Expertise
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Brain, label: 'AI Development', sub: 'RAG & ML Systems' },
                  { icon: Target, label: 'Data Engineering', sub: 'ETL & Pipelines' },
                  { icon: Rocket, label: 'Cloud Solutions', sub: 'Scalable Architecture' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:border-primary/50">
                      <item.icon className="h-5 w-5 text-foreground transition-colors duration-500 group-hover:text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-sm tracking-tight">{item.label}</div>
                      <div className="text-muted-foreground text-xs font-medium">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
