import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarryBackground from "@/background/TextureBackground";

const NotFound = () => {
  return (
    <div className="relative h-screen w-full  overflow-hidden flex items-center justify-center">
      {/* Star Background */}
      <StarryBackground />
      <div className="absolute inset-0 -z-10 animate-pulse bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-white glitch mb-4">
          404
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Lost in space. This page doesn’t exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Take me home
        </Link>
      </motion.div>

      {/* Glitch effect */}
      <style>{`
        .glitch {
          position: relative;
          color: white;
        }

        .glitch::before,
        .glitch::after {
          content: '404';
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: white;
          background: transparent;
        }

        .glitch::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          color: #ff00c8;
          top: -2px;
        }

        .glitch::after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          color: #00fff9;
          top: 2px;
        }

        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          5% { clip: rect(0, 9999px, 10px, 0); transform: translate(-2px, -2px); }
          10% { clip: rect(0, 9999px, 0, 0); }
          15% { clip: rect(0, 9999px, 10px, 0); transform: translate(2px, 2px); }
          20% { clip: rect(0, 9999px, 0, 0); }
        }

        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          5% { clip: rect(10px, 9999px, 15px, 0); transform: translate(2px, 2px); }
          10% { clip: rect(0, 9999px, 0, 0); }
          15% { clip: rect(5px, 9999px, 10px, 0); transform: translate(-2px, -2px); }
          20% { clip: rect(0, 9999px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
