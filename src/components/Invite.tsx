import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {motion} from "framer-motion";

export default function Connect() {
  return (
    <section className="w-full min-h-[60vh]  text-white px-6 py-20 flex flex-col justify-center items-center relative text-center">
      <div className="max-w-4xl space-y-8">
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
         Let's Turn Ideas Into <span className="font-bold">Pixels</span>
          <br />
          Ready When <span className="font-bold">You're</span>
        </h2>

<button className="relative overflow-hidden rounded-full  px-6 py-2 text-white  group">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex">
    Get In Touch <ArrowRight/>
  </span>
  <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
</button>


        <p className="mt-8 text-lg md:text-xl font-semibold italic text-white/40 underline">
          " I'm available for freelance projects."
        </p>
      </div>
    </section>
  );
}
