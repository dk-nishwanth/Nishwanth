import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="border-b border-shift-black" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px]">
        {/* Left Side: Featured Project Image */}
        <div className="relative h-[70vh] lg:h-auto overflow-hidden bg-shift-dark-gray border-r border-shift-black">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            src="https://picsum.photos/seed/modular-footwear/1920/1080?grayscale" 
            alt="SwitchStep Project"
            className="w-full h-full object-cover mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 left-8">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 text-white/80"
             >
                <div className="w-6 h-6 bg-white/20 flex items-center justify-center rotate-45">
                  <div className="w-3 h-3 border border-white"></div>
                </div>
                <span className="font-extrabold text-xl tracking-tighter">PROJECT 01</span>
              </motion.div>
          </div>
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-bold text-white tracking-tighter"
            >
              SwitchStep
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] lg:text-xs text-white/60 mt-4 uppercase tracking-widest"
            >
              Modular Footwear Innovation / MSME Hackathon
            </motion.p>
          </div>
        </div>

        {/* Right Side: Project Details & CTA */}
        <div className="flex flex-col">
          {/* Project Description Block */}
          <div className="flex-1 bg-shift-black text-shift-gray p-8 lg:p-12 font-mono text-[11px] border-b border-shift-black">
             <h3 className="text-xl lg:text-2xl font-sans font-bold mb-6 lg:mb-8 text-white tracking-tight">Featured Projects</h3>
             <p className="text-base lg:text-lg font-sans mb-8 lg:mb-12 opacity-80 leading-relaxed">
               A showcase of my work across different domains, from product design to game development.
             </p>
             
             <div className="space-y-3 lg:space-y-4 opacity-90">
                {[
                  { name: "SwitchStep", link: "https://www.linkedin.com/in/nishwanth-dk" },
                  { name: "Timesheet Validator", link: "https://www.linkedin.com/posts/nishwanth-dk_rpa-uipath-automation-activity-7334252189323825153-b3iz" },
                  { name: "Kolli Hills Spices", link: "https://www.linkedin.com/posts/nishwanth-dk_uiux-webdesign-figma-activity-7319240001928474624-G8rk" },
                  { name: "Spaceship Game", link: "https://www.linkedin.com/posts/nishwanth-dk_unrealengine-gamedevelopment-indiedev-activity-7315055371893514243-Z8oi" },
                  { name: "Aircraft Game", link: "https://www.linkedin.com/posts/nishwanth-dk_unrealengine-gamedevelopment-blueprint-activity-7350096066836320256-GOCY" },
                  { name: "Architectural Mall Design", link: "https://www.behance.net/gallery/211960287/Landing-Page-for-Mall" }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center border-b border-white/10 pb-3 group cursor-pointer hover:text-shift-orange transition-colors"
                  >
                    <span className="text-xs lg:text-sm tracking-wider font-bold">{item.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
          </div>

          {/* Portfolio CTA Block */}
          <div className="h-[250px] lg:h-[350px] bg-shift-orange p-8 lg:p-16 flex flex-col justify-end group cursor-pointer overflow-hidden relative">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute top-8 right-8 lg:top-12 lg:right-12"
            >
              <ArrowUpRight strokeWidth={1.5} className="w-20 h-20 lg:w-32 lg:h-32" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] tracking-tighter relative z-10 max-w-[200px] lg:max-w-[250px]">
              Design Portfolio.
            </h2>
            <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest mt-4 opacity-80">Creative designs and UI/UX projects</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-shift-black bg-[#C5C5C5]">
        {[
          {
            title: "Timesheet validation",
            category: "UiPath",
            desc: "Built a bot to validate timesheets, detect missing hours, and generate error reports. Integrated Excel and Outlook to automate HR tasks."
          },
          {
            title: "Kolli Hills Spices",
            category: "Figma & React",
            desc: "Led UI/UX design and frontend development for a spice ecommerce site. Collaborated with local farmers and built the interface in Figma and React."
          },
          {
            title: "Spaceship game",
            category: "Unreal Engine 5",
            desc: "Developed a space exploration game with interactive planets and custom UI. Used Blueprints to implement movement, environment design, and gameplay."
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 lg:p-14 flex flex-col justify-between min-h-[300px] lg:min-h-[350px] hover:bg-shift-black hover:text-white transition-colors duration-300 ${i !== 2 ? 'border-b md:border-b-0 md:border-r border-shift-black' : ''}`}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-4">{item.category}</p>
              <h3 className="text-2xl lg:text-4xl font-bold leading-tight tracking-tighter mb-6">{item.title}</h3>
            </div>
            <p className="font-mono text-[10px] lg:text-[11px] leading-relaxed opacity-80">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
