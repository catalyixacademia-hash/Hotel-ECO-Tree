import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import MobileBookingBar from './components/MobileBookingBar';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ExplorePage from './pages/ExplorePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'rooms' | 'facilities' | 'explore' | 'gallery' | 'contact';

const pageComponents: Record<Page, React.ComponentType<{ setActivePage: (page: string) => void }>> = {
  home: HomePage,
  rooms: RoomsPage,
  facilities: FacilitiesPage,
  explore: ExplorePage,
  gallery: GalleryPage as React.ComponentType<{ setActivePage: (page: string) => void }>,
  contact: ContactPage as React.ComponentType<{ setActivePage: (page: string) => void }>,
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleSetPage = (page: string) => {
    setActivePage(page as Page);
  };

  const PageComponent = pageComponents[activePage];

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-clip">
      <Navigation activePage={activePage} setActivePage={handleSetPage} />

      <main className="flex-1 pt-0 pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <PageComponent setActivePage={handleSetPage} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={handleSetPage} />
      <BackToTop />
      <MobileBookingBar setActivePage={handleSetPage} />
    </div>
  );
}
