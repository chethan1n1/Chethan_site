
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
   {
    label: "Phone",
    href: "tel:+91 9550362819",
    icon: Phone
  },
  {
    label: "Email",
    href: "mailto:chethan111@icloud.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chethan-yallampalli-b82681236",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/chethan1n1",
    icon: Github
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-tight">Contact</h2>
          <div className="w-16 h-px bg-amber-500"></div>
          <p className="text-xl text-gray-600 font-light mt-8 max-w-2xl">
            Ready to build something amazing together? Reach out and let's discuss how we can create 
            impactful digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-gray-200 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex flex-col">
                  <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-amber-500 mb-4 transition-colors duration-300" />
                  <h3 className="font-medium text-gray-900 mb-2">{link.label}</h3>
                  <p className="text-sm text-gray-600 break-all">{link.value}</p>
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-light">
            © 2025 Chethan Yallampalli. Built with passion for technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
