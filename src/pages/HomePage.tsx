import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight, ChevronDown, Waves, Heart, Leaf,
  MapPin, Users, Coffee, Dumbbell, Car, Compass, Wind, ChevronLeft, ChevronRight
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

// Image URLs from Pexels
const IMAGES = {
  hero: 'https://images.pexels.com/photos/12717176/pexels-photo-12717176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
  phewa: 'https://images.pexels.com/photos/37836760/pexels-photo-37836760.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  mountain: 'https://images.pexels.com/photos/15280106/pexels-photo-15280106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  pool: 'https://images.pexels.com/photos/36486483/pexels-photo-36486483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  poolSunset: 'https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  room1: 'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  room2: 'https://images.pexels.com/photos/7746092/pexels-photo-7746092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  room3: 'https://images.pexels.com/photos/32418082/pexels-photo-32418082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  spa: 'https://images.pexels.com/photos/6187645/pexels-photo-6187645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  trek: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  machapuchare: 'https://images.pexels.com/photos/34765416/pexels-photo-34765416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  boats: 'https://images.pexels.com/photos/35917995/pexels-photo-35917995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
};

// Fade-in section wrapper
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const testimonials = [
  {
    quote: "The rooftop pool with Annapurna views at sunrise was a moment I'll carry with me always. The staff remembered my name from the first morning — that says everything.",
    author: "Sophie M.",
    location: "London, UK",
    stars: 5,
    stay: "Deluxe Double Room",
  },
  {
    quote: "Perfect location for exploring Lakeside, yet the hotel itself felt like a peaceful sanctuary. The breakfast spread was exceptional. We'll be back.",
    author: "Thomas & Anna R.",
    location: "Munich, Germany",
    stars: 5,
    stay: "Family Suite",
  },
  {
    quote: "After a week on the Annapurna Circuit, Eco Tree was the most welcome sight imaginable. Clean, beautiful, incredibly helpful staff who arranged everything for our onward journey.",
    author: "James O.",
    location: "Melbourne, Australia",
    stars: 5,
    stay: "Deluxe Twin Room",
  },
  {
    quote: "The combination of modern comfort and genuine Nepalese warmth is rare. The spa after three days of trekking was absolute heaven.",
    author: "Priya K.",
    location: "Singapore",
    stars: 5,
    stay: "Deluxe Double Room",
  },
];

const stats = [
  { value: '4.3', label: 'Guest Rating', suffix: '★' },
  { value: '200+', label: 'Five-Star Reviews', suffix: '' },
  { value: '5min', label: 'Walk to Phewa Lake', suffix: '' },
  { value: '24/7', label: 'Personalized Service', suffix: '' },
];

const facilities = [
  { icon: Waves, label: 'Rooftop Pool', desc: 'Panoramic Himalayan views' },
  { icon: Heart, label: 'Spa & Wellness', desc: 'Traditional Ayurvedic treatments' },
  { icon: Wind, label: 'Sauna & Steam', desc: 'Deep relaxation rituals' },
  { icon: Coffee, label: 'Restaurant & Bar', desc: 'Nepalese & international cuisine' },
  { icon: Dumbbell, label: 'Fitness Center', desc: 'Modern equipment & yoga space' },
  { icon: Car, label: 'Airport Transfer', desc: 'Seamless arrivals & departures' },
  { icon: Compass, label: 'Tour Assistance', desc: 'Expert local guides' },
  { icon: Users, label: 'Free Parking', desc: 'Secure on-site parking' },
];

