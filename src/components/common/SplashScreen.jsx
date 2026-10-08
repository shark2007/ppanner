import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Beaker, CheckCircle2 } from 'lucide-react';

const CRAFT_STEPS = [
  "Testing whole farm milk purity...",
  "Food Technologist scientific curdling...",
  "Slow-pressed in pure muslin cloth...",
  "Fresh daily in Mogappair, Chennai."
];

export default function SplashScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Check if user has already visited in this session, unless ?intro=true is requested
    const urlParams = new URLSearchParams(window.location.search);
    const forceIntro = urlParams.get('intro') === 'true' || urlParams.has('intro');
    const hasSeenSplash = sessionStorage.getItem('purely_paneer_splash_shown');

    if (hasSeenSplash && !forceIntro) {
      setVisible(false);
      onComplete?.();
      return;
    }

    // Progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 3;
        // Update milestone text based on progress
        if (next < 30) setStepIndex(0);
        else if (next < 65) setStepIndex(1);
        else if (next < 90) setStepIndex(2);
        else setStepIndex(3);

        return next;
      });
    }, 45);

    // Auto-dismiss when finished (approx 2.2 seconds)
    const timer = setTimeout(() => {
      handleEnter();
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const handleEnter = () => {
    sessionStorage.setItem('purely_paneer_splash_shown', 'true');
    setVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#FAF7F0] text-[#142E20] select-none p-6 sm:p-10"
        >
          {/* Subtle concentric dairy ripples in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full border border-[#EDE4D5]/70 animate-ping opacity-25" style={{ animationDuration: '4s' }} />
            <div className="w-[700px] h-[700px] rounded-full border border-[#EDE4D5]/50 -z-10" />
            <div className="w-[900px] h-[900px] rounded-full border border-[#F3EBE0]/40 -z-20" />
            <div className="absolute inset-0 bg-radial from-white/70 via-transparent to-[#F3ECE0]/30" />
          </div>

          {/* Top Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142E20] text-[#FFFDF9] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#539E72] animate-pulse" />
              <span>CHENNAI • MOGAPPAIR</span>
            </div>
          </motion.div>

          {/* Center Editorial Brand Presentation */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg my-auto py-8">
            
            {/* Artisanal Emblem with Official Brand Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white border border-[#E2D6C5] shadow-2xl p-2 flex items-center justify-center mb-6 hover:scale-105 transition-transform"
            >
              <img
                src="/images/icon.png"
                alt="Purely Paneer Official Logo"
                className="w-full h-full object-contain drop-shadow-xs"
              />
            </motion.div>

            {/* Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif text-4xl sm:text-6xl tracking-[0.26em] font-extrabold text-[#142E20] leading-none">
                PURELY
              </h1>
              <span className="font-serif text-3xl sm:text-5xl tracking-[0.32em] font-light text-[#2F6546] mt-1">
                PANEER
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-serif italic text-base sm:text-lg tracking-[0.24em] text-[#3D5647] uppercase mt-5 font-medium"
            >
              "AS HONEST AS FRESH MILK"
            </motion.p>

            {/* 3 Pillars Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5"
            >
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#1E4330] bg-[#E9F3ED] px-2.5 py-1 rounded-full border border-[#CCE3D4]">
                ✓ 100% Pure Milk
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#1E4330] bg-[#E9F3ED] px-2.5 py-1 rounded-full border border-[#CCE3D4]">
                ✓ FSSAI Certified
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#1E4330] bg-[#E9F3ED] px-2.5 py-1 rounded-full border border-[#CCE3D4]">
                ✓ Food Technologist
              </span>
            </motion.div>

            {/* Milestone Text Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="h-6 mt-7 flex items-center justify-center text-xs font-mono text-[#52695B]"
            >
              <span>{CRAFT_STEPS[stepIndex]}</span>
            </motion.div>

            {/* Premium Animated Progress Bar */}
            <div className="w-52 h-[3px] bg-[#E5DCCF] rounded-full overflow-hidden mt-3 relative">
              <motion.div
                className="h-full bg-[#142E20] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

          {/* Bottom Action: Enter Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 w-full max-w-xs flex flex-col items-center gap-2"
          >
            <button
              type="button"
              onClick={handleEnter}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-[#FFFDF9] py-3.5 px-6 rounded-2xl text-xs font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              <span>ENTER PURELY PANEER</span>
              <ArrowRight className="w-4 h-4 text-[#539E72]" />
            </button>

            <span className="text-[10px] text-[#7E9185] tracking-wider">
              Tap to enter instantly
            </span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
