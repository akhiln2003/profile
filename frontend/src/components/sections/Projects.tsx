import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data';
import type { Project } from '../../data';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { useState } from 'react';
import type { SVGProps } from 'react';

const Github = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const isLongDescription = project.description.length > 150;
  const displayedTech = showAllTech ? project.tech : project.tech.slice(0, 4);
  const hasMoreTech = project.tech.length > 4;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px -5% 0px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex h-full flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-aurora-2/30 transition-all duration-500 hover:shadow-2xl hover:shadow-aurora-2/10"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
            {project.type}
          </span>
          {project.type === 'Freelance Project' && (
            <span className="px-2 py-1 bg-aurora-2/20 backdrop-blur-md text-aurora-2 text-xs font-bold rounded-full border border-aurora-2/30">
              💼
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-aurora-2 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="mb-6">
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            {isLongDescription ? (
              <>
                {project.description.substring(0, 150)}...
                <button
                  onClick={() => setShowDescriptionModal(true)}
                  className="text-aurora-2 text-sm font-semibold ml-1 hover:text-aurora-2/80 transition-colors underline"
                >
                  Read More
                </button>
              </>
            ) : (
              project.description
            )}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {displayedTech.map((t: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-aurora-2/10 text-aurora-2 text-xs font-bold rounded-full border border-aurora-2/20">
                {t}
              </span>
            ))}
            {hasMoreTech && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className=" text-aurora-2 text-sm font-semibold  hover:text-aurora-2/80 transition-colors"
            >
              {showAllTech ? 'Show Less' : `+${project.tech.length - 4} More`}
            </button>
          )}
          </div>
          
        </div>
      </div>

      {/* Links - Moved to bottom of card */}
      <div className="mt-auto px-6 md:px-8 pt-4 pb-4 md:pb-6">
        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-aurora-2 text-black font-bold text-sm rounded-xl hover:bg-aurora-2/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-aurora-2/25"
            >
              <span>View Live</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white/80 font-bold text-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-aurora-2/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-aurora-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

      {/* Description Modal */}
      <AnimatePresence>
        {showDescriptionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowDescriptionModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-black text-white">{project.title}</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowDescriptionModal(false)}
                  className="px-6 py-2 bg-aurora-2 text-black font-bold rounded-xl hover:bg-aurora-2/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Projects() {
  const allProjects = PORTFOLIO_DATA.projects;
  const [selectedType, setSelectedType] = useState<string>('All');
  
  // Sort projects to show featured ones first
  const projects = [...allProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  
  const types = ['All', ...Array.from(new Set(projects.map(p => p.type)))];
  const filteredProjects = selectedType === 'All' ? projects : projects.filter(p => p.type === selectedType);

  return (
    <section id="projects" className="w-full px-4 container mx-auto max-w-6xl relative z-10 overflow-hidden">
      
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

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full overflow-x-auto scrollbar-hide relative z-20 mb-12 md:mb-16"
      >
        <div className="flex gap-3 md:justify-center md:flex-wrap min-w-max md:min-w-0 px-4 md:px-0">
          {types.map((type, idx) => (
            <motion.button
              key={type}
              onClick={() => setSelectedType(type)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full border transition-all duration-500 overflow-hidden whitespace-nowrap ${
                selectedType === type
                  ? 'bg-aurora-2 text-black border-aurora-2 shadow-lg shadow-aurora-2/25'
                  : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-aurora-2/50 hover:shadow-lg hover:shadow-aurora-2/10'
              }`}
            >
              <span className="relative z-10">{type}</span>
              {selectedType === type && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-aurora-2 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full pb-20"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

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
    </section>
  );
}
