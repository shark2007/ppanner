import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Beaker, Check } from 'lucide-react';
import { BRAND } from '../../data/brand';

export default function BrandIntroSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Left Photo + Right Story Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Photography (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#EDE6D8]">
              <img
                src="/images/craft_process.jpg"
                alt="Artisanal paneer curds being strained through pure muslin cloth"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#D7E8DC] block">
                  CRAFT & HYGIENE
                </span>
                <span className="font-serif text-lg font-bold">
                  Food Technologist Monitored Batches
                </span>
              </div>
            </div>

            {/* Sub-card floating badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#FCFAF7] border border-[#DDD3C2] p-4 rounded-2xl shadow-xl max-w-xs items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#142E20] flex items-center justify-center shrink-0">
                <Beaker className="w-5 h-5 text-[#539E72]" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#142E20]">Food Science Meets Tradition</p>
                <p className="text-[#5A6D61]">Controlled curdling temp for softest texture</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652]">
                OUR PHILOSOPHY
              </span>
              <div className="w-8 h-[1px] bg-[#387652]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] leading-tight">
              AS HONEST AS FRESH MILK.
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#3D5647] mt-3">
              No adulterants. No prolonged shelf stabilizers. Just wholesome real dairy.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#475A4E] mt-6 leading-relaxed">
              <p>
                Most supermarket paneer you buy has sat in chilled distribution networks for weeks, treated with food stabilizers or bulked with starches to keep it artificially intact.
              </p>
              <p>
                At <strong>Purely Paneer</strong>, our entire philosophy is built on freshness and honest craft. Founded in Mogappair, Chennai by a qualified <strong>Food Technologist</strong>, our paneer is prepared daily from pristine whole milk and delivered directly to your kitchen.
              </p>
            </div>

            {/* Key Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8 w-full">
              {[
                "Crafted only from whole cow/buffalo dairy milk",
                "Curdled at exact temperature for velvet softness",
                "Naturally pressed in clean food-grade muslin",
                "Zero artificial whitening agents or corn starch",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#27382F] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#E3EFE7] text-[#1E4330] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/story"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#142E20] hover:text-[#285A3C] transition-colors border-b-2 border-[#142E20] pb-1 group"
            >
              <span>READ OUR FULL STORY & CRAFT PROCESS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
