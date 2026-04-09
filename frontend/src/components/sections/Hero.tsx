import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const AnimatedText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  const words = text.split(' ');
  let charCount = 0;

  return (
    <span className="flex flex-wrap justify-center w-full">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden whitespace-nowrap">
          {word.split('').map((char, index) => {
            const currentDelay = delayOffset + charCount * 0.04;
            charCount++;
            return (
              <motion.span
                key={index}
                initial={{ y: "120%", rotate: 5, opacity: 0, filter: 'blur(10px)' }}
                animate={{ y: 0, rotate: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 1.2,
                  delay: currentDelay,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex !== words.length - 1 && (
            <span className="inline-block">{"\u00A0"}</span>
          )}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      
      {/* Dynamic Background Elements specific to Hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-aurora-1 rounded-full blur-[150px] opacity-40 animate-pulse pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-aurora-2 rounded-full blur-[180px] opacity-30 pointer-events-none" />
        {/* Subtle grid line pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_10%,transparent_100%)]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center justify-center pt-10"
      >
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-aurora-1 via-aurora-2 to-aurora-1 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="neo-glass px-6 py-2.5 rounded-full flex items-center gap-3 backdrop-blur-2xl relative bg-black/40 border border-white/10">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-2 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-aurora-2"></span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/90">
              Akhil N • Available Worldwide
            </span>
          </div>
        </motion.div>

        {/* Master Typography Selection */}
        <div className="flex flex-col items-center text-center mb-16 relative w-full">
          <h1 className="text-[clamp(1.75rem,5vw,6.5rem)] leading-[1.1] md:leading-[1] font-extrabold tracking-tight uppercase w-full flex flex-col items-center text-white drop-shadow-2xl z-20">
            <div className="relative max-w-full">
              <AnimatedText text="SOFTWARE DEVELOPMENT ENGINEER" delayOffset={0.1} />
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="absolute bottom-[5%] left-0 right-0 h-[0.05em] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 origin-left pointer-events-none"
              />
            </div>
            <div className="relative mt-3 md:mt-1 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 max-w-full">
              <AnimatedText text="ARCHITECT" delayOffset={0.3} />
              
              {/* Floating Sparkle Decoration */}
              <motion.div 
                initial={{ opacity: 0, rotate: -45, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1.5, type: 'spring' }}
                className="absolute -right-10 -top-10 text-aurora-2 opacity-60 mix-blend-screen hidden md:block"
              >
                <Sparkles size={64} strokeWidth={1} />
              </motion.div>
            </div>
          </h1>
        </div>

        {/* Bento Grid layout for Hero Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-30"
        >
          {/* Main Intro Card */}
          <div className="md:col-span-2 neo-glass-heavy rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between gap-8 relative z-10">
              <p className="text-xl md:text-3xl font-medium leading-relaxed text-white/80 max-w-2xl">
                Crafting high-performance <span className="text-white font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">MERN</span> stack platforms & scalable architectures. I turn complex problems into fluid, premium web experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <Link to="/projects" className="group/btn relative overflow-hidden rounded-full p-[1px] w-full sm:w-auto">
                  <span className="absolute inset-0 bg-gradient-to-r from-aurora-1 via-aurora-2 to-aurora-1 rounded-full opacity-70 group-hover/btn:opacity-100 transition-opacity animate-pulse" />
                  <div className="relative bg-black/50 backdrop-blur-xl px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all">
                    <span className="font-bold tracking-wider uppercase text-sm text-white">View Projects</span>
                    <ArrowRight size={18} className="text-white group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>

                <a 
                  href="/resume.pdf" 
                  download 
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full hover:bg-white/5 transition-colors group/dl w-full sm:w-auto"
                >
                  <Download size={18} className="text-white/60 group-hover/dl:text-white group-hover/dl:-translate-y-1 transition-all duration-300" />
                  <span className="font-bold tracking-wider uppercase text-sm text-white/80 group-hover/dl:text-white transition-colors">Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Side Profile / Stats Card */}
          <div className="neo-glass-heavy rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-center items-center group min-h-[300px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-aurora-2)_0%,_transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="absolute inset-0 border-[1px] border-white/20 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
              <img 
                src="/profile.jpg" 
                alt="Akhil N"
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 z-10 relative bg-zinc-900 shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"
              />
              {/* Fallback overlay */}
              <div className="absolute inset-0 -z-10 bg-zinc-900 rounded-full flex items-center justify-center text-[10px] text-white/30 text-center px-4 font-bold tracking-wider uppercase">
                profile.jpg
              </div>
            </div>


          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}
