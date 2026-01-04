import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
