

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Send, MessageCircle, Coffee } from "lucide-react";

const contactLinks = [
  {
    label: "Phone",
    href: "tel:+91 9550362819",
    value: "+91 9550362819",
    icon: Phone,
    description: "Call for urgent matters",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    label: "Email",
    href: "mailto:chethan111@icloud.com",
    value: "chethan111@icloud.com",
    icon: Mail,
    description: "Best for detailed discussions",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chethan-yallampalli-b82681236",
    value: "Connect professionally",
    icon: Linkedin,
    description: "Professional networking",
    gradient: "from-blue-600 to-blue-700",
    bgGradient: "from-blue-50 to-blue-100"
  },
  {
    label: "GitHub",
    href: "https://github.com/chethan1n1",
    value: "View my repositories",
    icon: Github,
    description: "Code collaboration",
    gradient: "from-gray-700 to-gray-800",
    bgGradient: "from-gray-50 to-gray-100"
  }
];

const quickInfo = [
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Bangalore, India" },
  { icon: <MessageCircle className="h-5 w-5" />, label: "Response Time", value: "Within 24 hours" },
  { icon: <Coffee className="h-5 w-5" />, label: "Availability", value: "Open to opportunities" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-slate-100/30 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/15 to-purple-300/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-200/15 to-blue-300/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to build something amazing together? Let's discuss new opportunities and collaborations.
          </p>
          {/* Compact Quick Info */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mt-6">
            {quickInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-blue-500">{info.icon}</div>
                <span className="text-sm font-medium">{info.label}:</span>
                <span className="text-sm">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Compact Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-amber-200/50"
              >
                {/* Compact Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative z-10 p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {link.label}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 font-medium">
                    {link.description}
                  </p>
                  <p className="text-sm text-gray-700 font-medium break-all">
                    {link.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
        {/* Compact Call to Action */}
        <div className="text-center mb-10">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 to-blue-50/20 opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start a Conversation?</h3>
              <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind or want to discuss opportunities, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:chethan111@icloud.com"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/chethan-yallampalli-b82681236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 border border-blue-200 shadow-lg"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Compact Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-gray-600 font-medium mb-3">
              © 2025 Chethan Yallampalli. Built with passion for technology and innovation.
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <span>Crafted with React, TypeScript & Tailwind CSS</span>
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
