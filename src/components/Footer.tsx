// components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent rounded-xl backdrop-blur-md text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Left: Name & Copyright */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Praanjal Joshi</h2>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Praanjal Joshi. All rights reserved.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex-3">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#connect" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="/guestbook" className="hover:text-white transition-colors">Guest Book</a></li>
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div className="flex-1 flex flex-col  md:items-end">
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <div className="flex justify-center gap-4">
            <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
