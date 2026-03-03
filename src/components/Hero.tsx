import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_450px] border-b border-shift-black">
      {/* Left Side: Main Heading */}
      <div className="bg-shift-orange p-6 lg:p-16 flex flex-col justify-center relative overflow-hidden pt-32 lg:pt-16">
        {/* Background Pattern/Image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2 }}
            src="https://picsum.photos/seed/tech-grid/1920/1080?grayscale" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-lg lg:text-2xl mb-6 lg:mb-8 bg-black/10 self-start px-4 py-2 rounded inline-block"
          >
            &gt; Hello, I'm DK Nishwanth_
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8 mb-2 lg:mb-4">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[20vw] lg:text-[10vw] font-extrabold leading-[0.75] tracking-tighter"
            >
              DK
            </motion.h1>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-2 lg:mt-8">
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-2 lg:w-8 h-12 lg:h-32 bg-shift-black origin-bottom transform -skew-x-[25deg] hidden md:block"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="max-w-[450px] font-bold text-base lg:text-2xl leading-[1.1] tracking-tight"
              >
                | UI/UX Designer | Frontend Developer | Game Designer & Developer | Automation Specialist | Architect |
              </motion.p>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[16vw] lg:text-[10vw] font-extrabold leading-[0.75] tracking-tighter"
          >
            Nishwanth
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-6 lg:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center"
          >
            <p className="max-w-md font-medium text-sm lg:text-lg opacity-80 leading-relaxed">
              Computer Science undergraduate passionate about UI/UX design, game design, and automation. Skilled in Unreal Engine 5, front-end development, and process automation tools like UiPath. Creative thinker with experience in architectural design.
            </p>
            <button className="w-full lg:w-auto px-8 py-4 bg-shift-black text-white rounded-full font-mono text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Sidebar (Repurposed for About Me) */}
      <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-shift-black">
        {/* Top Block: Philosophy */}
        <div className="flex-1 p-8 lg:p-14 flex flex-col justify-center bg-[#C5C5C5]">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mono-label mb-4"
          >
            About Me
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="font-mono text-xs lg:text-sm opacity-60 bg-black/5 p-4 rounded">
              <p className="text-shift-orange">// Personal philosophy</p>
              <p>const passion = <span className="text-shift-orange">"bridging creativity with technology"</span>;</p>
              <p>const goal = <span className="text-shift-orange">"creating meaningful digital experiences"</span>;</p>
            </div>
            <p className="text-lg lg:text-2xl font-bold leading-[1.2] tracking-tight">
              With a unique blend of architectural design and computer science expertise, I bring a multidisciplinary approach to every project I undertake.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Block: Expertise Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="h-auto lg:h-[450px] bg-shift-black text-shift-gray p-8 lg:p-12 font-mono text-[11px] flex flex-col"
        >
          <h3 className="text-xl lg:text-2xl font-sans font-bold mb-6 lg:mb-8 text-white tracking-tight">Expertise</h3>
          <div className="flex-1 space-y-3 lg:space-y-4 opacity-90">
            {[
              "UI/UX Design", "Frontend Development", "Game Design & Development", "Automation (UiPath)", "Architectural Design"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + (i * 0.1) }}
                className="flex justify-between items-center border-b border-white/10 pb-3 lg:pb-4"
              >
                <span className="text-base lg:text-lg tracking-wider font-sans font-bold">{item}</span>
                <span className="text-shift-orange text-lg leading-none">●</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2.5 }}
            className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] leading-relaxed"
          >
            &gt; Passionate about crafting beautiful, functional user interfaces, developing engaging games, and exploring the intersection of design and technology.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
