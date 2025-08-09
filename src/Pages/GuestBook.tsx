import React, { useState, useRef, useEffect, useCallback, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

// Lazy load the heavy background animation component
const StarryBackground = lazy(() => import("@/background/TextureBackground"));

const API_URL = "https://guestbook-o3pa.onrender.com/api/guestbook";

const presetColors = [
  "#000000",
  "#ffffff",
  "#ff4757",
  "#ffa502",
  "#2ed573",
  "#1e90ff",
  "#9c88ff",
  "#ff6b81",
];

// Memoized entry card for better rendering performance
const EntryCard = memo(({ entry, idx }: { entry: any; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: idx * 0.05 }}
    className="bg-neutral-900 rounded-xl shadow-lg border border-neutral-800 w-48 overflow-hidden flex flex-col"
  >
    <div className="w-full aspect-[4/5] bg-neutral-800 flex items-center justify-center p-2">
      {entry.image ? (
        <img
          src={entry.image}
          alt="doodle"
          className="w-full h-full object-contain bg-gray-300 rounded"
          loading="lazy"        // Lazy load images for better network management
          decoding="async"     // Asynchronously decode images for smooth rendering
          fetchPriority="low"  // Hint browser to lower priority loading
        />
      ) : (
        <span className="text-neutral-500 text-xs">No doodle</span>
      )}
    </div>
    <div className="flex flex-col px-3 py-2">
      <h3 className="font-bold text-white text-sm">{entry.name}</h3>
      <p className="text-xs font-semibold text-gray-300">{entry.message}</p>
    </div>
  </motion.div>
));

export default function Guestbook() {
  const [entries, setEntries] = useState<any[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [isEraser, setIsEraser] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawing = useRef(false);

  // Fetch entries once when component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(console.error);
  }, []);

  // Initialize canvas context when form opens
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#1e1e1e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineCap = "round";
        ctx.lineWidth = 4;
        ctxRef.current = ctx;
      }
    }
  }, [isFormOpen]);

  // Get offset coordinates for mouse or touch with memoization
  const getOffset = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in e && e.touches.length > 0) {
      const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top,
      };
    } else if ("nativeEvent" in e) {
      const mouseEvent = e as React.MouseEvent;
      return {
        offsetX: mouseEvent.nativeEvent.offsetX,
        offsetY: mouseEvent.nativeEvent.offsetY,
      };
    }
    return { offsetX: 0, offsetY: 0 };
  }, []);

  // Drawing handlers wrapped in useCallback to prevent unnecessary re-creation
  const startDrawing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      drawing.current = true;
      const { offsetX, offsetY } = getOffset(e);
      ctxRef.current?.beginPath();
      ctxRef.current?.moveTo(offsetX, offsetY);
    },
    [getOffset]
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      if (!drawing.current || !ctxRef.current) return;
      const { offsetX, offsetY } = getOffset(e);
      ctxRef.current.strokeStyle = isEraser ? "#1e1e1e" : selectedColor;
      ctxRef.current.lineTo(offsetX, offsetY);
      ctxRef.current.stroke();
    },
    [getOffset, isEraser, selectedColor]
  );

  const stopDrawing = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    drawing.current = false;
    ctxRef.current?.beginPath();
  }, []);

  // Submit handler memoized to avoid recreation
  const handleSubmit = useCallback(async () => {
    if (!name.trim()) return alert("Please enter your name!");
    // Save canvas image as lightweight WebP format
    const image = canvasRef.current?.toDataURL("image/webp");
    const newEntry = { name, message, image };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });
      const data = await res.json();
      setEntries((prev) => [data, ...prev]);
      setIsFormOpen(false);
      setName("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  }, [name, message]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const formEl = document.getElementById("guestbook-form");
      if (formEl && !formEl.contains(e.target as Node)) {
        setIsFormOpen(false);
      }
    };
    if (isFormOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFormOpen]);

  return (
    <div className="min-h-screen text-white p-6 relative overflow-hidden mt-20">
      <Suspense fallback={<div className="fixed inset-0 bg-black z-[-1]" />}>
        <StarryBackground />
      </Suspense>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-start bg-black/40 py-6">
        {entries.length === 0 ? (
          <p className="text-gray-400 text-lg font-semibold">No entries yet 😢</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {entries.map((entry, idx) => (
              <EntryCard key={entry.id || idx} entry={entry} idx={idx} />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full border-2 border-white text-white
          shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]
          transition-all flex items-center justify-center bg-white/10 backdrop-blur-md"
        aria-label="Open guestbook form"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="guestbook-form"
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl w-full max-w-lg border border-white/20 shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded bg-white/20 border border-white/10 mb-2 text-white placeholder-gray-300"
                aria-label="Your Name"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 rounded bg-white/20 border border-white/10 mb-4 text-white placeholder-gray-300"
                aria-label="Your Message"
              />
              <div className="flex gap-2 mb-2 flex-wrap justify-center">
                {presetColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setIsEraser(false);
                    }}
                    style={{ backgroundColor: color }}
                    className="w-6 h-6 rounded-full border-2 border-white hover:scale-110 transition"
                    aria-label={`Select color ${color}`}
                  />
                ))}
                <button
                  onClick={() => setIsEraser(true)}
                  className="px-3 py-1 bg-red-500 rounded text-sm hover:bg-red-600"
                >
                  Eraser
                </button>
              </div>

              <div className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  width={240}
                  height={300}
                  className="border border-white/20 rounded bg-black mb-4"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  onTouchCancel={stopDrawing}
                  aria-label="Drawing canvas"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded shadow-lg"
              >
                Submit
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
