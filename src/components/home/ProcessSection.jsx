import React from 'react';
import { BRAND } from '../../data/brand';

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F6F0E6] border-b border-[#E3D8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-2">
              HONEST ARTISANAL CRAFT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
              THE PURE PROCESS
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#3A5644] mt-2">
              From fresh farm milk to your dining table in 5 simple, scientific steps.
            </p>
          </div>

          <div className="text-xs text-[#526659] max-w-xs">
            Small batches made every day. No chemical expedients, just traditional cheesecloth curdling with food-technologist precision.
          </div>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {BRAND.processSteps.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#387652] group-hover:text-[#142E20] transition-colors block mb-4">
                  {item.step}
                </span>

                <h3 className="font-serif text-base font-bold text-[#142E20] tracking-wider mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#516358] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-full h-1 bg-[#EBE1D0] group-hover:bg-[#387652] transition-colors rounded-full mt-6" />
            </div>
          ))}
        </div>

        {/* Real Production Imagery Spotlight */}
        <div className="mt-14 bg-[#142E20] text-[#FFFDF9] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-8 sm:p-12">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#A8C7B5] block mb-2">
              HYGIENIC CLOTH CURDLING
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Pillow-Soft Whey Retention
            </h3>
            <p className="text-sm text-[#C4D5CB] leading-relaxed mb-6">
              Unlike industrial high-pressure extrusion that produces rubbery, dry blocks, our paneer is gravity-drained and gently pressed in natural muslin cloth. This seals in sweet whey moisture for unmistakable tenderness.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#D8E6DE]">
              <span className="flex items-center gap-1.5 font-semibold text-[#8FD6AD]">
                ✓ Zero Starch Adulterants
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-[#8FD6AD]">
                ✓ Real Milk Only
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 h-72 sm:h-96 relative">
            <img
              src="/images/craft_process.jpg"
              alt="Artisanal paneer curds being drained naturally"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
