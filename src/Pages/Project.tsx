import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { DotBackgroundDemo } from "@/background/DotBackground";
import Navbar from "../components/Navbar";

import HTMLimg from "../icons/html-5-svgrepo-com.svg";
import CSSimg from "../icons/css-3-svgrepo-com.svg";
import JSimg from "../icons/js-svgrepo-com.svg";
import Reactimg from "../icons/react-svgrepo-com.svg";
import Tailwindimg from "../icons/tailwindcss-icon-svgrepo-com.svg";
import Nodeimg from "../icons/node-js-svgrepo-com.svg";
import Expressimg from "../icons/express-svgrepo-com.svg";
import GitHubimg from "../icons/github-svgrepo-com.svg";
import Mongoimg from "../icons/mongodb-svgrepo-com.svg";
import Pythonimg from "../icons/python-svgrepo-com.svg";
import TSimg from "../icons/typescript-svgrepo-com.svg";
import Zustandimg from "../icons/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg";
import Reduximg from "../icons/redux-logo-svgrepo-com.svg";
import Shadcnimg from "../icons/shadcn.svg";
import NPMimg from "../icons/download.png";
import Mongooseimg from "../icons/Mongoose.js.svg";
import Vercelimg from "../icons/vercel.png";

const skills = [
  { name: "HTML", icon: HTMLimg },
  { name: "CSS", icon: CSSimg },
  { name: "JavaScript", icon: JSimg },
  { name: "TypeScript", icon: TSimg },
  { name: "React", icon: Reactimg },
  { name: "Redux", icon: Reduximg },
  { name: "Zustand", icon: Zustandimg },
  { name: "Tailwind", icon: Tailwindimg },
  { name: "Shadcn", icon: Shadcnimg },
  { name: "Node.js", icon: Nodeimg },
  { name: "Express", icon: Expressimg },
  { name: "MongoDB", icon: Mongoimg },
  { name: "Mongoose", icon: Mongooseimg },
  { name: "Python", icon: Pythonimg },
  { name: "GitHub", icon: GitHubimg },
  { name: "NPM", icon: NPMimg },
  { name: "Vercel", icon: Vercelimg },
];

interface Project {
  title: string;
  description: string;
  points: string[];
  techStack: string[];
  image: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description: "A modern and responsive online shopping platform.",
    points: [
      "Secure user authentication ",
      "Google OAuth integration for easy sign-in",
      "Products dynamically rendered from a MongoDB database"
    ],
    techStack: ["React", "Tailwind", "Framer Motion", "Mongoose", "MongoDB", "Express", "Node.js", "Zustand"],
    image: "/image2.png",
    github: "../../public/image2.png",
  },
  {
    title: "Social Media Website",
    description: "A full-featured platform for photo sharing and social engagement.",
    points: [
      "Secure authentication with personalized user dashboards",
      "Dynamic photo feed and upload functionality",
      "Customizable layouts with movable and resizable photo components"
    ],
    techStack: ["React", "Tailwind", "Framer Motion", "Mongoose", "MongoDB", "Express", "Node.js", "Zustand"],
    image: "/image3.png",
    github: "https://github.com/yourusername/project-two",
  },
  {
    title: "Tic Tac Toe",
    description: "A classic game reimagined with local score tracking and a clean interface.",
    points: [
      "Minimalistic and responsive design",
      "Persistent score tracking using local storage",
      "Reset controls for both game and score"
    ],
    techStack: ["React", "Tailwind"],
    image: "/project-sample.png",
    github: "https://github.com/yourusername/project-three",
  },
  {
    title: "Portfolio",
    description: "A visually compelling developer portfolio with interactive features.",
    points: [
      "Custom-designed interface with fluid animations",
      "Framer Motion bubbles for playful background interactions",
      "Built-in Game Zone section for creative flair"
    ],
    techStack: ["React", "Tailwind"],
    image: '/image.png',
    github: "https://github.com/yourusername/project-three",
  },
];


const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative w-full md:w-[65%] my-10 p-8 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col md:flex-row gap-6 ${
        isLeft ? "md:self-start md:ml-0 md:mr-auto" : "md:self-end md:ml-auto md:mr-0"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-1/3 h-48 object-cover rounded-xl"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          {project.title}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-lg hover:text-gray-400" />
          </a>
        </h2>
        <p className="text-sm text-gray-300 mb-4 max-w-xl">
          {project.description}
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
          {project.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-2">
  {project.techStack.map((tech, i) => {
    const icon = skills.find(skill => skill.name.toLowerCase() === tech.toLowerCase())?.icon;
    return (
      <span
        key={i}
        className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition"
      >
        {icon && (
          <img src={icon} alt={tech} className="h-4 w-4" />
        )}
        {tech}
      </span>
    );
  })}
</div>

      </div>
    </motion.div>
  );
};

export default function Projectss() {
  return (
    <div className="relative w-full px-8 pt-32 pb-20  text-white overflow-y-auto min-h-screen">
        <Navbar />
      <div className="absolute inset-0 w-full min-h-full  pointer-events-none dark ">
        <DotBackgroundDemo />
      </div>
      <div className="relative">
        <h1 className="text-center text-5xl font-bold mb-20 text-white">
          Projects
        </h1>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
