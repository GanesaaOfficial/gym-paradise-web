import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./icons";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryExternal?: boolean;
  bgImage?: string;
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
  bgImage = "/Photos/unnamed-34.webp",
}: Props) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt=""
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-void/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/60" />
      <div className="deco">
        <div className="orb orb-gold orb-lg animate-float-slow" style={{ top: "-30%", right: "-6%" }} />
        <div className="deco-diaglines w-[260px] h-[260px]" style={{ bottom: "-6%", left: "4%", opacity: 0.35 }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <p className="kicker mb-3">{label}</p>
          <h3 className="type-display-lg text-cream">
            {title}
          </h3>
          {subtitle && <p className="text-body mt-3 max-w-lg text-mist">{subtitle}</p>}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          <Link href={primaryHref} className="btn-primary justify-center">
            {primaryLabel}
            <IconArrowRight className="w-4 h-4" />
          </Link>
          {secondaryExternal ? (
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
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
