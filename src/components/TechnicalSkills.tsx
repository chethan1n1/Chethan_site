
<<<<<<< HEAD
const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "Java", "HTML/CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Next.js", "TypeScript"]
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "Airbyte", "Superset", "Git", "n8n", "Draw.io"]
=======
import { Code, Database, Wrench, Brain, Cloud, Palette, Star, TrendingUp, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: "Advanced", color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", level: "Advanced", color: "from-yellow-500 to-yellow-600" },
      { name: "SQL", level: "Advanced", color: "from-green-500 to-green-600" },
      { name: "Java", level: "Proficient", color: "from-red-500 to-red-600" },
      { name: "HTML/CSS", level: "Advanced", color: "from-orange-500 to-orange-600" }
    ],
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    accentColor: "from-blue-500 to-blue-600"
  },
  {
    category: "Frameworks & Libraries",
    icon: Brain,
    skills: [
      { name: "React", level: "Advanced", color: "from-cyan-500 to-cyan-600" },
      { name: "Node.js", level: "Proficient", color: "from-green-500 to-green-600" },
      { name: "Next.js", level: "Proficient", color: "from-gray-700 to-gray-800" },
      { name: "TypeScript", level: "Advanced", color: "from-blue-600 to-blue-700" },
      { name: "FastAPI", level: "Proficient", color: "from-emerald-500 to-emerald-600" }
    ],
    bgColor: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    accentColor: "from-purple-500 to-purple-600"
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "AWS", level: "Proficient", color: "from-orange-500 to-orange-600" },
      { name: "Docker", level: "Intermediate", color: "from-blue-600 to-blue-700" },
      { name: "Git", level: "Advanced", color: "from-red-500 to-red-600" },
      { name: "PostgreSQL", level: "Proficient", color: "from-blue-700 to-blue-800" },
      { name: "VS Code", level: "Advanced", color: "from-cyan-600 to-cyan-700" }
    ],
    bgColor: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    accentColor: "from-amber-500 to-amber-600"
>>>>>>> b866b84 (Update navigation, resume download, and UI improvements)
  }
];

const TechnicalSkills = () => {
  return (
<<<<<<< HEAD
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gray-50 hover:bg-amber-50 text-gray-800 hover:text-amber-800 px-4 py-3 rounded-lg text-center font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
=======
    <section id="skills" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-white via-slate-50/50 to-gray-100/30 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:48px_48px] opacity-30"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-100/20 to-purple-100/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-amber-100/20 to-orange-100/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
              Technical Expertise
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Skills & <span className="text-amber-600">Technologies</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise across modern technologies and development tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex} 
                className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm p-6 rounded-2xl border ${category.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 bg-gradient-to-r ${category.accentColor} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between p-3 bg-white/80 rounded-lg border border-gray-100 hover:bg-white transition-all duration-200">
                        <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                        <span className={`px-2 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-medium rounded-lg shadow-sm`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Compact Footer */}
        <div className="mt-10 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              Constantly learning and adapting to new technologies to deliver innovative solutions.
            </p>
          </div>
>>>>>>> b866b84 (Update navigation, resume download, and UI improvements)
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
