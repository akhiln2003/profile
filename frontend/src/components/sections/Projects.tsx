import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { useRef } from 'react';

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
      <div className="w-full md:w-5/12 flex flex-col gap-6 order-2 md:order-1 relative z-20">
        <div className="hidden md:flex flex-col mb-4">
          <span className="text-aurora-2 font-black tracking-widest text-2xl mb-2">0{index + 1}.</span>
          <span className="text-white/50 font-bold uppercase tracking-widest text-[11px] border border-white/10 px-4 py-1.5 rounded-full w-fit">{project.type}</span>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">{project.title}</h3>
        
        <p className="text-white/60 text-base md:text-xl leading-relaxed mt-2 font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-4 py-2 bg-white/5 text-xs font-bold text-white/90 rounded-none border-l border-white/20 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 w-fit group/btn"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all duration-300">
              <ArrowUpRight size={20} className="text-white group-hover/btn:text-black transition-colors" />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm text-white/80 group-hover/btn:text-white transition-colors">Explore Project</span>
          </a>
        )}
      </div>

      {/* Image Side with Parallax */}
      <div className="w-full md:w-7/12 order-1 md:order-2 overflow-hidden rounded-[2rem] md:rounded-[3rem] relative bg-black/50 border border-white/5 group-hover:border-white/10 transition-colors aspect-[4/3] md:aspect-[16/10]">
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
      </div>
    </section>
  );
}
