import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { useRef } from 'react';

const Github = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 border-t border-white/10 pt-12 md:pt-20"
    >
      {/* Index & Mobile Title */}
      <div className="w-full md:hidden flex justify-between items-center mb-4">
        <span className="text-aurora-2 font-black tracking-widest text-xl">0{index + 1}.</span>
        <span className="text-white/50 font-bold uppercase tracking-widest text-xs border border-white/10 px-3 py-1 rounded-full">{project.type}</span>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-5/12 flex flex-col gap-6 order-2 ${index % 2 !== 0 ? 'md:order-2 md:items-end md:text-right' : 'md:order-1'} relative z-20`}>
        <div className={`hidden md:flex flex-col mb-4 ${index % 2 !== 0 ? 'items-end' : ''}`}>
          <span className="text-aurora-2 font-black tracking-widest text-2xl mb-2">0{index + 1}.</span>
          <span className="text-white/50 font-bold uppercase tracking-widest text-[11px] border border-white/10 px-4 py-1.5 rounded-full w-fit">{project.type}</span>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">{project.title}</h3>
        
        <p className="text-white/60 text-base md:text-xl leading-relaxed mt-2 font-medium">
          {project.description}
        </p>
        
        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
          {project.tech.map((t: string, i: number) => (
            <span key={i} className={`px-4 py-2 bg-white/5 text-xs font-bold text-white/90 rounded-none border-white/20 uppercase tracking-wider ${index % 2 !== 0 ? 'border-r' : 'border-l'}`}>
              {t}
            </span>
          ))}
        </div>

        <div className={`flex flex-wrap gap-4 mt-8 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black overflow-hidden hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <span className="font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Live Site</span>
              <div className="bg-black text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center group-hover/btn:-rotate-45 transition-transform duration-500">
                <ArrowUpRight size={14} />
              </div>
            </a>
          )}

          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full border border-aurora-2/30 bg-aurora-2/5 hover:bg-aurora-2/10 backdrop-blur-md text-white overflow-hidden hover:scale-105 transition-all duration-500 hover:border-aurora-2/60"
            >
              <Github size={16} className="text-aurora-2 group-hover/btn:scale-110 transition-transform duration-500 md:w-[18px] md:h-[18px]" />
              <span className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-white/80 group-hover/btn:text-white transition-colors">Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Image Side with Parallax */}
      <div className={`w-full md:w-7/12 order-1 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'} overflow-hidden rounded-[2rem] md:rounded-[3rem] relative bg-black/50 border border-white/5 group-hover:border-white/10 transition-colors aspect-[4/3] md:aspect-[16/10]`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
        <motion.img 
          style={{ y: yImage }}
          src={project.image} 
          alt={project.title}
          className="w-[120%] h-[120%] -top-[10%] -left-[10%] absolute object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Missing Image Fallback styling */}
        <div className="absolute inset-0 -z-10 flex flex-col gap-3 items-center justify-center text-white/30 font-bold uppercase tracking-widest text-xs p-6 text-center">
           <FolderGit2 size={32} className="opacity-50" />
           Add a valid image URL in src/data/index.ts
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="min-h-screen pt-24 px-4 container mx-auto max-w-6xl relative z-10 w-full overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-aurora-2/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-20 md:mb-32 flex flex-col items-center justify-center text-center relative z-20"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-aurora-1/30 bg-aurora-1/10 backdrop-blur-md mb-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-aurora-1">Portfolio</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-lg leading-none">
          Selected <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-2 to-white">Works</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-20 md:gap-32 w-full pb-20">
        {projects.map((project, index) => (
          <ProjectCard key={project._id} project={project} index={index} />
        ))}

        {/* Dynamic GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-10 md:mt-20 relative z-20"
        >
          <a
            href="https://github.com/akhiln2003"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 md:px-12 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:border-aurora-2/50 transition-all duration-500 flex items-center gap-4 overflow-hidden shadow-2xl shadow-black/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-aurora-1/0 via-aurora-2/20 to-aurora-1/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <FolderGit2 className="text-white/60 group-hover:text-aurora-2 transition-colors duration-500 relative z-10 w-6 h-6 md:w-8 md:h-8" />
            <span className="font-bold tracking-[0.2em] text-xs md:text-sm uppercase text-white/80 group-hover:text-white transition-colors duration-500 relative z-10">
              Explore More on GitHub
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
