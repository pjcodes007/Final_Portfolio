import { useAnimation } from "framer-motion";
import { useCallback } from "react";
import { motion } from "framer-motion";
import comp from "../../public/comp.png";

const Navbar = () => {
  const controls = useAnimation();

  const rotateOnClick = useCallback(async () => {
    await controls.start({
      rotateY: 360,
      transition: { duration: 1, ease: "easeInOut" },
    });
    await controls.start({ rotateY: 0 }); // Reset on Y axis for smooth effect
  }, [controls]);

  return (
    <>
      <motion.nav
        className="
          fixed top-5 left-0 right-0 z-50
          max-w-xl mx-auto w-full
          flex justify-between items-center
          h-10 px-6
          text-white
          bg-white/1 backdrop-blur-md
          rounded-xl shadow-lg
          
        "
      >
        <motion.p
          className="font-[Jaro] text-2xl flex items-center cursor-pointer select-none"
          animate={controls}
          onClick={rotateOnClick}
          title="Click to spin logo"
        >
          &lt;PJ&gt;
        </motion.p>

        <div className="flex gap-7 text-[1rem] px-4 rounded-lg backdrop-blur-md font-mono bg-white/1 items-center h-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Work</a>
        </div>

        <div>
          <motion.img
            src={comp}
            alt="Old monitor icon"
            className="h-12"
            draggable={false}
            whileHover={{scale:1.2,rotateY: 360,transition: { duration: 0.5, ease: "easeInOut" }}}
          />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
