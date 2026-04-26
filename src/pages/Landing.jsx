import React from 'react';
import { Link } from 'react-router-dom'; // Added this
import LaptopHero from '../components/LaptopHero';

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0c]">
      {/* Background Neon Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/15 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full"></div>

      {/* Navigation (Added back for you) */}
      <nav className="flex justify-between items-center px-12 py-8 relative z-20">
        <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent tracking-tighter">
          NutriAI
        </div>
        <div className="hidden md:flex gap-10 text-sm font-bold text-gray-500 tracking-wide uppercase">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Method</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
        </div>

        {/* Joined to Auth */}
        <Link to="/auth">
          <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            Join Now
          </button>
        </Link>
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-12 grid md:grid-cols-[1fr_1.4fr] items-center min-h-[80vh] relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-purple-400">
            ✨ Your Intelligent Nutritionist
          </div>
          <h1 className="text-7xl lg:text-8xl font-black leading-[0.95] text-white tracking-tighter">
            Smarter<br />Tracking.<br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Better You.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-sm leading-relaxed font-medium">
            Analyze your daily nutrition with AI precision. Generate automated reports and hit your macro goals effortlessly.
          </p>
          <div className="flex gap-4 pt-4">

            {/* Joined to Auth */}
            <Link to="/auth">
              <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition active:scale-95">
                Start Your Journey →
              </button>
            </Link>

          </div>
        </div>

        {/* Hero Dashboard (Clean 3D Screen) */}
        <div className="relative flex justify-center items-center">
          <LaptopHero />
        </div>
      </main>
    </div>
  );
};

export default Landing;