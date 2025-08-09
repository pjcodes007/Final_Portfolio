import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PopUp from "@/Pages/PopUp";
import { useState } from "react";

export default function Landing() {
  const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 font-[Outfit] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl space-y-8 sm:space-y-10"
      >
        {/* Name & Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-[Merriweather]">
            Praanjal Joshi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            Full Stack Developer
          </p>
          <p className="text-sm sm:text-base text-white/60 italic leading-relaxed max-w-md mx-auto">
            Designing and developing scalable web experiences with clarity and precision.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {/* View Projects */}
          <Link to="/project">
            <button className="relative overflow-hidden rounded-xl px-5 sm:px-6 py-2 border-2 border-white/10 group">
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                View Projects <ArrowRight size={18} />
              </span>
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>

          {/* Work Together */}
          <button
            onClick={() => setShowPopup(!ShowPopup)}
            className="relative overflow-hidden rounded-xl px-5 sm:px-6 py-2 border-2 border-white/10 group"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
              Let's Work Together <ArrowRight size={18} />
            </span>
            <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Down Arrow */}
        <motion.div>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mt-8 animate-bounce text-white/60" />
        </motion.div>
      </motion.div>

      {/* Popup */}
      {ShowPopup && <PopUp setShowPopup={setShowPopup} />}
    </div>
  );
}
