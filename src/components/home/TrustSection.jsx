import React from 'react';
import { ShieldCheck, Award, Clock, Beaker, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/brand';

export default function TrustSection() {
  const pillars = [
    {
      title: "FSSAI CERTIFIED",
      desc: "Operating with verified food-safety licenses, clean handling, and strict hygiene testing at every phase.",
      icon: ShieldCheck,
      tag: "Food Safety"
    },
    {
      title: "FOOD TECHNOLOGIST OWNED",
      desc: "Founded & formulated by a qualified Food Technologist with deep scientific expertise in dairy chemistry and hygiene.",
      icon: Beaker,
      tag: "Scientific Rigour"
    },
    {
      title: "FRESHLY MADE DAILY",
      desc: "Batches are crafted fresh to order every morning in Mogappair, Chennai. Never preserved or sitting in chilled warehouses.",
      icon: Clock,
      tag: "Peak Tenderness"
    },
    {
      title: "QUALITY-FIRST PROCESS",
      desc: "We use only pure whole milk with natural coagulants. Zero artificial softeners, zero fillers, zero starch adulteration.",
      icon: Award,
      tag: "Pure Dairy"
    },
    {
      title: "100% VEGETARIAN",
      desc: "Ethically produced with food-grade microbial enzymes, strictly adhering to pristine vegetarian kitchen protocol.",
      icon: CheckCircle2,
      tag: "Pure & Ethical"
    }
  ];

  return (
    <section id="why-purely" className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-2">
            UNCOMPROMISING STANDARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
            WHY PURELY?
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#446050] mt-3">
            Real food, real science, no shortcuts.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`bg-[#FCFAF7] border border-[#E6DCCF] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#142E20] text-[#539E72] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-[#5A7363] bg-[#EFF6F1] px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142E20] tracking-wide mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4E5F55] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0E8DC] flex items-center gap-1.5 text-xs text-[#2B543D] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#387652]" />
                  <span>Purely Paneer Promise</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Chennai Mogappair Badge */}
          <div className="bg-[#142E20] text-[#FFFDF9] rounded-2xl p-6 sm:p-7 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A9C8B5] block mb-2">
                CHENNAI • LOCAL CRAFT
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">
                Crafted in Mogappair, Delivered Across Chennai
              </h3>
              <p className="text-xs sm:text-sm text-[#C4D5CB] leading-relaxed">
                We believe paneer should be cooked the day it is made. That is why our small-batch operations prioritize Chennai doorstep delivery over months on a grocery shelf.
              </p>
            </div>

            <div className="pt-5 border-t border-[#26533A] mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#E28C37] tracking-wider">
                100% PURE MILK
              </span>
              <a
                href={BRAND.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline hover:text-[#539E72] transition-colors"
              >
                Order Direct →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
