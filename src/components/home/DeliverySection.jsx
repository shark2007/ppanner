import React, { useState } from 'react';
import { MapPin, MessageCircle, Truck, Clock, ShieldCheck } from 'lucide-react';
import { BRAND, createWhatsAppDeliveryCheckLink } from '../../data/brand';

export default function DeliverySection() {
  const [areaInput, setAreaInput] = useState('');

  const handleDeliveryCheck = (e) => {
    e.preventDefault();
    const url = createWhatsAppDeliveryCheckLink(areaInput.trim());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F0] border-b border-[#EAE1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Delivery Details (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#142E20] text-[#FFFDF9] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#539E72]" />
                <span>CHENNAI DELIVERY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight">
                FRESHNESS, DELIVERED.
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-[#355340] mt-2">
                Handcrafted daily at our food unit in Mogappair, Chennai.
              </p>

              <p className="text-sm sm:text-base text-[#4E5F55] mt-4 max-w-xl leading-relaxed">
                Because our paneer is prepared fresh to order without chemical preservatives, orders and delivery availability are scheduled directly via WhatsApp. Contact us with your area in Chennai to arrange same-day or next-day fresh morning delivery.
              </p>

              {/* Delivery Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E8DFC2]">
                  <Truck className="w-5 h-5 text-[#2E7D32] mb-2" />
                  <p className="font-bold text-xs text-[#142E20]">Direct Dispatch</p>
                  <p className="text-[11px] text-[#55695D]">Cold-chain insulated dispatch from Mogappair</p>
                </div>
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E8DFC2]">
                  <Clock className="w-5 h-5 text-[#2E7D32] mb-2" />
                  <p className="font-bold text-xs text-[#142E20]">Made-to-Order Batches</p>
                  <p className="text-[11px] text-[#55695D]">Cut and sealed on the morning of dispatch</p>
                </div>
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E8DFC2]">
                  <ShieldCheck className="w-5 h-5 text-[#2E7D32] mb-2" />
                  <p className="font-bold text-xs text-[#142E20]">WhatsApp Confirmed</p>
                  <p className="text-[11px] text-[#55695D]">Direct communication on stock & timings</p>
                </div>
              </div>

              {/* Area check input */}
              <form onSubmit={handleDeliveryCheck} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="text"
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                  placeholder="Enter your Chennai area (e.g., Mogappair, Anna Nagar)"
                  className="flex-1 px-4 py-3 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none focus:border-[#142E20] focus:ring-1 focus:ring-[#142E20]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-5 py-3 rounded-xl text-xs font-bold tracking-wider transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
                  <span>CHECK ON WHATSAPP</span>
                </button>
              </form>
            </div>

            {/* Right Column: Mogappair Hub Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#142E20] text-[#FFFDF9] p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A8C7B5] block mb-2">
                  PRODUCTION HUB
                </span>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  Mogappair, Chennai
                </h3>
                <p className="text-xs text-[#C4D5CB] leading-relaxed mb-6">
                  Serving Mogappair, Anna Nagar, Nolambur, Ambattur, and surrounding Chennai neighborhoods. For other pin codes, please check delivery routes with our team via WhatsApp.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#26533A] text-xs text-[#E1EBE5]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#A8C7B5]">Operating Hours:</span>
                    <span className="font-semibold">Morning & Evening Batches</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A8C7B5]">Ordering Channel:</span>
                    <span className="font-semibold text-[#8FD6AD]">WhatsApp (+91 99525 11737)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A8C7B5]">Batch Guarantee:</span>
                    <span className="font-semibold text-white">100% Pure Milk</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#26533A]">
                <a
                  href={createWhatsAppDeliveryCheckLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-xl text-xs font-bold tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>CHECK DELIVERY AVAILABILITY</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
