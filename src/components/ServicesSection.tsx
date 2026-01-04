import { Megaphone, Search, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Advertising Campaigns",
    description: "High-converting Meta campaigns designed to generate calls, leads, and sales.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "On-page SEO + local visibility so customers find you on Google.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, modern, mobile-first websites built to convert visitors into customers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & ROI Tracking",
    description: "Simple reporting that shows what's working and where your money goes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-20 py-5">
      <div className="container">
        <div className="section-card p-5 md:p-7">
          <h2 className="text-2xl md:text-3xl font-black tracking-wide mb-3">
            Services built for <span className="text-gold">real businesses.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Clean execution. Clear strategy. No fluff.
            These are the core services we use to drive visibility and leads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-4 min-h-[120px] md:min-h-[160px] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-box mb-3">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-semibold tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground/55 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
