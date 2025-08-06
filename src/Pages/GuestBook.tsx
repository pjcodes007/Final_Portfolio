import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const GuestBook = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e1e] to-[#2b2b2b] text-white p-6">
      <div className="max-w-2xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold flex justify-center items-center gap-2">
            GuestBook <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
          </h1>
          <p className="text-gray-300 text-lg">
            Drop a message, leave a doodle, or just say hi! This feature is in the works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <p className="text-gray-400 text-sm">
            Coming Soon: A doodle pad + message box will appear here for guests to leave their thoughts.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GuestBook;
