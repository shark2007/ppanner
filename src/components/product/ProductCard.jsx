import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { createWhatsAppOrderLink } from '../../data/brand';

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.defaultSize || product.sizes[0]);

  // Find pricing for the currently selected size
  const activePricing = product.pricingDetails?.find(p => p.size === selectedSize) || { price: product.price };
  const whatsAppUrl = createWhatsAppOrderLink({
    product,
    quantity: 1,
    size: selectedSize
  });

  return (
    <div className="group relative bg-[#FCFAF7] border border-[#EBE3D5] hover:border-[#1E4330]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-lg">
      
      {/* Top Image & Badge */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F3EDE2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#142E20]/90 text-white backdrop-blur-xs">
            {product.category}
          </span>
          {product.badge && (
            <span className="hidden sm:inline-block text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FAF7F0] text-[#1E4330] border border-[#DCD3C3] shadow-2xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Overlay Tag */}
        <Link
          to={`/product/${product.slug}`}
          className="absolute inset-0 bg-transparent z-10"
          aria-label={`View ${product.name} details`}
        />
      </div>

      {/* Product Content Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wider uppercase font-medium text-[#486352] bg-[#EFF6F1] px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142E20] group-hover:text-[#1E4330] transition-colors leading-tight">
            <Link to={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#4E5F55] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Size Selection pills */}
        <div>
          <div className="flex items-center justify-between text-xs text-[#526458] mb-1.5">
            <span className="font-medium">Pack Size:</span>
            <span className="font-bold text-[#142E20]">{activePricing.price}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                    isSelected
                      ? 'bg-[#142E20] text-white border-[#142E20] shadow-2xs'
                      : 'bg-white text-[#2B3B31] border-[#DDD3C2] hover:border-[#142E20]'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons: View Product + Order on WhatsApp */}
        <div className="pt-3 border-t border-[#EFE7DA] flex items-center gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FAF7F0] hover:bg-[#F0E9DC] text-[#142E20] border border-[#DDD3C2] hover:border-[#142E20] py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider transition-colors"
          >
            <span>VIEW PRODUCT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#142E20] hover:bg-[#1E4330] text-white py-2.5 px-3 rounded-xl text-xs font-bold tracking-wider transition-all shadow-xs hover:shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#539E72] fill-current" />
            <span>ORDER</span>
          </a>
        </div>

      </div>
    </div>
  );
}
