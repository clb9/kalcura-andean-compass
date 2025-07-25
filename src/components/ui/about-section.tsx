import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced leadership behind Kalcura Management
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-elegant border-0 animate-fade-in">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Christian Breda
              </h3>
              <Badge className="bg-accent text-white px-4 py-2 text-lg">
                Founder and Managing Partner
              </Badge>
              <p className="text-muted-foreground mt-4 text-lg">
                Based in Boston
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-6">
                Christian has extensive experience in cross-border corporate finance in Latin America. 
                He has worked across banking, fintech, and other non-bank financial institutions, where 
                he has held progressively senior roles in business development, portfolio management, 
                corporate development, and capital raising.
              </p>
              
              <p className="mb-6">
                Christian has assisted a number of companies in various stages and financial situations, 
                including high growth, mature, and distressed companies. He speaks English and Spanish fluently.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <Badge variant="outline" className="px-4 py-2">Cross-Border Finance</Badge>
                <Badge variant="outline" className="px-4 py-2">Business Development</Badge>
                <Badge variant="outline" className="px-4 py-2">Portfolio Management</Badge>
                <Badge variant="outline" className="px-4 py-2">Capital Raising</Badge>
                <Badge variant="outline" className="px-4 py-2">Bilingual (EN/ES)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;