import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, FolderGit2, Blocks, Mail, ArrowRight } from 'lucide-react';
import Hero from './Hero';

const navTiles = [
  {
    title: 'About Me',
    desc: 'The Journey & Background',
    icon: <User className="w-8 h-8 text-aurora-1" />,
    path: '/about',
    color: 'from-aurora-1/20 to-transparent',
    borderUrl: 'border-aurora-1/30'
  },
  {
    title: 'Projects',
    desc: 'Featured Work & Archives',
    icon: <FolderGit2 className="w-8 h-8 text-aurora-2" />,
    path: '/projects',
    color: 'from-aurora-2/20 to-transparent',
    borderUrl: 'border-aurora-2/30'
  },
  {
    title: 'Stack',
    desc: 'Tech Ecosystem & Tools',
    icon: <Blocks className="w-8 h-8 text-aurora-3" />,
    path: '/stack',
    color: 'from-aurora-3/20 to-transparent',
    borderUrl: 'border-aurora-3/30'
  },
  {
    title: 'Contact',
    desc: 'Let\'s build something together',
    icon: <Mail className="w-8 h-8 text-white/80" />,
    path: '/contact',
    color: 'from-white/10 to-transparent',
    borderUrl: 'border-white/20'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden">
      <Hero />
      
      <section className="relative z-10 w-full container mx-auto px-4 md:px-8 max-w-6xl pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 text-center">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-1 to-aurora-2">Further</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl">
            Dive deeper into my work, discover my tech stack, or get in touch for collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {navTiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
            >
              <Link 
                to={tile.path}
                className={`group flex flex-col justify-between p-8 rounded-3xl neo-glass border ${tile.borderUrl} bg-gradient-to-b ${tile.color} hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  {tile.icon}
                </div>
                
                <div className="mb-6 flex items-center justify-between z-10">
                  <div className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    {tile.icon}
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all" />
                </div>
                
                <div className="z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">{tile.title}</h3>
                  <p className="text-white/60 text-sm font-medium">{tile.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
