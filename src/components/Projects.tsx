
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "SCAJ Cloud Security Services",
    description: "Advanced encryption algorithm with PSA architecture",
    details: "Developed a comprehensive cloud security solution with custom encryption algorithms. Submitted to IEEE Xplore for publication.",
    tech: ["Python", "Cryptography", "Cloud Computing", "Security"],
    status: "IEEE Xplore Submission"
  },
  {
    title: "Banking App with Finance Management",
    description: "Full-stack financial application with modern tech stack",
    details: "Built a comprehensive banking application featuring account management, transaction tracking, and financial insights using modern web technologies.",
    tech: ["Next.js", "TypeScript", "Plaid API", "React"],
    status: "Production Ready"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Key Projects</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <CardDescription className="text-gray-600 font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-lg font-medium hover:bg-amber-100 hover:text-amber-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
