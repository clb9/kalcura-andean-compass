import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const services = [{
  title: "Business Review",
  items: ["Strategic planning", "Advisory boards", "Value Sharing & Compensation Plans", "FP&A", "Budgeting", "Performance Measuring & Reporting", "Data Analysis"]
}, {
  title: "Business Valuation",
  items: ["Valuation Analysis", "Marketability Analysis", "Transaction Preparedness"]
}, {
  title: "Corporate Governance",
  items: ["Governance frameworks", "Board effectiveness", "Risk management"]
}, {
  title: "Succession Planning",
  items: ["Leadership transition", "Family business succession", "Exit strategies"]
}, {
  title: "M&A Opportunities",
  items: ["Due Diligence", "Opportunity Analysis"]
}, {
  title: "Capital Structure",
  items: ["Capital Raising", "Optimize your balance sheet according to your business' needs"]
}];
const ServicesSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Advising Latin American small to medium sized corporates on the following:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-float glass-effect bg-gradient-card border-0 animate-fade-in backdrop-blur-sm" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:glow-effect transition-all duration-300">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:bg-primary transition-colors duration-300"></div>
                      <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default ServicesSection;