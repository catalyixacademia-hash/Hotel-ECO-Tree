import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';

interface ExplorePageProps {
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

const destinations = [
  {
    id: 'phewa',
    title: 'Phewa Lake',
    subtitle: 'The Soul of Pokhara',
    distance: '5 min walk',
    duration: 'Half or full day',
    rating: 5,
    description: `Phewa Lake is Pokhara's beating heart — a vast mirror of sky and mountain that reflects the Annapurna range with such clarity that the boundary between earth and heaven seems to dissolve. Rent a traditional wooden boat in the morning mist, row toward the sacred island of Tal Barahi Temple, and watch eagles circle overhead.`,
    story: `At dusk, the western shore of Phewa blazes with the most extraordinary light in Nepal. The Fishtail Mountain turns purple, then rose, then a deep violet as the stars emerge. This is not a tourist experience — it is a moment of genuine beauty that has moved travelers from every corner of the world.`,
    tips: ['Best at sunrise for mirror reflections', 'Barahi Temple island — shoes off', 'Evening boat rides are magical', 'Swimming in designated areas'],
    image: 'https://images.pexels.com/photos/37836760/pexels-photo-37836760.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    imageAlt: 'Colorful boats on Phewa Lake at sunset with Annapurna mountains',
    tag: 'Nature & Culture',
    tagColor: '#2D5016',
  },
  {
    id: 'machapuchare',
    title: 'Machapuchare (Fishtail)',
    subtitle: "Nepal's Most Beautiful Peak",
    distance: 'Visible from hotel',
    duration: 'Best at dawn & dusk',
    rating: 5,
    description: `Machapuchare — the sacred "Fish Tail" mountain — stands at 6,993 meters and is considered holy by Hindus, never officially summited. From our rooftop pool, you watch it transform: a ghostly silhouette in pre-dawn darkness, then aflame with alpenglow as the sun rises, then snow-brilliant white by mid-morning.`,
    story: `Our guests often say they cannot sleep past 5am during their stay — not from discomfort, but from the pull of the mountain. The view from Eco Tree's rooftop at 5:45am, coffee in hand, as Machapuchare ignites with the first light of day, is worth flying across the world for.`,
    tips: ['5:30 AM rooftop for best alpenglow', 'Clear days in October–November', 'Monsoon clouds create drama', 'Sarangkot for full Himalayan panorama'],
    image: 'https://images.pexels.com/photos/34765416/pexels-photo-34765416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    imageAlt: 'Machapuchare Fish Tail mountain peak with flowers in foreground',
    tag: 'Scenic',
    tagColor: '#B8973A',
  },
  {
    id: 'lakeside',
    title: 'Lakeside Market & Boulevard',
    subtitle: 'The Living Neighborhood',
    distance: '3 min walk',
    duration: 'Any time of day',
    rating: 4,
    description: `Lakeside is Pokhara's most animated quarter — a stretch of cafés, art galleries, trekking gear shops, bookstores, and rooftop restaurants lining the lake boulevard. In the morning, it belongs to trekkers fueling up; by evening, it transforms into a languid, lantern-lit promenade perfect for wandering.`,
    story: `The best meals in Pokhara are often not in the famous restaurants but in the tiny places off the main road that locals still call their own. Our team has their favorites — and they will happily share them. Ask at the front desk for our handwritten neighborhood guide.`,
    tips: ['Morning market for local produce', 'Evening boulevard walk at dusk', 'Ask us for hidden restaurant gems', 'Tibetan market for gifts & art'],
    image: 'https://images.pexels.com/photos/35917995/pexels-photo-35917995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    imageAlt: 'Phewa Lake boats and lakeside area in Pokhara',
    tag: 'Culture & Food',
    tagColor: '#3D6B20',
  },
  {
    id: 'trekking',
    title: 'Himalayan Trekking',
    subtitle: 'The Great Walk Begins Here',
    distance: 'Permits from hotel',
    duration: 'Day trek to 21 days',
    rating: 5,
    description: `Pokhara is the gateway to some of Earth's greatest trekking — Annapurna Base Camp, the Annapurna Circuit, Poon Hill, Ghorepani, and Mardi Himal all begin within a short drive. Our experienced concierge team arranges everything: permits, guides, porters, gear rental, and daily trail reports.`,
    story: `We have welcomed trekkers returning from ABC who were too exhausted to speak — and watched them transform over 48 hours of hot showers, spa treatments, and rooftop pool recovery into people glowing with the particular joy of those who have stood at the foot of the Himalayas.`,
    tips: ['Best season: Oct–Nov & Mar–May', 'We arrange all permits & guides', 'Day trek to Poon Hill from $40', 'ABC circuit takes 7–12 days'],
    image: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    imageAlt: 'Hiker on Himalayan mountain trail in Nepal',
    tag: 'Adventure',
    tagColor: '#2D5016',
  },
  {
    id: 'museum',
    title: 'International Mountain Museum',
    subtitle: 'Celebrate the Mountains',
    distance: '10 min drive',
    duration: 'Half day',
    rating: 4,
    description: `The International Mountain Museum is one of Asia's finest natural history institutions — a beautifully curated journey through the geology, culture, and mountaineering history of the Himalayas. Permanent exhibitions trace the first ascents of all 14 eight-thousanders, with artifacts, photographs, and personal accounts from legendary expeditions.`,
    story: `Many guests who visited the museum before their trek said it changed how they saw the mountains during the walk. Context transforms landscape into story. We recommend going before you trek, not after.`,
    tips: ['Allow 2-3 hours for full visit', 'Closed on Tuesdays', 'Photography permitted', 'Guides available on site'],
    image: 'https://images.pexels.com/photos/15280106/pexels-photo-15280106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    imageAlt: 'Annapurna mountain range at sunrise from Pokhara',
    tag: 'Culture',
    tagColor: '#B8973A',
  },
  {
    id: 'sarangkot',
    title: 'Sarangkot Viewpoint',
    subtitle: 'Sunrise Above the Clouds',
    distance: '20 min drive',
    duration: 'Pre-dawn departure',
    rating: 5,
    description: `Sarangkot is where Pokhara's relationship with the Himalayas becomes transcendent. Perched 1,592 meters above sea level, the viewpoint offers an unobstructed 180-degree panorama of the Annapurna and Dhaulagiri ranges at sunrise — an experience that renders language insufficient and cameras inadequate.`,
    story: `We arrange early morning transfers leaving the hotel at 5:00 AM. Guests often return unable to speak of anything else. One German couple changed their flight home to stay three extra days — specifically for the view.`,
    tips: ['Depart hotel by 5:00 AM', 'Book transfer through front desk', 'Bring warm layers — it is cold at dawn', 'Paragliding launches from here'],
    image: 'https://images.pexels.com/photos/12717176/pexels-photo-12717176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100',
    imageAlt: 'Aerial view of Pokhara valley and Phewa Lake with Himalayan range',
    tag: 'Scenic & Adventure',
    tagColor: '#2D5016',
  },
];

export default function ExplorePage({ setActivePage }: ExplorePageProps) {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative h-[280px] sm:h-[340px] lg:h-[440px] overflow-hidden mt-[80px] lg:mt-[104px]">
        <img
          src="https://images.pexels.com/photos/12717176/pexels-photo-12717176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1400"
          alt="Aerial view of Phewa Lake and Himalayan range Pokhara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,26,0.55)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="max-w-2xl">
              <div className="label-tag text-stone mb-3">Pokhara Awaits</div>
              <div className="divider-gold mb-5" />
              <h1 className="hero-headline text-ivory text-4xl lg:text-6xl">
                Explore Pokhara
              </h1>
              <p className="text-ivory-soft font-light mt-4 max-w-lg leading-relaxed">
                Nepal's most beautiful valley is your backyard. We are your guide,
                curator, and companion through every discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <div className="bg-forest py-10">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-subtle">
            {[
              { val: '5 min', label: 'Walk to Phewa Lake' },
              { val: '8,000m+', label: 'Peaks Visible' },
              { val: '15+', label: 'Trek Routes' },
              { val: '10+', label: 'Local Experiences' },
            ].map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-serif-display text-3xl text-gold font-light">{s.val}</div>
                <div className="text-stone text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations — editorial layout */}
      <section className="section-pad">
        <div className="container-luxury">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="label-tag text-forest mb-4">Destination Guide</div>
              <div className="divider-gold-center mb-6" />
              <h2 className="section-heading">
                Pokhara Through Our Eyes
              </h2>
              <p className="text-body max-w-xl mx-auto mt-4 font-light leading-relaxed">
                These are the places we love most — not from a guidebook, but from
                years of watching guests fall in love with this valley.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12 lg:space-y-20">
            {destinations.map((dest, i) => (
              <FadeIn key={dest.id} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="img-hover-zoom overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.imageAlt}
                        className="w-full h-[260px] sm:h-[340px] lg:h-[460px] object-cover"
                      />
                    </div>
                    {/* Tag overlay */}
                    <div
                      className="absolute top-5 left-5 text-white text-[0.6rem] font-semibold tracking-widest uppercase px-3 py-1.5"
                      style={{ backgroundColor: dest.tagColor }}
                    >
                      {dest.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <MapPin size={13} className="text-gold" />
                      <span className="text-xs text-gold tracking-wide">{dest.distance} from hotel</span>
                      <span className="text-stone hidden sm:inline">·</span>
                      <Clock size={13} className="text-gold" />
                      <span className="text-xs text-gold tracking-wide">{dest.duration}</span>
                    </div>

                    <div className="divider-gold mt-4 mb-5" />

                    <h2 className="font-serif-display text-3xl lg:text-4xl text-charcoal font-light mb-1">
                      {dest.title}
                    </h2>
                    <p className="font-serif-display text-lg text-stone italic mb-5">{dest.subtitle}</p>

                    <div className="flex mb-5">
                      {Array.from({ length: dest.rating }).map((_, ri) => (
                        <Star key={ri} size={13} className="text-gold fill-gold" />
                      ))}
                    </div>

                    <p className="text-body font-light leading-relaxed mb-5">{dest.description}</p>

                    {/* Story box */}
                    <div className="bg-ivory border-l-2 border-gold p-5 mb-6">
                      <p className="font-serif-display text-base italic text-forest leading-relaxed">{dest.story}</p>
                    </div>

                    {/* Tips */}
                    <div className="mb-6">
                      <div className="text-[0.65rem] text-gold tracking-widest uppercase font-semibold mb-3">Our Tips</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dest.tips.map((tip, ti) => (
                          <div key={ti} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-forest mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-body">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setActivePage('contact')}
                      className="text-forest text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all py-2 min-h-[44px]"
                    >
                      Arrange with us <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="relative h-[40vh] sm:h-[45vh] min-h-[280px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1400"
          alt="Annapurna mountain range Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,26,0.65)]" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <FadeIn>
            <div>
              <div className="label-tag text-stone mb-4">Your Adventure Awaits</div>
              <h2 className="font-serif-display text-4xl lg:text-5xl text-ivory font-light mb-6">
                Let Us Plan Your Pokhara
              </h2>
              <p className="text-ivory-soft font-light mb-8 max-w-md mx-auto">
                Our concierge team can arrange any experience in the valley —
                from sunrise jeep rides to multi-day trekking expeditions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => setActivePage('contact')} className="btn-gold">
                  Contact Concierge <ArrowRight size={14} />
                </button>
                <button onClick={() => setActivePage('home')} className="btn-luxury-outline">
                  Back to Home
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
