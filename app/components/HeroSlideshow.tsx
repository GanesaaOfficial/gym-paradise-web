import Image from "next/image";
import Link from "next/link";

export default function HeroSlideshow() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background: solid black so contain bars are invisible ── */}
      <div className="absolute inset-0 bg-void" />

      {/* ── Building image — object-contain so the FULL building shows, no crop ── */}
      {/* Positioned to the right so left side stays dark for text */}
      <div className="absolute inset-0">
        <Image
          src="/Photos/unnamed-32.webp"
          alt="Gym Paradise 3.0 — GYM PARADISE gold signage on black glass facade"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-contain"
          style={{ objectPosition: "right center" }}
        />
      </div>

      {/* ── Overlays ── */}
      {/* Dark tint over the whole image so it blends into the black bg */}
      <div className="absolute inset-0 bg-void/45" />
      {/* Left-to-right gradient: solid black on left (text area) → fades at boundary → transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-void from-[45%] via-void/70 via-[58%] to-transparent" />
      {/* Bottom darken */}
      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-void/50" />
      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid-overlay opacity-[0.15]" />

      {/* ── Gold ambient bloom — sits in text area ── */}
      <div className="absolute bottom-[30%] left-[5%] w-[650px] h-[450px] bg-gold/[0.06] rounded-full blur-[180px] pointer-events-none" />

      {/* ── Left accent line ── */}
      <div className="absolute left-0 top-[10%] bottom-[10%] w-[2px] bg-gradient-to-b from-transparent via-gold/55 to-transparent pointer-events-none" />

      {/* ── Viewfinder corner marks (top-right — image side) ── */}
      <div className="absolute top-7 right-7 lg:right-12 flex flex-col items-end pointer-events-none">
        <div className="w-8 h-px bg-gold/40" />
        <div className="w-px h-8 bg-gold/40 self-end" />
      </div>
      {/* bottom-right */}
      <div className="absolute bottom-[72px] right-7 lg:right-12 flex flex-col items-end pointer-events-none">
        <div className="w-px h-8 bg-gold/40 self-end" />
        <div className="w-8 h-px bg-gold/40" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col min-h-screen pt-[88px] pb-10">

        {/* Live badge */}
        <div className="hero-line-1 flex items-center gap-3 mt-5 mb-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
          <span className="font-display text-[11px] font-semibold text-gold tracking-[0.35em] uppercase">
            Mon–Sat 6AM–Midnight · Sun & PH 9AM–Midnight
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[28px]" />

        {/* ── Headline block — kept to left half so building shows on right ── */}
        <div className="max-w-full lg:max-w-[58%]">

          {/* Eyebrow */}
          <div className="hero-sub flex items-center gap-4 mb-5">
            <div className="w-9 h-px bg-gold/50 shrink-0" />
            <p className="font-display text-[11px] font-semibold text-cream/60 tracking-[0.35em] uppercase">
              The First World-Class Mega Gym of Malaysia
            </p>
          </div>

          {/* GYM PARADISE */}
          <div className="overflow-hidden mb-0">
            <h1 className="hero-line-2 font-display font-black uppercase leading-[0.86] tracking-[-0.01em]">
              <span className="block text-[clamp(52px,8.5vw,118px)] text-cream">
                Gym Paradise
              </span>
            </h1>
          </div>

          {/* 3.0 */}
          <div className="overflow-hidden mb-8">
            <div className="hero-line-3">
              <span className="font-display font-black uppercase text-[clamp(64px,11vw,152px)] leading-[0.82] tracking-[-0.02em] text-gold-shimmer">
                3.0
              </span>
            </div>
          </div>

          {/* Sub-copy */}
          <div className="hero-sub mb-10">
            <p className="text-mist text-base lg:text-[17px] font-light leading-relaxed max-w-md">
              Premium equipment. HYROX Training Club. Grip Galaxy.<br className="hidden sm:block" />
              Walk-ins always welcome in Cheras Selatan.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-start gap-4">
            <Link href="/pricing" className="btn-primary">
              View Memberships
            </Link>
            <Link href="/facilities" className="btn-outline">
              Explore Facilities
            </Link>
          </div>
        </div>

        <div className="h-14" />
      </div>

      {/* Location badge — bottom right, sits over the visible building area */}
      <div className="absolute bottom-8 right-7 lg:right-12 z-20">
        <div className="flex items-center gap-2.5 bg-void/70 backdrop-blur-md px-4 py-2.5 border border-white/[0.08]">
          <svg className="w-3 h-3 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-display text-[10px] font-semibold text-cream tracking-[0.28em] uppercase">
            Cheras Selatan, Selangor
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-ash">
        <span className="font-display text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ash/50 to-transparent" />
      </div>
    </section>
  );
}
