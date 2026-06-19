import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Waves, Heart, Wind, Coffee, Dumbbell, Car, Compass, Wifi, Sun, Clock, CheckCircle } from 'lucide-react';

interface FacilitiesPageProps {
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

const mainFacilities = [
  {
    id: 'pool',
    icon: Waves,
    title: 'Rooftop Swimming Pool',
    tagline: 'The sky as your ceiling, the Himalayas as your view.',
    description: `Our rooftop pool is the jewel of Hotel Eco Tree. Designed to align with the Annapurna horizon, swimming here at dawn as the mountains turn gold is an experience that redefines what a hotel can offer. The pool deck features comfortable sun loungers, a poolside bar serving fresh juices and cocktails, and a dedicated area for quiet contemplation.`,
    image: 'https://images.pexels.com/photos/36486483/pexels-photo-36486483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    details: ['Open daily 6:00 AM – 10:00 PM', 'Himalayan panoramic views', 'Poolside bar & service', 'Sun loungers & towels included', 'Heated in cooler months', 'Exclusive for hotel guests'],
    color: '#2D5016',
  },
  {
    id: 'spa',
    icon: Heart,
    title: 'Spa & Wellness',
    tagline: 'Ancient traditions. Modern sanctuary.',
    description: `Inspired by Nepal's rich healing traditions, our spa is a dedicated space for restoration. Each treatment is performed by certified therapists who blend Ayurvedic principles with contemporary wellness practices. From the moment you enter — greeted by warm candlelight and the scent of mountain herbs — the world slows down.`,
    image: 'https://images.pexels.com/photos/6186770/pexels-photo-6186770.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    details: ['Ayurvedic full-body massage', 'Hot stone therapy', 'Aromatherapy treatments', 'Facial rituals & scrubs', 'Couple\'s massage available', 'Advance booking recommended'],
    color: '#3D6B20',
  },
  {
    id: 'sauna',
    icon: Wind,
    title: 'Sauna & Steam Room',
    tagline: 'Let the mountain air restore you from within.',
    description: `After a day on the trails or exploring Pokhara's wonders, our sauna and steam room offer the ultimate recovery ritual. The dry Finnish sauna reaches therapeutic temperatures while the steam room's eucalyptus-infused air opens the senses and soothes tired muscles. A cold shower follows — then peace.`,
    image: 'https://images.pexels.com/photos/9146378/pexels-photo-9146378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    details: ['Finnish dry sauna', 'Eucalyptus steam room', 'Cold shower rinse', 'Towels & robes provided', 'Open 7:00 AM – 9:00 PM', 'Complimentary for hotel guests'],
    color: '#4A7C28',
  },
  {
    id: 'restaurant',
    icon: Coffee,
    title: 'Restaurant & Rooftop Bar',
    tagline: 'Nepalese soul, international palate.',
    description: `Our restaurant is a celebration of Nepal's extraordinary culinary heritage. Mornings begin with an abundant breakfast buffet featuring fresh local produce, eggs cooked to order, and the finest Himalayan teas. Evenings on the rooftop bar become magical as lantern light mingles with the mountain silhouette and our bartenders craft cocktails inspired by local botanicals.`,
    image: 'https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    details: ['Full buffet breakfast included', 'À la carte lunch & dinner', 'Nepalese & international menu', 'Rooftop bar with mountain views', 'Dietary options available', 'In-room dining available'],
    color: '#B8973A',
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    title: 'Fitness Center',
    tagline: 'Stay strong, stay centered.',
    description: `Our fitness center is equipped with modern cardio and strength training equipment to keep your wellness routine uninterrupted on the road. A dedicated yoga and stretching zone faces the garden and mountain views, creating the ideal space for morning practice or evening meditation.`,
    image: 'https://images.pexels.com/photos/28226576/pexels-photo-28226576.png?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    details: ['Cardio machines & free weights', 'Yoga & stretching zone', 'Mountain-view workout space', 'Open 5:30 AM – 10:00 PM', 'Complimentary for hotel guests', 'Yoga mat & towels provided'],
    color: '#2D5016',
  },
  {
    id: 'transfer',
    icon: Car,
    title: 'Airport Transfer & Tours',
    tagline: 'From touchdown to mountain views, seamlessly.',
    description: `From the moment your flight lands at Pokhara Airport to the day of your departure, our dedicated team ensures your journey is smooth and stress-free. Our tour assistance desk arranges trekking permits, guides for Annapurna Base Camp, day trips to Sarangkot, Begnas Lake, and everything Pokhara and beyond has to offer.`,
    image: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    details: ['Airport pickup & drop-off', 'Private vehicle available', 'Trekking permit assistance', 'Certified local guides', 'Day trips & excursions', '24/7 concierge support'],
    color: '#3D6B20',
  },
];

const additionalServices = [
  { icon: Wifi, label: 'High-Speed Wi-Fi', desc: 'Throughout the property' },
  { icon: Sun, label: 'Sun Terrace', desc: 'Garden relaxation space' },
  { icon: Clock, label: '24/7 Front Desk', desc: 'Always here for you' },
  { icon: CheckCircle, label: 'Laundry Service', desc: 'Same-day available' },
  { icon: Car, label: 'Free Parking', desc: 'Secure on-site' },
  { icon: Compass, label: 'Luggage Storage', desc: 'Before & after trekking' },
];

