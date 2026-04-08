import { motion } from 'framer-motion';
import { Layers, Database, Lock, Cpu, Globe2, Code2 } from 'lucide-react';

const bentoItems = [
  {
    title: 'Frontend Architecture',
    desc: 'Creating fluid, responsive, and complex user interfaces.',
    skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Three.js'],
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-1',
    gradient: 'from-aurora-2 to-aurora-1',
    icon: Globe2
  },
  {
    title: 'Backend Systems',
    desc: 'Scalable and highly available microservices.',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1',
    gradient: 'from-aurora-1 to-aurora-3',
    icon: Database
  },
  {
    title: 'Infrastructure & Ops',
    desc: 'Containerization, orchestration, and CI/CD pipelines.',
    skills: ['Docker', 'AWS EKS', 'Kafka', 'K8s', 'GitHub Actions'],
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-2',
    gradient: 'from-aurora-3 to-aurora-2',
    icon: Cpu
  },
  {
    title: 'Core Computing',
    desc: 'Strong foundation in system design and languages.',
    skills: ['TypeScript', 'JavaScript', 'HTML/CSS', 'Python'],
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-1',
    gradient: 'from-white/40 to-white/10',
    icon: Code2
  },
];

export default function Stack() {
  return (
    <section id="stack" className="min-h-screen pt-24 px-4 container mx-auto max-w-6xl relative z-10 w-full flex flex-col justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-aurora-1/20 to-aurora-3/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center w-full relative z-20"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-aurora-2/30 bg-aurora-2/10 backdrop-blur-md mb-6">
          <Layers size={16} className="text-aurora-2" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-aurora-2">Technical Arsenal</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 drop-shadow-lg text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-1 to-white">Stack</span>
        </h2>
        <p className="text-white/50 max-w-2xl text-lg mt-4 font-medium">Tools and technologies I use to build robust, scalable, and premium web applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[320px] w-full relative z-20">
        {bentoItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[2.5rem] p-1 flex flex-col justify-between overflow-hidden group ${item.colSpan} ${item.rowSpan}`}
            >
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative h-full w-full bg-black/80 backdrop-blur-3xl rounded-[2.3rem] p-8 md:p-10 flex flex-col justify-between border border-white/5 group-hover:border-white/10 transition-colors">
                
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-white/10 to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Icon size={26} className="text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm md:text-base font-medium line-clamp-2">{item.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10 mt-6">
                  {item.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 text-[13px] font-bold bg-white/5 border border-white/10 rounded-xl text-white/80 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 shadow-inner"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
