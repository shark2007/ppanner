import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, ShieldCheck, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/common/Icons';
import { BRAND, createWhatsAppDeliveryCheckLink } from '../data/brand';

export default function ContactPage() {
  const [customMsg, setCustomMsg] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Mogappair');

  const handleCustomSend = (e) => {
    e.preventDefault();
    const text = customMsg.trim()
      ? `Hi Purely Paneer! ${customMsg}`
      : `Hi Purely Paneer! I have a question about your fresh paneer batches.`;
    const url = `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAreaCheck = (area) => {
    setSelectedNeighborhood(area);
    const url = createWhatsAppDeliveryCheckLink(area);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: "Why is ordering handled through WhatsApp?",
      a: "Because we prepare paneer fresh daily to order in Mogappair rather than storing pre-packaged stock. WhatsApp allows us to confirm exact morning availability, freshly weighed quantities, and instant delivery slots directly with you."
    },
    {
      q: "What areas in Chennai do you deliver to?",
      a: "Our hub is in Mogappair, Chennai. We actively fulfill orders across Mogappair, Anna Nagar, Nolambur, Ambattur, Koyambedu, and surrounding zones. Contact us to schedule route delivery for other locations."
    },
    {
      q: "How long does Purely Paneer stay fresh?",
      a: "Because it contains zero synthetic preservatives, we recommend keeping it refrigerated and consuming within 3–4 days of delivery for peak tenderness and sweet dairy aroma."
    },
    {
      q: "Can I place bulk orders for house parties or barbecues?",
      a: "Yes! Both our Fresh Paneer and Flavoured Paneer (Hariyali & Peri Peri) are popular for barbecues and get-togethers. Please message us 24 hours in advance on WhatsApp for party batches."
    }
  ];

  return (
    <main className="bg-[#FAF7F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-2">
            CONNECT WITH US
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#142E20] tracking-tight">
            CONTACT & ORDERS
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-[#3A5543] mt-3">
            Handcrafted in Mogappair, Chennai.
          </p>
          <p className="text-sm sm:text-base text-[#4E5F55] mt-4 leading-relaxed">
            Have a question about today's batch, delivery routes, or want to order? Connect with our team directly.
          </p>
        </div>

        {/* Contact Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct WhatsApp & Info (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Interactive WhatsApp Inquiry Box */}
            <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#142E20] mb-2">
                Send a Message on WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-[#506357] mb-6">
                Type your inquiry or order request below. It will open directly in WhatsApp with your message pre-loaded.
              </p>

              <form onSubmit={handleCustomSend} className="space-y-4">
                <textarea
                  rows={4}
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="e.g. Hi! I'd like to check if fresh paneer and Hariyali paneer are available for delivery tomorrow morning to Anna Nagar."
                  className="w-full px-4 py-3 rounded-2xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none focus:border-[#142E20] focus:ring-1 focus:ring-[#142E20] resize-none"
                />

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>CHAT WITH US ON WHATSAPP</span>
                  </button>

                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#FAF7F0] hover:bg-[#EFE8DC] text-[#142E20] border border-[#DDD3C2] px-5 py-3.5 rounded-xl text-xs font-semibold tracking-wider transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#E28C37]" />
                    <span>FOLLOW ON INSTAGRAM</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Chennai Area Quick-Check */}
            <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold text-[#142E20] mb-2">
                Popular Delivery Neighborhoods
              </h3>
              <p className="text-xs text-[#506357] mb-4">
                Tap your locality to instantly ask availability for your area:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {['Mogappair East', 'Mogappair West', 'Anna Nagar', 'Nolambur', 'Ambattur', 'Koyambedu', 'Maduravoyal'].map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => handleAreaCheck(area)}
                    className="text-xs px-3.5 py-2 rounded-xl bg-white border border-[#DDD3C2] hover:border-[#142E20] hover:bg-[#142E20] hover:text-white transition-all text-[#203126] font-medium"
                  >
                    📍 {area}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#142E20] text-[#FFFDF9] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A8C7B5] block mb-2">
                  OFFICIAL CONTACT
                </span>
                <h3 className="font-serif text-3xl font-bold mb-1">
                  PURELY PANEER
                </h3>
                <p className="font-serif italic text-sm text-[#D7E8DC] mb-6">
                  "As honest as fresh milk."
                </p>

                <div className="space-y-5 text-sm text-[#C4D5CB]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#539E72] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-base">Chennai – Mogappair</p>
                      <p className="text-xs text-[#9BB0A3]">Tamil Nadu, India</p>
                      <p className="text-xs text-[#9BB0A3] mt-1">Fresh batches crafted daily</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#539E72] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-base">{BRAND.phone}</p>
                      <p className="text-xs text-[#9BB0A3]">Direct WhatsApp Line</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-[#E28C37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-base">{BRAND.instagramHandle}</p>
                      <p className="text-xs text-[#9BB0A3]">Official Instagram Page</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#234A35] flex items-center gap-2 text-xs text-[#8FD6AD]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>FSSAI Certified Unit • Food Technologist Owned</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={BRAND.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-4 rounded-xl text-xs font-bold tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>START CHAT NOW</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Section */}
        <div className="mt-20 pt-14 border-t border-[#E8DFC2]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#387652] block mb-2">
              FREQUENT QUESTIONS
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#142E20]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-2xl p-6">
                <h3 className="font-serif font-bold text-base text-[#142E20] mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5F55] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
