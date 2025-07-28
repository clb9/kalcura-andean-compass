import { Card, CardContent } from "@/components/ui/card";
const values = [{
  title: "Your Corporate Compass",
  description: "We leverage our global network and applied experiences to help you navigate the most demanding business environments",
  icon: "🧭"
}, {
  title: "Objective Advice",
  description: "Unbiased, bespoke advice with the utmost integrity",
  icon: "⚖️"
}, {
  title: "Long-Term Focus",
  description: "Our number one priority is to build a lasting relationship marked by continued business success",
  icon: "📈"
}];
const CompassSection = () => {
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
            Why Choose Kalcura
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {value.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default CompassSection;