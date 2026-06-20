import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import AthleticMarquee from "./components/AthleticMarquee";
import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import SectionHeading from "./components/SectionHeading";
import CtaBand from "./components/CtaBand";

const disciplines = [
  "Powerlifting",
  "Bodybuilding",
  "HYROX",
  "Functional",
  "Cardio",
  "Walk-In",
];

const stats = [
  { end: 38000, suffix: "", unit: "Sq Ft", desc: "Malaysia's largest training floor" },
  { end: 200, suffix: "+", unit: "Machines", desc: "USA, UK & international equipment" },
  { end: 18, suffix: "", unit: "Hours", desc: "6AM–Midnight Mon–Sat" },
  { end: 1, suffix: "st", unit: "Mega Gym", desc: "World-class · Opened Jan 2026" },
];

const zones = [
  {
    img: "/Photos/unnamed-19.webp",
    alt: "Epic training floor",
    num: "01",
    tag: "Main Floor",
    title: "Epic Training Floor",
    desc: "Warehouse-scale floor with geometric LED grids. Every session hits different.",
    href: "/facilities",
    span: "md:col-span-2 md:row-span-2",
    tall: true,
  },
  {
    img: "/Photos/unnamed-21.webp",
    alt: "HYROX Training Club",
    num: "02",
    tag: "Signature",
    title: "HYROX Club",
    desc: "Indoor track + rowers. Official affiliate.",
    href: "/facilities",
    span: "md:col-span-1",
    tall: false,
  },
  {
    img: "/Photos/unnamed-22.webp",
    alt: "Grip Galaxy",
    num: "03",
    tag: "Unique",
    title: "Grip Galaxy",
    desc: "50+ cable attachments on one wall.",
    href: "/facilities",
    span: "md:col-span-1",
    tall: false,
  },
  {
    img: "/Photos/unnamed-20.webp",
    alt: "Free weights",
    num: "04",
    tag: "Free Weights",
    title: "Heavy Iron Zone",
    desc: "Squat racks, platforms, full dumbbell range.",
    href: "/facilities",
    span: "md:col-span-2",
    tall: false,
  },
];

const testimonials = [
  {
    initials: "AR",
    name: "Ahmad R.",
    role: "Powerlifter",
    quote:
      "The free weight zone is unmatched in Cheras Selatan. Multiple squat racks, full dumbbell range, proper deadlift platforms.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "Regular Walk-In",
    quote:
      "I love just showing up when I want. The day pass is genuinely worth it every single time — clean, cold AC, always has everything I need.",
  },
  {
    initials: "ML",
    name: "Marcus L.",
    role: "Bodybuilder",
    quote:
      "The machine selection is competition prep level. I placed in my first physique show training here.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AthleticMarquee />

      {/* Disciplines */}
      <section className="bg-ink border-b border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold mb-5 text-center">
              Built For Every Athlete
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {disciplines.map((d) => (
                <span key={d} className="discipline-pill">
                  <span className="w-1.5 h-1.5 bg-gold" />
                  {d}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-void py-16 lg:py-20 pattern-diagonal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="training-card p-6 lg:p-8 stat-block">
                  <div className="font-display font-black text-[clamp(36px,4vw,52px)] leading-none text-cream">
                    <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="font-display font-bold text-gold text-xs tracking-[0.2em] uppercase mt-2">
                    {s.unit}
                  </div>
                  <p className="text-ash text-xs font-light mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Photos/unnamed-27.webp" alt="Gym Paradise sign" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-void/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-end">
          <ScrollReveal direction="left">
            <SectionHeading
              label="Our Promise"
              title="The First"
              highlight="World-Class Mega Gym"
              subtitle="Built for every athlete — from first session to elite competition prep. Premium equipment, neon-lit industrial atmosphere, and a community that pushes you to be stronger."
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150} className="flex flex-col gap-4 lg:items-end">
            <p className="font-display font-black italic uppercase text-[clamp(24px,3vw,36px)] text-gold leading-tight lg:text-right">
              Stronger · Bolder · Unstoppable
            </p>
            <Link href="/facilities" className="btn-primary">
              Tour The Gym
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Training zones bento */}
      <section className="py-24 lg:py-32 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              number="01"
              label="Training Zones"
              title="Where Champions"
              highlight="Are Made"
            />
            <Link href="/facilities" className="btn-ghost shrink-0">
              All Facilities →
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[200px]">
            {zones.map((z, i) => (
              <ScrollReveal key={z.num} delay={i * 80} className={z.span}>
                <Link
                  href={z.href}
                  className={`training-card card-img-zoom block relative h-full min-h-[220px] group ${
                    z.tall ? "md:min-h-full" : ""
                  }`}
                >
                  <Image src={z.img} alt={z.alt} fill quality={80} sizes="50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                  <div className="absolute top-4 left-4 font-display text-[10px] font-bold tracking-widest uppercase text-gold bg-void/70 px-2 py-1 border border-gold/30">
                    {z.tag}
                  </div>
                  <div className="absolute top-3 right-4 font-display font-black text-5xl text-white/10">
                    {z.num}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3 className="font-display font-black uppercase text-xl lg:text-2xl text-cream group-hover:text-gold transition-colors">
                      {z.title}
                    </h3>
                    <p className="text-mist text-sm font-light mt-1 max-w-sm">{z.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-24 lg:py-32 bg-ink border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionHeading label="Inside The Gym" title="See It To" highlight="Believe It" />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 h-[320px] lg:h-[420px]">
            {[
              { src: "/Photos/unnamed-33.webp", alt: "Night training", span: "col-span-2 row-span-2" },
              { src: "/Photos/unnamed-28.webp", alt: "Neon signs", span: "col-span-1" },
              { src: "/Photos/unnamed-35.webp", alt: "Cardio", span: "col-span-1" },
              { src: "/Photos/unnamed-26.webp", alt: "HYROX", span: "col-span-2" },
            ].map((p, i) => (
              <ScrollReveal key={p.src} delay={i * 50} className={p.span}>
                <Link href="/gallery" className="card-img-zoom block relative h-full overflow-hidden">
                  <Image src={p.src} alt={p.alt} fill quality={75} sizes="33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-void/0 hover:bg-gold/10 transition-colors" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14">
            <SectionHeading label="Member Stories" title="Trusted By" highlight="Real Athletes" align="center" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="training-card p-8 h-full flex flex-col">
                  <div className="font-display font-black text-5xl text-gold/15 leading-none mb-4">&ldquo;</div>
                  <p className="text-mist text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/[0.06]">
                    <div className="w-11 h-11 bg-gold/10 border border-gold/30 flex items-center justify-center font-display font-bold text-gold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-cream font-semibold text-sm">{t.name}</p>
                      <p className="text-gold text-xs font-display tracking-widest uppercase">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        label="Unlock Your Potential"
        title="Your First Rep Starts Today"
        subtitle="Walk in with a day pass, lock in a membership, or book a PT session. No excuses — just results."
        primaryLabel="View Memberships"
        secondaryLabel="Chat on WhatsApp"
      />
    </>
  );
}
