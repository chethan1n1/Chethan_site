
const experiences = [
  {
    title: "Data Engineering Intern",
    company: "Tietoevry",
    period: "2025",
    description: "Worked on data analytics and machine learning projects, contributing to enterprise-level data solutions."
  },
  {
    title: "Data Engineering & BI Intern",
    company: "Six Phrase | Veranda",
    period: "2025",
    description: "Developed innovative solutions and gained experience in modern web technologies and data processing."
  },
  {
    title: "Data Analytics Trainee",
    company: "Futurense Technologies",
    period: "2024",
    description: "Built scalable applications and worked with cutting-edge technologies in the fintech domain."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Experience Timeline</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-amber-600">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-amber-600 mb-3">{exp.company}</h4>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-400 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
