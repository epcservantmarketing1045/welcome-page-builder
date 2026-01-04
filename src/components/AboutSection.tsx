import { Check } from "lucide-react";

const checkItems = [
  { title: "Paid Advertising (Meta, Facebook, Instagram)" },
  { title: "SEO & Google Rankings" },
  { title: "Website Creation & Optimization" },
  { title: "Brand & Social Media Setup" },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 py-5">
      <div className="container">
        <div className="section-card p-5 md:p-7">
          <h2 className="text-2xl md:text-3xl font-black tracking-wide mb-3">
            Real growth starts with <span className="text-gold">service.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At EPC Servant Marketing, we believe true impact starts with service.
            Built on Biblical servant-leadership, we listen first, serve with excellence,
            and deliver more than expected — so your business can grow with clarity and confidence.
          </p>

          <ul className="mt-5 space-y-3">
            {checkItems.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="check-icon mt-0.5">
                  <Check className="w-3 h-3 text-gold" />
                </span>
                <span className="text-foreground">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="divider" />

          <p className="text-muted-foreground/55 text-sm">
            If you want authentic, sustainable growth — we're here to serve your vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
