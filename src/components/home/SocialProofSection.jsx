import React from 'react';
import { Quote, Star } from 'lucide-react';
import { BRAND } from '../../data/brand';

export default function SocialProofSection() {
  const { socialProof } = BRAND;

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-2">
            REAL COMMUNITY EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
            {socialProof.headline}
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#3E5848] mt-2">
            {socialProof.customerCountNotice}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialProof.testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#FCFAF7] border border-[#E6DCCF] rounded-2xl p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#A8C7B5] stroke-[1.5]" />
                  <div className="flex items-center gap-1 text-[#E28C37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#3E5145] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#F0E6D8] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#142E20]">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-[#697E71]">
                    {item.location}
                  </p>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#2F6546] bg-[#EFF6F1] px-2 py-1 rounded-sm">
                  {item.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
