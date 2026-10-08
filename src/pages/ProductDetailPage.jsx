import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowLeft, ShieldCheck, Check, Clock, Sparkles, Minus, Plus } from 'lucide-react';
import { PRODUCTS, getProductBySlug } from '../data/products';
import { createWhatsAppOrderLink, BRAND } from '../data/brand';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  // If product not found
  if (!product) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl font-bold text-[#142E20] mb-3">Product Not Found</h1>
        <p className="text-sm text-[#4E5F55] mb-6">The paneer batch you are looking for is currently unavailable.</p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-[#142E20] text-white px-5 py-2.5 rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </Link>
      </main>
    );
  }

  const [selectedSize, setSelectedSize] = useState(product.defaultSize || product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  // Get pricing for current size
  const activePricing = product.pricingDetails?.find((p) => p.size === selectedSize) || { price: product.price };

  // Generate dynamic WhatsApp link
  const whatsAppUrl = createWhatsAppOrderLink({
    product,
    quantity,
    size: selectedSize,
  });

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, Math.min(20, prev + delta)));
  };

  return (
    <main className="bg-[#FAF7F0] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6B7E72] mb-8">
          <Link to="/" className="hover:text-[#142E20] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/menu" className="hover:text-[#142E20] transition-colors">Menu</Link>
          <span>/</span>
          <span className="text-[#142E20] font-semibold">{product.name}</span>
        </nav>

        {/* Product Details Grid: Left Gallery + Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image Gallery (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-[#E5DAC8] bg-[#F1EAE0] shadow-md">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#142E20]/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                {product.category}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img
                        ? 'border-[#142E20] scale-102 shadow-xs'
                        : 'border-[#DDD3C2] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Mini Banner */}
            <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-2xl p-4 mt-2 grid grid-cols-2 gap-3 text-xs text-[#2A4434]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>FSSAI Certified Unit</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Mogappair Fresh Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ordering Configuration (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Product Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-[#2D6646] bg-[#EFF6F1] px-2.5 py-1 rounded-sm">
                  {product.badge || 'Artisanal Batch'}
                </span>
                <span className="text-xs text-[#7A8F82]">Chennai Only</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20] tracking-tight mb-2">
                {product.name}
              </h1>

              {/* Price display */}
              <div className="flex items-baseline gap-3 my-4">
                <span className="font-serif text-3xl font-extrabold text-[#142E20]">
                  {activePricing.price}
                </span>
                <span className="text-xs text-[#5E7265]">
                  for {selectedSize} (Taxes included)
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#3E5145] leading-relaxed mb-6">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-2.5">
                  Available Pack Sizes
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    const priceInfo = product.pricingDetails?.find((p) => p.size === size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`flex flex-col items-start px-4 py-2.5 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'bg-[#142E20] text-white border-[#142E20] shadow-sm'
                            : 'bg-white text-[#203126] border-[#DDD3C2] hover:border-[#142E20]'
                        }`}
                      >
                        <span className="font-bold text-sm">{size}</span>
                        {priceInfo && (
                          <span className={`text-[10px] ${isSelected ? 'text-[#D7E8DC]' : 'text-[#64776B]'}`}>
                            {priceInfo.price}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-2.5">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center border border-[#DDD3C2] bg-white rounded-xl overflow-hidden p-1">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F3ECE0] text-[#142E20] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-sm text-[#142E20]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F3ECE0] text-[#142E20] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-xs text-[#627568]">
                    Total Pack: {quantity * (parseInt(selectedSize) || 1)} {selectedSize.includes('Jar') ? 'Jars' : ''}
                  </span>
                </div>
              </div>

              {/* Order On WhatsApp CTA */}
              <div className="space-y-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-2xl text-sm font-bold tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>ORDER ON WHATSAPP</span>
                </a>

                <p className="text-[11px] text-center text-[#55695D]">
                  WhatsApp opens with your prefilled product, size ({selectedSize}), and quantity ({quantity}).
                </p>
              </div>

            </div>

            {/* Specifications & Shelf Life details */}
            <div className="pt-8 mt-8 border-t border-[#E8DFC2] space-y-3 text-xs text-[#3E5145]">
              {product.ingredients && (
                <div>
                  <span className="font-bold text-[#142E20]">Ingredients: </span>
                  <span>{product.ingredients}</span>
                </div>
              )}
              {product.flavourProfile && (
                <div>
                  <span className="font-bold text-[#142E20]">Flavour Profile: </span>
                  <span>{product.flavourProfile}</span>
                </div>
              )}
              {product.shelfLife && (
                <div>
                  <span className="font-bold text-[#142E20]">Storage & Freshness: </span>
                  <span>{product.shelfLife}</span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Other Products Carousel / Suggestions */}
        <div className="mt-20 pt-12 border-t border-[#E8DFC2]">
          <h2 className="font-serif text-2xl font-bold text-[#142E20] mb-6">
            Other Fresh Varieties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3).map((other) => (
              <Link
                key={other.id}
                to={`/product/${other.slug}`}
                className="bg-[#FCFAF7] border border-[#DDD3C2] p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <img
                  src={other.image}
                  alt={other.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#142E20] group-hover:text-[#285A3C]">
                    {other.name}
                  </h3>
                  <p className="text-xs text-[#526458] mt-0.5 line-clamp-1">{other.shortDescription}</p>
                  <span className="text-xs font-bold text-[#142E20] mt-1 block">{other.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
