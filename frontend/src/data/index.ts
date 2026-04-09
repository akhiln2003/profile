export interface Project {
  _id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export const PORTFOLIO_DATA = {
  projects: [
    {
      _id: "1",
      title: "Sample Project Alpha",
      type: "Web Application",
      description: "A robust scalable web application. Replace this with your own project details after the project is complete.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com/alpha",
      github: "https://github.com/akhiln2003/alpha",
      featured: true
    },
    {
      _id: "2",
      title: "Sample Project Beta",
      type: "Mobile Experience",
      description: "An elegant mobile-first web experience. Add your own custom text and image links here.",
      tech: ["Next.js", "Framer Motion", "GSAP"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com/beta",
      github: "https://github.com/akhiln2003/beta",
      featured: true
    }
  ] as Project[]
};
