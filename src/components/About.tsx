import { Target, Sparkles, ArrowRight } from "lucide-react";

// Button handlers for CTA
const handleStartConversation = () => {
  window.location.href = '#contact';
};
const handleViewWork = () => {
  window.location.href = '#projects';
};

const About = () => {
  return (
    <section id="about" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-white via-gray-50/30 to-slate-100/20 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-100/20 to-orange-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-blue-100/20 to-purple-100/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">About Me</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Passionate About <span className="text-amber-600">Innovation</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A dedicated technologist creating solutions that make a real difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Compact Content Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction Text */}
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-base text-gray-700 leading-relaxed mb-4 group-hover:text-amber-700 transition-colors duration-300">
                I'm a <span className="font-semibold text-gray-900">Full-Stack Developer and Data Engineer</span> passionate about building innovative solutions 
                that bridge complex technology with human needs. My journey spans AI-powered healthcare platforms, 
                fintech applications, and scalable data systems.
              </p>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                I specialize in translating business requirements into elegant, scalable solutions through 
                clean code, thoughtful design, and user-centered development.
              </p>
            </div>
            
            {/* Compact Values */}
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-amber-600 transition-colors duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                Core Values
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 group hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl p-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">Purpose-Driven Development</span>
                    <p className="text-xs text-gray-600 mt-0.5">Creating genuine value and meaningful impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl p-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">Collaborative Excellence</span>
                    <p className="text-xs text-gray-600 mt-0.5">Building strong partnerships where ideas flourish</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl p-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">Continuous Learning</span>
                    <p className="text-xs text-gray-600 mt-0.5">Staying at the forefront with practical solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          {/* Compact Expertise Areas */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-3 w-3 text-white" />
                </div>
                Expertise
              </h3>
              <div className="space-y-3">
                <div className="group p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:border-blue-200 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">AI Development</h4>
                      <p className="text-xs text-gray-600">ML models & systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:border-green-200 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                      <span className="text-white text-sm">📊</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Data Engineering</h4>
                      <p className="text-xs text-gray-600">ETL & architecture</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-100 hover:border-purple-200 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Full-Stack</h4>
                      <p className="text-xs text-gray-600">End-to-end apps</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-100 hover:border-amber-200 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                      <span className="text-white text-sm">☁️</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Cloud Solutions</h4>
                      <p className="text-xs text-gray-600">Scalable deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
