
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "🩺 Med-Q: AI Healthcare Intake System",
    description: "AI-powered healthcare intake platform with conversational UI",
    details: "Revolutionary healthcare intake platform that transforms patient-doctor interactions through AI-powered conversational UI. Features intelligent symptom collection, automated medical history parsing, and generates comprehensive doctor-ready summaries using Google's Gemini API. Reduces intake time by 60% while improving data accuracy and patient experience.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind", "JWT"],
    status: "Open Source",
    highlight: "60% faster intake process",
    links: [
      { type: "github", url: "https://github.com/chethan1n1/Med-Q", label: "GitHub Repository" }
    ]
  },
  {
    title: "📄 CVue: AI Resume Analyzer",
    description: "AI-powered resume analyzer with smart feedback and tracking",
    details: "CVue is an AI-powered resume analyzer that provides smart ATS feedback, resume scoring, and job application tracking. Built with OpenAI’s GPT API, PDF parsing, and a modern UI to help users optimize their resumes and track job applications. Includes suggested improvements, application history, and AI-generated reply assistance.",
    tech: ["Next.js", "Tailwind", "TypeScript", "OpenAI", "Node.js"],
    status: "Live",
    highlight: "AI-powered resume insights",
    links: [
      { type: "github", url: "https://github.com/chethan1n1/Cvue-resume-analyser", label: "GitHub Repository" },
      { type: "external", url: "https://cvue-resume-analyser.vercel.app", label: "Live App" }
    ]
  },
  {
    title: "🌐 Portfolio Website",
    description: "Modern portfolio showcasing technical expertise and projects",
    details: "Professional portfolio website built with cutting-edge web technologies, featuring advanced animations, responsive design, and optimized performance. Showcases full-stack development capabilities, data engineering projects, and SaaS prototypes with clean, modern UI/UX design principles.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    status: "Live",
    highlight: "Modern UI/UX design",
    links: [
      { type: "external", url: "https://www.chethanyallampalli.site", label: "Live Portfolio" },
      { type: "github", url: "https://github.com/chethan1n1/Chethan_site", label: "Portfolio GitHub" }
    ]
  },
  {
    title: "🔒 SCAJ Cloud Security Services",
    description: "Advanced encryption algorithm with PSA architecture",
    details: "Comprehensive cloud security solution featuring custom encryption algorithms and PSA (Platform Security Architecture) implementation. Developed novel security protocols for cloud-based applications with focus on data protection and secure communications. Research submitted to IEEE Xplore for publication.",
    tech: ["Python", "Cryptography", "Cloud Computing", "Security"],
    status: "IEEE Xplore Submission",
    highlight: "Research-grade security",
    links: [
      { type: "external",url: "/chethan-uploads/SCAJ.pdf",label: "📄 View Document"}
    ]
  },
  {
    title: "💳 Banking App with Finance Management",
    description: "Full-stack financial application with modern tech stack",
    details: "Comprehensive banking application featuring secure account management, real-time transaction tracking, financial insights dashboard, and budget management tools. Built with modern technologies including Plaid API integration for secure banking connections and advanced data visualization for financial analytics.",
    tech: ["Next.js", "TypeScript", "Plaid API", "React"],
    status: "Production Ready",
    highlight: "Secure financial platform"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06)_0%,transparent_70%)]"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-200/15 to-orange-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/15 to-purple-300/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
              Featured Work
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Innovative solutions across healthcare, fintech, and web technologies
          </p>
        </div>
        {/* Compact Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-lg border border-amber-200">
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg border border-green-200">
                        {project.highlight}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-200">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                {/* Project Links */}
                {project.links && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        {link.type === 'github' ? (
                          <Github className="h-3 w-3" />
                        ) : (
                          <ExternalLink className="h-3 w-3" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Compact Footer */}
        <div className="text-center mt-10">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              Each project reflects my commitment to creating innovative, user-focused solutions.
            </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default Projects;
