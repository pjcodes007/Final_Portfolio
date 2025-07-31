import { useEffect, useState } from "react";

export default function CustomCursorWrapper({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {children}
      <div
        className="pointer-events-none fixed z-[9999] w-5 h-5 rounded-full border border-white/40"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: "transform 0.06s ease-out",
          backdropFilter: "blur(2px)",
        }}
      />
    </>
  );
}
