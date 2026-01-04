import { Phone, Mail, Instagram } from "lucide-react";

const CTASection = () => {
  return (
    <section id="results" className="scroll-mt-20 py-5">
      <div className="container">
        <div className="section-card p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-wide mb-2">
            Ready to <span className="text-gold">grow?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Let's build real results together — with purpose, clarity, and strategy that lasts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="tel:+17602827559"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-primary-foreground font-bold text-lg tracking-wide transition-all hover:scale-105 hover:shadow-[0_10px_30px_hsl(42_52%_54%_/_0.35)]"
            >
              <Phone className="w-5 h-5" />
              (760) 282-7559
            </a>
            
            <a
              href="mailto:epcservantmarketing1045@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gold/50 text-gold font-bold text-lg tracking-wide transition-all hover:scale-105 hover:bg-gold/10 hover:border-gold"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            
            <a
              href="https://www.instagram.com/epcservantmarkting/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gold/50 text-gold font-bold text-lg tracking-wide transition-all hover:scale-105 hover:bg-gold/10 hover:border-gold"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
          
          <div className="divider" />
          
          <p className="text-muted-foreground/55 text-sm">
            If you serve your community — we serve you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
