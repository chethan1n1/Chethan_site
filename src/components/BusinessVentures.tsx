
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, DollarSign, Users, Building, Lightbulb, Home, Heart, Shirt } from "lucide-react";

const topVentures = [
  {
    title: "TenantVerify",
    description: "Smart SaaS platform for owner-tenant rental agreements and tenant background checks.",
    status: "In Development",
    icon: <Home className="h-6 w-6" />,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-indigo-50",
    highlights: [
      "AI-powered tenant screening",
      "Automated agreement generation",
      "Real-time verification system"
    ]
  },
  {
    title: "MEdCheck",
    description: "Automated patient information and queue management system for clinics and hospitals.",
    status: "Prototype",
    icon: <Heart className="h-6 w-6" />,
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-emerald-50",
    highlights: [
      "Queue management automation",
      "Patient data streamlining",
      "Healthcare workflow optimization"
    ]
  },
  {
    title: "3D Virtual Clothing Try-On",
    description: "Mobile/web app for realistic 3D clothing try-ons using photogrammetry and AR.",
    status: "Upcoming",
    icon: <Shirt className="h-6 w-6" />,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-violet-50",
    highlights: [
      "AR/VR integration",
      "3D photogrammetry technology"
    ]
  }
];

const BusinessVentures = () => {
  return (
    <section className="py-12 px-6 lg:px-12 bg-gradient-to-br from-white via-gray-50/30 to-slate-100/20 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)]"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-purple-300/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Entrepreneurship</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Key Ventures
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming innovative ideas into impactful technology solutions
          </p>
        </div>
        {/* Compact Ventures Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topVentures.map((venture, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/90 backdrop-blur-sm">
              {/* Minimal Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${venture.bgGradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${venture.gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {venture.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {venture.title}
                    </CardTitle>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      venture.status === 'In Development' ? 'bg-violet-100 text-violet-700' :
                      venture.status === 'Prototype' ? 'bg-green-100 text-green-700' :
                      venture.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {venture.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <p className="text-gray-700 text-sm mb-3">{venture.description}</p>
                <ul className="list-disc pl-5 text-xs text-gray-500 space-y-1">
                  {venture.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Compact Footer */}
        <div className="text-center mt-8">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Exploring entrepreneurial opportunities at the intersection of technology and real-world solutions.
            </p>
            <div className="flex justify-center items-center gap-2 text-xs text-gray-500 mt-3">
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <span>Innovation in Progress</span>
              <div className="w-6 h-0.5 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessVentures;
