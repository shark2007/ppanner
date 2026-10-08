import React from 'react';
import { Link } from 'react-router-dom';

export default function PurelyLogo({ variant = 'dark', size = 'default', showTagline = true, isLink = true }) {
  const isLight = variant === 'light';
  
  const content = (
    <div className="flex items-center gap-3 group">
      {/* Official Brand Logo Icon */}
      <div className={`relative flex items-center justify-center rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
        isLight ? 'bg-white p-1 border border-white/20 shadow-md' : 'bg-transparent'
      } ${
        size === 'large' 
          ? 'w-14 h-14 sm:w-16 sm:h-16' 
          : size === 'small' 
          ? 'w-9 h-9' 
          : 'w-11 h-11'
      }`}>
        <img
          src="/images/icon.png"
          alt="Purely Paneer Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif tracking-[0.2em] font-extrabold transition-colors ${
          size === 'large' ? 'text-2xl sm:text-3xl' : size === 'small' ? 'text-lg' : 'text-xl'
        } ${isLight ? 'text-[#FFFDF9]' : 'text-[#142E20]'}`}>
          PURELY
        </span>
        <span className={`font-serif tracking-[0.26em] font-light transition-colors ${
          size === 'large' ? 'text-lg sm:text-xl' : size === 'small' ? 'text-xs' : 'text-sm'
        } ${isLight ? 'text-[#D6C6AE]' : 'text-[#387652]'}`}>
          PANEER
        </span>
        {showTagline && (
          <span className={`text-[9px] tracking-[0.28em] uppercase font-sans mt-0.5 font-medium ${
            isLight ? 'text-[#A8C2B3]' : 'text-[#7A8B80]'
          }`}>
            Chennai • Mogappair
          </span>
        )}
      </div>
    </div>
  );

  if (!isLink) {
    return content;
  }

  return (
    <Link to="/" className="inline-block" aria-label="Purely Paneer Home">
      {content}
    </Link>
  );
}
