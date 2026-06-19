import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

interface NavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Rooms & Suites', page: 'rooms' },
  { label: 'Facilities', page: 'facilities' },
  { label: 'Explore Pokhara', page: 'explore' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact', page: 'contact' },
];

export default function Navigation({ activePage, setActivePage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (page: string) => {
    setActivePage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = activePage === 'home';

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(26,25,23,0.06)] border-b border-ivory-dark'
            : 'bg-transparent'
        }`}
      >
        {/* Top strip */}
        <div className={`hidden lg:block text-center py-1.5 text-xs tracking-widest font-medium transition-all duration-500 ${
          scrolled || !isHome ? 'bg-forest text-ivory' : 'bg-charcoal/40 text-stone'
        }`}>
          <span>16th Street, Samikopatan, Lakeside, Pokhara, Nepal</span>
          <span className="mx-4 opacity-40">|</span>
          <span>+977-61-540000</span>
          <span className="mx-4 opacity-40">|</span>
          <a href="mailto:info@hotelecotreepokhara.com" className="hover:text-gold transition-colors">
            info@hotelecotreepokhara.com
          </a>
        </div>

        {/* Main nav */}
        <div className="container-luxury">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex flex-col items-start group"
              aria-label="Hotel Eco Tree Pokhara - Home"
            >
              <div className="flex items-center gap-2.5">
                {/* Tree icon */}
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500 ${
                  scrolled || !isHome
                    ? 'border-forest bg-forest'
                    : 'border-ivory/60 bg-forest/30'
                }`}>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className={scrolled || !isHome ? 'text-ivory' : 'text-stone'}>
                    <path d="M8 1 L14 8 H10 L15 14 H9 V18 H7 V14 H1 L6 8 H2 Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className={`font-serif-display text-lg leading-none tracking-wide transition-colors duration-500 ${
                    scrolled || !isHome ? 'text-charcoal' : 'text-ivory'
                  }`}>
                    Eco Tree
                  </div>
                  <div className={`text-[0.55rem] tracking-[0.25em] uppercase font-medium transition-colors duration-500 ${
                    scrolled || !isHome ? 'text-forest' : 'text-stone'
                  }`}>
                    Pokhara, Nepal
                  </div>
                </div>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`relative text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-all duration-200 group ${
                    scrolled || !isHome
                      ? 'text-charcoal hover:text-forest'
                      : 'text-ivory hover:text-gold'
                  } ${activePage === item.page ? (scrolled || !isHome ? 'text-forest' : 'text-gold') : ''}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                    activePage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => {
                  handleNav('contact');
                  setTimeout(() => {
                    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="btn-gold text-xs py-3 px-5"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded transition-colors ${
                scrolled || !isHome ? 'text-charcoal' : 'text-ivory'
              }`}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[200] bg-charcoal flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <div>
                <div className="font-serif-display text-xl text-ivory">Eco Tree</div>
                <div className="text-[0.55rem] tracking-[0.25em] uppercase text-stone">Pokhara, Nepal</div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-ivory p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.page}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => handleNav(item.page)}
                  className={`text-left py-4 border-b border-[rgba(201,185,154,0.15)] transition-colors group ${
                    activePage === item.page ? 'text-gold' : 'text-ivory'
                  }`}
                >
                  <span className="font-serif-display text-3xl font-light group-hover:text-gold transition-colors">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="px-8 pb-10">
              <button
                onClick={() => handleNav('contact')}
                className="btn-gold w-full justify-center text-sm"
              >
                Book Your Stay
              </button>
              <div className="mt-6 flex items-center gap-3 text-stone">
                <Phone size={14} />
                <span className="text-sm tracking-wide">+977-61-540000</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
