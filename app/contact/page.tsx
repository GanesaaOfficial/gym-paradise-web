import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Gym Paradise 3.0 at Lot 1897B, Jalan KPB 9, Kawasan Perindustrian Balakong, Seri Kembangan. Open Mon–Sat 6AM–Midnight, Sun 9AM–Midnight. WhatsApp: +60 11-2689 8810.",
};

const info = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    label: "Address",
    primary: "Lot 1897B, Jalan KPB 9",
    secondary: "Kawasan Perindustrian Balakong, 43300 Seri Kembangan, Selangor",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: "Operating Hours",
    primary: "Mon–Sat: 6:00 AM – 12:00 AM",
    secondary: "Sun & Public Holidays: 9:00 AM – 12:00 AM",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
    label: "WhatsApp",
    primary: "+60 11-2689 8810",
    secondary: "Memberships · PT · General enquiries",
  },
];

const nearbyLandmarks = [
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
        highlight="Gym Paradise 3.0"
        subtitle="Lot 1897B, Jalan KPB 9, Kawasan Perindustrian Balakong — easy to reach, impossible to miss."
        bgImage="/Photos/unnamed-16.webp"
        bgAlt="Gym Paradise 3.0 building exterior with gold signage"
        crumb="Contact & Location"
      />

      {/* ── Main Content ── */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Info */}
            <div>
              <ScrollReveal>
                <div className="section-label">
                  <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Visit Us</span>
                </div>
                <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(42px,5vw,72px)] text-graphite mb-8">
                  We&rsquo;re Easy <span className="text-gold-gradient">To Find</span>
                </h2>
              </ScrollReveal>

              {/* Info cards */}
              <div className="space-y-3 mb-10">
                {info.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 80}>
                    <div className="card-light p-6 flex items-start gap-5">
                      <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-stone/60 mb-1">{item.label}</p>
                        <p className="text-graphite font-semibold text-base">{item.primary}</p>
                        <p className="text-stone text-sm font-light mt-0.5">{item.secondary}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Nearby landmarks */}
              <ScrollReveal delay={200}>
                <div className="card-light p-6 mb-10">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-stone/60 mb-5">Nearby Landmarks</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {nearbyLandmarks.map((lm) => (
                      <li key={lm} className="flex items-center gap-2.5 text-sm">
                        <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-stone">{lm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* CTA buttons */}
              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center gap-2.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                    Open in Google Maps
                  </a>
                  <a
                    href="https://wa.me/601126898810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark flex-1 justify-center gap-2.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Map + Building photo */}
            <div className="space-y-4">
              {/* Map placeholder */}
              <ScrollReveal direction="right">
                <div className="relative h-72 lg:h-80 bg-white overflow-hidden border border-black/[0.08]">
                  {/* Replace with <iframe src="...google maps embed..." /> */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    <div className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold mb-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
                      </svg>
                    </div>
                    <p className="font-display font-bold uppercase tracking-[0.1em] text-graphite text-base">Google Maps Embed</p>
                    <p className="text-stone/60 text-xs mt-2 leading-relaxed">
                      Replace this block with your Google Maps embed iframe.<br/>
                      Maps → Share → Embed a map → Copy HTML
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Building photo */}
              <ScrollReveal direction="right" delay={150}>
                <div className="card-image-hover relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src="/Photos/unnamed-32.webp"
                    alt="Gym Paradise 3.0 building exterior"
                    fill
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="card-img object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="font-display text-[10px] font-semibold text-gold bg-void/70 backdrop-blur-sm px-3 py-1.5 tracking-[0.25em] uppercase">
                      Our Building
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours card */}
              <ScrollReveal direction="right" delay={250}>
                <div className="card-light p-6">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-stone/60 mb-5">Operating Hours</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-stone text-sm font-light">Monday – Saturday</span>
                      <span className="text-gold font-display font-bold text-sm tracking-wide">6:00 AM – 12:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone text-sm font-light">Sunday & Public Holidays</span>
                      <span className="text-gold font-display font-bold text-sm tracking-wide">9:00 AM – 12:00 AM</span>
                    </div>
                    <div className="divider-gold mt-4 mb-4" />
                    <p className="text-stone/50 text-xs font-light">* Hours open until midnight every day of the year.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Membership CTA ── */}
      <section className="relative py-24 bg-ink border-t border-white/[0.04] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="section-label">
                <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Get Started</span>
              </div>
              <h3 className="font-display font-black uppercase leading-[0.9] text-[clamp(32px,4vw,56px)] text-cream">
                Ready to Join?
              </h3>
              <p className="text-ash mt-2 font-light">Walk in today with just a day pass — no membership required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/pricing" className="btn-primary">View All Plans</Link>
              <Link href="/facilities" className="btn-outline">Explore Facilities</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
