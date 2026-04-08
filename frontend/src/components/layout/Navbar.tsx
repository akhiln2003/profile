import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Stack', path: '/stack' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-8 px-4 transition-transform duration-500 pointer-events-none">
      <nav
        className={cn(
          'flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-auto px-6 py-4 rounded-full pointer-events-auto',
          isScrolled ? 'neo-glass shadow-2xl scale-95' : 'bg-transparent w-full md:w-auto gap-16 border border-transparent scale-100'
        )}
      >
        <Link to="/" className="relative z-50 text-xl font-bold tracking-tight text-white hover:text-white/70 transition-colors hidden md:block mr-12">
          Akhil.N
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative text-[14px] font-semibold transition-colors px-5 py-2 rounded-full",
                  isActive ? "text-black" : "text-white/60 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="w-full md:hidden flex justify-between items-center">
          <Link to="/" className="font-bold text-lg text-white">Akhil.N</Link>
          <button className="relative z-50 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-4 max-h-[400px] top-24 z-40 neo-glass-heavy rounded-3xl flex flex-col items-center justify-center space-y-6 pointer-events-auto"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * i }}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
