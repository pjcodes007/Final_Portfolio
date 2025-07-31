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

export default function TechSkills() {
  return (
    <section className="py-24 w-full flex flex-col items-center text-white pb-50">
      <h2 className="text-4xl font-semibold mb-16">My Tech <span className="font-bold">Skills</span> </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
            <span className="text-[0.8rem]">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
