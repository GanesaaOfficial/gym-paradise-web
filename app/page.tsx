import Image from "next/image";
import Link from "next/link";
import HeroImage from "./components/HeroImage";
import AthleticMarquee from "./components/AthleticMarquee";
import WhyGymParadise from "./components/WhyGymParadise";
import OurPromise from "./components/OurPromise";
import ParallaxFeatures from "./components/ParallaxFeatures";
import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import SectionHeading from "./components/SectionHeading";
import CtaBand from "./components/CtaBand";
import InteractiveDisciplines from "./components/InteractiveDisciplines";
import {
  IconMapPin,
  IconClock,
  IconArrowRight,
  IconStar,
} from "./components/icons";

const disciplines = [
  "Powerlifting",
  "Bodybuilding",
  "HYROX",
  "Weightlifting",
  "Functional",
];



const stats = [
  { end: 38000, suffix: "", unit: "Sq Ft", desc: "Massive training space in Cheras Selatan" },
  { end: 200, suffix: "+", unit: "Machines", desc: "Elite USA, UK & international equipment" },
  { end: 18, suffix: "", unit: "Hours", desc: "6AM–Midnight Mon–Sat" },
  { end: 1, suffix: "st", unit: "Mega Gym", desc: "Malaysia's premier world-class mega gym" },
];

const zones = [
  {
    img: "/Photos/unnamed-19.webp",
    alt: "Epic training floor",
    num: "01",
    tag: "Main Floor",
    title: "Epic Training Floor",
    desc: "Warehouse-scale floor with geometric LED grids. Over 200+ elite machines ready for action.",
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
    desc: "Massive selection of squat racks, deadlift platforms, and premium dumbbells.",
    href: "/facilities",
    span: "md:col-span-3",
    tall: false,
  },
];



