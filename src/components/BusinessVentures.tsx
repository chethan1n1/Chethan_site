import { Rocket, TrendingUp, Home, Heart, Shirt, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const topVentures = [
  {
    title: "TenantVerify",
    subtitle: "Real Estate SaaS",
    description: "Intelligent platform for automated rental agreements and tenant background verification.",
    icon: Home,
    status: "Active Dev"
  },
  {
    title: "MEdCheck",
    subtitle: "Healthcare Ops",
    description: "Automated patient queue management and information streamlining for hospitals.",
    icon: Heart,
    status: "Prototype"
  },
  {
    title: "Virtual Try-On",
    subtitle: "Retail AR",
    description: "Realistic 3D clothing try-ons using photogrammetry and augmented reality.",
    icon: Shirt,
    status: "Upcoming"
  }
];

const BusinessVentures = () => {
  return (
    <section id="ventures" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Apple-style Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Ventures</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Entrepreneurial <span className="text-muted-foreground">Spirit.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-tight font-medium"
          >
            Building products that solve real-world problems through innovation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {topVentures.map((venture, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-foreground/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-foreground/5 hover:border-foreground/10 transition-all duration-700"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                    <venture.icon className="h-7 w-7 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {venture.status}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                    {venture.title}
                  </h3>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest">{venture.subtitle}</div>
                </div>

                <p className="text-lg text-muted-foreground leading-snug font-medium">
                  {venture.description}
                </p>

                <div className="pt-6 border-t border-foreground/5">
                  <div className="flex items-center gap-2 text-muted-foreground font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors duration-500">
                    <Sparkles className="h-4 w-4" />
                    Innovation in Progress
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVentures;
