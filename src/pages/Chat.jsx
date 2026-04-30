import React, { useState } from 'react';
import { Send, User, Bot, ArrowLeft, Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello Agent! I have analyzed your breakfast. Your protein intake is optimal. Anything else you want to know about your meal plan?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'bot',
        content: "System Analysis: Adjusting your dinner suggestions based on this. I recommend increasing fiber intake by 10g tonight."
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col">
      {/* Header */}
      <header className="p-6 border-b border-white/5 flex items-center gap-4 bg-[#0d0d0f]">
        <button onClick={() => navigate('/dashboard')} className="p-2 hover:bg-white/5 rounded-xl transition">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="font-black text-lg flex items-center gap-2">
            NutriAI <span className="text-[10px] bg-purple-600 px-2 py-0.5 rounded-full uppercase tracking-tighter">Core v3</span>
          </h2>
          <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Neural Link Active</p>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-3xl mx-auto w-full">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${msg.role === 'bot' ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-white/5 border-white/10 text-gray-400'}`}>
              {msg.role === 'bot' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-[1.5rem] text-sm leading-relaxed ${msg.role === 'bot' ? 'bg-[#16161a] border border-white/5 text-gray-200' : 'bg-purple-600 text-white font-medium'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-[#0a0a0c]">
        <form onSubmit={handleSend} className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your nutrition..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-24 focus:border-purple-500/50 outline-none transition text-sm"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
            <button type="button" className="p-2 text-gray-500 hover:text-white transition"><Paperclip size={20} /></button>
            <button type="submit" className="bg-purple-600 p-2 rounded-xl hover:bg-purple-700 transition">
              <Send size={20} />
            </button>
          </div>
        </form>
        <p className="text-center text-[10px] text-gray-600 mt-4 uppercase font-bold tracking-widest">Powered by Gemini Neural Engine</p>
      </div>
    </div>
  );
};

export default Chat;