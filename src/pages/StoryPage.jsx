import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShieldCheck, Heart, Award, Beaker, Check } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function StoryPage() {
  return (
    <main className="bg-[#FAF7F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-3">
            THE PURELY PANEER STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#142E20] leading-tight">
            AS HONEST AS FRESH MILK.
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-[#395644] mt-4">
            Founded in Mogappair, Chennai on the simple belief that paneer should never be treated like industrial plastic.
          </p>
        </div>

        {/* Section 1: THE IDEA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-12 border-b border-[#E8DFC2]">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#387652] block mb-2">
              01 • THE IDEA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mb-4">
              Where Did Real Paneer Go?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#465A4E] leading-relaxed">
              <p>
                Have you ever fried store-bought paneer only for it to turn rubbery, chewy, or release mysterious water and white powder into your gravy?
              </p>
              <p>
                Most commercially packaged blocks prioritize one metric: <strong>long shelf life</strong>. To survive months of warehousing, they rely on chemical stabilizers, high heat treatment, and starch adulteration that completely destroys milk proteins.
              </p>
              <p>
                We started <strong>Purely Paneer</strong> to bring back the lost art of true Indian fresh paneer — soft as clouds, naturally fragrant, and made with nothing other than pure wholesome milk.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-[#EDE5D8]">
              <img
                src="/images/hero_paneer.jpg"
                alt="Pristine fresh block of Purely Paneer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: WHY PANEER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 border-b border-[#E8DFC2]">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-[#EDE5D8]">
              <img
                src="/images/craft_process.jpg"
                alt="Muslin cloth curdling process"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#387652] block mb-2">
              02 • WHY PANEER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mb-4">
              The Cornerstone of Vegetarian Protein
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#465A4E] leading-relaxed">
              <p>
                Paneer is not just a dish in Indian kitchens; it is a sacred source of complete dairy protein, calcium, and good fats for families and vegetarians.
              </p>
              <p>
                When made correctly, fresh paneer does not need to be fried to taste delicious — it can be eaten raw with a pinch of rock salt or tossed warm into a bowl. We believe Chennai homes deserve genuine nutrition, not shelf-stabilized substitutes.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: OUR FOOD TECHNOLOGIST */}
        <div className="bg-[#142E20] text-[#FFFDF9] rounded-3xl p-8 sm:p-14 my-16 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#A8C7B5] block mb-2">
              03 • OUR FOOD TECHNOLOGIST
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Scientific Precision Behind Every Cube
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#C4D5CB] leading-relaxed">
              <p>
                Purely Paneer is proudly founded and directed by a qualified <strong>Food Technologist</strong>.
              </p>
              <p>
                Every step of our production — from testing raw milk solids-not-fat (SNF) and acidity, to fine-tuning the exact curdling temperature and pressing time — is governed by food science.
              </p>
              <p>
                This ensures our paneer achieves optimal moisture retention, preventing the rubbery protein cross-linking that plagues factory products.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#234A35] text-xs">
              <span className="flex items-center gap-1.5 text-[#8FD6AD]">
                <Beaker className="w-4 h-4" /> Lab Hygiene Standards
              </span>
              <span className="flex items-center gap-1.5 text-[#8FD6AD]">
                <ShieldCheck className="w-4 h-4" /> FSSAI Certified Handling
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1B3C2B] p-6 rounded-2xl border border-[#2D5A42] flex flex-col justify-between">
            <div>
              <p className="font-serif italic text-lg text-[#E3EDE6] mb-3">
                "Real paneer is a living dairy art. You don't add fillers to milk; you respect the milk."
              </p>
              <p className="text-xs text-[#9BB3A5]">
                — Founder & Food Technologist, Purely Paneer (Mogappair)
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2D5A42]">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#539E72]">
                CHENNAI DAILY BATCHES
              </span>
            </div>
          </div>
        </div>

        {/* Section 4: QUALITY & PROCESS */}
        <div className="py-12 border-b border-[#E8DFC2]">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#387652] block mb-2">
              04 • QUALITY & PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20]">
              The Purely Paneer Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Tested Farm Milk",
                desc: "Every milk lot is verified for purity and fat richness before entering the kettle."
              },
              {
                title: "Muslin Straining",
                desc: "Gravity filtered through sanitary unbleached cheesecloth to maintain natural softness."
              },
              {
                title: "Zero Preservatives",
                desc: "No sodium benzoate, no alum, no starch thickeners, and no bleaching."
              },
              {
                title: "Made to Order",
                desc: "Prepared fresh for Chennai daily dispatch so you get peak morning freshness."
              }
            ].map((p, i) => (
              <div key={i} className="bg-[#FCFAF7] border border-[#DDD3C2] p-6 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-[#142E20] text-white flex items-center justify-center text-xs font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-base text-[#142E20] mb-2">{p.title}</h3>
                <p className="text-xs text-[#526458] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: OUR PROMISE */}
        <div className="py-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#387652] block mb-2">
            05 • OUR PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142E20] mb-4">
            If It Isn't Pure, We Don't Make It.
          </h2>
          <p className="text-sm sm:text-base text-[#465A4E] leading-relaxed mb-8">
            We promise never to cut corners for volume. As our brand grows across Chennai, our commitment to real milk, food technologist oversight, and honest taste will remain unchanged.
          </p>

          <a
            href={BRAND.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-8 py-4 rounded-xl text-xs font-bold tracking-wider transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
            <span>ORDER TODAY'S FRESH BATCH ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </main>
  );
}
