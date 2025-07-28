import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "Argentina", flag: "🇦🇷" }, 
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Peru", flag: "🇵🇪" }
];

const MarketCoverage = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Market Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving businesses across key markets in Latin America and the United States
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-elegant border-0">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge 
                    variant="outline"
                    className="px-4 py-3 text-sm font-medium border-accent/20 hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 cursor-default w-full flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{country.flag}</span>
                    {country.name}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarketCoverage;