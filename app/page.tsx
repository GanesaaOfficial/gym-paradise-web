import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";

/* ── Marquee items ── */
const tickers = [
  "Walk-In Day Pass", "HYROX Training Club",
  "Open 6AM – Midnight", "Grip Galaxy",
  "Squat Racks & Platforms", "Malaysia's 1st World-Class Mega Gym",
  "200+ Premium Equipment", "38,000 Sq Ft · Balakong",
];
const tickerRow = [...tickers, ...tickers];

/* ── Stats ── */
const stats = [
  { end: 38000, suffix: "",   unit: "Sq Ft",       desc: "One of Malaysia's largest gyms" },
  { end: 200,   suffix: "+",  unit: "Machines",    desc: "Premium USA, UK & international equipment" },
  { end: 18,    suffix: "",   unit: "Hours",       desc: "6AM–Midnight Mon–Sat, 9AM–Midnight Sun" },
  { end: 1,     suffix: "st", unit: "in Malaysia", desc: "World-class mega gym · Opened Jan 2026" },
];

/* ── Highlights ── */
const highlights = [
  {
    img: "/Photos/unnamed-19.webp",
    alt: "Main training floor with neon GYM PARADISE sign",
    num: "01",
    label: "Main Floor",
    title: "Epic Training\nFloor",
    desc: "Warehouse-scale, illuminated by dramatic geometric LED grids. Every session feels cinematic.",
    href: "/facilities",
  },
  {
    img: "/Photos/unnamed-21.webp",
    alt: "HYROX Training Club running track and rowers",
    num: "02",
    label: "Signature Zone",
    title: "HYROX\nTraining Club",
    desc: "Official affiliate. Indoor track + full rower setup. Rarest feature in Malaysian gyms.",
    href: "/facilities",
  },
  {
    img: "/Photos/unnamed-22.webp",
    alt: "Grip Galaxy cable attachment wall",
    num: "03",
    label: "Unique Feature",
    title: "Grip\nGalaxy",
    desc: "50+ cable attachments on a dedicated wall. Every angle. Every contraction. Covered.",
    href: "/facilities",
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    initials: "AR",
    name: "Ahmad R.",
    role: "Powerlifter",
    quote: "The free weight zone is unmatched in Cheras Selatan. Multiple squat racks, full dumbbell range, proper deadlift platforms. I've paid double at gyms with half the equipment.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "Regular Walk-In",
    quote: "I love just showing up when I want. The day pass is genuinely worth it every single time — clean, cold AC, always has everything I need.",
  },
  {
    initials: "ML",
    name: "Marcus L.",
    role: "Bodybuilder",
    quote: "The machine selection is competition prep level. I placed in my first physique show training here. Best investment I've made in my fitness journey.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSlideshow />

      {/* ─── MARQUEE ─── */}
      <div className="bg-gold overflow-hidden py-3.5 select-none">
        <div className="flex marquee-track whitespace-nowrap">
          {tickerRow.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-display font-bold text-void text-[12px] tracking-[0.22em] uppercase px-8">
                {item}
              </span>
              <span className="text-void/30 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section className="bg-ink border-b border-white/[0.04] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/[0.05] lg:gap-0">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80} className="flex flex-col items-center lg:items-start lg:px-12 text-center lg:text-left">
                <div className="font-display font-black text-[clamp(40px,5vw,64px)] leading-none text-cream mb-1">
                  <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                </div>
                <div className="font-display font-bold text-gold text-[14px] tracking-[0.15em] uppercase mb-1">
                  {s.unit}
                </div>
                <div className="text-ash text-xs font-light">{s.desc}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEGA GYM BAND ─── */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Photos/unnamed-27.webp" alt="GYM PARADISE 3.0 — First World-Class Mega Gym sign" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-void/75" />
          <div className="absolute inset-0 overlay-dark" />
        </div>
        {/* Giant faded number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[280px] leading-none text-white/[0.02] select-none pointer-events-none">
          3.0
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <ScrollReveal direction="left" className="max-w-3xl">
            <div className="section-label">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Our Promise</span>
            </div>
            <h2 className="font-display font-black uppercase leading-[0.88] tracking-tight mb-8">
              <span className="block text-[clamp(42px,6vw,80px)] text-cream">The First</span>
              <span className="block text-[clamp(48px,7vw,92px)] text-gold-gradient">World-Class</span>
              <span className="block text-[clamp(38px,5.5vw,72px)] text-cream">Mega Gym of Malaysia</span>
            </h2>
            <p className="text-ash text-base lg:text-lg font-light leading-relaxed max-w-xl">
              Built for every type of athlete — from your first session to elite competition prep. Premium equipment, a neon-lit industrial atmosphere, and a community that drives you to be better, bolder, stronger, unstoppable.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200} className="shrink-0">
            <Link href="/facilities" className="btn-primary gap-3">
              Explore Facilities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section className="py-28 lg:py-36 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16 lg:mb-20">
            <ScrollReveal>
              <div className="section-label">
                <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">What Sets Us Apart</span>
              </div>
              <h2 className="font-display font-black uppercase leading-[0.88] tracking-tight text-[clamp(42px,6vw,80px)] text-cream">
                Zones Built For<br /><span className="text-gold-gradient">Champions</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Link href="/facilities" className="btn-ghost">
                All Facilities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.num} delay={i * 100}>
                <Link href={h.href} className="card-premium card-img-zoom block rounded-none group h-full">
                  <div className="relative h-64 lg:h-[300px] overflow-hidden">
                    <Image src={h.img} alt={h.alt} fill quality={80} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    <div className="absolute inset-0 overlay-cinematic" />
                    {/* Number */}
                    <div className="absolute top-5 right-5 font-display font-black text-[44px] leading-none text-white/10">
                      {h.num}
                    </div>
                    {/* Label */}
                    <div className="absolute top-5 left-5">
                      <span className="font-display text-[10px] font-semibold tracking-[0.3em] uppercase text-gold bg-void/60 backdrop-blur-sm px-3 py-1.5">
                        {h.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display font-black uppercase text-[26px] leading-[0.95] tracking-tight text-cream group-hover:text-gold transition-colors duration-300 mb-3 whitespace-pre-line">
                      {h.title}
                    </h3>
                    <p className="text-ash text-sm font-light leading-relaxed mb-5">{h.desc}</p>
                    <span className="btn-ghost text-[11px]">
                      Learn More
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="py-28 lg:py-36 bg-ink border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <ScrollReveal>
              <div className="section-label">
                <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Photo Gallery</span>
              </div>
              <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(42px,6vw,80px)] text-cream">
                See It To<br /><span className="text-gold-gradient">Believe It</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Link href="/gallery" className="btn-outline">View All</Link>
            </ScrollReveal>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[420px] lg:h-[520px]">
            {[
              { src: "/Photos/unnamed-25.webp", alt: "Main floor BOLDER neon", span: "col-span-5 row-span-2" },
              { src: "/Photos/unnamed-33.webp", alt: "Night training hex lights", span: "col-span-4 row-span-1" },
              { src: "/Photos/unnamed-37.webp", alt: "Dramatic grid LED wide", span: "col-span-3 row-span-2" },
              { src: "/Photos/unnamed-20.webp", alt: "Dumbbell rack", span: "col-span-4 row-span-1" },
            ].map((p, i) => (
              <ScrollReveal key={p.src} delay={i * 60} className={p.span}>
                <Link href="/gallery" className="card-img-zoom block relative h-full overflow-hidden rounded-none bg-ink-raised">
                  <Image src={p.src} alt={p.alt} fill quality={75} sizes="33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-void/0 hover:bg-void/30 transition-all duration-500" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 lg:py-36 bg-void border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16 lg:mb-20">
            <div className="section-label">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Member Stories</span>
            </div>
            <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(42px,6vw,80px)] text-cream">
              Trusted By<br /><span className="text-gold-gradient">Athletes</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="card-premium rounded-none p-8 flex flex-col gap-6 h-full">
                  {/* Quote mark */}
                  <svg className="w-8 h-8 text-gold/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({length:5}).map((_,j)=>(
                      <svg key={j} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-mist text-sm font-light leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-white/[0.06]">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold font-display font-bold text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-cream font-semibold text-sm">{t.name}</div>
                      <div className="text-ash text-xs font-light">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-void border-t border-white/[0.04]">
        {/* Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />
        {/* Corner texture */}
        <div className="absolute bottom-0 right-0 font-display font-black text-[300px] leading-none text-white/[0.015] select-none pointer-events-none">
          GP
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="section-label">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Get Started</span>
            </div>
            <h2 className="font-display font-black uppercase leading-[0.88] tracking-tight mb-8">
              <span className="block text-[clamp(48px,8vw,110px)] text-cream">Your First Step</span>
              <span className="block text-[clamp(52px,9vw,120px)] text-gold-gradient">Starts Today</span>
            </h2>
            <p className="text-ash text-base lg:text-lg font-light leading-relaxed max-w-lg mb-12">
              Walk in with a day pass, lock in a membership, or book a PT session. No excuses — just results.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/pricing" className="btn-primary">View Memberships</Link>
              <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-12">
              {["No hidden fees", "Walk-ins welcome", "Open 7 days a week"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-ash text-xs font-light">
                  <span className="w-3.5 h-px bg-gold/40" />
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
