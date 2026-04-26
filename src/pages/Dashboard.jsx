import React, { useState } from 'react';
import { Activity, Zap, PieChart, Camera, Plus, Search, Bell, X, Upload, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import kiya

const Dashboard = () => {
  const navigate = useNavigate(); // 2. navigate function define kiya

  // 1. Scanner Modal State
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  // State for selected image preview
  const [selectedImage, setSelectedImage] = useState(null);
  // State for AI Analysis (Fake loading)
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  // Function to close scanner and reset everything
  const closeScanner = () => {
    setIsScannerOpen(false);
    setSelectedImage(null);
    setAnalysisResult(null);
  };

  // Fake AI Analysis function
  const startFakeAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult({
        name: 'Chicken Avocado Salad',
        kcal: 450,
        p: '35g', c: '15g', f: '25g'
      });
    }, 2500); // 2.5 seconds loading
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex font-sans relative">

      {/* --- AI Scanner Modal (Overlay) --- */}
      {isScannerOpen && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-[#111114] border border-white/5 rounded-[2.5rem] w-full max-w-xl p-8 relative space-y-6">

            {/* Close Button */}
            <button onClick={closeScanner} className="absolute top-6 right-6 text-gray-600 hover:text-white">
              <X size={24} />
            </button>

            <div className="text-center flex flex-col items-center gap-3">
              <div className="p-3 bg-purple-600/10 text-purple-400 rounded-2xl border border-purple-500/10">
                <BrainCircuit size={32} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">AI Nutrition <span className="text-purple-500">Scan</span></h2>
              <p className="text-gray-500 text-sm max-w-xs font-medium">Place your meal image here or upload for instant macro detection.</p>
            </div>

            {/* Image Upload Area */}
            <div className={`border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center gap-4 transition ${selectedImage ? 'border-purple-500/50' : 'border-white/10 hover:border-white/20'}`}>
              {selectedImage ? (
                <img src={selectedImage} alt="Preview" className="h-48 rounded-xl object-cover" />
              ) : (
                <>
                  <Camera size={40} className="text-gray-600" />
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-300">Drag & Drop Image</p>
                    <p className="text-xs text-gray-600">or click to browse (PNG, JPG)</p>
                  </div>
                  <input type="file" className="opacity-0 absolute" onChange={(e) => setSelectedImage(URL.createObjectURL(e.target.files[0]))} />
                </>
              )}
            </div>

            {/* Analysis / Action Buttons */}
            <div className="space-y-4">
              {!analysisResult && (
                <button
                  onClick={startFakeAnalysis}
                  disabled={!selectedImage || isAnalyzing}
                  className={`w-full ${isAnalyzing ? 'bg-purple-600/50' : 'bg-purple-600 hover:bg-purple-700'} text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition`}
                >
                  {isAnalyzing ? 'Analyzing Neural Network...' : 'Analyze Meal'}
                </button>
              )}
              {analysisResult && (
                <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-lg text-purple-400">{analysisResult.name}</h4>
                    <div className="text-xl font-black">{analysisResult.kcal} kcal</div>
                  </div>
                  <div className="flex gap-2 text-xs font-bold text-gray-500 uppercase tracking-tight">
                    <span className="bg-white/5 px-3 py-1 rounded-full">P: {analysisResult.p}</span>
                    <span className="bg-white/5 px-3 py-1 rounded-full">C: {analysisResult.c}</span>
                    <span className="bg-white/5 px-3 py-1 rounded-full">F: {analysisResult.f}</span>
                  </div>
                  <button onClick={closeScanner} className="w-full mt-2 bg-white text-black py-3 rounded-xl font-black text-xs uppercase">Log to Recent Meals</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* --- End Scanner Modal --- */}

      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-white/5 flex flex-col items-center py-8 gap-10 bg-[#0d0d0f] sticky top-0 h-screen">
        <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent italic">N.AI</div>
        <nav className="flex flex-col gap-8 text-gray-500 mt-10">
          {/* 3. Graph Icon: Navigate to Chat */}
          <div
            onClick={() => navigate('/chat')}
            className="p-3 hover:text-purple-400 cursor-pointer transition"
          >
            <Activity size={24} />
          </div>

          <div className="p-3 hover:text-purple-400 cursor-pointer transition"><PieChart size={24} /></div>

          {/* 2. Modal Trigger: Camera icon clickable */}
          <div
            onClick={() => setIsScannerOpen(true)}
            className={`p-3 ${isScannerOpen ? 'bg-purple-600/10 text-purple-400' : 'hover:text-purple-400'} rounded-xl cursor-pointer transition`}
          >
            <Camera size={24} />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-10 sticky top-0 bg-[#0a0a0c] py-2 z-10">
          <div>
            <h1 className="text-3xl font-black tracking-tight">System <span className="text-purple-500">Active.</span></h1>
            <p className="text-gray-500 text-sm mt-1 font-medium italic">Protocol: Nutritional Optimization</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-white/5 border border-white/10 rounded-full px-4 py-2 items-center gap-2">
              <Search size={16} className="text-gray-500" />
              <input type="text" placeholder="Search nutrients..." className="bg-transparent outline-none text-xs w-32" />
            </div>
            <div className="bg-white/5 p-3 rounded-full border border-white/10 text-gray-400 hover:text-white cursor-pointer transition">
              <Bell size={20} />
            </div>
          </div>
        </header>

        {/* Grid Layout (Static content is here, unchanged) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column (Stats) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Calorie Card */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-green-500/20 text-green-400 text-[10px] font-black px-3 py-1 rounded-full border border-green-500/20 uppercase tracking-tighter">On Track</div>
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Energy Consumption</span>
                <div className="text-7xl font-black mt-4 flex items-baseline gap-2">
                  1,840 <span className="text-xl text-gray-500 font-medium tracking-normal">kcal / 2,400</span>
                </div>
                <div className="mt-10 h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
                  <div className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 w-[75%] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                  <span>Remaining: 560 kcal</span>
                  <span>75% of Daily Limit</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Recent Logs</h3>
                <button className="text-[10px] font-black text-purple-400 hover:underline underline-offset-4 uppercase">View History</button>
              </div>
              <div className="space-y-3">
                {[
                  { emoji: '🍳', name: 'Protein Breakfast', time: '08:45 AM', cal: '420' },
                  { emoji: '🥗', name: 'Quinoa Garden Salad', time: '01:30 PM', cal: '380' },
                  { emoji: '🫐', name: 'Berry Smoothie', time: '04:15 PM', cal: '180' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl border border-white/5 transition group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition">{item.emoji}</div>
                      <div>
                        <div className="font-bold text-sm group-hover:text-purple-400 transition">{item.name}</div>
                        <div className="text-[10px] text-gray-500 font-medium">{item.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black">{item.cal} <span className="text-gray-500 font-medium">kcal</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (AI & Macros) */}
          <div className="space-y-6">
            {/* Macro Breakdown */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 text-center">Macro Profile</h3>
              <div className="space-y-4">
                {[
                  { label: 'Protein', val: '120g', p: 'w-[80%]', color: 'bg-purple-500' },
                  { label: 'Carbs', val: '210g', p: 'w-[60%]', color: 'bg-blue-500' },
                  { label: 'Fats', val: '45g', p: 'w-[40%]', color: 'bg-cyan-500' }
                ].map((macro, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
                      <span>{macro.label}</span>
                      <span className="text-gray-500">{macro.val}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${macro.color} ${macro.p} rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scanner CTA - Yah trigger ko click karne pe modal khulega */}
            <div
              onClick={() => setIsScannerOpen(true)}
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 rounded-[2rem] p-8 text-center flex flex-col items-center gap-4 group cursor-pointer hover:border-purple-500/40 transition animate-pulse"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:rotate-6 transition">
                <Camera className="text-purple-400" size={32} />
              </div>
              <div>
                <h4 className="font-black text-lg">AI Vision <span className="text-xs text-green-400">NEW</span></h4>
                <p className="text-[10px] text-gray-500 font-medium leading-relaxed px-4">Instant macro-nutrient detection via neural processing.</p>
              </div>
              <button className="w-full bg-white text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-gray-200 transition">Initialize Scan</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;