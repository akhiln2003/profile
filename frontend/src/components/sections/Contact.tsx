import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormState('submitting');
    
    // Package form data explicitly
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/akhiln8137@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormState('success');
        setTimeout(() => {
          setFormState('idle');
          form.reset();
        }, 3000);
      } else {
        setFormState('idle');
        alert("There was an error communicating with the server. Please try again.");
      }
    } catch (error) {
      setFormState('idle');
      alert("Network error occurred. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="w-full px-4 container mx-auto max-w-6xl flex flex-col md:flex-row gap-16 relative z-10 items-center">
      
      {/* Info Column */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-5/12 flex flex-col justify-center"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 drop-shadow-lg text-white">
          Inbox<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-3 to-white">Always</span> Open.
        </h2>
        
        <p className="text-white/70 text-[16px] md:text-lg leading-relaxed mb-12 max-w-md font-medium">
          Ready to scale your next big idea or architect robust systems? Drop a line.
        </p>

        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-white/50 uppercase tracking-widest font-bold">Direct Email</span>
            <a href="mailto:akhiln8137@gmail.com" className="text-2xl font-bold tracking-tight hover:text-white/70 transition-colors">akhiln8137@gmail.com</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-white/50 uppercase tracking-widest font-bold">Mobile</span>
            <span className="text-2xl font-bold tracking-tight">+91 8137825321</span>
          </div>

          <div className="flex flex-col gap-2 mt-4 pt-6 border-t border-white/10">
             <span className="text-[14px] text-white/50 uppercase tracking-widest font-bold mb-2">My Resume</span>
             <a 
                href="/resume.pdf" 
                download 
                className="w-full md:w-fit px-8 py-4 bg-gradient-to-r from-aurora-1 to-aurora-2 rounded-2xl font-bold text-white tracking-widest uppercase text-sm hover:opacity-80 transition-opacity flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
             >
                Download Resume <Mail size={18} />
             </a>
          </div>


        </div>
      </motion.div>

      {/* Form Column */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-7/12"
      >
        <div className="neo-glass-heavy rounded-[3rem] p-8 md:p-14 relative overflow-hidden">
          {/* Subtle Form Spotlight */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-aurora-2 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-30" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            
            {/* Disable FormSubmit Captcha for silent iframe execution */}
            <input type="hidden" name="_captcha" value="false" />
            
            {/* Success Overlay */}
            {formState === 'success' && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 bg-black/40 backdrop-blur-3xl rounded-[2rem] flex flex-col items-center justify-center border border-white/10"
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                  <CheckCircle size={64} strokeWidth={1.5} className="text-white mb-6 drop-shadow-lg" />
                </motion.div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Transmission Secured</h3>
                <p className="text-white/70 font-medium">I'll get back to you shortly.</p>
              </motion.div>
            )}

            <div className="space-y-3">
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 text-white text-[16px] font-medium focus:outline-none focus:border-white/60 transition-all placeholder:text-white/40 shadow-inner"
                placeholder="YOUR NAME"
              />
            </div>

            <div className="space-y-3">
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 text-white text-[16px] font-medium focus:outline-none focus:border-white/60 transition-all placeholder:text-white/40 shadow-inner"
                placeholder="YOUR EMAIL"
              />
            </div>

            <div className="space-y-3">
              <textarea 
                name="message"
                required
                rows={5}
                className="w-full bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 text-white text-[16px] font-medium focus:outline-none focus:border-white/60 transition-all resize-none placeholder:text-white/40 shadow-inner"
                placeholder="PROJECT DETAILS..."
              />
            </div>

            <button 
              disabled={formState === 'submitting'}
              className="w-full py-6 mt-4 bg-white text-black font-black uppercase tracking-widest text-[15px] rounded-2xl hover:bg-white/80 transition-colors flex justify-center items-center gap-3 group disabled:opacity-50 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              {formState === 'submitting' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full" />
              ) : (
                <>Send Message <Send size={18} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
