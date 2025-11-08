"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Camera } from "lucide-react";

/**
 * Temu-style TopHeader (rose-gold gradient, slim search bar, category row, banner slot)
 * - Replace the banner <img> src with your own file.
 * - Works responsively on mobile/phone and desktop.
 */

export default function TopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("All");
  const inputRef = useRef(null);

  const categories = [
    "All",
    "Women",
    "Home",
    "Men",
    "Sports",
    "Jewelry",
    "Industrial",
    "Kids",
    "Electronics",
    "Crafts",
    "Toys",
    "Bags",
    "Office",
    "Beauty",
    "Health",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      aria-label="Top header"
      className={`w-full left-0 top-0 z-50 select-none`}
      // gradient container background is on inner wrapper so easier to create translucent search bar
    >
      {/* === Top gradient block (left -> right) === */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--roseGold) 0%, rgba(235,212,198,0.85) 50%, rgba(255,238,235,0.7) 100%)",
        }}
      >
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          {/* Slim search bar row */}
          <div className="py-2">
            <div
              className={`relative w-full rounded-[8px] overflow-visible`}
              aria-hidden={false}
            >
              {/* Search bar container: semi-transparent soft theme color (gradient bottom opaque -> top transparent) */}
              <div
                className="w-full rounded-[8px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 60%)",
                  // faint glass overlay so gradient header shows through
                  padding: "6px",
                }}
              >
                <div
                  className="relative flex items-center w-full rounded-[8px] px-3 py-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {/* Left — placeholder text center-aligned visually */}
                  <input
                    ref={inputRef}
                    onFocus={() => {}}
                    className="flex-1 bg-transparent outline-none placeholder-white text-white text-[16px] leading-tight font-medium"
                    placeholder="Search on ADJ Cosmetics..."
                    aria-label="Search on ADJ Cosmetics"
                    style={{
                      // slight tighter letter spacing + antialiasing
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale",
                      letterSpacing: "0.2px",
                    }}
                  />

                  {/* Vertical white separator */}
                  <div
                    className="h-[28px] w-[1px] mx-3"
                    style={{ background: "rgba(255,255,255,0.22)" }}
                    aria-hidden
                  />

                  {/* camera icon small */}
                  <button
                    className="flex items-center justify-center p-1 rounded transition"
                    aria-label="Photo search"
                    title="Search by photo"
                  >
                    <Camera size={20} className="text-white/90" />
                  </button>

                  {/* magnifier circular button */}
                  <button
                    onClick={() => inputRef.current && inputRef.current.focus()}
                    className="ml-3 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      border: "2px solid rgba(255,255,255,0.85)",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                      background: "rgba(255,255,255,0.08)",
                    }}
                    aria-label="Execute search"
                    title="Search"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--roseGold)";
                      e.currentTarget.querySelector("svg").style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.querySelector("svg").style.color =
                        "rgba(255,255,255,0.95)";
                    }}
                  >
                    <Search size={20} className="text-white/95" />
                  </button>
                </div>

                {/* faint bottom white border for depth */}
                <div
                  className="w-full mt-[6px]"
                  style={{
                    height: "1px",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "1px",
                    marginTop: 6,
                  }}
                />
              </div>
            </div>
          </div>

          {/* === Category row (solid gradient background) === */}
          <div
            className="mt-3 -mb-0.5"
            style={{
              background:
                "linear-gradient(90deg, rgba(183,110,121,1) 0%, rgba(230,160,170,0.95) 50%, rgba(244,202,203,0.95) 100%)",
            }}
          >
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 px-3 py-3 min-w-max">
                {categories.map((cat) => {
                  const isActive = cat === active;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActive(cat)}
                      className={`relative px-4 py-2 rounded-[12px] whitespace-nowrap text-[14px] font-medium transition-all duration-200`}
                      style={{
                        color: "white",
                        background: isActive
                          ? "transparent"
                          : "rgba(255,255,255,0.08)",
                        boxShadow: isActive
                          ? "0 1px 0 rgba(255,255,255,0.12), 0 3px 10px rgba(0,0,0,0.12)"
                          : "none",
                        transform: isActive ? "translateY(-2px)" : "none",
                      }}
                      aria-current={isActive ? "true" : "false"}
                    >
                      <span>{cat}</span>

                      {/* active underline indicator (thin white line) */}
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-10 h-[2px]"
                          style={{ background: "white", borderRadius: 2 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Promotional Banner Section (stacked layout, replace img) === */}
      <div className="w-full bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-4">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              // micro-shadow for elevation
              boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
            }}
          >
            {/* Banner placeholder — replace src with your uploaded banner */}
            <a
              href="#"
              className="block transform transition-transform duration-300 hover:scale-[1.01]"
              aria-label="Main promo"
            >
              <img
                src="/img.webp"
                alt="ADJ promo banner"
                className="w-full h-[360px] sm:h-[420px] object-contain"
                style={{
                  // subtle overlay to keep brand feel
                  backgroundColor: "",
                }}
              />
            </a>

            {/* optional overlay glow + vignette for glass reflection */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(1200px 400px at 10% 10%, rgba(255,255,255,0.06), transparent 15%), linear-gradient(180deg, rgba(0,0,0,0.02), transparent 30%)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}