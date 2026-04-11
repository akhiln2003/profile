import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023 - Present',
    title: 'MERN Stack Specialist',
    organization: 'Brototype',
    description: 'Immersed in an intensive bootcamp, mastering Full-Stack development. Focused on Microservices, Docker, and AWS EKS to build production-grade applications.',
  },
  {
    year: 'Pre - 2023',
    title: 'Technical Foundation',
    organization: 'ITI Kozhikode',
    description: 'Mastered Electronic Mechanical systems. While this built my discipline and troubleshooting mindset, my final year sparked a pivot toward the infinite possibilities of software.',
  }
];

export default function About() {
  return (
    <section id="about" className="w-full px-4 container mx-auto max-w-6xl relative z-10 flex flex-col justify-center">
      
      <div className="neo-glass-heavy rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 relative overflow-hidden">
        {/* Internal Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aurora-1 opacity-20 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        {/* Left Column: Heading & Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-5/12 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 drop-shadow-lg text-white leading-tight">
            The <br/>Journey
          </h2>
          
          <div className="space-y-6 text-white/80 text-[16px] md:text-lg leading-relaxed font-medium">
            <p>
              My journey is unconventional. Transitioning from a Humanities background to Electronic Mechanical at <span className="text-white font-bold">ITI Kozhikode</span>, I developed a rigorous, hands-on approach to problem-solving.
            </p>
            <p>
              Realizing my heart lay in code, I pivoted to Software Engineering. At <span className="text-white font-bold">Brototype</span>, I bridged the gap between hardware logic and software architecture, specializing in the MERN stack and scalable cloud systems.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-7/12 relative z-10"
        >
          <div className="absolute left-[3px] md:left-[5px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

          <div className="space-y-12 pl-10 md:pl-16">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[45px] md:-left-[71px] top-1.5 w-5 h-5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                
                <div className="flex flex-col neo-glass p-8 rounded-3xl transition-transform duration-500 hover:scale-[1.02]">
                  <span className="text-white/60 text-[14px] font-bold tracking-widest mb-2 block uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">{item.title}</h3>
                  <h4 className="text-[16px] font-bold text-white/70 mb-4">{item.organization}</h4>
                  <p className="text-white/60 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
