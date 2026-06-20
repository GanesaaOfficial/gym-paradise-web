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
  "POWERLIFTING",
  "BODYBUILDING",
  "FUNCTIONAL",
];

const row = [...items, ...items];

export default function AthleticMarquee() {
  return (
    <div className="relative bg-gold overflow-hidden py-4 select-none border-y-2 border-void">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gold to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gold to-transparent z-10" />
      <div className="flex marquee-track whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display font-black italic text-void text-[13px] sm:text-[15px] tracking-[0.18em] uppercase px-6 sm:px-10">
              {item}
            </span>
            <span className="text-void/25 font-display font-black text-lg">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
