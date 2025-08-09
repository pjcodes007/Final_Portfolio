import { useCallback, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import comp from "../../public/comp.png";
import '../App.css';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/project", label: "Work" },
  { path: "/guestbook", label: "GuestBook" },
];

const Navbar = () => {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const rotateOnClick = useCallback(async () => {
    await controls.start({
      rotateY: 360,
      transition: { duration: 1, ease: "easeInOut" },
    });
    await controls.start({ rotateY: 0 });
  }, [controls]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      className="
        fixed top-5 left-2 right-2
        z-50 mx-auto w-full
        sm:max-w-3xl sm:left-0 sm:right-0
        backdrop-blur-md
        rounded-lg shadow
        sm:rounded-xl sm:shadow-lg
        text-white
        px-4 sm:px-3
      "
    >
      <div className="flex justify-between items-center h-14">
        {/* Logo */}
        <motion.div
          className="font-[Jaro] text-2xl cursor-pointer select-none"
          animate={controls}
          onClick={rotateOnClick}
        >
          &lt;PJ&gt;
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm font-[Merryweather] uppercase tracking-wide">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
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
          ))}
        </div>

        {/* 3D Portfolio Button (desktop) */}
        <NavLink
          to="/3d"
          draggable={false}
          className="hidden md:inline-block focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="3D Portfolio"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            src={comp}
            alt="3D Portfolio Icon"
            className="h-10 w-10"
            draggable={false}
            whileHover={{
              scale: 1.2,
              rotateY: 360,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </NavLink>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded ml-2"
          aria-label="Toggle menu"
          style={{ zIndex: 10 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black bg-opacity-80 backdrop-blur-md rounded-b-xl px-4 pb-4 flex flex-col gap-4 max-w-full overflow-x-hidden"
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative transition-colors duration-200 py-2 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/3d"
            draggable={false}
            className="focus:outline-none focus:ring-2 focus:ring-white rounded inline-block"
            aria-label="3D Portfolio"
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src={comp}
              alt="3D Portfolio Icon"
              className="h-10 w-10"
              draggable={false}
              whileHover={{
                scale: 1.2,
                rotateY: 360,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
