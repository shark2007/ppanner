import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import PurelyLogo from '../common/PurelyLogo';
import { BRAND } from '../../data/brand';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'SHOP', to: '/menu' },
    { label: 'OUR STORY', to: '/story' },
    { label: 'RECIPES', to: '/recipes' },
    { label: 'WHY PURELY', to: '/why-purely' },
    { label: 'CONTACT', to: '/contact' },
  ];

  const handleNavClick = (to) => {
    if (to.startsWith('/#')) {
      const elementId = to.replace('/#', '');
      const elem = document.getElementById(elementId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Banner Notice: Food Technologist Owned & Mogappair Daily Batch */}
      <aside aria-label="Announcement" className="bg-[#142E20] text-[#FAF7F0] text-[11px] sm:text-xs py-1.5 px-4 tracking-wider transition-all border-b border-[#234A35]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#539E72] animate-pulse" />
            <span className="font-medium tracking-wide">
              Fresh Daily in Mogappair, Chennai • FSSAI Certified
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[#D6C6AE]">
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#539E72]" /> Food Technologist Owned
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <Link to="/admin" className="text-[#A9DEC0] hover:text-white flex items-center gap-1 font-semibold text-[11px] hover:underline">
              ⚙️ Admin Studio
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E6DBC8]'
            : 'bg-[#FAF7F0] py-4 sm:py-5 border-b border-[#EFE7D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <PurelyLogo size={isScrolled ? 'small' : 'default'} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHash = link.to.startsWith('/#');
              if (isHash) {
                return (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="text-xs tracking-[0.18em] font-medium text-[#1E2923] hover:text-[#1F4D35] transition-colors py-1 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1F4D35] transition-all duration-200 group-hover:w-full" />
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-xs tracking-[0.18em] font-medium transition-colors py-1 relative group ${
                      isActive ? 'text-[#1F4D35] font-semibold' : 'text-[#2D3F34] hover:text-[#1F4D35]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-[#1F4D35] transition-all duration-200 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Order on WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BRAND.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-[#FFFDF9] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
              <span>ORDER ON WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BRAND.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#142E20] text-white"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#142E20] hover:bg-[#EFE7D8] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#FAF7F0] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E6DBC8]">
                <PurelyLogo size="small" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#142E20] hover:bg-[#EAE1D2]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isHash = link.to.startsWith('/#');
                  if (isHash) {
                    return (
                      <a
                        key={link.label}
                        href={link.to}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleNavClick(link.to);
                        }}
                        className="text-base font-serif tracking-widest text-[#142E20] hover:text-[#1F4D35] py-2 border-b border-[#F0E8DC] flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#7A8B80]" />
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-serif tracking-widest py-2 border-b border-[#F0E8DC] flex items-center justify-between ${
                          isActive ? 'text-[#1F4D35] font-bold' : 'text-[#142E20]'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#7A8B80]" />
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="pt-6 border-t border-[#E6DBC8] flex flex-col gap-4">
              <a
                href={BRAND.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-[#FFFDF9] py-3.5 rounded-xl text-sm font-semibold tracking-wider shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#539E72] fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <div className="text-center text-xs text-[#6A7B70]">
                <p className="font-serif italic font-medium">"As honest as fresh milk."</p>
                <p className="mt-1">Mogappair, Chennai • +91 99525 11737</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
