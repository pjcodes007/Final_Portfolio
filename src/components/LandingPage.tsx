import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Landing() {
  return (
    <div className="absolute inset-0 flex top-[25dvh] justify-center text-white px-6 font-[Outfit] ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl space-y-10"
      >
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl  font-black font-[Merriweather] font-neutral-400">
            Praanjal Joshi
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed">
            Full Stack Developer
          </p>
          <p className="text-sm md:text-base text-white/60 italic leading-relaxed max-w-md mx-auto">
            Designing and developing scalable web experiences with clarity and precision.
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap pt-2">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            className="bg-white text-black hover:bg-neutral-200 transition-colors duration-300"
          >
            Let’s Work Together
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <motion.div>
          <ChevronDown className="w-6 h-6 mx-auto mt-8 animate-bounce text-white/60" />
        </motion.div>
      </motion.div>
    </div>
  );
}
