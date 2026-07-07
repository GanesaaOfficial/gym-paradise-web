import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { IconMapPin, IconClock, IconChat, IconArrowRight } from "../components/icons";

export const metadata: Metadata = {
  title: "Contact & Location | Gym Paradise",
  description: "Gym Paradise 3.0 — Lot 1897B, Jalan KPB 9, Balakong. WhatsApp: +60 11-2689 8810.",
};

const info = [
  {
    Icon: IconMapPin,
    label: "Coordinates",
    primary: "Lot 1897B, Jalan KPB 9",
    secondary: "Kawasan Perindustrian Balakong, 43300 Seri Kembangan, Selangor",
    action: {
      label: "Navigate",
      href: "https://maps.google.com/?q=Lot+1897B,+Jalan+KPB+9,+Kawasan+Perindustrian+Balakong,+43300+Seri+Kembangan,+Selangor",
    },
  },
  {
    Icon: IconClock,
    label: "Operating Hours",
    primary: "6:00 AM – Midnight",
    secondary: "Monday to Saturday. (Sundays & Public Holidays open at 9:00 AM)",
    action: null,
  },
  {
    Icon: IconChat,
    label: "Direct Line",
    primary: "+60 11-2689 8810",
    secondary: "Memberships · Personal Training · General enquiries",
    action: {
      label: "Message on WhatsApp",
      href: "https://wa.me/601126898810",
    },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Find"
        highlight="The Gym"
        subtitle="Lot 1897B, Jalan KPB 9 — easy to reach, impossible to miss."
        bgImage="/Photos/unnamed-16.webp"
        bgAlt="Gym Paradise building exterior"
        crumb="Contact"
      />

      <section className="relative bg-void overflow-hidden">
        
        {/* Modern Split-Screen Directory */}
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          
          {/* Left Column: Clean, Professional Yellow Anchor */}
          <div className="w-full lg:w-[40%] relative lg:sticky lg:top-0 bg-gold flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-void/10 p-8 md:p-12 lg:p-24 overflow-hidden h-[50vh] lg:h-screen">
            
            {/* Clean, massive typography */}
            <ScrollReveal direction="up" className="w-full flex flex-col items-start mt-8 lg:mt-0">
              <p className="text-void/60 font-mono font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4">
                Directory
              </p>
              
              <h2 className="font-display font-black text-6xl md:text-7xl lg:text-[7.5rem] uppercase tracking-tighter leading-[0.85] text-void mb-8">
                Locate<br />Us
              </h2>
              
              <div className="w-16 h-1.5 bg-void rounded-full mb-8" />
              
              <p className="text-void/80 text-sm md:text-base max-w-xs leading-relaxed font-medium">
                Our flagship facility located in the heart of Cheras Selatan. Built for serious athletes.
              </p>
            </ScrollReveal>
            
          </div>

        {/* Right Column: Edge-to-Edge List & Map Card */}
        <div className="w-full lg:w-[60%] flex flex-col">
            {info.map((item, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100} 
                className="flex-1 border-b border-white/10 flex flex-col justify-center px-4 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 transition-colors duration-500 hover:bg-white/5 group"
              >
                <div className="flex items-center gap-3 lg:gap-6 mb-3 lg:mb-6">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 flex shrink-0 items-center justify-center border border-white/20 rounded-full group-hover:border-gold transition-colors">
                    <item.Icon className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                  </div>
                  <span className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-gold">
                    {item.label}
                  </span>
                </div>
                
                <h3 className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-cream uppercase tracking-tighter mb-4 leading-none">
                  {item.primary}
                </h3>
                
                <p className="text-mist text-sm md:text-lg mb-8 max-w-md">
                  {item.secondary}
                </p>
                
                {item.action && (
                  <a 
                    href={item.action.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-gold transition-colors w-fit"
                  >
                    {item.action.label}
                    <IconArrowRight className="w-4 h-4" />
                  </a>
                )}
              </ScrollReveal>
            ))}

          </div>
        </div>

      </section>
    </>
  );
}
