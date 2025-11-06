"use client";
import { useState } from "react";
import {
  Home,
  Grid3X3,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "categories", label: "Categories", icon: <Grid3X3 className="w-5 h-5" /> },
    { id: "cart", label: "Cart", icon: <ShoppingCart className="w-5 h-5" /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart className="w-5 h-5" /> },
    { id: "account", label: "Account", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[min(980px,94%)]">
      {/* === Subtle glowing reflection === */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-gradient-to-t from-[var(--roseGold)]/20 to-transparent blur-lg rounded-full opacity-70 pointer-events-none"></div>

      {/* === Floating Glass Bar === */}
      <div className="relative bg-white/70 backdrop-blur-lg border border-white/30 shadow-lg rounded-3xl flex justify-between items-center px-4 py-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center flex-1 gap-0.5 py-2 transition-all duration-200 ${
              active === item.id
                ? "text-[var(--roseGold)] scale-105"
                : "text-gray-600 hover:text-[var(--roseGold)]"
            }`}
          >
            <span
              className={`transition-transform duration-200 ${
                active === item.id ? "translate-y-[-2px]" : "translate-y-0"
              }`}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
