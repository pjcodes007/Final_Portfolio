import React from 'react';
import { Link } from 'react-router-dom';

const CookingPage = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <p className="text-4xl mb-4 animate-pulseEmoji" aria-label="fire emoji" role="img">
        🔥
      </p>
      <h1 className="text-gray-200 text-2xl font-medium mb-2 animate-fadeInUp">
        Something exciting is coming soon...
      </h1>
      <p className="text-gray-400 text-sm max-w-xs mb-6 animate-fadeInUp animation-delay-300">
        Stay tuned! We’re cooking up something amazing for you.
      </p>

      <Link
        to="/"
        className="text-gray-300 border border-gray-500 px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors text-sm"
      >
        ← Back to Home
      </Link>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseEmoji {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-pulseEmoji {
          animation: pulseEmoji 2s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default CookingPage;
