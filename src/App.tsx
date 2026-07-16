import { useState } from 'react';
import { Infinity, Check, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center font-sans text-[#1A1A1A]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1200px] bg-[#F9F9F7] border border-gray-200 relative overflow-hidden flex flex-col min-h-[700px] md:min-h-[850px] p-8 sm:p-12 md:p-16 shadow-sm"
      >
        
        {/* Decorative Background Number */}
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none z-0 hidden md:block">
          <span className="text-[300px] lg:text-[600px] font-black leading-none">01</span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full flex-1">
          
          {/* Header */}
          <header className="flex items-start justify-between shrink-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 text-2xl font-black tracking-tighter leading-none uppercase">
                <Infinity className="w-8 h-8 stroke-[3]" />
                meetverse
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mt-2">Social Intelligence</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-6"
            >
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 stroke-[2.5]" />
              </a>
            </motion.div>
          </header>

          {/* Main */}
          <main className="flex-1 flex flex-col justify-center py-16 relative">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase border-b-2 border-black pb-1 inline-block mb-10 w-max"
            >
              Coming Soon
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-6xl sm:text-7xl md:text-[90px] lg:text-[120px] leading-[0.85] font-black tracking-tighter mb-8 sm:mb-10 uppercase max-w-5xl"
            >
              Every Big Idea <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>starts with a waitlist</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg sm:text-xl font-medium max-w-xl text-gray-500 leading-relaxed mb-12 sm:mb-14"
            >
              Build momentum before launch with a simple waitlist that captures your most excited supporters.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-full max-w-lg"
            >
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border-l-4 border-black pl-6 py-2"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Check className="h-6 w-6 text-black stroke-[3]" />
                    <h3 className="text-xl font-black uppercase tracking-tight">You're on the list!</h3>
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.1em] text-gray-500 uppercase mt-2">We'll let you know when we launch.</p>
                </motion.div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Join the Waitlist</label>
                  <form onSubmit={handleSubmit} className="flex items-center w-full max-w-lg group">
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent border-b-2 border-black/10 py-4 text-xl sm:text-2xl font-semibold outline-none focus:border-black placeholder:text-gray-300 transition-colors rounded-none"
                    />
                    <button
                      type="submit"
                      className="bg-black text-white px-6 sm:px-10 py-4 sm:py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all rounded-none shrink-0"
                    >
                      Join now
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </main>

          {/* Footer & Social Proof */}
          <footer className="shrink-0 flex flex-col md:flex-row items-start md:items-end justify-between border-t border-gray-200 pt-10 gap-8 md:gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-4 ring-[#F9F9F7] object-cover bg-gray-200 grayscale"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-4 ring-[#F9F9F7] object-cover bg-gray-200 grayscale"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-4 ring-[#F9F9F7] object-cover bg-gray-200 grayscale"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar 3"
                />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
                <span className="text-black">2,427</span> <span className="opacity-40">have already joined</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-right flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-black/20 hidden md:block"></div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
                © 2026 • Built in React
              </p>
            </motion.div>
          </footer>

        </div>
      </motion.div>
    </div>
  );
}
