import React, { useState } from 'react';
import { Check, Twitter, Instagram, Linkedin, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-[#F9F9F7] text-[#1A1A1A]'} p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center font-sans transition-colors duration-500`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-[1200px] ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-[#F9F9F7] border-gray-200'} border relative overflow-hidden flex flex-col min-h-[700px] md:min-h-[850px] p-8 sm:p-12 md:p-16 shadow-sm transition-colors duration-500`}
      >
        
        {/* Decorative Background Map */}
        <div className="absolute -right-12 lg:right-0 top-1/2 -translate-y-1/2 opacity-[0.05] select-none pointer-events-none z-0 hidden md:block">
          <div 
            className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[#fe610d]"
            style={{
              WebkitMaskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Africa_map.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'right center',
              maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Africa_map.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'right center'
            }}
          />
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
              <div className="flex items-center gap-2 text-2xl font-black tracking-tighter leading-none">
                Meetverse
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-5 sm:gap-6"
            >
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="text-[#fe610d] transition-opacity hover:opacity-80" 
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 stroke-[2.5]" /> : <Moon className="w-5 h-5 stroke-[2.5]" />}
              </button>
              <a href="#" className="opacity-40 hover:opacity-100 transition-colors hover:text-[#fe610d]" aria-label="Twitter">
                <Twitter className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-colors hover:text-[#fe610d]" aria-label="Instagram">
                <Instagram className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-colors hover:text-[#fe610d]" aria-label="LinkedIn">
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
              className="text-[11px] font-bold tracking-[0.2em] uppercase border-b-2 border-[#fe610d] text-[#fe610d] pb-1 inline-block mb-10 w-max"
            >
              Be Yours.
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[40px] sm:text-5xl md:text-[80px] lg:text-[100px] leading-[1] md:leading-[0.85] font-black tracking-tighter mb-8 sm:mb-10 uppercase max-w-5xl"
            >
              First Ever Recognized <br />
              <span className="text-transparent" style={{ WebkitTextStroke: 'max(1px, 0.03em) #fe610d' }}>Social Platform for Africans</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg sm:text-xl font-medium max-w-xl text-gray-500 leading-relaxed mb-12 sm:mb-14"
            >
              Thank you for taking the time to support our journey. We're building a dedicated space to connect, share, and celebrate our vibrant communities. Join the waitlist to be part of the movement from day one.
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
                  className="border-l-4 border-[#fe610d] pl-6 py-2"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Check className="h-6 w-6 text-[#fe610d] stroke-[3]" />
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
                      className={`flex-1 bg-transparent border-b-2 ${isDarkMode ? 'border-white/10 placeholder:text-zinc-500' : 'border-black/10 placeholder:text-gray-300'} py-4 text-xl sm:text-2xl font-semibold outline-none focus:border-[#fe610d] transition-colors rounded-none`}
                    />
                    <button
                      type="submit"
                      className="bg-[#fe610d] text-white px-6 sm:px-10 py-4 sm:py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#e0560b] transition-all rounded-none shrink-0"
                    >
                      Join now
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </main>

          {/* Footer & Social Proof */}
          <footer className={`shrink-0 flex flex-col md:flex-row items-start md:items-end justify-between border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'} pt-10 gap-8 md:gap-4 transition-colors duration-500`}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <img
                  className={`inline-block h-10 w-10 rounded-full ring-4 ${isDarkMode ? 'ring-zinc-900' : 'ring-[#F9F9F7]'} object-cover bg-[#fe610d]/20 transition-colors duration-500`}
                  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&backgroundColor=transparent"
                  alt="Avatar 1"
                />
                <img
                  className={`inline-block h-10 w-10 rounded-full ring-4 ${isDarkMode ? 'ring-zinc-900' : 'ring-[#F9F9F7]'} object-cover bg-[#fe610d]/20 transition-colors duration-500`}
                  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Amaya&backgroundColor=transparent"
                  alt="Avatar 2"
                />
                <img
                  className={`inline-block h-10 w-10 rounded-full ring-4 ${isDarkMode ? 'ring-zinc-900' : 'ring-[#F9F9F7]'} object-cover bg-[#fe610d]/20 transition-colors duration-500`}
                  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Jude&backgroundColor=transparent"
                  alt="Avatar 3"
                />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
                <span className={isDarkMode ? "text-white" : "text-black"}>2,427</span> <span className="opacity-40">have already joined</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-right flex items-center gap-4"
            >
              <div className={`w-12 h-[1px] ${isDarkMode ? 'bg-white/20' : 'bg-black/20'} hidden md:block`}></div>
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