export default function HomePage({ setActivePage }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkin: '', checkout: '', guests: '2', room: ''
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setActivePage('contact');
    setTimeout(() => {
      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-warm-white">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="hero-mobile-shell relative lg:h-screen lg:min-h-[700px] lg:max-h-[1000px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-100 sm:scale-110">
          <img
            src={IMAGES.hero}
            alt="Aerial view of Phewa Lake and Himalayas from Pokhara"
            className="w-full h-full object-cover object-[center_30%] sm:object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="gradient-hero absolute inset-0" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="hero-mobile-content relative z-10 lg:h-full lg:flex lg:flex-col lg:justify-end lg:pb-28"
        >
          <div className="container-luxury w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden sm:flex items-center gap-3 mb-5 sm:mb-6"
              >
                <div className="divider-gold" />
                <span className="label-tag text-stone">Lakeside, Pokhara, Nepal</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="hero-headline text-ivory mb-3 sm:mb-5 lg:text-7xl xl:text-8xl"
              >
                Stay close to{' '}
                <em className="text-stone">everything</em>, yet feel away from it all
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hero-subtext max-w-md sm:max-w-lg mb-6 sm:mb-8"
              >
                A boutique eco-luxury retreat in Lakeside, where the Himalayas meet warm Nepalese hospitality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="btn-mobile-stack"
              >
                <button
                  onClick={() => {
                    setActivePage('contact');
                    setTimeout(() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="btn-gold btn-mobile-full"
                >
                  Reserve Your Stay <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => setActivePage('rooms')}
                  className="btn-luxury-outline btn-mobile-full"
                >
                  Explore Rooms
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-stone text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-stone" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── BOOKING BAR (desktop) ───────────────────────────────────────── */}
      <section className="hidden lg:block bg-forest py-0">
        <div className="container-luxury">
          <form onSubmit={handleBooking} className="grid grid-cols-5 gap-0">
            <div className="bg-charcoal p-5 border-r border-subtle">
              <label className="label-tag label-tag-stone text-xs block mb-2">Check In</label>
              <input
                type="date"
                value={bookingData.checkin}
                onChange={e => setBookingData(p => ({ ...p, checkin: e.target.value }))}
                className="w-full bg-transparent text-ivory text-sm outline-none"
              />
            </div>
            <div className="bg-charcoal p-5 border-r border-subtle">
              <label className="label-tag label-tag-stone text-xs block mb-2">Check Out</label>
              <input
                type="date"
                value={bookingData.checkout}
                onChange={e => setBookingData(p => ({ ...p, checkout: e.target.value }))}
                className="w-full bg-transparent text-ivory text-sm outline-none"
              />
            </div>
            <div className="bg-charcoal p-5 border-r border-subtle">
              <label className="label-tag label-tag-stone text-xs block mb-2">Guests</label>
              <select
                value={bookingData.guests}
                onChange={e => setBookingData(p => ({ ...p, guests: e.target.value }))}
                className="w-full bg-transparent text-ivory text-sm outline-none"
              >
                {[1,2,3,4,5,6].map(n => <option key={n} value={n} className="bg-charcoal">{n} Guest{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
            <div className="bg-charcoal p-5 border-r border-subtle">
              <label className="label-tag label-tag-stone text-xs block mb-2">Room Type</label>
              <select
                value={bookingData.room}
                onChange={e => setBookingData(p => ({ ...p, room: e.target.value }))}
                className="w-full bg-transparent text-ivory text-sm outline-none"
              >
                <option value="" className="bg-charcoal">Any Room</option>
                <option value="deluxe-double" className="bg-charcoal">Deluxe Double</option>
                <option value="deluxe-twin" className="bg-charcoal">Deluxe Twin</option>
                <option value="family-suite" className="bg-charcoal">Family Suite</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-charcoal font-semibold text-xs tracking-widest uppercase transition-colors p-5 flex items-center justify-center gap-2"
            >
              Check Availability <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>

      {/* ─── INTRO / BRAND STORY ─────────────────────────────────────────── */}
      <section className="section-pad bg-warm-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            <FadeIn>
              <div>
                <div className="label-tag text-forest mb-4">Our Story</div>
                <div className="divider-gold mb-6" />
                <h2 className="section-heading mb-6">
                  A Sanctuary Rooted
                  <br />
                  <em>in Nature, Refined</em>
                  <br />
                  by Hospitality
                </h2>
                <p className="body-text mb-5">
                  Nestled in the vibrant heart of Lakeside — Pokhara's most coveted address —
                  Hotel Eco Tree was conceived as a response to a simple question: what if a
                  hotel could feel like a home, but look like a dream?
                </p>
                <p className="body-text mb-8">
                  Minutes from Phewa Lake and within sight of the Annapurna massif, we offer
                  a modern boutique experience shaped by genuine Nepalese warmth. Every detail —
                  from our rooftop pool aligned with the mountain horizon to our carefully
                  curated local breakfasts — is an act of care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setActivePage('facilities')} className="btn-luxury">
                    Discover Experiences
                  </button>
                  <button onClick={() => setActivePage('rooms')} className="text-forest text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
                    View Rooms <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[300px] lg:h-[500px]">
                <div className="img-hover-zoom rounded-none overflow-hidden h-full">
                  <img src={IMAGES.mountain} alt="Himalayan mountain view from Pokhara" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <div className="img-hover-zoom overflow-hidden">
                    <img src={IMAGES.pool} alt="Rooftop infinity pool with mountain view" className="w-full h-full object-cover" />
                  </div>
                  <div className="img-hover-zoom overflow-hidden">
                    <img src={IMAGES.boats} alt="Phewa Lake colorful boats at sunset" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-charcoal py-14">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-subtle">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center px-4">
                  <div className="stat-number text-4xl lg:text-5xl mb-1">
                    {s.value}<span className="text-2xl">{s.suffix}</span>
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROOMS ────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="label-tag text-forest mb-4">Rest & Recharge</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading">
                Rooms & Suites
              </h2>
              <p className="section-lead mx-auto mt-4">
                Each room is a thoughtfully composed retreat — a balance of modern comfort
                and the natural palette of the Himalayas.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Deluxe Double',
                subtitle: 'For Couples & Solo Travelers',
                img: IMAGES.room1,
                from: 'From $65',
                features: ['King Bed', 'Private Balcony', 'Mountain View', 'En-suite Bathroom'],
                badge: 'Most Popular',
              },
              {
                title: 'Deluxe Twin',
                subtitle: 'For Friends & Colleagues',
                img: IMAGES.room2,
                from: 'From $70',
                features: ['Twin Beds', 'Work Desk', 'Garden View', 'Rainfall Shower'],
                badge: null,
              },
              {
                title: 'Family Suite',
                subtitle: 'Spacious Family Comfort',
                img: IMAGES.room3,
                from: 'From $110',
                features: ['Living Area', 'Two Bedrooms', 'Panoramic View', 'Bathtub & Shower'],
                badge: 'Best for Families',
              },
            ].map((room, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group card-luxury bg-white overflow-hidden cursor-pointer" onClick={() => setActivePage('rooms')}>
                  <div className="img-hover-zoom h-64 overflow-hidden relative">
                    <img src={room.img} alt={room.title + ' at Hotel Eco Tree Pokhara'} className="w-full h-full object-cover" />
                    {room.badge && (
                      <div className="absolute top-4 left-4 bg-gold text-charcoal text-[0.6rem] font-semibold tracking-widest uppercase px-3 py-1.5 z-10">
                        {room.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-[0.65rem] text-gold tracking-widest uppercase font-medium mb-1">{room.subtitle}</div>
                    <h3 className="font-serif-display text-2xl text-charcoal font-medium mb-3">{room.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {room.features.map((f, fi) => (
                        <span key={fi} className="text-[0.7rem] bg-ivory text-body px-2.5 py-1 tracking-wide">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-ivory-dark">
                      <div>
                        <div className="text-[0.6rem] text-stone tracking-widest uppercase">Starting at</div>
                        <div className="font-serif-display text-xl text-forest font-medium">{room.from} / night</div>
                      </div>
                      <button className="text-[0.7rem] font-medium tracking-widest uppercase text-forest flex items-center gap-1.5 hover:gap-2.5 transition-all">
                        View Room <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH POOL FEATURE ─────────────────────────────────────── */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden">
        <img
          src={IMAGES.poolSunset}
          alt="Rooftop infinity pool with Himalayan sunset views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 to-charcoal/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="max-w-lg">
              <FadeIn>
                <div className="label-tag text-stone mb-4">Signature Experience</div>
                <div className="divider-gold mb-6" />
                <h2 className="section-heading-light text-4xl lg:text-6xl mb-6">
                  The Rooftop Pool,
                  <br />
                  <em className="text-stone">Above the World</em>
                </h2>
                <p className="text-ivory-soft font-light leading-relaxed mb-8">
                  At dawn, the Annapurna range catches its first blush of alpenglow. From our
                  rooftop, you have the best seat in all of Pokhara. Swim through clouds,
                  sip your morning tea as eagles circle the peaks.
                </p>
                <button onClick={() => setActivePage('facilities')} className="btn-luxury-outline">
                  Explore All Facilities
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACILITIES GRID ─────────────────────────────────────────────── */}
      <section className="section-pad bg-warm-white">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="label-tag text-forest mb-4">Curated Amenities</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading">
                Every Detail, Considered
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory-dark">
            {facilities.map((f, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white p-8 group hover:bg-forest transition-colors duration-400 cursor-pointer" onClick={() => setActivePage('facilities')}>
                  <f.icon size={24} className="text-gold mb-4 group-hover:text-stone transition-colors" strokeWidth={1.5} />
                  <h3 className="font-serif-display text-lg text-charcoal group-hover:text-ivory transition-colors font-medium mb-1">
                    {f.label}
                  </h3>
                  <p className="text-[0.75rem] text-stone group-hover:text-[rgba(201,185,154,0.7)] transition-colors">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPA SECTION ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src={IMAGES.spa}
                  alt="Spa and wellness treatment at Hotel Eco Tree"
                  className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-forest p-8 hidden lg:block">
                  <Leaf size={32} className="text-stone mb-3" strokeWidth={1.5} />
                  <div className="font-serif-display text-2xl text-ivory font-light">Holistic</div>
                  <div className="stat-label">Wellness</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <div className="label-tag text-forest mb-4">Spa & Wellness</div>
                <div className="divider-gold mb-6" />
                <h2 className="section-heading mb-6">
                  Restore. Renew.
                  <br /><em>Reconnect.</em>
                </h2>
                <p className="body-text mb-5">
                  Our spa draws on centuries of Ayurvedic tradition, reimagined for the
                  modern traveler. Whether you arrive from a mountain trek or a long flight,
                  our therapists will restore you to yourself.
                </p>
                <p className="body-text mb-8">
                  From signature hot stone massages to rejuvenating steam baths and
                  sauna rituals, each treatment is a journey inward.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Signature Massage', 'Hot Stone Therapy', 'Sauna & Steam', 'Facial Rituals'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-sm text-body">{t}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setActivePage('facilities')} className="btn-luxury">
                  Spa Menu <ArrowRight size={14} />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── EXPLORE SECTION ─────────────────────────────────────────────── */}
      <section className="section-pad bg-warm-white">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="label-tag text-forest mb-4">Pokhara Awaits</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading">
                Beyond the Hotel Door
              </h2>
              <p className="section-lead mx-auto mt-4">
                Pokhara is Nepal's adventure capital and most beautiful lakeside city.
                We are your perfect gateway to all of it.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                img: IMAGES.phewa,
                title: 'Phewa Lake',
                desc: 'Just 5 minutes on foot — rent a wooden boat and drift toward the sacred Tal Barahi Temple in the middle of the lake.',
                tag: 'Nature & Culture',
              },
              {
                img: IMAGES.trek,
                title: 'Himalayan Treks',
                desc: 'Our expert team arranges permits and guides for Annapurna Base Camp, Poon Hill, and everything in between.',
                tag: 'Adventure',
              },
              {
                img: IMAGES.machapuchare,
                title: 'Machapuchare Views',
                desc: "Watch the 'Fish Tail' mountain transform through dawn, day, and dusk — visible directly from our rooftop.",
                tag: 'Scenic',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div
                  className="experience-card min-h-[300px] sm:h-[360px] lg:h-[420px] cursor-pointer group"
                  onClick={() => setActivePage('explore')}
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover absolute inset-0" />
                  <div className="overlay" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                    <div className="label-tag text-gold mb-2">{item.tag}</div>
                    <h3 className="font-serif-display text-2xl text-ivory font-medium mb-2">{item.title}</h3>
                    <p className="text-ivory-soft text-sm font-light leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase">
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <button onClick={() => setActivePage('explore')} className="btn-luxury">
                Explore All Experiences <ArrowRight size={14} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="bg-forest py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 font-serif-display text-[8rem] lg:text-[20rem] leading-none text-ivory select-none">"</div>
        </div>
        <div className="container-luxury relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="label-tag text-stone mb-4">Guest Stories</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading-light">
                Words From Our Guests
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto text-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <div className="quote-mark mb-4">"</div>
                <p className="font-serif-display text-xl lg:text-2xl text-ivory font-light leading-relaxed mb-8 italic">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="star-rating mb-3">
                  {'★'.repeat(testimonials[currentTestimonial].stars)}
                </div>
                <div className="font-medium text-ivory text-sm">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-stone text-xs tracking-wide mt-1">
                  {testimonials[currentTestimonial].location} · {testimonials[currentTestimonial].stay}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-subtle text-stone flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className="carousel-dot"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`carousel-dot-inner ${
                    i === currentTestimonial
                      ? 'w-6 h-1.5 bg-gold'
                      : 'w-1.5 h-1.5 bg-stone/40'
                  }`} />
                </button>
              ))}
              <button
                onClick={() => setCurrentTestimonial(p => (p + 1) % testimonials.length)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-subtle text-stone flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION CTA ────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="label-tag text-forest mb-4">Prime Location</div>
                <div className="divider-gold mb-6" />
                <h2 className="section-heading mb-6">
                  At the Heart of
                  <br /><em>Lakeside Pokhara</em>
                </h2>
                <p className="body-text mb-8">
                  16th Street, Samikopatan — the quiet-but-connected address that puts
                  Phewa Lake, Lakeside Market, Barahi Temple, restaurants, and cafés all
                  within a pleasant stroll.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Phewa Lake & Barahi Temple', dist: '5 min walk' },
                    { label: 'Lakeside Restaurants & Cafés', dist: '3 min walk' },
                    { label: 'Pokhara Airport', dist: '15 min drive' },
                    { label: 'Mountain Museum', dist: '10 min drive' },
                    { label: 'Sarangkot Viewpoint', dist: '20 min drive' },
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-ivory-dark">
                      <div className="flex items-center gap-3">
                        <MapPin size={14} className="text-gold" strokeWidth={1.5} />
                        <span className="text-sm text-body">{loc.label}</span>
                      </div>
                      <span className="text-xs font-medium text-forest tracking-wide">{loc.dist}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setActivePage('contact')} className="btn-luxury">
                  Get Directions <ArrowRight size={14} />
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[280px] sm:h-[380px] lg:h-[450px] bg-ivory-dark overflow-hidden">
                <iframe
                  title="Hotel Eco Tree Pokhara Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.8!2d83.9570!3d28.2110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995952ec3bafcf9%3A0x4e3bb36d0dbdc79c!2sLakeside%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1690000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── WHY ECO TREE ────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <div>
                <div className="label-tag text-forest mb-4">Why Eco Tree</div>
                <div className="divider-gold mb-6" />
                <h2 className="section-heading mb-6">
                  Not Just a Hotel.
                  <br /><em>A Whole Experience.</em>
                </h2>
                <p className="body-text mb-6">
                  Hundreds of travelers pass through Pokhara every week. Many stay in
                  large, impersonal hotels and miss what makes this place extraordinary.
                  At Eco Tree, our family of staff remembers your name, your breakfast
                  preference, your trek plans — and they genuinely care about each one.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: '16th St', label: 'Prime Lakeside Address' },
                    { val: 'Eco', label: 'Certified Sustainable' },
                    { val: 'Local', label: 'Nepalese Owned & Run' },
                    { val: '4.3★', label: 'TripAdvisor Rated' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-ivory-dark p-4">
                      <div className="font-serif-display text-2xl text-forest font-light">{item.val}</div>
                      <div className="text-[0.65rem] text-stone tracking-wide uppercase mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setActivePage('rooms')} className="btn-luxury">
                  Plan Your Stay <ArrowRight size={14} />
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <img
                  src={IMAGES.machapuchare}
                  alt="Machapuchare mountain peak Pokhara view"
                  className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                {/* Award badge */}
                <div className="absolute top-5 right-5 bg-gold p-4 text-center">
                  <div className="font-serif-display text-3xl text-charcoal font-light leading-none">4.3</div>
                  <div className="text-charcoal text-lg leading-none">★★★★</div>
                  <div className="text-[0.55rem] text-charcoal tracking-widest uppercase mt-1 font-semibold">TripAdvisor</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="relative h-[45vh] sm:h-[50vh] min-h-[300px] overflow-hidden">
        <img
          src={IMAGES.phewa}
          alt="Phewa Lake sunset boats at Pokhara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <FadeIn>
            <div className="px-4">
              <div className="label-tag text-stone mb-4">Your Journey Begins</div>
              <h2 className="section-heading-light text-4xl lg:text-6xl mb-6">
                Begin Your Pokhara Story
              </h2>
              <p className="text-ivory-soft font-light mb-8 max-w-md mx-auto leading-relaxed">
                Let us take care of every detail. All that's left for you is to arrive,
                breathe, and let Pokhara work its magic.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => setActivePage('contact')} className="btn-gold">
                  Reserve Now <ArrowRight size={14} />
                </button>
                <a href="tel:+97761540000" className="btn-luxury-outline">
                  Call Us Directly
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
