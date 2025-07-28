import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Email info@kalcura.com to schedule a review of your business and learn how we can help your business achieve its goals.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Mail className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-slate-50">Contact Us</h3>
                <a href="mailto:info@kalcuramanagement.com" className="text-accent text-xl hover:text-white transition-colors duration-300 font-medium">info@kalcura.com</a>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span>Boston, United States</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span>Santiago, Chile</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span>Medellín, Colombia</span>
                </div>
              </div>
              
              
              
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;