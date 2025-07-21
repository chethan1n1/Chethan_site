
<<<<<<< HEAD
const activities = [
  {
    title: "Trading & Investments",
    description: "Options trading, long-term investing, cryptocurrency markets, and portfolio management",
    icon: "📈"
  },
  {
    title: "Tech Product Ideation",
    description: "Designing and conceptualizing SaaS and consumer tech products addressing real-world problems",
    icon: "💡"
  },
  {
    title: "Entrepreneurial Exploration",
    description: "Experimenting with business ideas in agri-tech, health-tech, and local commerce",
    icon: "🚀"
  }
];


const Activities = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Extra-Curricular Activities</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
=======
import { TrendingUp, Lightbulb, Rocket, Book, Music, Dumbbell, Globe, Camera } from "lucide-react";

const activities = [
  {
    title: "Trading & Investments",
    description: "Options trading and cryptocurrency markets analysis",
    icon: <TrendingUp className="h-6 w-6" />,
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Tech Product Ideation", 
    description: "Designing SaaS and consumer tech solutions",
    icon: <Lightbulb className="h-6 w-6" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Entrepreneurial Exploration",
    description: "Agri-tech, health-tech and sustainable business ideas",
    icon: <Rocket className="h-6 w-6" />,
    gradient: "from-blue-500 to-purple-500"
  }
];

const Activities = () => {
  return (
    <section className="py-12 px-6 lg:px-12 bg-gradient-to-br from-white via-gray-50/30 to-slate-100/20 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,19,0.04)_0%,transparent_70%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Beyond Work</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Other Interests
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Exploring diverse interests that fuel creativity and innovation
          </p>
        </div>
        
        {/* Compact Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {activities.map((activity, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${activity.gradient} rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  {activity.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Compact Footer */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Diverse experiences create richer perspectives, leading to more innovative solutions and personal growth.
            </p>
            <div className="flex justify-center items-center gap-2 text-xs text-gray-500 mt-3">
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <span>Continuous Exploration</span>
              <div className="w-6 h-0.5 bg-gray-300"></div>
            </div>
          </div>
        </div>
>>>>>>> b866b84 (Update navigation, resume download, and UI improvements)
      </div>
    </section>
  );
};

export default Activities;
