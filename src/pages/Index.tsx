import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import CompassSection from "@/components/ui/compass-section";
import MarketCoverage from "@/components/ui/market-coverage";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompassSection />
      <ServicesSection />
      <MarketCoverage />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
