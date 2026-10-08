import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/brand';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#EAE1D2]">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8F2EC] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F3ECE0] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Brand Lead-in */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase bg-[#142E20] text-[#FFFDF9] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#539E72]" />
            <span>PURELY PANEER</span>
          </div>

          <span className="font-serif italic text-sm sm:text-base text-[#387652] tracking-wide font-medium">
            "AS HONEST AS FRESH MILK."
          </span>

          <span className="text-xs text-[#6C7E73] font-mono tracking-wider hidden md:inline">
            • Fresh Daily in Mogappair, Chennai
          </span>
        </motion.div>

        {/* Main Grid: Headline Left + Hero Photography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Statement (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#142E20] leading-[1.08] tracking-tight">
              PURE PANEER.<br />
              <span className="font-serif italic font-medium text-[#2F6546]">
                NOT JUST PANEER.
              </span>
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#395344] mt-4 font-normal">
              "Freshly made. Honestly pure."
            </p>

            <p className="text-base sm:text-lg text-[#3C4E43] mt-3 max-w-xl leading-relaxed">
              100% pure paneer, freshly made in Mogappair, Chennai with quality farm milk and food-grade scientific processes. No starch, no chemical softeners, no compromise.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 w-full sm:w-auto">
              <a
                href={BRAND.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#142E20] hover:bg-[#1C412D] text-[#FFFDF9] px-7 py-4 rounded-xl text-sm font-bold tracking-wider transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-[#539E72] fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 bg-[#FCFAF7] hover:bg-[#F3ECE0] text-[#142E20] border border-[#DDD3C2] hover:border-[#142E20] px-6 py-4 rounded-xl text-sm font-semibold tracking-wider transition-all"
              >
                <span>VIEW OUR MENU</span>
                <ArrowRight className="w-4 h-4 text-[#142E20]" />
              </Link>
            </div>

            {/* Trust Indicators Pill Grid */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-8 pt-6 border-t border-[#E8DFC2] w-full">
              {[
                { label: "FRESH DAILY", note: "Mogappair Batch" },
                { label: "FSSAI CERTIFIED", note: "Certified Unit" },
                { label: "FOOD TECHNOLOGIST OWNED", note: "Dairy Science" },
                { label: "100% REAL MILK", note: "Zero Starch" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-[#FCFAF7] border border-[#D5CABB] px-3.5 py-1.5 rounded-full text-xs text-[#142E20] shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                  <span className="font-bold tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Paneer Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F3EDE2] group">
              <img
                src="/images/hero_paneer.jpg"
                alt="Fresh Artisanal Purely Paneer block and cut cubes"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Float badge bottom left */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#142E20]/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-[#FFFDF9] flex items-center justify-between shadow-lg">
                <div>
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-[#A9C8B5] font-semibold">
                    Signature Batch
                  </span>
                  <span className="font-serif text-base font-bold text-white">
                    Classic Fresh Paneer
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] text-[#D6C6AE]">From</span>
                  <span className="text-sm font-bold text-white">₹140 / 250g</span>
                </div>
              </div>
            </div>

            {/* Floating stamp tag top right */}
            <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#FFFDF9] border border-[#DDD3C2] text-[#142E20] py-2 px-3.5 rounded-xl shadow-md rotate-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E05A31] animate-ping" />
              <span className="font-serif text-xs font-bold tracking-wider">
                TODAY'S CHENNAI BATCH
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
