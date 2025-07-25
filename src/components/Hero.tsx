import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white via-slate-50/30 to-amber-50/20 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      {/* Enhanced Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-amber-400/40 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-purple-400/60 rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Mobile Layout */}
        <div className="block lg:hidden text-center space-y-8 sm:space-y-10">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src="/chethan-uploads/x.jpg"
                  alt="Chethan Yallampalli"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Enhanced Floating status indicator */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-green-500 to-green-600 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Enhanced Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-200/60 to-amber-300/60 rounded-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500 rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-200/60 to-blue-300/60 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute top-1/4 -right-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-200/50 to-purple-300/50 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 rotate-45"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                Chethan
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Yallampalli
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Bangalore, India</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Data Engineering Professional</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed px-2 sm:px-4 max-w-2xl mx-auto">
                Building scalable digital products that simplify lives through
                <span className="text-amber-600 font-medium"> AI-powered insights</span> and ethical technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
              <Button 
                onClick={handleConnectClick}
                className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl group"
                size="lg"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium group"
                size="lg"
              >
                <a href="/lovable-uploads/C__Copy_.pdf" download="Chethan_Yallampalli_Resume.pdf" type="application/pdf" className="flex items-center justify-center w-full h-full">
                  Download Resume
                  <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-16 xl:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-light text-gray-900 leading-tight tracking-tight">
                  Chethan
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                    Yallampalli
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg font-medium">Bangalore, India</span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 px-8 py-4 rounded-full font-medium border border-amber-200 shadow-sm">
                  <Sparkles className="h-5 w-5" />
                  <span>Data Engineering Professional</span>
                </div>
                <p className="text-xl xl:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed">
                  Building scalable digital products that simplify lives through
                  <span className="text-amber-600 font-medium"> AI-powered insights</span> and ethical technology.
                </p>

                <div className="flex gap-6 pt-4">
                  <Button 
                    onClick={handleConnectClick}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-10 py-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl group"
                    size="lg"
                  >
                    Let's Connect
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-10 py-4 rounded-xl transition-all duration-300 font-medium group"
                    size="lg"
                  >
                    <a href="/lovable-uploads/C__Copy_.pdf" download="Chethan_Yallampalli_Resume.pdf" type="application/pdf" className="flex items-center w-full h-full">
                      Download Resume
                      <Download className="ml-3 h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                  <img 
                    src="/chethan-uploads/x.jpg"
                    alt="Chethan Yallampalli"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating status indicator */}
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-amber-200/60 to-amber-300/60 rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 rotate-12"></div>
                <div className="absolute -bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-200/60 to-blue-300/60 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute top-1/4 -right-8 w-8 h-8 bg-gradient-to-br from-purple-200/50 to-purple-300/50 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
