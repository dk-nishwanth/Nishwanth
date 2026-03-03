import { motion } from "motion/react";

export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "HTML", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "CSS", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe Photoshop", level: 85 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "AutoCAD", level: 88 },
        { name: "SketchUp", level: 90 }
      ]
    },
    {
      title: "Game & 3D / Automation",
      skills: [
        { name: "Unreal Engine 5", level: 75 },
        { name: "Unity", level: 70 },
        { name: "UiPath", level: 85 },
        { name: "Excel Automation", level: 90 },
        { name: "Process Optimization", level: 80 }
      ]
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-shift-gray">
      {/* Header */}
      <div className="p-8 lg:p-24 border-b border-shift-black bg-shift-orange">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mono-label text-shift-black/60 mb-4">03 / EXPERTISE</p>
          <h1 className="text-5xl lg:text-[10vw] font-black tracking-tighter leading-none">
            SKILLS.
          </h1>
        </motion.div>
      </div>

      {/* Skills Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div key={i} className="border-b lg:border-b-0 lg:border-r border-shift-black bg-white p-8 lg:p-16">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8 lg:mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-shift-orange"></span>
              {group.title}
            </h2>
            
            <div className="space-y-8 lg:space-y-10">
              {group.skills.map((skill, si) => (
                <div key={si}>
                  <div className="flex justify-between items-end mb-3 lg:mb-4">
                    <span className="font-mono text-[10px] lg:text-xs uppercase tracking-widest font-bold">{skill.name}</span>
                    <span className="font-mono text-[9px] lg:text-[10px] text-shift-orange">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-shift-black/5 w-full relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: si * 0.1 }}
                      className="absolute top-0 left-0 h-full bg-shift-black"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Footer */}
      <div className="p-8 lg:p-24 bg-shift-black text-white flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-md text-center lg:text-left">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">Continuous Learning</h3>
          <p className="opacity-60 text-xs lg:text-sm leading-relaxed">
            I'm constantly exploring new technologies and design methodologies to stay at the forefront of the industry. Currently deep-diving into AI-driven design workflows.
          </p>
        </div>
        <div className="flex gap-8 lg:gap-12">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-black text-shift-orange mb-2">15+</p>
            <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest opacity-40">Tools Mastered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-black text-shift-orange mb-2">04</p>
            <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest opacity-40">Core Domains</p>
          </div>
        </div>
      </div>
    </main>
  );
}
