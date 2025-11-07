"use client";
import { useState } from "react";
import { Home, Grid3X3, ShoppingCart, Heart, User } from "lucide-react";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", label: "Home", icon: <Home /> },
    { id: "categories", label: "Categories", icon: <Grid3X3 /> },
    { id: "cart", label: "Cart", icon: <ShoppingCart /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart /> },
    { id: "account", label: "Account", icon: <User /> },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={active === item.id ? "active" : ""}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}