export default function FacilitiesPage({ setActivePage }: FacilitiesPageProps) {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative h-[280px] sm:h-[340px] lg:h-[440px] overflow-hidden mt-14 sm:mt-16 lg:mt-[104px]">
        <img
          src="https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1400"
          alt="Rooftop pool with mountain views at Hotel Eco Tree"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,26,0.6)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="max-w-2xl">
              <div className="label-tag text-stone mb-3">Curated Experiences</div>
              <div className="divider-gold mb-5" />
              <h1 className="hero-headline text-ivory text-4xl lg:text-6xl">
                Facilities & Experiences
              </h1>
              <p className="text-ivory-soft font-light mt-4 max-w-lg leading-relaxed">
                Every amenity at Eco Tree is conceived as an experience — a reason to
                linger, to restore, to discover something new about yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities — alternating layout */}
      <section className="section-pad">
        <div className="container-luxury">
          <div className="space-y-12 lg:space-y-24">
            {mainFacilities.map((fac, i) => (
              <FadeIn key={fac.id} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`img-hover-zoom overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={fac.image}
                      alt={fac.title + ' at Hotel Eco Tree Pokhara'}
                      className="w-full h-[240px] sm:h-[320px] lg:h-[480px] object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: fac.color + '20', border: `1px solid ${fac.color}30` }}
                      >
                        <fac.icon size={18} style={{ color: fac.color }} strokeWidth={1.5} />
                      </div>
                      <div className="label-tag" style={{ color: fac.color }}>
                        {i === 0 ? 'Signature' : i === 1 ? 'Wellness' : i === 2 ? 'Recovery' : i === 3 ? 'Dining' : i === 4 ? 'Fitness' : 'Concierge'}
                      </div>
                    </div>

                    <div className="divider-gold mb-6" />

                    <h2 className="font-serif-display text-3xl lg:text-4xl text-charcoal font-light mb-2">
                      {fac.title}
                    </h2>
                    <p className="font-serif-display text-lg text-stone italic mb-5">{fac.tagline}</p>
                    <p className="text-body font-light leading-relaxed mb-7">{fac.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                      {fac.details.map((d, di) => (
                        <div key={di} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span className="text-sm text-body">{d}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setActivePage('contact')}
                      className="btn-luxury"
                    >
                      Enquire Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="section-pad bg-charcoal">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="label-tag text-stone mb-4">Additional Services</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="font-serif-display text-3xl lg:text-4xl text-ivory font-light">
                Everything You Need
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[rgba(201,185,154,0.1)]">
            {additionalServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-charcoal p-6 text-center group hover:bg-forest transition-colors duration-300">
                  <s.icon size={22} className="text-gold mx-auto mb-3 group-hover:text-stone transition-colors" strokeWidth={1.5} />
                  <div className="font-medium text-ivory text-sm mb-1 group-hover:text-ivory">{s.label}</div>
                  <div className="text-[0.7rem] text-stone">{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Eco commitment */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="label-tag text-forest mb-4">Our Commitment</div>
                <div className="divider-gold mb-6" />
                <h2 className="section-heading mb-6">
                  Luxury That
                  <br /><em>Loves the Planet</em>
                </h2>
                <p className="body-text mb-5">
                  The 'Eco' in Eco Tree is not a marketing term — it's a promise built
                  into everything we do. From solar water heating on our rooftop to
                  partnerships with local organic farms, we believe luxury and
                  responsibility belong together.
                </p>
                <div className="space-y-4">
                  {[
                    'Solar-powered water heating',
                    'Local & organic food sourcing',
                    'Plastic-free guest amenities',
                    'Community employment priority',
                    'Tree-planting guest program',
                    'Water conservation systems',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-forest flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-sm text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-forest p-6 sm:p-10 lg:p-14 text-center">
                <div className="font-serif-display text-5xl lg:text-8xl text-gold font-light opacity-20 mb-0 leading-none">"</div>
                <blockquote className="font-serif-display text-xl lg:text-2xl text-ivory font-light italic leading-relaxed mb-6 -mt-4">
                  We care for Pokhara as fiercely as we care for our guests. This valley
                  is our home, and every traveler who stays with us becomes part of that
                  story.
                </blockquote>
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <div className="text-stone text-sm tracking-wide">Hotel Eco Tree Management</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-dark py-16">
        <div className="container-luxury text-center">
          <FadeIn>
            <h2 className="font-serif-display text-3xl lg:text-4xl text-charcoal font-light mb-4">
              Ready to Experience It All?
            </h2>
            <p className="text-body font-light mb-8">
              Book your stay and enjoy every facility from day one.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setActivePage('contact')} className="btn-luxury">
                Book Now <ArrowRight size={14} />
              </button>
              <button onClick={() => setActivePage('rooms')} className="btn-luxury-outline" style={{ color: '#2D5016', borderColor: '#2D5016' }}>
                View Rooms
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
