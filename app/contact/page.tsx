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
        
        {/* Brutalist Split-Screen Directory */}
        <div className="flex flex-row w-full min-h-screen">
          
          {/* Left Column: Massive Anchor */}
          <div className="w-[40%] relative bg-gold border-r border-void/10">
            {/* Dark abstract overlay to make it look gritty/technical */}
            <div className="absolute inset-0 bg-void/10 mix-blend-overlay pointer-events-none" />
            
            <div className="sticky top-[70px] lg:top-0 p-4 md:p-12 lg:p-24 flex flex-col justify-start h-[calc(100vh-70px)] lg:h-screen overflow-hidden">
            
            <ScrollReveal direction="left">
              <span className="text-void font-display font-black text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] mb-6 md:mb-8 block">
                Directory
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[5rem] lg:text-[7rem] uppercase tracking-tighter leading-[0.85] text-void mix-blend-color-burn break-keep mt-2 md:mt-4">
                Locate
              </h2>
            </ScrollReveal>
            
            <div className="mt-8 lg:mt-16">
              <ScrollReveal delay={100} direction="left">
                <p className="text-void/80 font-display font-bold uppercase tracking-widest text-[9px] md:text-sm mb-2 md:mb-4">
                  Signage Visible from Road
                </p>
                <div className="w-full h-px bg-void/20 mb-2 md:mb-4" />
                <p className="text-void/80 font-display font-bold uppercase tracking-widest text-[9px] md:text-sm mb-2 md:mb-4">
                  Free Outdoor Parking
                </p>
                <div className="w-full h-px bg-void/20 mb-2 md:mb-4" />
                <p className="text-void/80 font-display font-bold uppercase tracking-widest text-[9px] md:text-sm mb-2 md:mb-4">
                  Close to KPB Highway
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Right Column: Edge-to-Edge List & Map Card */}
        <div className="w-[60%] flex flex-col">
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
