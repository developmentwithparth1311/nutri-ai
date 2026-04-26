import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Target, Activity, User, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 4;

  // Form State
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    goal: '',
    activity: ''
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleFinish = () => {
    console.log("User Data:", formData);
    navigate('/dashboard'); // Onboarding ke baad dashboard bhej denge
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 px-1">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* --- STEP 1: BASICS --- */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tighter">Tell us about <span className="text-purple-400">yourself.</span></h2>
              <p className="text-gray-400">We need these to calculate your basal metabolic rate.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Age</label>
                <input
                  type="number" placeholder="21"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-purple-500/50 outline-none transition"
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Gender</label>
                <select
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-purple-500/50 outline-none transition appearance-none"
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* --- STEP 2: METRICS --- */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tighter">What's your <span className="text-blue-400">scale</span> say?</h2>
              <p className="text-gray-400">Accuracy helps our AI give better recommendations.</p>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="number" placeholder="Weight (kg)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 focus:border-blue-500/50 outline-none transition"
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
              </div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="number" placeholder="Height (cm)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 focus:border-blue-500/50 outline-none transition"
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}

        {/* --- STEP 3: GOALS --- */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-4xl font-black tracking-tighter">What is your <span className="text-green-400">goal?</span></h2>
            <div className="grid gap-4">
              {[
                { id: 'loss', label: 'Weight Loss', desc: 'Burn fat and get lean' },
                { id: 'gain', label: 'Muscle Gain', desc: 'Build strength and size' },
                { id: 'maintain', label: 'Maintenance', desc: 'Stay fit and healthy' }
              ].map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setFormData({ ...formData, goal: goal.id })}
                  className={`w-full p-6 rounded-3xl border text-left transition-all ${formData.goal === goal.id ? 'bg-purple-600/20 border-purple-500' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                >
                  <div className="font-bold">{goal.label}</div>
                  <div className="text-xs text-gray-500">{goal.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- STEP 4: ACTIVITY --- */}
        {step === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-4xl font-black tracking-tighter">Daily <span className="text-orange-400">Activity.</span></h2>
            <div className="grid gap-4">
              {['Sedentary', 'Lightly Active', 'Moderate', 'Very Active'].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData({ ...formData, activity: level })}
                  className={`w-full p-5 rounded-2xl border text-left transition-all ${formData.activity === level ? 'bg-orange-500/20 border-orange-500' : 'bg-white/5 border-white/10'}`}
                >
                  <span className="font-bold">{level}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
          )}
          <button
            onClick={step === totalSteps ? handleFinish : nextStep}
            className="flex-[2] bg-white text-black hover:bg-gray-200 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition"
          >
            {step === totalSteps ? "Finish Profile" : "Continue"} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;