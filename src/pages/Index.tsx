import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import CompassSection from "@/components/ui/compass-section";
import MarketCoverage from "@/components/ui/market-coverage";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import VisualBreak from "@/components/ui/visual-break";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompassSection />
      <ServicesSection />
      <VisualBreak />
      <MarketCoverage />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
