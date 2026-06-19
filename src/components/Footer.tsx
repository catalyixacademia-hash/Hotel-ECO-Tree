import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory-soft">
      {/* Main footer */}
      <div className="container-luxury py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex flex-col items-start mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(201,185,154,0.4)] bg-[rgba(45,80,22,0.3)]">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path d="M8 1 L14 8 H10 L15 14 H9 V18 H7 V14 H1 L6 8 H2 Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif-display text-lg text-ivory leading-none tracking-wide">Eco Tree</div>
                  <div className="text-[0.55rem] tracking-[0.25em] uppercase text-stone">Pokhara, Nepal</div>
                </div>
              </div>
            </button>
            <p className="text-stone text-sm font-light leading-relaxed mb-6">
              A boutique eco-luxury retreat in the heart of Lakeside, Pokhara — where
              the Himalayas meet warm Nepalese hospitality.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[rgba(201,185,154,0.2)] flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[rgba(201,185,154,0.2)] flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[rgba(201,185,154,0.2)] flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="TripAdvisor">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6.5" cy="14.5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="14.5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 10h20M6 10L9 5h6l3 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">Explore</div>
            <div className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Rooms & Suites', page: 'rooms' },
                { label: 'Facilities', page: 'facilities' },
                { label: 'Explore Pokhara', page: 'explore' },
                { label: 'Gallery', page: 'gallery' },
                { label: 'Contact & Reservations', page: 'contact' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className="block text-sm text-stone hover:text-ivory transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">Contact</div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-stone leading-relaxed">
                  16th Street, Samikopatan<br />
                  Lakeside, Pokhara 33700<br />
                  Nepal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+97761540000" className="text-sm text-stone hover:text-ivory transition-colors">
                  +977-61-540000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@hotelecotreepokhara.com" className="text-sm text-stone hover:text-ivory transition-colors">
                  info@hotelecotreepokhara.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">Stay Updated</div>
            <p className="text-sm text-stone font-light leading-relaxed mb-5">
              Subscribe for exclusive offers, Pokhara travel inspiration, and seasonal specials.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(201,185,154,0.2)] text-ivory text-sm px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-stone/50"
              />
              <button className="bg-gold hover:bg-gold-light transition-colors px-4 flex items-center justify-center">
                <ArrowRight size={15} className="text-charcoal" />
              </button>
            </div>

            {/* Book direct */}
            <div className="mt-8 p-5 border border-[rgba(184,151,58,0.2)] bg-[rgba(184,151,58,0.05)]">
              <div className="text-[0.6rem] text-gold tracking-widest uppercase mb-2">Best Rate Guarantee</div>
              <p className="text-xs text-stone mb-3">Book directly for our lowest rates and exclusive benefits.</p>
              <button
                onClick={() => handleNav('contact')}
                className="text-[0.7rem] font-semibold text-gold tracking-widest uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                Book Direct <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(201,185,154,0.1)]">
        <div className="container-luxury py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-[0.7rem] text-stone text-center sm:text-left">
              © {new Date().getFullYear()} Hotel Eco Tree Pokhara Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-[0.7rem] text-stone">
              <span>Designed with</span>
              <span className="text-gold">♥</span>
              <span>for Pokhara</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <button className="text-[0.7rem] text-stone hover:text-ivory transition-colors">Privacy Policy</button>
              <button className="text-[0.7rem] text-stone hover:text-ivory transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
