import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram } from '../common/Icons';
import { BRAND } from '../../data/brand';

export default function InstagramSection() {
  const posts = [
    {
      image: "/images/hero_paneer.jpg",
      caption: "Morning fresh paneer batch ready for dispatch in Mogappair.",
      tag: "#100PurePaneer"
    },
    {
      image: "/images/hariyali_paneer.jpg",
      caption: "Mint & fresh coriander infusion. Zero artificial green food color.",
      tag: "#HariyaliPaneer"
    },
    {
      image: "/images/lifestyle_tikka.jpg",
      caption: "Weekend paneer tikka skewers with charred vegetables and chaat masala.",
      tag: "#PaneerTikka"
    },
    {
      image: "/images/peri_peri_paneer.jpg",
      caption: "Smoky spicy Peri Peri paneer cubes ready for pan-searing.",
      tag: "#PeriPeriPaneer"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F5EFE4] border-b border-[#E1D6C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] mb-2">
              <Instagram className="w-4 h-4 text-[#E05A31]" />
              <span>@purely_paneer</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
              FOLLOW THE PURELY JOURNEY
            </h2>
            <p className="font-serif italic text-base text-[#465E50] mt-2">
              Fresh batch updates, cooking ideas, and behind-the-scenes from our kitchen.
            </p>
          </div>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-5 py-3 rounded-xl text-xs font-bold tracking-wider transition-all self-start sm:self-auto shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#E28C37]" />
            <span>FOLLOW US ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#E7DDD0] shadow-xs block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#142E20]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center">
                  <Instagram className="w-5 h-5 text-[#E28C37]" />
                  <span className="text-[10px] tracking-wider uppercase font-mono text-[#A8C7B5]">
                    {post.tag}
                  </span>
                </div>
                <p className="text-xs text-[#FAF7F0] line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-[10px] font-bold tracking-wider underline">
                  View on Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
