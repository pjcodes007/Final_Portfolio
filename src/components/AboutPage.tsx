import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import {
  Github,
  Code2,
  Layout,
  Server,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Footer from './Footer';
import StarryBackground from "@/background/TextureBackground";
import { DotBackgroundDemo } from "@/background/DotBackground";
import PopUp from "@/Pages/PopUp";
import { useState } from "react";

const timeline = [
  {
    date: "May 2024",
    title: "First GitHub Push",
    icon: <Github className="text-purple-400" size={20} />,
  },
  {
    date: "Jan 2025",
    title: "First Leetcode Solution",
    icon: <Code2 className="text-yellow-400" size={20} />,
  },
  {
    date: "May 2025",
    title: "Learned Frontend Development",
    icon: <Layout className="text-blue-400" size={20} />,
  },
  {
    date: "June 2025",
    title: "Learned Backend Development",
    icon: <Server className="text-green-400" size={20} />,
  },
  {
    date: "June 2025",
    title: "Created First Full Stack Website",
    icon: <Globe className="text-pink-400" size={20} />,
  },
  {
    date: "Aug 2025",
    title: "Created This Website",
    icon: <Sparkles className="text-orange-400" size={20} />,
  },
];

export default function AboutPage() {
  const [showPopup,setShowPopup] = useState<boolean>(false);
  return (
    <div className="min-h-screen w-full px-6 pt-20 text-white font-[Outfit] relative dark">
        <DotBackgroundDemo />
        
      {/* Intro Section */}
{/* Intro Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center max-w-3xl mx-auto absolute inset-x-0 top-35"
>
  <h1 className="text-4xl md:text-5xl font-semibold mb-4 relative inline-block group">
    <span className="relative z-10">Hi</span>
    <span
      className="absolute z-0 -left-6 -top-3 text-3xl md:text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-[-35deg]"
      aria-hidden
    >
      ✋
    </span>
    , I’m{" "}
    <span className="inline-flex items-center gap-3">
      <span className="font-black text-white">Praanjal</span>
    </span>
  </h1>
  <p className="text-lg md:text-xl text-gray-300 font-[Outfit]">
    I’m a full-stack developer crafting clean, performant, and beautiful experiences on the web.
  </p>
</motion.div>


      {/* Code Block About Me */}
      <motion.pre
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-80 border border-white rounded-xl p-3 bg-gradient-to-b from-blue-50 to-blue-200 text-transparent bg-clip-text"
        style={{ whiteSpace: 'pre-wrap' }}
      >
{`const praanjal = {
  age: 19,
  nationality: "Indian",
  domain: ["Full Stack Developer", "WordPress Developer"],
  techStack: ["React", "Three.js", "Tailwind", "Node.js", "MongoDB", "..."],
  currentlyWorking: "Portfolio",
  availableToHire: true,
  badJokes: true,
  prefersDarkMode: true,
};`}
      </motion.pre>

      {/* GitHub & LeetCode Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="mt-32 flex flex-col items-center gap-6"
      >
        <div className="group relative flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2">
            <a href="https://github.com/pjcodes007" target="_blank" >
              GitHub
            </a>
          </h2>
          <p className="text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            New to GitHub
          </p>
        </div>
        <GitHubCalendar username="pjcodes007" colorScheme="dark" />
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        viewport={{ once: true }}
        className="mt-24 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          My <span className="font-black">Journey</span>
        </h2>
        <div className="border-l-2 border-gray-700 pl-6 space-y-10 relative">
          {timeline.map((event, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-9 top-0 bg-gray-900 p-2 rounded-full shadow">
                {event.icon}
              </div>
              <div className="text-sm text-gray-400">{event.date}</div>
              <div className="font-semibold text-lg text-white group-hover:scale-[1.03] transition-transform">
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
        viewport={{ amount: 1, once: true }}
        className="w-full min-h-[60vh] text-white px-6 py-20 flex flex-col justify-center items-center text-center"
      >
        <div className="max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Let's Turn Ideas Into <span className="font-bold">Pixels</span>
            <br />
            Ready When <span className="font-bold">You're</span>
          </h2>

          <button className="relative overflow-hidden rounded-full border border-white px-6 py-2 text-white group" onClick={()=>(setShowPopup(!showPopup))}>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex items-center gap-2">
              Get In Touch <ArrowRight />
            </span>
            <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <br />
          <a href='https://www.freelancer.com/u/pranjalj967?sb=t' className="mt-8 text-lg md:text-xl font-semibold italic text-white/40 underline">
          " I'm available for freelance projects."
        </a>
        </div>
      </motion.div>
      {showPopup && <PopUp setShowPopup={setShowPopup}/>}
      <div>
        
        <Footer />
      </div>
    </div>
  );
}
