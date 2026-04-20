import eComBicycleImg from "./projectIMG/eComBicycle.png";
import theMyosoreFitnessImg from "./projectIMG/theMyosoreFitness.png";
import buxloImg from "./projectIMG/buxlo.png";
import shopifySpeedAuditor from "./projectIMG/shopifySpeedAuditor.png";

export interface Project {
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
      title: "BUXLO - MERN Microservice",
      type: "Money Management & Mentorship Platform",
      description:
        "A scalable web platform that helps users manage personal finances while connecting with expert mentors for guidance on banking and investments. Built with a microservices architecture, it features real-time chat, video calls, secure payments, and efficient session scheduling for a seamless user experience.",
      tech: [
        "Microservices",
        "Docker",
        "Kubernetes",
        "AWS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "JWT",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Axios",
      ],
      image: buxloImg,
      link: "https://akhiln.shop/",
      github: "https://github.com/akhiln2003/Buxlo-MERN-Microservice",
      featured: true,
    },
    {
      title: "ECOM-Bicycle",
      type: "E-commerce Platform",
      description:
        "A scalable e-commerce application for browsing and purchasing bicycles, with product listing, search, cart management, and secure payments, delivering a smooth and responsive shopping experience.",
      tech: ["MongoDB", "Express.js", "EJS", "Node.js"],
      image: eComBicycleImg,
      link: "https://ecombicycle.online/",
      github: "https://github.com/akhiln2003/ECOM-Bicycle",
      featured: true,
    },
    {
      title: "Fitness Web Application",
      type: "Freelance Web Application",
      description:
        "A responsive web application built with React.js and Tailwind CSS, featuring clean UI, optimized performance, and smooth animations using CSS transitions and Framer Motion for an engaging user experience.",
      tech: ["React", "Tailwind CSS", "HTML", "React Router"],
      image: theMyosoreFitnessImg,
      link: "https://themyosorefitness.com/",
      github: "https://github.com/akhiln2003/THE_MYOSORE-Freelance",
      featured: true,
    },
    {
      title: "Shopify Speed Auditor",
      type: "Shopify Speed Optimization Tool",
      description:
        "A performance auditing tool designed to analyze and optimize Shopify stores. It evaluates key performance metrics such as page load speed, asset optimization, and overall frontend efficiency, providing actionable insights to improve user experience and SEO rankings.",
      tech: [
        "React",
        "HTML5",
        "Shopify API",
        "TypeScript",
        "CSS3",
        "Axios",
        "Tailwind CSS",
        "React Router",
      ],
      image: shopifySpeedAuditor,
      link: "https://shopify-speed-auditor.vercel.app/",
      github: "https://github.com/akhiln2003/Shopify-Speed-Auditor",
      featured: false,
    },
  ] as Project[],
};
