interface Props {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  number?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "left",
  number,
}: Props) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <div className={`section-label ${centered ? "justify-center" : ""}`}>
        {number && (
          <span className="font-display text-[11px] font-black text-gold/40 tracking-wider mr-1">
            {number}
          </span>
        )}
        <span className="font-display text-[11px] font-bold text-gold tracking-[0.35em] uppercase">
          {label}
        </span>
      </div>
      <h2
        className={`font-display font-black uppercase leading-[0.9] tracking-tight text-[clamp(36px,5.5vw,72px)] text-cream ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-gold-gradient italic">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-ash text-base lg:text-lg font-light leading-relaxed mt-5 max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
