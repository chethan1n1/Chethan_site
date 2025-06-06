import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Mobile Layout */}
        <div className="block lg:hidden text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                src="/lovable-uploads/0b29fe31-3455-4f86-a339-17102fedd27f.png"
                alt="Chethan Yallampalli"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
            Chethan
            <br />
            Yallampalli
          </h1>
          <p className="text-amber-600 font-medium text-base sm:text-lg tracking-wide uppercase">
            Data Engineering Professional
          </p>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed px-4">
            Building scalable digital products that simplify lives through AI-powered insights and ethical technology.
          </p>
          <Button 
            onClick={handleConnectClick}
            variant="outline" 
            className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-none transition-all duration-300 font-medium"
            size="lg"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center gap-16 lg:gap-24 mb-16">
            <div className="text-left">
              <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Chethan
                <br />
                Yallampalli
              </h1>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src="/lovable-uploads/0b29fe31-3455-4f86-a339-17102fedd27f.png"
                  alt="Chethan Yallampalli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center space-y-8">
            <p className="text-amber-600 font-medium text-lg tracking-wide uppercase">
              Data Engineering Professional
            </p>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Building scalable digital products that simplify lives through AI-powered insights and ethical technology.
            </p>
            <Button 
              onClick={handleConnectClick}
              variant="outline" 
              className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-none transition-all duration-300 font-medium"
              size="lg"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
