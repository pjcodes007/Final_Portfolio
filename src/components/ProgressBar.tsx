import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex items-center gap-4">
      {/* Progress Bar */}
      <div className="relative h-64 w-3 bg-muted/20 rounded-full overflow-hidden shadow-inner">
        {/* Filled Progress */}
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary to-primary/60 rounded-full shadow-glow"
          style={{ height: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Indicator Dot */}
        <motion.div
          className="absolute left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 border border-background shadow-glow"
          style={{
            top: `${scrollProgress * 100}%`,
            transform: "translate(0%, -50%)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* % Text */}
      <span className="text-xs text-muted-foreground font-mono tracking-wide">
        {Math.round(scrollProgress * 100)}%
      </span>
    </div>
  );
};
