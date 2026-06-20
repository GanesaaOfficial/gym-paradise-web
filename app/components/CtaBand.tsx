import Link from "next/link";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryExternal?: boolean;
}

export default function CtaBand({
  label = "Start Training",
  title,
  subtitle,
  primaryHref = "/pricing",
  primaryLabel = "View Memberships",
  secondaryHref = "https://wa.me/601126898810",
  secondaryLabel = "WhatsApp Us",
  secondaryExternal = true,
}: Props) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-ink border-t border-white/[0.06]">
      <div className="absolute inset-0 pattern-diagonal opacity-[0.04]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-display font-black text-[200px] leading-none text-white/[0.02] select-none pointer-events-none uppercase">
        Train
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <div className="section-label">
            <span className="font-display text-[11px] font-bold text-gold tracking-[0.35em] uppercase">
              {label}
            </span>
          </div>
          <h3 className="font-display font-black uppercase leading-[0.9] text-[clamp(32px,4.5vw,56px)] text-cream">
            {title}
          </h3>
          {subtitle && <p className="text-ash mt-3 text-base font-light max-w-lg">{subtitle}</p>}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
          <Link href={primaryHref} className="btn-primary justify-center">
            {primaryLabel}
          </Link>
          {secondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center"
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link href={secondaryHref} className="btn-outline justify-center">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
