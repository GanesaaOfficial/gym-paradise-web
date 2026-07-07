"use client";

import { useEffect, useRef, useState } from "react";

export default function InteractiveDisciplines({ disciplines }: { disciplines: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const updateActive = () => {
      if (!containerRef.current || !isHovering.current) {
        if (activeIndex !== null) setActiveIndex(null);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is inside the main container
      if (
        mousePos.current.x < rect.left ||
        mousePos.current.x > rect.right ||
        mousePos.current.y < rect.top ||
        mousePos.current.y > rect.bottom
      ) {
        if (activeIndex !== null) setActiveIndex(null);
        return;
      }

      let foundIndex = null;
      const children = containerRef.current.children;
      
      for (let i = 0; i < children.length; i++) {
        const childRect = children[i].getBoundingClientRect();
        if (
          mousePos.current.x >= childRect.left &&
          mousePos.current.x <= childRect.right &&
          mousePos.current.y >= childRect.top &&
          mousePos.current.y <= childRect.bottom
        ) {
          foundIndex = i;
          break;
        }
      }

      if (activeIndex !== foundIndex) {
        setActiveIndex(foundIndex);
      }
    };

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      isHovering.current = true;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      setActiveIndex(null);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listeners for better scroll performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave); // When mouse leaves the window

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  return (
    <div 
      className="w-full flex flex-col border-t border-white/10" 
      ref={containerRef}
      onMouseLeave={() => {
        isHovering.current = false;
        setActiveIndex(null);
      }}
      onMouseEnter={() => {
        isHovering.current = true;
      }}
    >
      {disciplines.map((d, i) => {
        const isActive = activeIndex === i;
        return (
          <div 
            key={d} 
            className={`group relative border-b transition-colors duration-150 cursor-pointer overflow-hidden ${
              isActive ? 'border-gold/50' : 'border-white/10 hover:border-gold/50'
            }`}
          >
            {/* Hover background */}
            <div 
              className={`absolute inset-0 bg-gold/5 transition-transform duration-150 ease-out ${
                isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
              }`} 
            />
            
            {/* Centered content constraint */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex items-center justify-between pointer-events-none">
              {/* Text */}
              <h3 
                className={`relative z-10 font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tighter leading-none w-full text-left transition-all duration-150 ${
                  isActive 
                    ? 'text-transparent [-webkit-text-stroke:transparent] bg-clip-text bg-gradient-to-r from-gold to-gold/70' 
                    : 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:transparent] group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-gold/70'
                }`}
              >
                {d}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
