import { TrendingUp, Lightbulb, Rocket, Coffee, Compass, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Financial Analysis",
    subtitle: "Trading & Markets",
    description: "Analyzing global markets and crypto assets with a focus on algorithmic patterns.",
    icon: Landmark
  },
  {
    title: "Product Design",
    subtitle: "SaaS Ideation",
    description: "Designing consumer-focused tech solutions with minimalist UX principles.",
    icon: Compass
  },
  {
    title: "Exploration",
    subtitle: "Sustainable Tech",
    description: "Investigating the intersection of agri-tech and sustainable environmental systems.",
    icon: Coffee
  }
];

const Activities = () => {
  return (
    <section id="activities" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Apple-style Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Interests</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Beyond the <span className="text-muted-foreground">Spectrum.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-tight font-medium"
          >
            Fueling creativity and perspective through diverse exploration.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-foreground/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-foreground/5 hover:border-foreground/10 transition-all duration-700"
            >
              <div className="space-y-8">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-700">
                  <activity.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                    {activity.title}
                  </h3>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest">{activity.subtitle}</div>
                </div>
                <p className="text-muted-foreground text-lg font-medium leading-snug">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
