

import { motion } from "framer-motion";
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
  { name: "JS", icon: JSimg },
  { name: "React", icon: Reactimg },
  { name: "Tailwind", icon: Tailwindimg },
  { name: "Node.js", icon: Nodeimg },
  { name: "Express", icon: Expressimg },
  { name: "GitHub", icon: GitHubimg },
  { name: "MongoDB", icon: Mongoimg },
  { name: "Python", icon: Pythonimg },
  { name: "TypeScript", icon: TSimg },
  { name: "Zustand", icon: Zustandimg },
  { name: "Redux", icon: Reduximg },
  { name: "Shadcn", icon: Shadcnimg },
  { name: "NPM", icon: NPMimg },
  { name: "Mongoose", icon: Mongooseimg },
  { name: "Vercel", icon: Vercelimg },
];
// ...your icons and skills array here (unchanged)

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
}

interface Props {
  project: Project;
  isActive: boolean;
}

export default function ProjectCard({ project, isActive }: Props) {
  return (
<motion.div
  className={`flex flex-col lg:flex-row items-center justify-center transition-all duration-500 w-[90vw] md:w-[70vw] gap-10 p-4 rounded-xl bg-black/10 backdrop-blur-md ${
    isActive ? "opacity-100" : "opacity-0"
  }`}
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  {/* Responsive image container */}
  <div
    className="
      w-full max-w-[350px] h-[180px] 
      sm:max-w-[420px] sm:h-[220px]
      md:max-w-[500px] md:h-[280px] 
      flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-500
    "
  >
    <img
      src={project.imageUrl}
      alt={project.title}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="mt-4 flex flex-wrap gap-3">
    <motion.div
      className="text-muted-foreground text-sm text-left max-w-xl flex flex-col flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h2>
      <p className="mt-2">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {project.techStack.map((tech) => {
          const skill = skills.find(
            (s) => s.name.toLowerCase() === tech.toLowerCase()
          );
          return (
            <div
              key={tech}
              className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs text-white shadow-sm backdrop-blur-sm flex-wrap"
            >
              {skill?.icon && (
                <img src={skill.icon} alt={tech} className="w-4 h-4" />
              )}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  </div>
</motion.div>

  );
}
