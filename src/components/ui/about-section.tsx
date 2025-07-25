import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const AboutSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Us
          </h2>
          
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-elegant border-0 animate-fade-in">
          <CardContent className="p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32 md:w-40 md:h-40">
                  <AvatarImage 
                    src="/lovable-uploads/3811716f-4107-48f4-832a-e67ecfda995d.png" 
                    alt="Christian Breda" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl">CB</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="text-center md:text-left">
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
    </section>;
};
export default AboutSection;