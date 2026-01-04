import logo from "@/assets/epc-logo.jpeg";

const HeroSection = () => {
  return (
    <header id="home" className="pt-7 pb-4">
      <div className="container">
        <div className="hero-card p-6 md:p-8 text-center">
          <div className="relative">
            <img
              src={logo}
              alt="EPC Servant Marketing"
              className="w-28 h-28 md:w-32 md:h-32 object-contain mx-auto mb-3 drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)]"
            />
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-0">
              EPC Servant Marketing
            </h1>
            <p className="text-3xl md:text-5xl font-extrabold mt-3 mb-2">
              Serve First. <span className="text-gold"> Grow Faster.</span>
            </p>
            <p className="text-muted-foreground text-base tracking-wide">
              Digital Ads • SEO • Website Design
            </p>
            <p className="text-muted-foreground/55 italic text-sm max-w-xl mx-auto mt-3">
              Leadership through service. Results through strategy.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
