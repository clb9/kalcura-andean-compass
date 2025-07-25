import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fitz-roy-hero.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Fitz Roy at El Chalten" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">Kalcura Management</h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up max-w-4xl mx-auto leading-relaxed font-light">
          Providing small and middle market corporates in Latin America with{" "}
          <span className="text-accent font-medium">unbiased, high-quality strategic advice.</span>
        </p>
        <p className="text-lg md:text-xl mb-12 animate-slide-up max-w-3xl mx-auto text-gray-200">Creative and objective solutions rooted in local knowledge and applied experience.</p>
        <div className="animate-slide-up">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg shadow-glow hover:shadow-glow transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;