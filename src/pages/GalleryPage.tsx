import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';



const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/12717176/pexels-photo-12717176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    alt: 'Aerial view of Phewa Lake and Himalayan range, Pokhara',
    category: 'Views',
    span: 'col-span-2 row-span-2',
    h: 'h-80',
  },
  {
    src: 'https://images.pexels.com/photos/36486483/pexels-photo-36486483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Rooftop infinity pool with mountain backdrop',
    category: 'Pool',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/37836760/pexels-photo-37836760.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Phewa Lake sunset with wooden boats',
    category: 'Pokhara',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Deluxe double room interior',
    category: 'Rooms',
    span: '',
    h: 'h-56',
  },
  {
    src: 'https://images.pexels.com/photos/34765416/pexels-photo-34765416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    alt: 'Machapuchare peak with flowers in foreground',
    category: 'Views',
    span: 'row-span-2',
    h: 'h-72',
  },
  {
    src: 'https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Infinity pool at sunset luxury resort',
    category: 'Pool',
    span: '',
    h: 'h-56',
  },
  {
    src: 'https://images.pexels.com/photos/7746092/pexels-photo-7746092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Deluxe twin room modern design',
    category: 'Rooms',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/6187645/pexels-photo-6187645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Hot stone spa treatment wellness',
    category: 'Spa',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/35917995/pexels-photo-35917995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Colorful boats on Phewa Lake',
    category: 'Pokhara',
    span: '',
    h: 'h-56',
  },
  {
    src: 'https://images.pexels.com/photos/15280106/pexels-photo-15280106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    alt: 'Annapurna peaks at dawn',
    category: 'Views',
    span: 'col-span-2',
    h: 'h-64',
  },
  {
    src: 'https://images.pexels.com/photos/32418082/pexels-photo-32418082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Family suite luxury bedroom',
    category: 'Rooms',
    span: '',
    h: 'h-56',
  },
  {
    src: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Himalayan trekking Nepal adventure',
    category: 'Adventures',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/6186770/pexels-photo-6186770.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Spa massage treatment luxury',
    category: 'Spa',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/37836764/pexels-photo-37836764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Tranquil lake sunset rowboats',
    category: 'Pokhara',
    span: '',
    h: 'h-56',
  },
  {
    src: 'https://images.pexels.com/photos/26570334/pexels-photo-26570334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    alt: 'Machapuchare sunrise mountain',
    category: 'Views',
    span: '',
    h: 'h-72',
  },
  {
    src: 'https://images.pexels.com/photos/14750392/pexels-photo-14750392.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Luxury hotel bedroom interior',
    category: 'Rooms',
    span: '',
    h: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/1870774/pexels-photo-1870774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Rooftop pool lounge with city view',
    category: 'Pool',
    span: '',
    h: 'h-56',
  },
  {
    src: 'https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    alt: 'Annapurna mountain range Nepal',
    category: 'Views',
    span: 'col-span-2',
    h: 'h-56',
  },
];

const categories = ['All', 'Views', 'Pool', 'Rooms', 'Spa', 'Pokhara', 'Adventures'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };
  const handleNext = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

  return (
    <div className="bg-charcoal min-h-screen">
      {/* Hero */}
      <section className="relative h-[240px] sm:h-[300px] lg:h-[380px] overflow-hidden mt-14 sm:mt-16 lg:mt-[104px]">
        <img
          src="https://images.pexels.com/photos/15280106/pexels-photo-15280106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1400"
          alt="Gallery header - Himalayan views from Pokhara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,26,0.65)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="label-tag text-stone mb-3">Visual Stories</div>
            <div className="divider-gold mb-5" />
            <h1 className="hero-headline text-ivory text-4xl lg:text-6xl">
              Gallery
            </h1>
            <p className="text-ivory-soft font-light mt-4 max-w-md leading-relaxed">
              Every image tells a story of the valley we call home.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-charcoal sticky top-[64px] sm:top-[80px] lg:top-[104px] z-30 py-4 sm:py-5 border-b border-subtle">
        <div className="container-luxury">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 min-h-[44px] text-xs font-medium tracking-widest uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-charcoal'
                    : 'text-stone hover:text-ivory border border-[rgba(201,185,154,0.2)] hover:border-[rgba(201,185,154,0.5)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry gallery */}
      <section className="py-10">
        <div className="container-luxury">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0"
          >
            <AnimatePresence mode="wait">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="gallery-item mb-4 break-inside-avoid cursor-pointer group relative"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-400 flex items-center justify-center">
                    <ZoomIn
                      size={28}
                      className="text-white opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Category tag */}
                  <div className="absolute bottom-3 left-3 bg-charcoal/70 text-stone text-[0.6rem] tracking-widest uppercase px-2.5 py-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    {img.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[300] bg-[rgba(10,10,10,0.96)] flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone hover:text-white z-10 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-2 sm:left-4 text-stone hover:text-white z-10 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-5xl max-h-[85vh] px-4 sm:px-8 lg:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src.replace('fit=crop&h=800&w=1200', 'fit=crop&h=900&w=1400')}
                alt={filtered[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="text-center mt-4">
                <div className="text-stone text-sm font-light">{filtered[lightbox].alt}</div>
                <div className="label-tag text-gold mt-1">{filtered[lightbox].category}</div>
              </div>
              <div className="text-center mt-3 text-stone text-xs">
                {lightbox + 1} / {filtered.length}
              </div>
            </motion.div>

            <button
              className="absolute right-2 sm:right-4 text-stone hover:text-white z-10 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
