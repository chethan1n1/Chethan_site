
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
  }
];

const TechnicalSkills = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
