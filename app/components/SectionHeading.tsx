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
    <div className={centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <p className={`label-sm mb-4 ${centered ? "mx-auto" : ""}`}>
        {number && <span className="text-gold/40 mr-2">{number}</span>}
        {label}
      </p>
      <h2 className={`type-display-lg text-cream ${centered ? "mx-auto" : ""}`}>
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-gold-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`type-lead-airy text-mist mt-5 max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
