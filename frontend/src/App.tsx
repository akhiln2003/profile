import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Stack from './components/sections/Stack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import MagneticCursor from './components/ui/MagneticCursor';
import { motion } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Import the streamline Home component
import Home from './components/sections/Home';

// Isolated page wrappers for visual consistency
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-24 pb-24 md:pt-32 md:pb-40 relative z-10 min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden">
    {children}
  </div>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
        <ScrollToTop />
        <MagneticCursor />
        
        {/* Global Ambient Desktop Aurora */}
      <div className="aurora-container">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="aurora-blob w-[800px] h-[800px] bg-aurora-1 top-[-10%] left-[-10%]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="aurora-blob w-[600px] h-[600px] bg-aurora-2 top-[30%] right-[-10%]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="aurora-blob w-[900px] h-[900px] bg-aurora-3 bottom-[-20%] left-[20%]" 
        />
      </div>

      <Navbar />
      
      <main className="w-full bg-transparent text-white font-sans selection:bg-white selection:text-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/stack" element={<PageWrapper><Stack /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
