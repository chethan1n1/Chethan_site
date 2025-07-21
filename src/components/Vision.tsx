
// ...existing code...
import { Lightbulb, Target, Sparkles, Zap, Rocket, ArrowRight, Eye } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-gray-100/50 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.06)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.04)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-amber-200/15 to-orange-300/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/15 to-purple-300/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
              Future Vision
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Vision & <span className="text-amber-600">Mission</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Driving innovation through technology that makes a meaningful impact
          </p>
        </div>
        
        {/* Compact Vision & Mission Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {/* Minimal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-blue-50 to-green-100 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative z-10 text-center">
              {/* Compact Icon Section */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 group-hover:-rotate-6 transition-transform duration-300">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Compact Vision Statement */}
              <blockquote className="text-lg md:text-xl font-light text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                "To build <span className="text-amber-600 font-semibold">intuitive digital products</span> and data platforms that simplify lives for businesses 
                and individuals — driven by <span className="text-blue-600 font-semibold">scalable architecture</span>, AI-powered insights, and <span className="text-green-600 font-semibold">ethical technology</span> 
                that shapes the future of human-technology interaction."
              </blockquote>
              
              {/* Compact Guiding Principles */}
              <div className="space-y-6 mb-8">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Guiding Principles</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/30 group hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-amber-100 hover:to-white transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">Innovation First</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">Pushing boundaries with creative solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/30 group hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-100 hover:to-white transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Eye className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">User-Centric Design</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">Creating solutions that serve human needs</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/30 group hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-green-100 hover:to-white transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">Ethical Technology</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">Building responsible AI and secure systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Compact Signature */}
              <div className="flex items-center justify-center gap-3 text-gray-500">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
                <span className="font-medium text-gray-700 text-sm">
                  Chethan Yallampalli
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;


