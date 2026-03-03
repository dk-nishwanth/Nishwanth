import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-shift-black flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-md">
            <div className="flex justify-between items-end mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-shift-orange rotate-45"></div>
                  <span className="text-white font-bold tracking-tighter text-xl">NISHWANTH</span>
                </div>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Initialising System Core...</p>
              </div>
              <span className="font-mono text-shift-orange text-2xl font-bold">{Math.round(progress)}%</span>
            </div>
            
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-shift-orange"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="font-mono text-[8px] text-white/20 uppercase tracking-tighter leading-tight">
                [OK] LOADING ASSETS<br />
                [OK] ESTABLISHING CONNECTION<br />
                [OK] RENDERING INTERFACE
              </div>
              <div className="font-mono text-[8px] text-white/20 uppercase tracking-tighter leading-tight text-right">
                VER: 2.0.26<br />
                LOC: 11.59N 77.98E<br />
                STATUS: READY
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 font-mono text-[10px] text-white/40 uppercase tracking-[0.3em]"
          >
            Please Wait
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
