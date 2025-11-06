'use client';
import { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search, Camera } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 container-max">
        {/* Left - Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-rose-500 md:hidden"
        >
          <Menu size={26} />
        </button>

        {/* Center - Logo */}
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-[#b76e79]">
          ADJ<span className="text-[#4b2e39]"> Cosmetics</span>
        </h1>

        {/* Right - Cart */}
        <button className="text-[#4b2e39]">
          <ShoppingBag size={24} />
        </button>
      </nav>

      {/* Search bar */}
      <div className="px-4 md:px-8 mt-2 mb-3">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-rose-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-rose-300 transition">
          <Search className="text-rose-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          <Camera className="text-gray-500" size={20} />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="overflow-x-auto scrollbar-hide border-t border-rose-100">
        <div className="flex gap-4 px-4 py-2 text-sm text-gray-700 font-medium">
          {['Skincare', 'Makeup', 'Fragrance', 'Haircare', 'Accessories', 'Offers', 'New In'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full hover:bg-rose-100 transition text-[#4b2e39] whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-md py-4 z-40 md:hidden animate-fadeInDown">
          <ul className="flex flex-col gap-3 px-6 text-gray-800 font-medium">
            <li><a href="#" className="hover:text-rose-500">Home</a></li>
            <li><a href="#" className="hover:text-rose-500">Shop</a></li>
            <li><a href="#" className="hover:text-rose-500">About Us</a></li>
            <li><a href="#" className="hover:text-rose-500">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
