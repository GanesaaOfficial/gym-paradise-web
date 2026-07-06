"use client";

import { useState } from "react";

interface Faq {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className={`accordion-item ${isOpen ? "bg-white/[0.02]" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 text-left p-6"
            >
              <span className="font-display font-bold text-gold/50 text-[15px] w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="type-body-strong text-cream flex-1">{faq.q}</span>
              <span
                className={`accordion-icon ${isOpen ? "open" : ""} shrink-0 text-mist text-2xl leading-none w-6 text-center`}
              >
                +
              </span>
            </button>
            <div className={`accordion-panel ${isOpen ? "open" : ""}`}>
              <div>
                <p className="text-body text-mist px-6 pb-6 pl-[4.5rem]">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
