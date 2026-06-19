import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Wifi, Wind, Coffee, Tv, Bath, Maximize } from 'lucide-react';

interface RoomsPageProps {
  setActivePage: (page: string) => void;
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const rooms = [
  {
    id: 'deluxe-double',
    title: 'Deluxe Double Room',
    subtitle: 'For Couples & Solo Travelers',
    tagline: 'Intimacy, elevated.',
    description: `The Deluxe Double Room is our most beloved retreat — a serene sanctuary wrapped in warm earth tones and natural textures. A plush king bed faces a private balcony where the Himalayan silhouette frames every morning. The en-suite bathroom features a premium rainfall shower and artisanal Nepalese toiletries.`,
    size: '26–30 m²',
    capacity: '1–2 Guests',
    bed: 'King Bed',
    view: 'Mountain / Garden View',
    price: 'From $65 / night',
    badge: 'Most Popular',
    badgeColor: '#B8973A',
    images: [
      'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
      'https://images.pexels.com/photos/14750392/pexels-photo-14750392.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
      'https://images.pexels.com/photos/32418082/pexels-photo-32418082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    ],
    amenities: [
      'King-size premium bed with luxury linens',
      'Private balcony with mountain/garden view',
      'En-suite bathroom with rainfall shower',
      'Artisanal Nepalese toiletries',
      'Climate control (AC & heating)',
      'High-speed Wi-Fi',
      'Smart LED TV with streaming',
      'In-room safe & minibar',
      'Daily housekeeping',
      'Complimentary breakfast',
    ],
    highlights: [
      { icon: Maximize, label: '26–30 m²', desc: 'Room size' },
      { icon: Wind, label: 'AC & Heating', desc: 'Year-round comfort' },
      { icon: Bath, label: 'Rainfall Shower', desc: 'Premium bathroom' },
      { icon: Coffee, label: 'Minibar', desc: 'Curated selection' },
    ],
  },
  {
    id: 'deluxe-twin',
    title: 'Deluxe Twin Room',
    subtitle: 'For Friends & Colleagues',
    tagline: 'Share the adventure.',
    description: `The Deluxe Twin Room is perfectly suited for travel companions who value comfort without compromise. Two premium single beds, a spacious work desk, and a serene garden-facing view create an ideal space to rest after a day on the trail or in the city. The clean, modern aesthetic feels both familiar and refined.`,
    size: '26–30 m²',
    capacity: '2 Guests',
    bed: 'Two Single Beds',
    view: 'Garden / City View',
    price: 'From $70 / night',
    badge: null,
    badgeColor: null,
    images: [
      'https://images.pexels.com/photos/7746092/pexels-photo-7746092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
      'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
      'https://images.pexels.com/photos/14750392/pexels-photo-14750392.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    ],
    amenities: [
      'Two premium single beds with luxury linens',
      'Spacious work desk & ergonomic chair',
      'Garden / City view',
      'En-suite bathroom with shower',
      'Climate control (AC & heating)',
      'High-speed Wi-Fi',
      'Smart LED TV with streaming',
      'In-room safe',
      'Daily housekeeping',
      'Complimentary breakfast',
    ],
    highlights: [
      { icon: Maximize, label: '26–30 m²', desc: 'Room size' },
      { icon: Wifi, label: 'Fast Wi-Fi', desc: 'Stay connected' },
      { icon: Tv, label: 'Smart TV', desc: 'Entertainment' },
      { icon: Bath, label: 'Shower', desc: 'Modern bathroom' },
    ],
  },
  {
    id: 'family-suite',
    title: 'Family Suite',
    subtitle: 'Spacious Family Comfort',
    tagline: 'Space to breathe, moments to cherish.',
    description: `Our Family Suite is the crown of Hotel Eco Tree — a generous two-bedroom arrangement with a living area that becomes the backdrop for unforgettable family evenings. Panoramic mountain views from multiple windows, a full bathtub for little adventurers, and thoughtful extras ensure the whole family feels at home from the first moment.`,
    size: '48–55 m²',
    capacity: '2–5 Guests',
    bed: 'King + Twin Configuration',
    view: 'Panoramic Mountain View',
    price: 'From $110 / night',
    badge: 'Best for Families',
    badgeColor: '#2D5016',
    images: [
      'https://images.pexels.com/photos/32418082/pexels-photo-32418082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
      'https://images.pexels.com/photos/17301475/pexels-photo-17301475.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
      'https://images.pexels.com/photos/3926334/pexels-photo-3926334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    ],
    amenities: [
      'Separate master bedroom & twin room',
      'Spacious living & dining area',
      'Panoramic mountain view from multiple windows',
      'Full bathtub and separate shower',
      'Premium toiletries for all ages',
      'Climate control in all rooms',
      'Two smart TVs',
      'Extended minibar & tea station',
      'Children\'s welcome amenities',
      'Complimentary breakfast for all guests',
    ],
    highlights: [
      { icon: Maximize, label: '48–55 m²', desc: 'Expansive suite' },
      { icon: Bath, label: 'Bathtub & Shower', desc: 'Luxury bathroom' },
      { icon: Tv, label: 'Two Smart TVs', desc: 'Full entertainment' },
      { icon: Coffee, label: 'Tea Station', desc: 'Curated minibar' },
    ],
  },
];

function RoomCard({ room, index, setActivePage }: { room: typeof rooms[0]; index: number; setActivePage: (p: string) => void }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <div className="bg-white border border-ivory-dark overflow-hidden group">
        {/* Image carousel */}
        <div className="relative h-72 lg:h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={room.images[currentImg]}
              alt={room.title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>

          {room.badge && (
            <div
              className="absolute top-4 left-4 z-10 text-[0.6rem] font-semibold tracking-widest uppercase px-3 py-1.5 text-white"
              style={{ backgroundColor: room.badgeColor || '#B8973A' }}
            >
              {room.badge}
            </div>
          )}

          {/* Image navigation */}
          <div className="absolute inset-0 flex items-center justify-between p-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImg(p => (p - 1 + room.images.length) % room.images.length); }}
              className="w-11 h-11 min-w-[44px] min-h-[44px] bg-charcoal/60 text-white rounded-full flex items-center justify-center hover:bg-charcoal/85 transition-colors"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImg(p => (p + 1) % room.images.length); }}
              className="w-11 h-11 min-w-[44px] min-h-[44px] bg-charcoal/60 text-white rounded-full flex items-center justify-center hover:bg-charcoal/85 transition-colors"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {room.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImg(i)}
                className="carousel-dot"
                aria-label={`View image ${i + 1}`}
              >
                <span className={`carousel-dot-inner ${i === currentImg ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/60'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          <div className="text-[0.65rem] text-gold tracking-widest uppercase font-medium mb-1">{room.subtitle}</div>
          <h3 className="font-serif-display text-2xl lg:text-3xl text-charcoal font-medium mb-1">{room.title}</h3>
          <p className="text-stone font-serif-display text-base italic mb-4">{room.tagline}</p>

          {/* Quick specs */}
          <div className="grid grid-cols-2 gap-3 mb-5 py-4 border-y border-ivory-dark">
            {[
              { label: 'Size', val: room.size },
              { label: 'Capacity', val: room.capacity },
              { label: 'Bed', val: room.bed },
              { label: 'View', val: room.view },
            ].map((spec, i) => (
              <div key={i}>
                <div className="text-[0.6rem] text-stone tracking-widest uppercase">{spec.label}</div>
                <div className="text-sm text-charcoal font-medium">{spec.val}</div>
              </div>
            ))}
          </div>

          <p className="text-body font-light text-sm leading-relaxed mb-5 line-clamp-3">
            {room.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
            {room.highlights.map((h, i) => (
              <div key={i} className="text-center p-2 bg-ivory">
                <h.icon size={16} className="text-gold mx-auto mb-1" strokeWidth={1.5} />
                <div className="text-[0.6rem] text-body font-medium leading-tight">{h.label}</div>
              </div>
            ))}
          </div>

          {/* Amenities toggle */}
          <div className="mb-6">
            <button
              onClick={() => setExpanded(p => !p)}
              className="text-xs font-medium text-forest tracking-wide flex items-center gap-1.5 mb-3 hover:text-gold transition-colors"
            >
              {expanded ? 'Show Less' : 'View All Amenities'}
              <ChevronRight size={13} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {room.amenities.map((a, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check size={13} className="text-forest mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-body">{a}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-ivory-dark">
            <div>
              <div className="text-[0.6rem] text-stone tracking-widest uppercase">Rates starting at</div>
              <div className="font-serif-display text-2xl text-forest font-medium">{room.price}</div>
              <div className="text-[0.6rem] text-stone">Includes breakfast · Free cancellation</div>
            </div>
            <button
              onClick={() => setActivePage('contact')}
              className="btn-gold text-xs py-3 w-full sm:w-auto justify-center"
            >
              Book <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function RoomsPage({ setActivePage }: RoomsPageProps) {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative h-[280px] sm:h-[340px] lg:h-[440px] overflow-hidden mt-14 sm:mt-16 lg:mt-[104px]">
        <img
          src="https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1400"
          alt="Luxury room interior at Hotel Eco Tree Pokhara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,26,0.55)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="max-w-2xl">
              <div className="label-tag text-stone mb-3">Rest & Recharge</div>
              <div className="divider-gold mb-5" />
              <h1 className="hero-headline text-ivory text-4xl lg:text-6xl">
                Rooms & Suites
              </h1>
              <p className="text-ivory-soft font-light mt-4 max-w-lg leading-relaxed">
                Each room is a composed retreat — where the natural palette of the
                Himalayas meets the quiet luxury of thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room policies banner */}
      <div className="bg-forest py-4">
        <div className="container-luxury">
          <div className="flex flex-wrap items-center justify-between gap-4 text-ivory-soft text-xs">
            <div className="flex flex-wrap gap-6">
              {['Check-in from 2:00 PM', 'Check-out by 12:00 PM', 'Breakfast included', 'Free cancellation', 'Free parking', 'Rooftop pool access'].map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <section className="section-pad">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="label-tag text-forest mb-4">Accommodation</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading">
                Choose Your Retreat
              </h2>
              <p className="section-lead mx-auto mt-4">
                Three distinct room types, each crafted to suit a different journey —
                but all united by the same commitment to comfort and care.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} setActivePage={setActivePage} />
            ))}
          </div>
        </div>
      </section>

      {/* All rooms include */}
      <section className="section-pad bg-charcoal">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="label-tag text-stone mb-4">All Rooms Include</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="font-serif-display text-3xl lg:text-4xl text-ivory font-light">
                The Eco Tree Standard
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Complimentary breakfast daily',
              'High-speed Wi-Fi throughout',
              'Rooftop pool access',
              'Fitness center access',
              'Daily housekeeping',
              '24/7 front desk',
              'In-room safe',
              'Smart LED television',
              'Air conditioning & heating',
              'Bottled water on arrival',
              'Luggage storage',
              'Tour & trek assistance',
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-center gap-3 py-3 border-b border-[rgba(201,185,154,0.15)]">
                  <Check size={14} className="text-gold flex-shrink-0" />
                  <span className="text-ivory-soft text-sm font-light">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury text-center">
          <FadeIn>
            <div className="max-w-xl mx-auto">
              <div className="label-tag text-forest mb-4">Ready to Stay?</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Book Your Room Today
              </h2>
              <p className="text-body font-light leading-relaxed mb-8">
                Contact us directly for the best rates, personalized assistance,
                and special arrangements for your stay.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => setActivePage('contact')} className="btn-luxury">
                  Make a Reservation <ArrowRight size={14} />
                </button>
                <a href="tel:+97761540000" className="btn-luxury-outline" style={{ color: '#2D5016', borderColor: '#2D5016' }}>
                  Call +977-61-540000
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
