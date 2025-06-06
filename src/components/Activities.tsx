
const activities = [
  {
    title: "Trading & Investments",
    description: "Options trading, long-term investing, and cryptocurrency markets",
    icon: "📈"
  },
  {
    title: "Volleyball",
    description: "Team sports and competitive play",
    icon: "🏐"
  },
  {
    title: "Badminton",
    description: "Individual sports and fitness",
    icon: "🏸"
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
      </div>
    </section>
  );
};

export default Activities;
