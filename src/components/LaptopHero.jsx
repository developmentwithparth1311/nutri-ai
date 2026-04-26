import React from 'react';
import { AreaChart, UserCircle, PieChart, Activity, Zap } from 'lucide-react';

const LaptopHero = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible"
            style={{ perspective: '2000px' }}>

            {/* Main Dashboard Screen (No Base) */}
            <div className="relative w-[700px] h-[440px]"
                style={{
                    transform: 'rotateX(10deg) rotateY(-15deg)',
                    transformStyle: 'preserve-3d',
                }}>

                {/* Floating Screen Body */}
                <div className="absolute inset-0 rounded-3xl bg-[#0a0a0c] border-[12px] border-[#1a1a1c] shadow-[0_50px_100px_rgba(0,0,0,0.7)] overflow-hidden"
                    style={{ transform: 'translateZ(0px)' }}>

                    <div className="relative w-full h-full p-8 text-white font-sans">

                        {/* Sidebar */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-black/40 backdrop-blur-md border-r border-white/5 flex flex-col items-center py-8 gap-8">
                            <div className="w-10 h-10 rounded-2xl bg-violet-600/20 flex items-center justify-center border border-violet-500/30">
                                <Zap className="text-violet-400" size={20} />
                            </div>
                            <UserCircle size={24} className="text-gray-500 hover:text-white transition" />
                            <PieChart size={24} className="text-gray-500 hover:text-white transition" />
                            <AreaChart size={24} className="text-gray-500 hover:text-white transition" />
                        </div>

                        {/* Content */}
                        <div className="pl-24 h-full">
                            <header className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Health Intelligence</p>
                                    <h2 className="text-3xl font-black">Agent <span className="text-violet-400">Alex</span></h2>
                                </div>
                                <div className="flex gap-4 items-center bg-white/5 p-3 rounded-2xl border border-white/10">
                                    <div className="text-right">
                                        <p className="text-lg font-black text-violet-400 leading-none">1,576</p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Kcal Remaining</p>
                                    </div>
                                    <img src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Alex" alt="Avatar" className="w-10 h-10 rounded-full bg-gray-800 border border-white/10" />
                                </div>
                            </header>

                            {/* Neon SVG Chart */}
                            <div className="bg-[#050507]/60 border border-white/10 p-6 rounded-3xl h-[240px] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition">
                                    <Activity size={20} className="text-violet-400" />
                                </div>

                                <svg className="w-full h-32 mt-4" viewBox="0 0 400 150">
                                    <defs>
                                        <linearGradient id="neonFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 100 Q 50 140, 100 80 T 200 110 T 300 50 T 400 70 L 400 150 L 0 150 Z" fill="url(#neonFill)" />
                                    <path d="M0 100 Q 50 140, 100 80 T 200 110 T 300 50 T 400 70"
                                        fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
                                </svg>

                                <div className="flex justify-between mt-6 text-[10px] text-gray-600 font-black tracking-tighter">
                                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating AI Notification */}
                <div className="absolute -bottom-8 -right-12 w-60 bg-[#161618]/90 backdrop-blur-2xl p-5 rounded-3xl border border-white/10 shadow-2xl z-50"
                    style={{ transform: 'translateZ(80px)' }}>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                            <Activity size={18} className="text-green-400" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">Daily Goal Hit!</p>
                            <p className="text-[10px] text-gray-400">Protein target reached 🍗</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopHero;