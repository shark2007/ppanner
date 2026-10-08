import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon as Instagram } from '../common/Icons';
import PurelyLogo from '../common/PurelyLogo';
import { BRAND } from '../../data/brand';

export default function Footer() {
  return (
    <footer className="bg-[#122419] text-[#E7DFD1] pt-16 pb-12 border-t border-[#1C3A29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#214330]">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <PurelyLogo variant="light" size="large" />
            
            <p className="font-serif italic text-[#C7BCAB] text-lg mt-2">
              "AS HONEST AS FRESH MILK."
            </p>
            
            <p className="text-sm text-[#A9BAAF] leading-relaxed max-w-md">
              Fresh paneer crafted daily in Mogappair, Chennai with 100% pure whole milk and food-grade scientific care. Owned and formulated by a Food Technologist. No chemical preservatives, no starch fillers — just pure dairy goodness.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={BRAND.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#23523A] hover:bg-[#2C6648] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#539E72] fill-current" />
                WhatsApp Us
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1C3526] hover:bg-[#264834] text-[#FAF7F0] px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-colors border border-[#2D543D]"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E28C37]" />
                @purely_paneer
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#8CA094] font-semibold mb-2">
              EXPLORE
            </h4>
            <Link to="/" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Our Paneer Catalog
            </Link>
            <Link to="/story" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Our Story & Philosophy
            </Link>
            <Link to="/recipes" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Community Recipes & Ratings
            </Link>
            <Link to="/why-purely" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Why Purely Paneer
            </Link>
            <a href="/#process" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              The Pure Process
            </a>
            <Link to="/contact" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Contact & Mogappair Delivery
            </Link>
            <Link to="/admin" className="text-sm text-[#D7E2DC] hover:text-white transition-colors">
              Admin & Recipe Studio
            </Link>
            <button
              type="button"
              onClick={() => {
                sessionStorage.removeItem('purely_paneer_splash_shown');
                window.location.href = '/?intro=true';
              }}
              className="text-left text-xs text-[#8FD6AD] hover:text-white transition-colors flex items-center gap-1.5 pt-2 font-medium"
            >
              <span>✨ Replay Brand Intro</span>
            </button>
          </div>

          {/* Col 3: Direct Ordering & Location (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#8CA094] font-semibold mb-1">
              CHENNAI UNIT
            </h4>

            <div className="flex items-start gap-3 text-sm text-[#C4D3CB]">
              <MapPin className="w-4 h-4 text-[#539E72] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Mogappair, Chennai</p>
                <p className="text-xs text-[#9BB0A3]">Tamil Nadu, India</p>
                <p className="text-xs text-[#9BB0A3] mt-0.5">Fresh batches prepared daily to order</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#C4D3CB]">
              <Phone className="w-4 h-4 text-[#539E72] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{BRAND.phone}</p>
                <p className="text-xs text-[#9BB0A3]">WhatsApp Orders & Enquiries</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#8BA496] bg-[#172D20] p-3 rounded-lg border border-[#234532]">
              <ShieldCheck className="w-4 h-4 text-[#539E72] shrink-0" />
              <span>FSSAI Certified Unit • 100% Pure Milk • Vegetarian</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9183]">
          <p>© 2026 Purely Paneer. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Freshly Made in Chennai with <Heart className="w-3.5 h-3.5 text-[#E05A31] fill-current" /> by Food Technologists
          </p>
        </div>
      </div>
    </footer>
  );
}
