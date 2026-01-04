import { useState, useEffect } from "react";
import logo from "@/assets/epc-logo.png";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "results", label: "Results" },
];

const StickyNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((tab) => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="container">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-[190px]">
            <img
              src={logo}
              alt="EPC Logo"
              className="w-9 h-9 rounded-lg object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
            />
            <div>
              <strong className="text-sm tracking-wide">EPC Servant Marketing</strong>
              <span className="block text-xs text-muted-foreground/55">Serve First. Scale Fast.</span>
            </div>
          </div>

          <div className="flex gap-2.5 items-center overflow-auto pb-1.5 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`tab-pill ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
