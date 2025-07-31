import torresDelPaine from "@/assets/torres-del-paine.jpg";
const VisualBreak = () => {
  return <section className="relative h-64 md:h-96 lg:h-[32rem] overflow-hidden">
      <div className="absolute inset-0">
        <img src={torresDelPaine} alt="Torres del Paine Mountains" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-background/80" />
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-fade-in">Navigate Complex Markets</h3>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in leading-relaxed">
            We help business owners and management teams on their most consequential decisions in the most challenging environments.
          </p>
        </div>
      </div>
    </section>;
};
export default VisualBreak;