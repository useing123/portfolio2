"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const skillCategories = [
  {
    category: "AI agents",
    skills: [
      { name: "Langchain", level: "Expert", experience: 2 },
      { name: "Langsmith", level: "Expert", experience: 2 },
      { name: "LLM models", level: "Expert", experience: 2 },
    ],
  },
  {
    category: "Product Design",
    skills: [
      { name: "UX", level: "Intermediate", experience: 2 },
      { name: "Personas", level: "Intermediate", experience: 2 },
      { name: "Heuristics", level: "Intermediate", experience: 2 },
      { name: "Figma", level: "Intermediate", experience: 2 },
      { name: "Design systems", level: "Intermediate", experience: 2 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Typescript", level: "Expert", experience: 2 },
      { name: "React", level: "Expert", experience: 2 },
      { name: "NextJS", level: "Expert", experience: 2 },
      { name: "vercel", level: "Expert", experience: 2 },
      { name: "shadcn", level: "Expert", experience: 2 },
      { name: "tailwindcss", level: "Expert", experience: 2 },
      { name: "FSD", level: "Expert", experience: 2 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: "Expert", experience: 2 },
      { name: "FastAPI", level: "Expert", experience: 2 },
      { name: "Postgresql", level: "Expert", experience: 2 },
      { name: "celeri", level: "Expert", experience: 2 },
      { name: "sqlalchemy", level: "Expert", experience: 2 },
    ],
  },
  {
    category: "Product analytics",
    skills: [
      { name: "Posthog", level: "Expert", experience: 3 },
      { name: "SQL", level: "Expert", experience: 3 },
    ],
  },
];

const SkillCard = ({ category, index }: { category: (typeof skillCategories)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobile()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const colors = ["from-blue-400 to-cyan-400", "from-purple-400 to-indigo-400", "from-emerald-400 to-teal-400", "from-pink-400 to-rose-400", "from-yellow-400 to-orange-400"]
  const color = colors[index % colors.length];
  const positions = [
      { x: "10%", y: "20%" },
      { x: "55%", y: "15%" },
      { x: "25%", y: "60%" },
      { x: "65%", y: "55%" },
      { x: "15%", y: "90%" },
  ]
  const position = positions[index % positions.length];


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <motion.div
        animate={
          !isMobile
            ? {
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0],
              }
            : {}
        }
        transition={{
          duration: 4 + index,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={!isMobile ? { scale: 1.05, y: -15 } : {}}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group cursor-pointer"
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl max-w-xs hover:bg-white/20 transition-all duration-500">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} mb-4 flex items-center justify-center`}
          >
            <div className="w-6 h-6 bg-white/30 rounded-lg" />
          </div>

          <h3 className="text-2xl font-serif italic text-white mb-4">{category.category}</h3>

          <div className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobile || isHovered ? 1 : 0.7, x: 0 }}
                transition={{ delay: skillIndex * 0.1 }}
                className="group/skill"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/90 font-medium">{skill.name}</span>
                  <span className="text-white/60 text-sm">{skill.experience} years</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isMobile || isHovered || isInView ? (skill.level === "Expert" ? "100%" : "66%") : "0%" }}
                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FloatingOrb = ({
  delay,
  size,
  position,
  color,
}: {
  delay: number
  size: number
  position: { x: string; y: string }
  color: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10 + delay * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`${color} rounded-full blur-xl`}
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

export const Skills = () => {
  const isMobile = useIsMobile()

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 overflow-hidden py-20">
      {/* Floating orbs for atmosphere */}
      {!isMobile && (
        <>
          <FloatingOrb delay={0.5} size={80} position={{ x: "5%", y: "10%" }} color="bg-white/20" />
          <FloatingOrb delay={1.2} size={60} position={{ x: "85%", y: "20%" }} color="bg-purple-300/30" />
          <FloatingOrb delay={0.8} size={100} position={{ x: "10%", y: "70%" }} color="bg-cyan-300/20" />
          <FloatingOrb delay={1.5} size={70} position={{ x: "90%", y: "80%" }} color="bg-indigo-300/30" />
          <FloatingOrb delay={0.3} size={90} position={{ x: "50%", y: "5%" }} color="bg-blue-200/20" />
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">Technical Mastery</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with a diverse toolkit, from pixel-perfect interfaces to scalable backend
            systems
          </p>
        </motion.div>

        {/* Interactive skill cards */}
        <div className="relative h-96 md:h-[600px]">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed">
            "Mastery isn't about knowing every tool—it's about choosing the right one for each unique challenge"
          </blockquote>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-300 to-purple-300 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Transition element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-lg text-white/60 italic">Building with purpose and precision</p>
      </motion.div>
    </section>
  )
}
