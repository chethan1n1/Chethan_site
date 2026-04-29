import { Lightbulb, Target, Rocket, Sparkles, Eye, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section id="vision" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Apple-style Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Ideology</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Vision <span className="text-muted-foreground">& Mission.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-tight font-medium"
          >
            Driving the future through technology that serves human potential.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-foreground/5 backdrop-blur-3xl p-12 md:p-20 rounded-[4rem] border border-foreground/5 text-center relative overflow-hidden group"
          >
            <div className="relative z-10 space-y-12">
              <div className="flex items-center justify-center gap-6">
                {[Lightbulb, Target, Rocket].map((Icon, i) => (
                  <div key={i} className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-700">
                    <Icon className="h-7 w-7 text-foreground/80 group-hover:text-primary transition-colors duration-500" />
                  </div>
                ))}
              </div>

              <blockquote className="text-2xl md:text-4xl font-bold text-foreground leading-[1.1] tracking-tight max-w-4xl mx-auto">
                "To build <span className="text-primary">intelligent platforms</span> that simplify complex systems — driven by <span className="text-muted-foreground">ethical AI</span> and human-centric design."
              </blockquote>

              <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-foreground/5">
                {[
                  { icon: Sparkles, title: 'Innovation', desc: 'Pushing boundaries' },
                  { icon: Eye, title: 'User-First', desc: 'Serving human needs' },
                  { icon: ShieldCheck, title: 'Ethics', desc: 'Responsible technology' }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-foreground font-bold tracking-tight">{item.title}</div>
                    <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
