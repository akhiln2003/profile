import { motion } from 'framer-motion';

import type { SVGProps } from 'react';

const Github = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
const Linkedin = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
const Facebook = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const Instagram = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/n-akhil/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/akhiln2003', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100069427074477', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/akhi1.n/', label: 'Instagram' },
  ];

  return (
    <footer className="w-full relative z-20 border-t border-white/5 bg-black/50 backdrop-blur-3xl pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-aurora-2 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tighter text-white mb-2">AKHIL.N</h3>
            <p className="text-white/50 font-medium max-w-sm">
              Architecting premium web experiences and robust systems. Available for freelance opportunities worldwide.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full neo-glass flex items-center justify-center text-white/70 hover:text-white hover:border-aurora-2/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 pointer-events-auto"
                >
                  <social.icon style={{ width: '20px', height: '20px' }} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="uppercase tracking-widest text-xs font-bold text-white/30 flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/5 gap-4 shadow-sm">
          <p>© {new Date().getFullYear()} Akhil N. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
