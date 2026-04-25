import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing & Memberships",
  description:
    "Transparent pricing at Gym Paradise 3.0. Day pass RM25–35. Monthly membership from RM95. Personal training available. No hidden fees. Walk-ins always welcome in Balakong, Cheras Selatan.",
};

const plans = [
  {
    name: "Day Pass",
    price: "RM 25–35",
    period: "/entry",
    tagline: "Walk in, train hard.",
    description:
      "No commitment, no membership required. Show up, train, leave. Perfect for visitors, travelers, or anyone testing the gym before committing.",
    features: [
      "Full gym access",
      "All equipment included",
      "Locker & shower use",
      "Supplement bar access",
      "Valid for 1 day",
    ],
    cta: "Walk In Today",
    ctaHref: "https://wa.me/601126898810",
    featured: false,
    badge: null,
  },
  {
    name: "Monthly",
    price: "From RM95",
    period: "/month",
    tagline: "Unlimited. Unrestricted.",
    description:
      "The most popular choice. Unlimited access for a full calendar month with no lock-in. Ideal for consistent gym-goers who train 3–5x per week.",
    features: [
      "Unlimited gym access",
      "All equipment included",
      "Locker & shower use",
      "Supplement bar access",
      "No contract lock-in",
    ],
    cta: "Join This Month",
    ctaHref: "https://wa.me/601126898810",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "3-Month",
    price: "RM XX",
    period: "/month",
    tagline: "Commit. Progress. Repeat.",
    description:
      "Lock in a quarter year and save more per session. Great for athletes following a dedicated 12-week training programme.",
    features: [
      "Unlimited gym access",
      "All equipment included",
      "Locker & shower use",
      "Supplement bar access",
      "Billed every 3 months",
    ],
    cta: "Lock In 3 Months",
    ctaHref: "https://wa.me/601126898810",
    featured: false,
    badge: "Save More",
  },
  {
    name: "Annual",
    price: "RM XXX",
    period: "/year",
    tagline: "Best rate. Best results.",
    description:
      "The lowest cost-per-session. For athletes who are fully committed to their long-term goals and want maximum value.",
    features: [
      "Unlimited gym access",
      "All equipment included",
      "Locker & shower use",
      "Supplement bar access",
      "Lowest monthly rate",
    ],
    cta: "Commit to the Year",
    ctaHref: "https://wa.me/601126898810",
    featured: false,
    badge: "Best Value",
  },
];

const ptPackages = [
  {
    name: "Starter Pack",
    sessions: "4 Sessions",
    desc: "Perfect introduction to personal training. Establish your baseline and build your custom programme.",
  },
  {
    name: "Momentum Pack",
    sessions: "8 Sessions",
    desc: "The sweet spot for measurable results. Refine technique, add progressive overload, track your progress.",
  },
  {
    name: "Elite Pack",
    sessions: "12 Sessions",
    desc: "Maximum transformation. Ideal for competition prep, weight loss milestones, or athletic performance goals.",
  },
];

const faqs = [
  {
    q: "Can I really just walk in without a membership?",
    a: "Absolutely. We're famous for our walk-in day pass policy. Just show up and train — no pre-booking needed.",
  },
  {
    q: "What's included with every membership?",
    a: "All memberships include full access to every zone: main floor, free weights, HYROX room, Grip Galaxy, cardio deck, locker room, and showers.",
  },
  {
    q: "Are there any joining fees or hidden charges?",
    a: "No. What you see is what you pay. No joining fees, no admin fees, no hidden charges.",
  },
  {
    q: "Can I upgrade or downgrade my membership?",
    a: "Yes. Contact us on WhatsApp to change your plan at any time. Upgrades take effect immediately.",
  },
  {
    q: "How do I book a personal trainer?",
    a: "Simply WhatsApp us to enquire about PT availability, trainer profiles, and current PT package rates.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Simple,"
        highlight="Transparent Pricing"
        subtitle="No hidden fees. No contracts. Train on your terms."
        bgImage="/Photos/unnamed-37.webp"
        bgAlt="Gym Paradise 3.0 dramatic wide training floor"
        crumb="Pricing & Memberships"
      />

      {/* ── Membership Plans ── */}
      <section className="py-24 lg:py-32 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <div className="section-label justify-center">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Membership Plans</span>
            </div>
            <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(42px,6vw,80px)] text-cream">
              Choose Your <span className="text-gold-gradient">Plan</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 80}>
                <div
                  className={`relative p-8 flex flex-col gap-6 h-full transition-all duration-300 ${
                    plan.featured
                      ? "bg-ink pricing-featured lg:-translate-y-5"
                      : "card-premium card-hover"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 font-display text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 whitespace-nowrap ${
                        plan.featured
                          ? "bg-gold text-void"
                          : "bg-ink-border text-ash border border-white/[0.08]"
                      }`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h3
                      className={`font-display text-[13px] font-bold uppercase tracking-[0.2em] mb-1 ${
                        plan.featured ? "text-gold" : "text-ash"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-ash/60 text-xs italic mb-3">{plan.tagline}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-black text-cream">{plan.price}</span>
                      <span className="text-ash text-sm">{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-ash text-sm font-light leading-relaxed">{plan.description}</p>

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <svg
                          className="w-3.5 h-3.5 text-gold shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-mist">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.featured ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}
                  >
                    {plan.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-ash/40 text-xs mt-10">
              * Day pass RM25–35. Monthly from RM95–RM158 depending on package. WhatsApp us for current rates and promotions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Personal Training ── */}
      <section className="py-24 lg:py-32 bg-pearl border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14">
            <div className="section-label">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Personal Training</span>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(42px,6vw,80px)] text-graphite">
                Train With <span className="text-gold-gradient">An Expert</span>
              </h2>
              <a
                href="https://wa.me/601126898810"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                Enquire About PT
              </a>
            </div>
            <p className="text-stone text-base lg:text-lg font-light mt-4 max-w-2xl leading-relaxed">
              Our certified personal trainers build fully customised programmes, correct your form, and push you past plateaus. Results, not guesswork.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ptPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 100}>
                <div className="card-light p-8 flex flex-col gap-5 h-full">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-1">{pkg.sessions}</div>
                    <h3 className="font-display font-black uppercase text-[22px] tracking-tight text-graphite">{pkg.name}</h3>
                  </div>
                  <p className="text-stone text-sm font-light leading-relaxed flex-1">{pkg.desc}</p>
                  <a
                    href="https://wa.me/601126898810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Enquire
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-snow border-t border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-14">
            <div className="section-label justify-center">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">FAQ</span>
            </div>
            <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(42px,6vw,80px)] text-graphite">
              Got <span className="text-gold-gradient">Questions?</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <div className="card-light p-7">
                  <h3 className="text-graphite font-semibold text-base mb-3 flex items-start gap-3">
                    <span className="font-display font-black text-[20px] leading-none text-gold/50 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-stone text-sm font-light leading-relaxed pl-9">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300} className="text-center mt-12">
            <p className="text-stone/80 text-sm mb-6">Still have questions?</p>
            <a
              href="https://wa.me/601126898810"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
