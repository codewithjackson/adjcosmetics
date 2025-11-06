import "./globals.css";
import TopHeader from "./components/TopHeader";
import BottomNav from "./components/BottomNav";

export const metadata = {
  title: "ADJ Cosmetics & Emporium Services",
  description: "Premium imported cosmetics & emporium products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#b76e79" />
      </head>

      <body className="min-h-screen flex flex-col bg-[var(--offWhite)] text-[var(--charcoal)] font-sans relative antialiased selection:bg-[var(--roseGold)]/20">
        {/* === Top Header === */}
        <TopHeader />

        {/* === Page Content === */}
        <main className="flex-1 w-full max-w-[980px] mx-auto px-3 pt-[70px] pb-[120px] sm:px-4 fade-in-up">
          {children}
        </main>

        {/* === Bottom Navigation === */}
        <BottomNav />

        {/* === Safe Space for Mobile Floating Nav === */}
        <div className="h-[90px] sm:hidden" />
      </body>
    </html>
  );
}
