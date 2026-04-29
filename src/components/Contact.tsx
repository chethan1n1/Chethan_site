import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle, Coffee, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chethan-yallampalli-b82681236",
    value: "Professional Network",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/chethan1n1",
    value: "Code Repositories",
    icon: Github
  },
  {
    label: "Email",
    href: "mailto:chethan111@icloud.com",
    value: "chethan111@icloud.com",
    icon: Mail
  },
  {
    label: "Phone",
    href: "tel:+91 9550362819",
    value: "+91 9550362819",
    icon: Phone
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Apple-style Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Let's <span className="text-muted-foreground">Collaborate.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-tight font-medium"
          >
            Open for new opportunities and discussions on building the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-foreground/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-foreground/5 hover:border-foreground/10 transition-all duration-700 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-700 mb-6">
                <link.icon className="h-7 w-7 text-foreground group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors duration-500">
                {link.label}
              </h3>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest leading-tight">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-foreground/5 text-center max-w-4xl mx-auto"
        >
          <p className="text-muted-foreground font-medium text-lg leading-snug mb-6">
            © 2026 Chethan Yallampalli. Designed with a focus on minimalism and high-performance engineering.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Bangalore, India</span>
            <span className="hidden md:inline text-foreground/10">|</span>
            <span className="flex items-center gap-2"><Coffee className="h-4 w-4 text-primary" /> Ready for New Challenges</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
