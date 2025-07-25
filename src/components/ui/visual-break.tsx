import torresDelPaine from "@/assets/torres-del-paine.jpg";
const VisualBreak = () => {
  return <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 parallax-bg" style={{
      backgroundImage: `url(${torresDelPaine})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-background/80" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Navigating Complex Markets
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">We help business owners and management teams on their most consequential decisions in the most challenging environments.</p>
        </div>
      </div>
    </section>;
};
export default VisualBreak;