import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

interface MobileBookingBarProps {
  setActivePage: (page: string) => void;
}

export default function MobileBookingBar({ setActivePage }: MobileBookingBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-charcoal border-t border-subtle grid grid-cols-2"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <a
            href="tel:+97761540000"
            className="flex items-center justify-center gap-2 py-4 min-h-[52px] text-ivory text-xs font-medium tracking-widest uppercase border-r border-subtle hover:bg-forest transition-colors"
          >
            <Phone size={14} />
            Call Now
          </a>
          <button
            onClick={() => {
              setActivePage('contact');
              setTimeout(() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="flex items-center justify-center gap-2 py-4 min-h-[52px] bg-gold text-charcoal text-xs font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            <Calendar size={14} />
            Book Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
