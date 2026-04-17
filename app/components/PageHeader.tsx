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
    <header className={`relative flex items-end overflow-hidden ${tall ? "h-[65vh] min-h-[500px]" : "h-[55vh] min-h-[400px]"}`}>
      {/* Photo */}
      <div className="absolute inset-0 scale-105 origin-center">
        <Image src={bgImage} alt={bgAlt} fill priority quality={85} sizes="100vw" className="object-cover" />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/65 to-void/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-void/40" />
      <div className="absolute inset-0 hero-grid-overlay opacity-15" />

      {/* Gold bloom */}
      <div className="absolute bottom-0 left-[15%] w-[600px] h-[350px] bg-gold/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* Left accent line */}
      <div className="absolute left-0 top-[10%] bottom-[10%] w-[2px] bg-gradient-to-b from-transparent via-gold/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 w-full">
        {crumb && (
          <div className="section-label mb-6">
            <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">
              {crumb}
            </span>
          </div>
        )}
        <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight">
          <span className="block text-[clamp(44px,7vw,90px)] text-cream">{title}</span>
          {highlight && (
            <span className="block text-[clamp(48px,8vw,100px)] text-gold-gradient">{highlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="text-mist text-base lg:text-lg font-light leading-relaxed max-w-xl mt-5">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
