import { useCallback } from "react";
import { useAnimation, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import PopUp from "@/Pages/PopUp";
import comp from "../../public/comp.png";
import '../App.css'

const Navbar = () => {
  const controls = useAnimation();

  const rotateOnClick = useCallback(async () => {
    await controls.start({
      rotateY: 360,
      transition: { duration: 1, ease: "easeInOut" },
    });
    await controls.start({ rotateY: 0 });
  }, [controls]);

  return (
    <motion.nav
      className="
        fixed top-5 left-0 right-0 z-50
        max-w-4xl mx-auto w-full
        flex justify-between items-center
        h-12 px-6
        text-white
        bg-white/5 backdrop-blur-md
        rounded-xl shadow-lg
      "
    >
      {/* Logo */}
      <motion.p
        className="font-[Jaro] text-2xl flex items-center cursor-pointer select-none"
        animate={controls}
        onClick={rotateOnClick}
      >
        &lt;PJ&gt;
      </motion.p>

      {/* Nav Links */}
      <div className="flex gap-7 text-[1rem] px-4 rounded-lg font-[Outfit] items-center h-8">
        {["/", "/about", "/project",'/guestbook'].map((path, idx) => {
          const label = ["Home", "About", "Work","GuestBook"][idx];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative transition-all duration-200 ${
                  isActive ? "text-white" : "text-white/70"
                }
                font-[Inter]`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>

     
      <NavLink to='*'>
      
      
      <motion.img
        src={comp}
        alt="Monitor"
        className="h-12"
        draggable={false}
        whileHover={{
          scale: 1.2,
          rotateY: 360,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      />
      </NavLink>
    </motion.nav>
  );
};

export default Navbar;
