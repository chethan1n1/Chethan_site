
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ventures = [
  {
    title: "TenantVerify",
    description: "Smart SaaS platform for owner-tenant rental agreements and tenant background checks.",
    status: "In Development",
    icon: "🏠"
  },
  {
    title: "MEdCheck",
    description: "Automated patient information and queue management system for clinics and hospitals.",
    status: "Prototype",
    icon: "🏥"
  },
  {
    title: "3D Virtual Clothing Try-On",
    description: "Mobile/web app for realistic 3D clothing try-ons using photogrammetry and AR.",
    status: "Upcoming",
    icon: "🧥"
  }
];

const BusinessVentures = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Business Ventures</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {venture.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {venture.title}
                </CardTitle>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                  venture.status === 'In Development' ? 'bg-violet-100 text-black-100':
                  venture.status === 'In progress' ? 'bg-green-100 text-black-800' :
                  venture.status === 'Upcoming' ? 'bg-blue-100 text-black-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {venture.status}
                </span>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center leading-relaxed">
                  {venture.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVentures;
