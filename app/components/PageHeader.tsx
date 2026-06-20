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
  title,
  highlight,
  subtitle,
  bgImage,
  bgAlt = "",
  crumb,
  tall = false,
}: Props) {
  return (
    <header
      className={`relative flex items-end overflow-hidden clip-athletic-bottom ${
        tall ? "min-h-[70vh]" : "min-h-[55vh]"
      }`}
    >
      <div className="absolute inset-0">
        <Image src={bgImage} alt={bgAlt} fill priority quality={85} sizes="100vw" className="object-cover scale-105" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/30" />
      <div className="absolute inset-0 pattern-grid-athletic opacity-20" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
        {crumb && (
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-[10px] font-bold tracking-[0.35em] uppercase text-gold bg-void/50 border border-gold/30 px-3 py-1.5">
              {crumb}
            </span>
          </div>
        )}
        <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight max-w-4xl">
          <span className="block text-[clamp(40px,7vw,88px)] text-cream">{title}</span>
          {highlight && (
            <span className="block text-[clamp(44px,8vw,96px)] text-gold-gradient italic">{highlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="text-mist text-base lg:text-lg font-light leading-relaxed max-w-xl mt-5 border-l-2 border-gold pl-5">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
