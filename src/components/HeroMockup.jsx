import React from 'react';
import { Camera, Zap, Utensils, MessageSquare, BarChart3, Plus } from 'lucide-react';

const HeroMockup = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>

            {/* Container for the Phone & Floating Cards */}
            <div className="relative w-[280px] h-[580px]"
                style={{
                    transform: 'rotateX(51deg) rotateZ(-43deg)',
                    transformStyle: 'preserve-3d',
                }}>

                {/* Main Phone Frame */}
                <div className="absolute inset-0 rounded-[45px] bg-[#1a1a1c] border-[10px] border-[#0a0a0c] shadow-2xl p-2 overflow-hidden"
                    style={{ transform: 'translateZ(0px)', boxShadow: '0 50px 100px rgba(0,0,0,0.8)' }}>

                    {/* Internal Dashboard Mockup */}
                    <div className="w-full h-full bg-[#0a0a0c] rounded-[32px] p-5 pt-10 text-white overflow-hidden relative">
                        <div className="flex justify-between items-center mb-6">
                            <div><p className="text-[10px] text-gray-500">Good Morning,</p><h4 className="text-sm font-bold">Alex 👋</h4></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
                        </div>

                        {/* Daily Stats Card */}
                        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl mb-4">
                            <p className="text-[10px] text-gray-400">Calories Left</p>
                            <h2 className="text-2xl font-black text-purple-400">1,576</h2>
                            <div className="h-1.5 w-full bg-white/10 rounded-full mt-2"><div className="h-full w-2/3 bg-purple-500 rounded-full"></div></div>
                        </div>

                        {/* Meal Log List */}
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Today's Log</p>
                        <div className="space-y-2">
                            <div className="bg-white/5 p-2 rounded-xl flex items-center gap-2"><Utensils size={14} className="text-emerald-400" /><span className="text-[10px]">Oatmeal Bowl</span></div>
                            <div className="bg-white/5 p-2 rounded-xl flex items-center gap-2"><Zap size={14} className="text-blue-400" /><span className="text-[10px]">Grilled Chicken</span></div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex justify-around items-center border border-white/10">
                            <BarChart3 size={16} className="text-gray-500" /><Camera size={16} className="text-purple-400" /><Plus size={20} className="text-white" /><MessageSquare size={16} className="text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* FLOATING CARD 1: AI Scanner Result */}
                <div className="absolute -top-10 -right-24 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl shadow-2xl"
                    style={{ transform: 'translateZ(80px)' }}>
                    <div className="flex items-center gap-2 mb-2">
                        <Camera size={14} className="text-purple-400" />
                        <span className="text-[10px] font-bold">AI Food Scanner</span>
                    </div>
                    <div className="w-full h-20 bg-gray-800 rounded-lg mb-2 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200" className="w-full h-full object-cover opacity-80" alt="Salad" />
                    </div>
                    <p className="text-[10px] text-emerald-400 font-bold">Detected: Avocado Salad</p>
                    <p className="text-[9px] text-gray-400">Portion: 250g | 320 kcal</p>
                </div>

                {/* FLOATING CARD 2: AI Coach Message */}
                <div className="absolute -bottom-10 -left-20 w-52 bg-[#8b5cf6] p-3 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    style={{ transform: 'translateZ(120px)' }}>
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1.5 rounded-lg"><MessageSquare size={14} className="text-white" /></div>
                        <p className="text-[10px] font-medium leading-tight text-white">"You've had high protein today. Try a light veggie dinner!"</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroMockup;