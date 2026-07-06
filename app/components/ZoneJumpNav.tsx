"use client";




const zoneFilters = ["Main Floor", "Free Weights", "HYROX", "Grip Galaxy", "Cardio", "Lounge"];
const filterToId: Record<string, string> = {
  "Main Floor": "main-floor",
  "Free Weights": "free-weights",
  "HYROX": "hyrox",
  "Grip Galaxy": "grip-galaxy",
  "Cardio": "cardio",
  "Lounge": "lounge",
};

export default function ZoneJumpNav() {
  const scrollToZone = (zoneFilter: string) => {
    const id = filterToId[zoneFilter];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Jump to zone"
      className="sticky top-16 lg:top-[72px] z-30 backdrop-blur-xl bg-void/85 border-b border-white/[0.06] py-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="tag-rail items-center">
          <span className="label-sm text-[10px] text-ash/50 shrink-0 hidden sm:block mr-2">Jump to:</span>
          {zoneFilters.map((z) => (
            <button
              key={z}
              type="button"
              id={`zone-nav-${z.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => scrollToZone(z)}
              className="discipline-pill !text-[11px] cursor-pointer hover:!bg-gold/20 hover:!text-gold transition-all duration-300 shrink-0"
            >
              {z}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
