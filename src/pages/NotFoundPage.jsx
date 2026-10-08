import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function NotFoundPage() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#FAF7F0] px-4 py-16 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        
        {/* Emblem */}
        {/* Official Brand Logo */}
        <div className="w-24 h-24 rounded-3xl bg-white border border-[#DDD3C2] shadow-xl p-2 flex items-center justify-center mb-6">
          <img
            src="/images/icon.png"
            alt="Purely Paneer"
            className="w-full h-full object-contain"
          />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#387652] mb-2">
          PAGE NOT FOUND
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#142E20] leading-tight mb-4">
          THIS PAGE ISN'T AS FRESH AS OUR PANEER.
        </h1>

        <p className="text-sm text-[#4E5F55] leading-relaxed mb-8">
          The link you followed seems to have expired or moved. Our fresh paneer batches in Mogappair, however, are made fresh daily!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>

          <a
            href={BRAND.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3ECE0] text-[#142E20] border border-[#DDD3C2] px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
            <span>ORDER ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </main>
  );
}
