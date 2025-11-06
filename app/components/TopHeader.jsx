"use client";
import { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";

export default function TopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-6 max-w-[980px] mx-auto">
        {/* === Logo === */}
        <div className="text-lg sm:text-xl font-bold tracking-wide text-[var(--deepPlum)] whitespace-nowrap">
          ADJ<span className="text-[var(--roseGold)]"> Cosmetics</span>
        </div>

        {/* === Search Bar === */}
        <div className="flex-1 max-w-[380px]">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-[#f9f9f9] border border-gray-200 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--roseGold)] focus:border-[var(--roseGold)] placeholder:text-gray-400 shadow-sm"
            />
          </div>
        </div>

        {/* === Cart === */}
        <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200">
          <ShoppingCart
            size={22}
            className="text-[var(--deepPlum)] hover:text-[var(--roseGold)] transition-colors"
          />
          <span className="absolute -top-[3px] -right-[3px] bg-[var(--roseGold)] text-white text-[10px] px-[5px] py-[1px] rounded-full font-semibold">
            2
          </span>
        </button>
      </div>
    </header>
  );
}
