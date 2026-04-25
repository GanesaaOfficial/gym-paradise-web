import Image from "next/image";

interface Props {
  title: string;
  highlight?: string;
  subtitle?: string;
  bgImage: string;
  bgAlt?: string;
  crumb?: string;
  tall?: boolean;
}

export default function PageHeader({
  title, highlight, subtitle,
  bgImage, bgAlt = "",
  crumb, tall = false,
}: Props) {
  return (
    <header
      className={`relative flex flex-col justify-end overflow-hidden ${
        tall ? "h-[68vh] min-h-[540px]" : "h-[62vh] min-h-[480px]"
      }`}
    >
      {/* Photo */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover scale-105 origin-center"
        />
      </div>

      {/* Layered overlays — deep left, fading right */}
      <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/75 to-void/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
      <div className="absolute inset-0 hero-grid-overlay opacity-[0.10]" />

      {/* Gold ambient bloom */}
      <div className="absolute bottom-0 left-[8%] w-[700px] h-[420px] bg-gold/[0.055] rounded-full blur-[150px] pointer-events-none" />

      {/* Left accent line */}
      <div className="absolute left-0 top-[8%] bottom-[8%] w-[2px] bg-gradient-to-b from-transparent via-gold/55 to-transparent pointer-events-none" />

      {/* Top-right viewfinder corner */}
      <div className="absolute top-7 right-7 lg:right-12 flex flex-col items-end pointer-events-none">
        <div className="w-8 h-px bg-gold/35" />
        <div className="w-px h-8 bg-gold/35 self-end" />
      </div>
      {/* Bottom-right viewfinder corner */}
      <div className="absolute bottom-7 right-7 lg:right-12 flex flex-col items-end pointer-events-none">
        <div className="w-px h-8 bg-gold/35 self-end" />
        <div className="w-8 h-px bg-gold/35" />
      </div>

      {/* Giant faded background word */}
      {crumb && (
        <div className="absolute right-0 top-1/2 -translate-y-[55%] font-display font-black leading-none text-white/[0.02] select-none pointer-events-none uppercase tracking-[-0.04em] pr-8 lg:pr-16 hidden lg:block"
          style={{ fontSize: "clamp(120px, 18vw, 220px)" }}
        >
          {crumb.split(" ")[0]}
        </div>
      )}

      {/* Content — bottom-aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 w-full">
        {crumb && (
          <div className="ph-crumb section-label mb-6">
            <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">
              {crumb}
            </span>
          </div>
        )}

        <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight">
          <div className="overflow-hidden">
            <span className="ph-line-1 block text-[clamp(44px,7vw,92px)] text-cream">
              {title}
            </span>
          </div>
          {highlight && (
            <div className="overflow-hidden">
              <span className="ph-line-2 block text-[clamp(48px,8vw,102px)] text-gold-gradient">
                {highlight}
              </span>
            </div>
          )}
        </h1>

        {subtitle && (
          <p className="ph-sub text-ash text-base lg:text-[17px] font-light leading-relaxed max-w-xl mt-5">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom gold hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </header>
  );
}
