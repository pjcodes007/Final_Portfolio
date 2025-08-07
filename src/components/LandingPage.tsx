import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PopUp from "@/Pages/PopUp";
import { useState } from "react";
export default function Landing() {

  const [ShowPopup,setShowPopup] = useState<boolean>(false);
  return (
    <div className="relative inset-0 flex top-60 justify-center text-white px-6 font-[Outfit] z-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl space-y-10"
      >
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black font-[Merriweather] font-neutral-500">
            Praanjal Joshi
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed">
            Full Stack Developer
          </p>
          <p className="text-sm md:text-base text-white/60 italic leading-relaxed max-w-md mx-auto">
            Designing and developing scalable web experiences with clarity and
            precision.
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap pt-2">
          <button className="relative overflow-hidden rounded-xl  px-6 py-2 text-white  group border-2 border-white/10">
            <Link to={"/project"}>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex">
                View Projects <ArrowRight />
              </span>
            </Link>
            <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button className="relative overflow-hidden rounded-xl  px-6 py-2 text-white  group border-2 border-white/10 cursor-pointer">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex" onClick={()=>{setShowPopup(!ShowPopup)}}>
              Let's Work Together <ArrowRight />
            </span>

            <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        <motion.div>
          <ChevronDown className="w-6 h-6 mx-auto mt-8 animate-bounce text-white/60" />
        </motion.div>
      </motion.div>
      {ShowPopup && <PopUp setShowPopup={setShowPopup} />}
    </div>
  );
}
