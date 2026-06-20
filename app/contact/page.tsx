import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Gym Paradise 3.0 — Lot 1897B, Jalan KPB 9, Balakong. Open Mon–Sat 6AM–Midnight. WhatsApp: +60 11-2689 8810.",
};

const info = [
  {
    label: "Address",
    primary: "Lot 1897B, Jalan KPB 9",
    secondary: "Kawasan Perindustrian Balakong, 43300 Seri Kembangan, Selangor",
  },
  {
    label: "Operating Hours",
    primary: "Mon–Sat: 6:00 AM – 12:00 AM",
    secondary: "Sun & Public Holidays: 9:00 AM – 12:00 AM",
  },
  {
    label: "WhatsApp",
    primary: "+60 11-2689 8810",
    secondary: "Memberships · PT · General enquiries",
  },
];

const landmarks = [
  "Kawasan Perindustrian Balakong",
  "Accessible from Cheras & Balakong",
  "Industrial Area Free Parking",
  "Near Seri Kembangan",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Find"
        highlight="The Gym"
        subtitle="Lot 1897B, Jalan KPB 9 — easy to reach, impossible to miss."
        bgImage="/Photos/unnamed-16.webp"
        bgAlt="Gym Paradise building"
        crumb="Contact"
      />

      <section className="py-20 lg:py-28 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ScrollReveal className="mb-10">
                <SectionHeading label="Visit Us" title="We're Easy" highlight="To Find" />
              </ScrollReveal>

              <div className="space-y-4 mb-10">
                {info.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 60}>
                    <div className="training-card p-6 border-l-4 border-l-gold">
                      <p className="font-display text-[10px] font-bold tracking-widest uppercase text-gold mb-2">{item.label}</p>
                      <p className="text-cream font-semibold">{item.primary}</p>
                      <p className="text-ash text-sm font-light mt-1">{item.secondary}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={200}>
                <div className="training-card p-6 mb-8">
                  <p className="font-display text-[10px] font-bold tracking-widest uppercase text-gold mb-4">Nearby Landmarks</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {landmarks.map((lm) => (
                      <li key={lm} className="flex items-center gap-2 text-sm text-mist">
                        <span className="w-1.5 h-1.5 bg-gold" />
                        {lm}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://maps.google.com/?q=Lot+1897B,+Jalan+KPB+9,+Kawasan+Perindustrian+Balakong,+43300+Seri+Kembangan,+Selangor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    Open in Google Maps
                  </a>
                  <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center">
                    WhatsApp Us
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-4">
              <ScrollReveal direction="right">
                <div className="relative h-64 lg:h-72 overflow-hidden training-card">
                  <iframe
                    title="Gym Paradise location map"
                    src="https://maps.google.com/maps?q=Lot+1897B,+Jalan+KPB+9,+Kawasan+Perindustrian+Balakong,+43300+Seri+Kembangan,+Selangor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 opacity-90"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <div className="relative h-56 lg:h-64 training-card overflow-hidden">
                  <Image src="/Photos/unnamed-32.webp" alt="Gym Paradise building" fill quality={80} sizes="50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-[10px] font-bold tracking-widest uppercase text-gold bg-void/70 px-3 py-1 border border-gold/30">
                    Our Building
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="training-card p-6">
                  <p className="font-display text-[10px] font-bold tracking-widest uppercase text-gold mb-4">Hours Open Until Midnight</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/[0.06] pb-3">
                      <span className="text-mist text-sm">Mon – Sat</span>
                      <span className="font-display font-bold text-gold text-sm">6AM – 12AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mist text-sm">Sun & PH</span>
                      <span className="font-display font-bold text-gold text-sm">9AM – 12AM</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready To Join?"
        subtitle="Walk in today with just a day pass — no membership required."
        primaryLabel="View All Plans"
        secondaryLabel="Explore Facilities"
        secondaryHref="/facilities"
        secondaryExternal={false}
      />
    </>
  );
}
