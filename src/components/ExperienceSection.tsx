import { motion } from "motion/react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "UI/UX Designer & Frontend Developer",
      company: "Brix Networks",
      period: "2026 – PRESENT",
      desc: "Leading the design and development of user-centric digital products. Crafting seamless user interfaces and implementing them with modern frontend technologies to deliver exceptional user experiences."
    },
    {
      role: "UI/UX Designer",
      company: "Quick App Studio",
      period: "FEB 2025 – JULY 2025",
      desc: "During my six-month internship, I designed user-friendly interfaces for mobile apps and websites, created wireframes and mockups, and collaborated with developers to ensure a seamless user experience. Primarily used Figma and Adobe XD."
    },
    {
      role: "Assistant Architect",
      company: "Aishwarya Eye Foundation",
      period: "DEC 2022",
      desc: "Worked under an Architect for the design of the third and most important floor in their hospital. The design was selected and we worked on it for over a month to get it completed."
    }
  ];

  return (
    <section className="border-b border-shift-black bg-shift-gray overflow-hidden" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr]">
        <div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-shift-black flex flex-col justify-between bg-shift-black text-white">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.85]">
            Work<br />Experience.
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-8 lg:mt-12">
            Professional journey and internships
          </p>
        </div>
        
        <div className="divide-y divide-shift-black">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 lg:p-16 group hover:bg-shift-orange transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 lg:mb-8">
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tighter">{exp.role}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-1">{exp.company}</p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest font-bold mt-4 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-base lg:text-xl font-medium leading-relaxed max-w-3xl">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
