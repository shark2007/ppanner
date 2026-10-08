import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Beaker, Clock, Award, CheckCircle2, 
  XCircle, Check, MessageCircle, ArrowRight, Sparkles
} from 'lucide-react';
import { BRAND } from '../data/brand';

export default function WhyPurelyPage() {
  const comparison = [
    {
      feature: "Core Ingredient",
      purely: "100% Whole Farm Cow & Buffalo Milk",
      commercial: "Reconstituted milk powder, skimmed solids, vegetable fats"
    },
    {
      feature: "Chemical Preservatives",
      purely: "Zero preservatives, zero stabilizers",
      commercial: "Added sulfites, sodium benzoate, calcium propionate"
    },
    {
      feature: "Fillers & Adulterants",
      purely: "Zero starch, zero flour, zero bleaching agents",
      commercial: "Corn starch, potato starch to artificially increase weight"
    },
    {
      feature: "Coagulation Technique",
      purely: "Food Technologist precise low-shear citric coagulation",
      commercial: "High-pressure chemical acid curds"
    },
    {
      feature: "Texture & Tenderness",
      purely: "Pillow-soft, sweet milk fragrance, melts effortlessly",
      commercial: "Rubbery, squeaky, hardens rapidly when cooked"
    },
    {
      feature: "Freshness Window",
      purely: "Made daily to order in Mogappair, Chennai",
      commercial: "Chilled for 30–60 days in industrial warehouses"
    },
    {
      feature: "Kitchen Supervision",
      purely: "Overseen directly by a qualified Food Technologist",
      commercial: "Mass factory automation without artisanal craft"
    }
  ];

  return (
    <main className="bg-[#FAF7F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#142E20] text-[#FFFDF9] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#539E72]" />
            <span>UNCOMPROMISING STANDARDS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#142E20] tracking-tight">
            WHY PURELY?
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#385643] mt-3">
            Real food, real science, no shortcuts.
          </p>

          <p className="text-sm sm:text-base text-[#4E5F55] mt-4 leading-relaxed">
            In an era where supermarket shelves are flooded with preserved, rubbery blocks that last for months, Purely Paneer was born in Mogappair, Chennai to restore what paneer is truly meant to be: pure, honest, whole milk protein crafted with scientific hygiene.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {BRAND.trustPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#142E20] text-[#539E72] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#387652] bg-[#E9F3ED] px-2.5 py-1 rounded-full font-semibold">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#142E20] mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4E5F55] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EDE4D5] flex items-center gap-2 text-xs text-[#2B543D] font-medium">
                <Check className="w-4 h-4 text-[#2E7D32]" />
                <span>Verified Fresh Batch Promise</span>
              </div>
            </div>
          ))}

          {/* Chennai Mogappair Food Unit Card */}
          <div className="bg-[#142E20] text-[#FFFDF9] rounded-3xl p-7 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A8C7B5] block mb-2">
                CHENNAI • LOCAL FRESHNESS
              </span>
              <h3 className="font-serif text-2xl font-bold mb-3">
                Crafted in Mogappair Daily
              </h3>
              <p className="text-xs sm:text-sm text-[#C4D5CB] leading-relaxed">
                We believe paneer should be cooked the day it is made. That is why our small-batch operations prioritize Chennai doorstep delivery over months on a grocery shelf.
              </p>
            </div>

            <div className="pt-5 border-t border-[#26533A] mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#E28C37] tracking-wider">
                100% PURE MILK
              </span>
              <a
                href={BRAND.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline hover:text-[#539E72] transition-colors"
              >
                Order Direct on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Comparison Table: Purely Paneer vs Commercial Store Blocks */}
        <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl p-6 sm:p-10 shadow-sm mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-2">
              THE HONEST TRUTH
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#142E20]">
              Purely Paneer vs Commercial Packaged Paneer
            </h2>
            <p className="text-xs sm:text-sm text-[#506357] mt-2">
              See why food lovers, chefs, and health-conscious families in Chennai switch to Purely Paneer.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#DDD3C2] text-[#142E20]">
                  <th className="py-3.5 px-4 font-serif font-bold w-1/4">Metric</th>
                  <th className="py-3.5 px-4 font-serif font-bold text-[#142E20] bg-[#EAF2ED] rounded-t-xl w-3/8">
                    ✨ Purely Paneer (Mogappair)
                  </th>
                  <th className="py-3.5 px-4 font-serif font-bold text-[#6D7F73] w-3/8">
                    Standard Commercial Blocks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE7D8]">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F9F5EE] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#142E20]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-[#1E4330] font-medium bg-[#EAF2ED]/60 flex-1">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{row.purely}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-[#66776C]">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-[#B53D1B] shrink-0 mt-0.5" />
                        <span>{row.commercial}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scientific Food Technologist Standard */}
        <div className="bg-[#142E20] text-[#FFFDF9] rounded-3xl p-8 sm:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#A8C7B5] block mb-2">
              FOOD SCIENCE PRECISION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Formulated by a Food Technologist
            </h2>
            <p className="text-sm text-[#C4D5CB] leading-relaxed mb-6">
              Unlike cottage operations or industrial mega-factories, every batch at Purely Paneer is managed through exact food chemistry. Milk solids-not-fat (SNF), pasteurization temperatures, gentle acidification, and clean-cloth moisture retention are monitored for tender whey sweetness.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-[#1B3C2B] px-3.5 py-1.5 rounded-full border border-[#2D5A42] text-[#8FD6AD]">
                <Beaker className="w-4 h-4" /> Lab Hygiene Testing
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#1B3C2B] px-3.5 py-1.5 rounded-full border border-[#2D5A42] text-[#8FD6AD]">
                <ShieldCheck className="w-4 h-4" /> FSSAI Food Safety Standards
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center sm:items-start bg-[#1B3C2B] p-6 sm:p-8 rounded-2xl border border-[#2D5A42] text-center sm:text-left">
            <span className="text-xs text-[#8FD6AD] font-bold uppercase tracking-wider mb-2">
              READY TO TASTE THE DIFFERENCE?
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Order Today's Fresh Chennai Batch
            </h3>
            <a
              href={BRAND.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-6 rounded-xl text-xs font-bold tracking-wider shadow-md transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ORDER ON WHATSAPP (+91 99525 11737)</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
