import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function RouteLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Check if the route has actually changed
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Safety failsafe: ensure loading never persists longer than 700ms under any circumstance
  useEffect(() => {
    if (isLoading) {
      const failsafe = setTimeout(() => {
        setIsLoading(false);
      }, 650);
      return () => clearTimeout(failsafe);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="route-loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F0]/95 backdrop-blur-xs select-none pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center text-center p-6"
          >
            {/* Official Brand Logo */}
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#E2D6C5] shadow-md p-1.5 flex items-center justify-center mb-3">
              <img
                src="/images/icon.png"
                alt="Purely Paneer"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="font-serif tracking-[0.25em] text-sm font-bold text-[#142E20]">
              PURELY PANEER
            </span>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#387652] mt-1 font-semibold">
              FRESHLY PREPARED
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
