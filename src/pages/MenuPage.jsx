import React, { useState } from 'react';
import { Sparkles, MessageCircle, Info } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data/products';
import { BRAND } from '../data/brand';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Products' },
    { id: 'Classic Pure Paneer', label: 'Classic Pure' },
    { id: 'Flavoured Paneer', label: 'Flavoured Paneer' },
    { id: 'Protein Innovation', label: 'Desserts & Protein' },
  ];

  const filteredProducts = activeCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-[#FAF7F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#142E20] text-[#FFFDF9] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#539E72]" />
            <span>CHENNAI FRESH CATALOG</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#142E20] tracking-tight">
            OUR PANEER
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#395644] mt-2">
            Freshly made for your table.
          </p>

          <p className="text-sm sm:text-base text-[#4E5F55] mt-4 leading-relaxed">
            Crafted with 100% wholesome cow & buffalo milk, food-grade temperature controls, and zero preservatives. Select your desired pack size and order directly on WhatsApp.
          </p>
        </div>

        {/* Informational Freshness Notice */}
        <aside aria-label="Freshness notice" className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-2xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E2EDE6] text-[#1E4330] flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-[#3E5145]">
              <span className="font-bold text-[#142E20]">Direct-to-Kitchen Ordering:</span> We don't warehouse products for days. Batches are prepared fresh in Mogappair daily.
            </div>
          </div>

          <a
            href={BRAND.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142E20] hover:text-[#2C6244] underline shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#539E72] fill-current" />
            <span>Chat for custom bulk or party orders</span>
          </a>
        </aside>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#E8DFC2] mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-medium tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#142E20] text-white shadow-xs font-semibold'
                  : 'bg-white text-[#3E4F44] border border-[#DDD3C2] hover:border-[#142E20]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Custom Requirements Callout */}
        <div className="mt-16 bg-[#142E20] text-[#FFFDF9] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#A8C7B5] block mb-2">
            SPECIAL BATCHES & CATERING
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Need Bulk Orders or Custom Spicing?
          </h3>
          <p className="text-xs sm:text-sm text-[#C4D5CB] max-w-lg mx-auto mb-6 leading-relaxed">
            Planning a family gathering, house party, or healthy high-protein meal prep in Chennai? Message us on WhatsApp to customize your batch.
          </p>
          <a
            href={BRAND.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>CHAT ON WHATSAPP (+91 99525 11737)</span>
          </a>
        </div>

      </div>
    </main>
  );
}
