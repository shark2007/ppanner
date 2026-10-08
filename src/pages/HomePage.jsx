import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Hero from '../components/home/Hero';
import BrandIntroSection from '../components/home/BrandIntroSection';
import FlavouredPaneerSection from '../components/home/FlavouredPaneerSection';
import TrustSection from '../components/home/TrustSection';
import ProcessSection from '../components/home/ProcessSection';
import DeliverySection from '../components/home/DeliverySection';
import SocialProofSection from '../components/home/SocialProofSection';
import InstagramSection from '../components/home/InstagramSection';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data/products';

export default function HomePage() {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Editorial Brand Intro ("AS HONEST AS FRESH MILK") */}
      <BrandIntroSection />

      {/* 3. Catalog / Menu Preview Section */}
      <section className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE1D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FRESH BATCH CATALOG</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
                OUR PANEER
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#3E5848] mt-2">
                Freshly made for your table.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#142E20] hover:text-[#2F6546] transition-colors border-b-2 border-[#142E20] pb-1 group self-start sm:self-auto"
            >
              <span>EXPLORE FULL MENU & SIZES</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Flavoured Paneer Showcase */}
      <FlavouredPaneerSection />

      {/* 5. Trust Section ("WHY PURELY?") */}
      <TrustSection />

      {/* 6. Process Section ("THE PURE PROCESS") */}
      <ProcessSection />

      {/* Community Recipes Callout */}
      <section className="py-14 sm:py-18 bg-[#F3ECE0] border-b border-[#E3D8C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#387652] block mb-2">
                COOK WITH PURELY PANEER
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#142E20]">
                Community Recipes & Dish Ratings
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5F55] mt-3 leading-relaxed">
                Discover sizzling tandoori skewers, 10-minute protein bowls, and submit your own home recipes with photos and 5-star community reviews.
              </p>
            </div>
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-7 py-4 rounded-2xl text-xs font-bold tracking-wider transition-all shadow-md shrink-0 hover:-translate-y-0.5"
            >
              <span>EXPLORE & SUBMIT RECIPES</span>
              <ArrowRight className="w-4 h-4 text-[#539E72]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Delivery & Location Section */}
      <DeliverySection />

      {/* 8. Social Proof Section */}
      <SocialProofSection />

      {/* 9. Instagram Community Section */}
      <InstagramSection />

    </main>
  );
}
