const items = [
  "STRONGER",
  "BOLDER",
  "UNSTOPPABLE",
  "HYROX",
  "GRIP GALAXY",
  "38,000 SQ FT",
  "200+ MACHINES",
  "WALK-IN WELCOME",
  "OPEN 6AM – MIDNIGHT",
];

const row = [...items, ...items];

export default function AthleticMarquee() {
  return (
    <div className="relative bg-gold overflow-hidden py-3.5 select-none border-y border-void/20">
      <div className="flex marquee-track whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display font-bold text-void text-[15px] tracking-[0.06em] px-8">
              {item}
            </span>
            <span className="text-void/30 text-sm mx-1">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
