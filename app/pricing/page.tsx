import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { IconCheck, IconArrowRight, IconShield, IconHeart, IconDoor, IconStar, IconDumbbell } from "../components/icons";

export const metadata: Metadata = {
  title: "Pricing & Memberships | Gym Paradise",
  description: "Transparent pricing at Gym Paradise. Walk-ins RM25–35. Memberships from RM120/month.",
};

const perks = [
  { Icon: IconShield, title: "No Contracts", desc: "Cancel or change anytime — zero lock-in, zero stress." },
  { Icon: IconHeart, title: "No Hidden Fees", desc: "The price you see is exactly what you pay. Always." },
  { Icon: IconDoor, title: "Walk-Ins Welcome", desc: "Day pass access — no membership ever required." },
  { Icon: IconStar, title: "Full Access", desc: "Every zone. All 200+ machines. Included in every plan." },
  { Icon: IconDumbbell, title: "No Booking Needed", desc: "Show up when you want, train how you want." },
  { Icon: IconCheck, title: "Fast Support", desc: "Questions? WhatsApp us — we reply in minutes." },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Membership"
        highlight="& Pricing"
        subtitle="Zero hidden fees. Zero lock-in contracts. Just pure performance and transparency."
        bgImage="/Photos/unnamed-17.webp"
        bgAlt="Gym Paradise Facility"
        crumb="Pricing"
      />

      <section className="section-layer relative py-20 lg:py-32 bg-void overflow-hidden">
        
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16 lg:mb-24">
              <span className="text-gold font-display tracking-[0.4em] text-xs lg:text-sm uppercase font-black">
                SYS.ACCESS_TIERS
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </ScrollReveal>

          {/* EDITORIAL BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* WALK-IN TIER - COL SPAN 12 (Full Width Top) */}
            <ScrollReveal className="lg:col-span-12 h-full">
              <div className="group relative flex flex-col lg:flex-row items-center justify-between gap-12 p-10 lg:p-16 border border-white/10 bg-[#070707] hover:border-gold/40 transition-colors duration-500">
                {/* HUD Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

                <div className="flex-1 w-full text-center lg:text-left">
                  <span className="inline-block px-4 py-1 border border-gold text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    No Membership Required
                  </span>
                  <h3 className="font-display font-black text-5xl lg:text-7xl text-cream uppercase tracking-tighter mb-4 leading-none">
                    Walk-In Pass
                  </h3>
                  <p className="text-mist text-lg lg:text-xl max-w-lg mx-auto lg:mx-0">
                    Our famous pay-as-you-go policy. Show up, train, and leave. No strings attached.
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-end w-full lg:w-auto shrink-0">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display font-black text-gold text-7xl lg:text-[8rem] leading-[0.8] tracking-tighter">RM25</span>
                    <span className="text-mist font-display text-sm tracking-widest uppercase">to 35 / Day</span>
                  </div>
                  
                  <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex items-center justify-center gap-3 bg-gold text-void font-display font-bold text-[13px] uppercase tracking-[0.1em] px-10 py-5 w-full lg:w-auto overflow-hidden">
                    <span className="relative z-10">Walk In Today</span>
                    <IconArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* 1 MONTH - COL SPAN 5 */}
            <ScrollReveal delay={100} className="lg:col-span-5 h-full">
              <div className="relative flex flex-col h-full p-10 lg:p-14 border border-white/10 bg-[#070707] hover:bg-[#0a0a0a] hover:border-white/30 transition-colors duration-500">
                <span className="text-mist text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Short Term</span>
                <h3 className="font-display font-black text-4xl lg:text-5xl text-cream uppercase tracking-tighter mb-8 leading-none">
                  1 Month
                </h3>
                
                <div className="mb-12">
                  <span className="font-display font-black text-cream text-6xl lg:text-7xl leading-none tracking-tighter block mb-2">RM178</span>
                  <span className="text-gold font-display text-sm tracking-widest uppercase">Total Price</span>
                </div>

                <ul className="space-y-4 flex-1 mb-10">
                  <li className="flex items-start gap-3 text-sm text-mist"><IconCheck className="w-4 h-4 mt-0.5 text-gold/50" /> Access all zones</li>
                  <li className="flex items-start gap-3 text-sm text-mist"><IconCheck className="w-4 h-4 mt-0.5 text-gold/50" /> Cancel anytime</li>
                  <li className="flex items-start gap-3 text-sm text-mist"><IconCheck className="w-4 h-4 mt-0.5 text-gold/50" /> RM54 Reg Fee Applies</li>
                </ul>

                <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="text-cream text-xs uppercase font-bold tracking-[0.15em] border border-white/20 hover:border-gold hover:text-gold transition-colors py-4 px-6 text-center w-full">
                  Select Plan
                </a>
              </div>
            </ScrollReveal>

            {/* 1 YEAR (FEATURED) - COL SPAN 7 */}
            <ScrollReveal delay={200} className="lg:col-span-7 h-full">
              <div className="relative flex flex-col h-full p-10 lg:p-14 border border-gold bg-[#0a0a0a] shadow-[0_0_50px_rgba(201,168,76,0.1)]">
                {/* Featured Badge */}
                <div className="absolute top-0 right-0 bg-gold text-void text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2">
                  Best Value
                </div>
                
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Annual Savings</span>
                <h3 className="font-display font-black text-4xl lg:text-6xl text-cream uppercase tracking-tighter mb-8 leading-none">
                  1 Year
                </h3>
                
                <div className="flex flex-col sm:flex-row items-baseline gap-6 mb-12">
                  <div>
                    <span className="font-display font-black text-gold text-6xl lg:text-[7rem] leading-[0.8] tracking-tighter block mb-2">RM132</span>
                    <span className="text-mist font-display text-sm tracking-widest uppercase">Per Month (Avg)</span>
                  </div>
                  <div className="text-mist text-xs tracking-widest uppercase">/ RM1588 Total</div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 mb-10">
                  <li className="flex items-start gap-3 text-sm text-mist"><IconCheck className="w-4 h-4 mt-0.5 text-gold" /> Access all zones</li>
                  <li className="flex items-start gap-3 text-sm text-mist"><IconCheck className="w-4 h-4 mt-0.5 text-gold" /> Cancel anytime</li>
                  <li className="flex items-start gap-3 text-sm text-gold font-bold"><IconCheck className="w-4 h-4 mt-0.5 text-gold" /> Reg Fee WAIVED</li>
                  <li className="flex items-start gap-3 text-sm text-mist"><IconCheck className="w-4 h-4 mt-0.5 text-gold" /> Freeze up to 2 months</li>
                </ul>

                <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="bg-gold text-void text-xs uppercase font-bold tracking-[0.15em] hover:bg-white transition-colors py-4 px-6 text-center w-full sm:w-auto self-start">
                  Commit & Save
                </a>
              </div>
            </ScrollReveal>

            {/* Other Plans Row */}
            <ScrollReveal delay={300} className="lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                <div className="p-8 border border-white/10 bg-[#070707] hover:border-white/30 transition-colors">
                  <span className="text-mist text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">3 Months</span>
                  <div className="font-display font-black text-4xl text-cream tracking-tighter mb-1">RM498</div>
                  <div className="text-gold text-[10px] uppercase tracking-widest mb-6">RM166 / Month</div>
                  <a href="https://wa.me/601126898810" target="_blank" className="text-mist text-[10px] uppercase font-bold tracking-[0.1em] hover:text-gold flex items-center gap-2">Select <IconArrowRight className="w-3 h-3" /></a>
                </div>

                <div className="p-8 border border-white/10 bg-[#070707] hover:border-white/30 transition-colors">
                  <span className="text-mist text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">6 Months</span>
                  <div className="font-display font-black text-4xl text-cream tracking-tighter mb-1">RM888</div>
                  <div className="text-gold text-[10px] uppercase tracking-widest mb-6">RM148 / Month</div>
                  <a href="https://wa.me/601126898810" target="_blank" className="text-mist text-[10px] uppercase font-bold tracking-[0.1em] hover:text-gold flex items-center gap-2">Select <IconArrowRight className="w-3 h-3" /></a>
                </div>

                <div className="p-8 border border-white/10 bg-[#070707] hover:border-white/30 transition-colors">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">2 Years (Max Savings)</span>
                  <div className="font-display font-black text-4xl text-cream tracking-tighter mb-1">RM2,888</div>
                  <div className="text-gold text-[10px] uppercase tracking-widest mb-6">RM120 / Month (Reg Fee Waived)</div>
                  <a href="https://wa.me/601126898810" target="_blank" className="text-mist text-[10px] uppercase font-bold tracking-[0.1em] hover:text-gold flex items-center gap-2">Select <IconArrowRight className="w-3 h-3" /></a>
                </div>

              </div>
            </ScrollReveal>

          </div>

          <p className="text-center text-ash/40 text-[10px] uppercase tracking-widest mt-12 max-w-2xl mx-auto">
            * Registration fee RM54 applies to 1, 3, and 6-month plans. Completely waived on 1-year and 2-year plans.
          </p>

          {/* Perks Grid - Edge to Edge */}
          <div className="mt-32 pt-20 border-t border-white/10">
            <ScrollReveal>
               <h3 className="font-display font-black text-4xl text-cream uppercase tracking-tighter mb-12 text-center">
                 The Gym Paradise Guarantee
               </h3>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {perks.map(({ Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 50}>
                  <div className="flex flex-col gap-4">
                    <Icon className="w-6 h-6 text-gold" />
                    <div>
                      <h4 className="font-display font-bold uppercase tracking-widest text-sm text-cream mb-2">{title}</h4>
                      <p className="text-mist text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
