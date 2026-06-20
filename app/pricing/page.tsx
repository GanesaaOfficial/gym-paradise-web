import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing & Memberships",
  description:
    "Transparent pricing at Gym Paradise 3.0. Day pass RM25–35. Membership from RM178/month. No hidden fees. Walk-ins always welcome.",
};

const plans = [
  {
    name: "1 Month",
    price: "RM178",
    tagline: "Flexible monthly access.",
    description: "Perfect for getting started with full gym access and no lock-in commitment.",
    features: ["Access to gym equipment", "No contract", "Registration fee RM54", "Unlimited access in 1 month"],
    badge: "Starter",
    featured: false,
  },
  {
    name: "3 Months",
    price: "RM498",
    tagline: "Great value for consistency.",
    description: "Stay consistent with a longer-term package designed for steady progress.",
    features: ["Access to gym equipment", "No contract", "Registration fee RM54", "Unlimited access in 3 months"],
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "6 Months",
    price: "RM888",
    tagline: "Half-year commitment, bigger savings.",
    description: "Best for members committed to long-term training with stronger value per month.",
    features: ["Access to gym equipment", "No contract", "Registration fee RM54", "Unlimited access in 6 months"],
    badge: "Save More",
    featured: false,
  },
  {
    name: "1 Year",
    price: "RM1588",
    tagline: "Annual commitment, no registration fee.",
    description: "Ideal for serious gym-goers who want long-term consistency and savings.",
    features: ["Access to gym equipment", "No contract", "Waive registration fee", "Unlimited access in 1 year"],
    badge: "Best Value",
    featured: false,
  },
  {
    name: "2 Years",
    price: "RM2888",
    tagline: "Maximum savings over time.",
    description: "Strongest long-term package with waived registration fee and full access throughout.",
    features: ["Access to gym equipment", "No contract", "Waive registration fee", "Unlimited access in 2 years"],
    badge: "Max Savings",
    featured: false,
  },
];

const ptPackages = [
  { name: "Starter Pack", sessions: "4 Sessions", desc: "Perfect introduction to personal training. Establish your baseline and build your custom programme." },
  { name: "Momentum Pack", sessions: "8 Sessions", desc: "The sweet spot for measurable results. Refine technique, add progressive overload, track your progress." },
  { name: "Elite Pack", sessions: "12 Sessions", desc: "Maximum transformation. Ideal for competition prep, weight loss milestones, or athletic performance goals." },
];

const faqs = [
  { q: "Can I really just walk in without a membership?", a: "Absolutely. We're famous for our walk-in day pass policy. Just show up and train — no pre-booking needed." },
  { q: "What's included with every membership?", a: "All memberships include full access to every zone: main floor, free weights, HYROX room, Grip Galaxy, cardio deck, locker room, and showers." },
  { q: "Are there any joining fees or hidden charges?", a: "No. What you see is what you pay. No joining fees, no admin fees, no hidden charges." },
  { q: "Can I upgrade or downgrade my membership?", a: "Yes. Contact us on WhatsApp to change your plan at any time. Upgrades take effect immediately." },
  { q: "How do I book a personal trainer?", a: "Simply WhatsApp us to enquire about PT availability, trainer profiles, and current PT package rates." },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Train On"
        highlight="Your Terms"
        subtitle="No hidden fees. No contracts. Walk-ins welcome every day."
        bgImage="/Photos/unnamed-37.webp"
        bgAlt="Training floor"
        crumb="Pricing"
      />

      <section className="py-20 lg:py-28 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionHeading label="Memberships" title="Choose Your" highlight="Plan" align="center" />
          </ScrollReveal>

          <ScrollReveal delay={40} className="mb-12">
            <div className="training-card p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-l-4 border-l-gold">
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Walk-In Day Pass</p>
                <h3 className="font-display font-black uppercase text-2xl text-cream">No Membership Required</h3>
                <p className="text-ash text-sm font-light mt-2">Famous walk-in policy — day pass RM25–35 per entry.</p>
              </div>
              <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
                Walk In Today
              </a>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 60}>
                <div
                  className={`training-card p-6 flex flex-col h-full relative ${
                    plan.featured ? "ring-2 ring-gold lg:-mt-4 lg:mb-4" : ""
                  }`}
                >
                  {plan.badge && (
                    <span
                      className={`absolute -top-3 left-4 font-display text-[9px] font-bold tracking-widest uppercase px-3 py-1 ${
                        plan.featured ? "bg-gold text-void" : "bg-ink-high text-ash border border-white/10"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <p className="font-display text-xs font-bold tracking-widest uppercase text-gold mt-2">{plan.name}</p>
                  <p className="font-display font-black text-4xl text-cream mt-2">{plan.price}</p>
                  <p className="text-ash/70 text-xs italic mt-1 mb-4">{plan.tagline}</p>
                  <p className="text-ash text-sm font-light mb-4 flex-1">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-mist">
                        <span className="text-gold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/601126898810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.featured ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center text-[11px] py-3"}
                  >
                    Join {plan.name}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-ash/50 text-xs mt-10 max-w-2xl mx-auto">
            * Registration fee RM54 applies to 1, 3, and 6-month plans. Waived on 1-year and 2-year plans.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ink border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionHeading label="Personal Training" title="Train With" highlight="An Expert" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {ptPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 80}>
                <div className="training-card p-8 h-full flex flex-col">
                  <span className="font-display text-[10px] font-bold tracking-widest uppercase text-gold">{pkg.sessions}</span>
                  <h3 className="font-display font-black uppercase text-xl text-cream mt-2 mb-4">{pkg.name}</h3>
                  <p className="text-ash text-sm font-light flex-1">{pkg.desc}</p>
                  <a href="https://wa.me/601126898810" target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6">
                    Enquire →
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-void">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionHeading label="FAQ" title="Got" highlight="Questions?" align="center" />
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 50}>
                <div className="training-card p-6 border-l-4 border-l-gold/50">
                  <h3 className="font-display font-bold uppercase text-sm text-cream mb-2 flex gap-3">
                    <span className="text-gold/50">{String(i + 1).padStart(2, "0")}</span>
                    {faq.q}
                  </h3>
                  <p className="text-ash text-sm font-light pl-8">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Still Have Questions?" subtitle="WhatsApp us — we reply fast." primaryLabel="Chat on WhatsApp" />
    </>
  );
}
