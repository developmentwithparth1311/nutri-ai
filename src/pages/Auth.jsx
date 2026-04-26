import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate(); // Hook initialize kiya

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kyunki hum abhi sirf frontend bana rahe hain, seedha redirect karenge
        navigate('/onboarding');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <Link to="/" className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        NutriAI
                    </Link>
                    <p className="text-gray-500 text-sm mt-2 font-medium">
                        {isSignup ? "Create your health profile" : "Welcome back, Agent Alex"}
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                    <form className="space-y-5" onSubmit={handleSubmit}> {/* handleSubmit call kiya */}

                        {isSignup && (
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500/50 focus:outline-none transition" />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input type="email" placeholder="alex@nutriai.com" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500/50 focus:outline-none transition" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-bold text-gray-400 uppercase">Password</label>
                                {!isSignup && <a href="#" className="text-[10px] text-purple-400 font-bold hover:underline">Forgot?</a>}
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500/50 focus:outline-none transition" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 group">
                            {isSignup ? "Create Account" : "Sign In"}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                        </button>
                    </form>

                    <div className="relative my-8 text-center">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <span className="relative bg-[#0d0d0f] px-4 text-[10px] font-bold text-gray-600 uppercase">Or continue with</span>
                    </div>

                    <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/10 transition">
                        <Github size={20} />
                        Github
                    </button>
                </div>

                <p className="text-center mt-8 text-sm text-gray-500 font-medium">
                    {isSignup ? "Already have an account?" : "New to NutriAI?"}{" "}
                    <button onClick={() => setIsSignup(!isSignup)} className="text-white font-bold hover:text-purple-400 transition">
                        {isSignup ? "Sign In" : "Create Account"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;