const steps = [
  {
    n: "1",
    title: "Visit Cheras Selatan",
    desc: "Drop by with a day pass or WhatsApp us to ask about memberships and personal training.",
  },
  {
    n: "2",
    title: "Choose Your Path",
    desc: "Select a flexible membership or just pay per visit. No locked-in contracts, no pressure.",
  },
  {
    n: "3",
    title: "Start Training",
    desc: "Get full access to every world-class zone and begin forging your legacy today.",
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
      <HeroImage />
      <AthleticMarquee />
      <ParallaxFeatures />
      {/* Disciplines — massive interactive list */}
      <section className="section-layer relative py-20 lg:py-32 bg-void overflow-hidden">
        <div className="deco">
          <div className="orb orb-gold-soft orb-md animate-float-slow" style={{ top: "10%", right: "-10%" }} />
        </div>
        <div className="layer-content">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <p className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-mist border border-white/10 backdrop-blur-md mb-12 inline-block">
                Built For Every Athlete
              </p>
            </div>
            <InteractiveDisciplines disciplines={disciplines} />
          </ScrollReveal>
        </div>
      </section>

      <WhyGymParadise />

      {/* Stats — typographic strip, no boxes */}
      <section className="section-layer relative py-16 lg:py-24 mesh-bg overflow-hidden">
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="stat-strip">
              {stats.map((s, i) => (
                <div key={i} className={i > 0 ? "lg:pl-8" : ""}>
                  <div className="stat-num">
                    <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="stat-label">{s.unit}</div>
                  <p className="text-body text-[14px] mt-2 text-mist hidden sm:block">{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OurPromise />

      {/* Training zones bento */}
      <section className="section-layer relative py-24 lg:py-32 bg-void overflow-hidden">
        <div className="deco">
          <div className="deco-word text-[20vw]" style={{ top: "2%", left: "-3%" }}>ZONES</div>
          <div className="orb orb-gold orb-lg animate-float-slow-alt" style={{ bottom: "-15%", right: "-10%" }} />
          <div className="deco-diaglines w-[340px] h-[340px] animate-float-slow" style={{ top: "12%", right: "4%", opacity: 0.5 }} />
        </div>
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              label="Training Zones"
              title="Where Champions"
              highlight="Are Made"
            />
            <Link href="/facilities" className="btn-ghost shrink-0">
              All Facilities
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 auto-rows-[240px] md:auto-rows-[220px]">
            {zones.map((z, i) => (
              <ScrollReveal key={z.num} delay={i * 80} className={z.span}>
                <Link
                  href={z.href}
                  className={`bento-tile group block relative h-full min-h-[240px] ${
                    z.tall ? "md:min-h-full" : ""
                  }`}
                >
                  <Image src={z.img} alt={z.alt} fill quality={80} sizes="50vw" className="object-cover transform-gpu will-change-transform group-hover:scale-105" style={{ transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                  <span className="tag-blur absolute top-4 left-4">{z.tag}</span>
                  <span className="absolute top-4 right-5 font-display font-extrabold text-[clamp(3rem,6vw,5rem)] leading-none text-white/[0.07]">
                    {z.num}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="type-display-md text-cream group-hover:text-gold transition-colors duration-500">
                      {z.title}
                    </h3>
                    <p className="text-body text-[15px] mt-2 max-w-sm text-mist opacity-90">{z.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership teaser */}


      {/* How to start — 3 steps */}
      <section className="section-layer relative py-24 lg:py-32 bg-void overflow-hidden">
        <div className="deco">
          <div className="deco-word text-[20vw]" style={{ top: "6%", right: "-2%" }}>START</div>
          <div className="orb orb-gold-soft orb-lg animate-float-slow" style={{ top: "20%", left: "-14%" }} />
        </div>
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14 text-center">
            <SectionHeading
              label="Getting Started"
              title="Your First Rep"
              highlight="In 3 Simple Steps"
              align="center"
            />
          </ScrollReveal>
          <div className="timeline">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 100}>
                <div className="timeline-step group relative p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.1)] hover:-translate-y-2">
                  {/* Subtle hover gradient background */}
                  <div className="absolute -inset-px bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none" />
                  
                  <div className="step-index">{step.n}</div>
                  <h3 className="type-display-md text-cream mb-3 group-hover:text-gold transition-colors duration-500">{step.title}</h3>
                  <p className="text-body text-mist">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — editorial layout */}
      <section className="section-layer relative py-24 lg:py-32 mesh-bg overflow-hidden border-t border-white/5">
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12 lg:mb-16 text-center lg:text-left">
            <SectionHeading label="Member Stories" title="Trusted By" highlight="Real Athletes" />
          </ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <ScrollReveal className="lg:col-span-7">
              <div className="quote-block">
                <div className="flex gap-1 text-gold mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IconStar key={s} className="w-5 h-5 fill-gold" />
                  ))}
                </div>
                <p className="type-lead text-cream leading-snug">&ldquo;{testimonials[0].quote}&rdquo;</p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center font-display font-bold text-gold">
                    {testimonials[0].initials}
                  </div>
                  <div>
                    <p className="text-cream type-body-strong">{testimonials[0].name}</p>
                    <p className="text-gold label-sm text-[11px]">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-5 flex flex-col gap-0">
              {testimonials.slice(1).map((t, i) => (
                <ScrollReveal key={t.name} delay={(i + 1) * 100}>
                  <div className="quote-block">
                    <p className="text-body text-mist">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-3 mt-5">
                      <div className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center font-display text-sm font-bold text-gold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-cream text-[15px] font-semibold">{t.name}</p>
                        <p className="text-ash text-[12px]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & hours */}
      <section className="section-layer relative py-24 lg:py-32 mesh-bg overflow-hidden">
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div 
              className="relative aspect-[3/4] group cursor-pointer"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
              }}
            >
                <Image
                  src="/Photos/unnamed-32.webp"
                  alt="Gym Paradise building exterior"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transform-gpu will-change-transform group-hover:scale-110"
                  style={{ transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <p className="label-sm mb-4">Visit Us</p>
            <h2 className="type-display-lg text-cream mb-8">
              Easy To Find,
              <br />
              <span className="text-gold-gradient">Impossible To Miss</span>
            </h2>

            <div className="mb-8">
              <div className="info-row">
                <IconMapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="type-body-strong text-cream mb-1">Location</h3>
                  <p className="text-body text-[15px] text-mist">
                    Lot 1897B, Jalan KPB 9, Kawasan Perindustrian Balakong, 43300 Seri Kembangan, Selangor
                  </p>
                </div>
              </div>
              <div className="info-row">
                <IconClock className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="type-body-strong text-cream mb-3">Opening Hours</h3>
                  <div className="space-y-2 max-w-sm">
                    <div className="flex justify-between text-[15px]">
                      <span className="text-mist">Mon – Sat</span>
                      <span className="font-text font-semibold text-gold">6AM – 12AM</span>
                    </div>
                    <div className="flex justify-between text-[15px]">
                      <span className="text-mist">Sun & Public Holidays</span>
                      <span className="font-text font-semibold text-gold">9AM – 12AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary justify-center">
                Get Directions
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/601126898810"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center"
              >
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
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
