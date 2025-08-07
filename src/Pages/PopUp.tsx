import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

type PopUpProps = {
  setShowPopup: (value: boolean) => void;
};

const PopUp: React.FC<PopUpProps> = ({ setShowPopup }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on outside click
useEffect(() => {
  const handleClickOutside = (event: Event) => {
    if (
      event instanceof MouseEvent &&
      popupRef.current &&
      !popupRef.current.contains(event.target as Node)
    ) {
      setShowPopup(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("scroll", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("scroll", handleClickOutside);
  };
}, [setShowPopup]);


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-999 bg-black/50 backdrop-blur-sm flex items-end justify-center"
      >
        <motion.div
          ref={popupRef}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-[90vw] max-w-sm bg-black text-white rounded-t-2xl px-4 py-5 shadow-xl space-y-4 border border-white/10"
        >
          {/* Handle bar */}
          <div className="w-12 h-1 rounded-full bg-white/20 mx-auto mb-3" />

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/praanjal-joshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-lg hover:text-blue-400 transition" />
            </a>
            <a
              href="https://github.com/pjcodes007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-lg hover:text-gray-400 transition" />
            </a>
          </div>

          {/* Tabs */}
          <div className="flex justify-center bg-white/5 rounded-lg p-1 text-sm font-medium">
            <button className="w-1/2 bg-white/10 text-white py-1.5 rounded-md">
              Quick connect
            </button>
          </div>

          {/* Email Card */}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBJRppfGmMkQjLtCRSmZtBTjVqrJNVgcfrqQdCWPSXQSDdgfbgVzMpTZKrPhrJWXKzljq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gradient-to-br from-[#1b1e28] to-[#12141b] rounded-lg p-3 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <IoMailOutline className="text-lg text-blue-400" />
                Email
              </div>
              <div className="text-xs text-white/80">
                pranjalj967@gmail.com
              </div>
              <div className="text-xs text-white/40">
                Send me an email directly
              </div>
            </div>
          </a>

          {/* Footer */}
          <div className="bg-green-500/10 rounded-lg p-2 flex items-center justify-center gap-2 text-green-400 text-xs font-medium mt-2">
            <div className="w-1 h-1 rounded-full bg-green-200 animate-ping"></div>
            Currently available for new opportunities
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUp;
