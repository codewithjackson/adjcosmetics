// app/components/MainContent.jsx
export default function MainContent() {
  return (
    <section className="pt-6 pb-20">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Hero placeholder */}
        <div className="rounded-xl glass p-4 mb-4">
          <h2 className="text-lg font-semibold text-[var(--deepPlum)]">
            Hero Banner
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Large rotating promo banners will go here.
          </p>
        </div>

        {/* Feature bar */}
        <div className="flex gap-3 overflow-x-auto py-2 mb-4 scrollbar-hide">
          {[
            { t: "Free Shipping", s: "Orders GH₵100+" },
            { t: "Secure Payment", s: "Mobile Money & Bank" },
            { t: "Pre-Order Air/Sea", s: "Imported items" },
          ].map((f) => (
            <div
              key={f.t}
              className="min-w-[180px] glass px-4 py-3 rounded-xl flex-shrink-0"
            >
              <div className="text-sm font-semibold text-[var(--deepPlum)]">
                {f.t}
              </div>
              <div className="text-xs text-gray-600 mt-1">{f.s}</div>
            </div>
          ))}
        </div>

        {/* Simple product grid placeholder */}
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-100" />
              <div className="p-3">
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-3" />
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[var(--deepPlum)]">
                    GH₵{(20 + i).toFixed(2)}
                  </div>
                  <button className="px-3 py-1 rounded-full bg-[var(--roseGold)] text-white text-xs">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
