// app/layout.jsx
import "./globals.css";
import BottomNav from "./components/BottomNav";

export const metadata = {
  title: "Your App",
  description: "Bestie app layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[var(--offWhite)] text-[var(--charcoal)]">
        <div className="pb-16"> {/* gives space so content isn't hidden behind bottom nav */}
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}