import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Flame, Leaf } from 'lucide-react';
import { createWhatsAppOrderLink } from '../../data/brand';
import { PRODUCTS } from '../../data/products';

export default function FlavouredPaneerSection() {
  const hariyali = PRODUCTS.find((p) => p.slug === 'hariyali-paneer');
  const periPeri = PRODUCTS.find((p) => p.slug === 'peri-peri-paneer');

  const hariyaliWhatsApp = createWhatsAppOrderLink({
    product: hariyali,
    quantity: 1,
    size: '250g'
  });

  const periPeriWhatsApp = createWhatsAppOrderLink({
    product: periPeri,
    quantity: 1,
    size: '250g'
  });

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE4] border-b border-[#E3D9C7] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#142E20] text-[#FFFDF9] mb-4">
            <span>CHEF-CRAFTED MARINADES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
            MEET OUR FLAVOURED PANEER
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#355340] mt-3">
            TWO FLAVOURS. ONE DELICIOUS OBSESSION.
          </p>

          <p className="text-sm sm:text-base text-[#4E5F55] mt-4 max-w-xl mx-auto leading-relaxed">
            Freshly prepared artisanal paneer marinated in pure natural ingredients. Ready to pan-sear, skewer, or air-fry in minutes.
          </p>
        </div>

        {/* Side-by-Side Flavoured Paneer Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Hariyali Paneer */}
          <div className="bg-[#FCFAF7] rounded-3xl border border-[#D9CDBB] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            
            {/* Image banner */}
            <div className="relative aspect-16/11 overflow-hidden bg-[#E2ECE5]">
              <img
                src="/images/hariyali_paneer.jpg"
                alt="Fresh Hariyali Paneer marinated in vibrant mint and coriander"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#1E4D34] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-sm">
                <Leaf className="w-3.5 h-3.5 text-[#86D9A7]" />
                <span>FRESH HERBS</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#2D6646]">
                    SIGNATURE GREEN RECIPE
                  </span>
                  <span className="font-bold text-[#142E20] text-sm">₹170 / 250g</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142E20]">
                  Hariyali Paneer
                </h3>

                <p className="text-sm text-[#4E5F55] mt-3 leading-relaxed">
                  Aromatic, creamy and packed with fresh green flavours. Marinated in hand-crushed mint, fresh coriander, ginger, and roasted cumin. Zero artificial green food color.
                </p>

                {/* Flavour notes pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#EDF6F0] text-[#1D5137] border border-[#CDE5D6]">
                    Fresh
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#EDF6F0] text-[#1D5137] border border-[#CDE5D6]">
                    Aromatic
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#EDF6F0] text-[#1D5137] border border-[#CDE5D6]">
                    Creamy
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EAE0D1] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={hariyaliWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white py-3 px-4 rounded-xl text-xs font-bold tracking-wider transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
                  <span>ORDER ON WHATSAPP</span>
                </a>

                <Link
                  to="/product/hariyali-paneer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#FAF7F0] hover:bg-[#EFE8DC] text-[#142E20] border border-[#DDD3C2] py-3 px-4 rounded-xl text-xs font-semibold tracking-wider transition-colors"
                >
                  <span>DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Card 2: Peri Peri Paneer */}
          <div className="bg-[#FCFAF7] rounded-3xl border border-[#D9CDBB] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            
            {/* Image banner */}
            <div className="relative aspect-16/11 overflow-hidden bg-[#F5E2DC]">
              <img
                src="/images/peri_peri_paneer.jpg"
                alt="Spicy smoky Peri Peri Paneer cubes with roasted spices"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#B53D1B] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-[#FFAA8A]" />
                <span>SMOKY & SPICY</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#B53D1B]">
                    BOLD SPICE BLEND
                  </span>
                  <span className="font-bold text-[#142E20] text-sm">₹170 / 250g</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142E20]">
                  Peri Peri Paneer
                </h3>

                <p className="text-sm text-[#4E5F55] mt-3 leading-relaxed">
                  Bold, smoky and flavourful paneer for spice lovers. Generously coated in an artisanal rub of crushed birds eye chili, smoked paprika, roasted garlic, and citrus zest.
                </p>

                {/* Flavour notes pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#FDF0EC] text-[#9D3315] border border-[#F6D0C5]">
                    Bold
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#FDF0EC] text-[#9D3315] border border-[#F6D0C5]">
                    Smoky
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#FDF0EC] text-[#9D3315] border border-[#F6D0C5]">
                    Flavourful
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EAE0D1] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={periPeriWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white py-3 px-4 rounded-xl text-xs font-bold tracking-wider transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
                  <span>ORDER ON WHATSAPP</span>
                </a>

                <Link
                  to="/product/peri-peri-paneer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#FAF7F0] hover:bg-[#EFE8DC] text-[#142E20] border border-[#DDD3C2] py-3 px-4 rounded-xl text-xs font-semibold tracking-wider transition-colors"
                >
                  <span>DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
