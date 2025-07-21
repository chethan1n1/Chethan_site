import { Calendar, MapPin, Building2, TrendingUp, ArrowRight, DatabaseZap, BarChart3, Cpu } from "lucide-react";
const experiences = [
  {
    title: "Data Engineering Intern",
    company: "Tietoevry",
    period: "2025",
    location: "On-site",
    icon: <DatabaseZap className="h-4 w-4" />,
    color: "from-yellow-300 via-orange-400 to-amber-500",
    description:
      "Worked on data analytics and machine learning projects, contributing to enterprise-level data solutions across cloud platforms.",
    achievement: "Optimized ETL performance by 30%",
    skills: ["Airflow", "Snowflake", "Python", "Superset", "SQL", "GCP", "Data Pipelines"],
  },
  {
    title: "Data Engineering & BI Intern",
    company: "Six Phrase | Veranda",
    period: "2025",
    location: "On-site",
    icon: <BarChart3 className="h-4 w-4" />,
    color: "from-purple-300 via-indigo-400 to-violet-500",
    description:
      "Developed innovative BI dashboards and worked on modern web technologies for business insights and reporting.",
    achievement: "Built end-to-end dashboards for banking clients",
    skills: ["Power BI", "Tableau", "SQL", "ETL", "JavaScript", "Excel", "Client Analytics"],
  },
  {
    title: "Data Analytics Trainee",
    company: "Futurense Technologies",
    period: "2024",
    location: "Hybrid",
    icon: <Cpu className="h-4 w-4" />,
    color: "from-green-300 via-emerald-400 to-teal-500",
    description:
      "Built scalable web applications and analyzed financial datasets using ML techniques for fintech clients.",
    achievement: "Achieved 92% accuracy in fraud prediction prototype",
    skills: ["Python", "Pandas", "Machine Learning", "Flask", "Git", "Jupyter", "Data Cleaning"],
  }
];

function Experience() {
  return (
    <>
      <section id="experience" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-slate-50/80 relative overflow-hidden">
        {/* Minimal Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.04)_0%,transparent_50%)]"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-100/20 to-purple-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-amber-100/20 to-orange-100/15 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Minimal Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                Professional Journey
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Experience
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Building expertise through hands-on experience in data engineering and emerging technologies
            </p>
          </div>
          <div className="relative">
            {/* Minimal Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 to-amber-400/60 rounded-full"></div>
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                {/* Minimal Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'} pl-16 md:pl-0`}>
                  <div className="group">
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden hover:-translate-y-1">
                      {/* Minimal gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        {/* Compact Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${exp.color} text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-md`}>
                            <span>{exp.icon}</span>
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        {/* Compact Job Details */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center shadow-sm`}>
                              <Building2 className="h-4 w-4 text-white" />
                            </div>
                            <h4 className="text-base font-semibold text-gray-800">{exp.company}</h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-sm mb-3">{exp.description}</p>
                          {/* Compact Achievement */}
                          <div className="mb-4">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-100">
                              <TrendingUp className="h-3 w-3" />
                              <span>{exp.achievement}</span>
                            </div>
                          </div>
                        </div>
                        {/* Compact Skills */}
                        <div>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.slice(0, 4).map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-amber-100 hover:text-amber-800 transition-all duration-200 border border-gray-200"
                              >
                                {skill}
                              </span>
                            ))}
                            {exp.skills.length > 4 && (
                              <span className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-200">
                                +{exp.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Compact Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-lg z-20 group">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${exp.color} group-hover:scale-110 transition-transform duration-300 shadow-md flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Minimal Bottom decoration */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;

