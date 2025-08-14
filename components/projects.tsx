"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

const projects = [
  {
    name: "Growth Platform",
    role: "Full-Stack Engineer",
    problem: "Manual invite system limiting user acquisition",
    metric: { value: "9x", label: "Growth in daily invites" },
    description:
      "Architected an automated invite system that transformed user acquisition, scaling from 50 to 450 daily invites through intelligent automation and user behavior analytics.",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    github: "#",
    demo: "#",
    color: "from-blue-400 to-cyan-400",
    position: { x: "10%", y: "10%" },
    delay: 0.2,
  },
  {
    name: "Workflow Automation",
    role: "Product Engineer",
    problem: "Teams spending 20+ hours weekly on repetitive tasks",
    metric: { value: "100%", label: "Process automation" },
    description:
      "Designed and built intelligent workflow automation that eliminated manual processes, saving teams 20 hours weekly while improving accuracy and consistency.",
    techStack: ["TypeScript", "Next.js", "Prisma", "Supabase", "Vercel"],
    github: "#",
    demo: "#",
    color: "from-purple-400 to-indigo-400",
    position: { x: "55%", y: "20%" },
    delay: 0.4,
  },
  {
    name: "Community Platform",
    role: "Lead Developer",
    problem: "Fragmented communication across student organizations",
    metric: { value: "100+", label: "Active users" },
    description:
      "Built a comprehensive platform connecting student organizations, enabling seamless communication and event coordination for hundreds of active community members.",
    techStack: ["React", "Express", "MongoDB", "Socket.io", "Docker"],
    github: "#",
    demo: "#",
    color: "from-emerald-400 to-teal-400",
    position: { x: "25%", y: "60%" },
    delay: 0.6,
  },
]

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: project.delay }}
      className="absolute"
      style={{ left: project.position.x, top: project.position.y }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 0.5, -0.5, 0],
        }}
        transition={{
          duration: 5 + index,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.02,
          y: -12,
          rotate: index % 2 === 0 ? 1 : -1,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group cursor-pointer"
      >
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-sm">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-serif italic text-gray-800 mb-1">{project.name}</h3>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                {project.role}
              </span>
            </div>
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
            >
              <div className="w-6 h-6 bg-white/30 rounded-lg" />
            </div>
          </div>

          {/* Problem statement */}
          <p className="text-gray-600 mb-4 leading-relaxed">{project.problem}</p>

          {/* Big metric */}
          <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} className="text-center py-6 mb-4">
            <div className={`text-4xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.metric.value}
            </div>
            <div className="text-gray-500 text-sm mt-1">{project.metric.label}</div>
          </motion.div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Expand section */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.demo}
                className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all`}
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Demo
              </a>
            </div>
          </motion.div>

          {/* Expand button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            {isExpanded ? "Show Less" : "Learn More"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ExternalLinkIcon className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FloatingElement = ({
  delay,
  size,
  position,
  shape = "circle",
}: {
  delay: number
  size: number
  position: { x: string; y: string }
  shape?: "circle" | "square" | "triangle"
}) => {
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-lg",
    triangle: "rounded-sm transform rotate-45",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15 + delay * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className={`bg-gradient-to-br from-blue-300 to-purple-300 ${shapeClasses[shape]}`}
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

export const Projects = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-500 via-indigo-400 to-purple-400 overflow-hidden py-20">
      {/* Floating geometric elements */}
      <FloatingElement delay={0.5} size={40} position={{ x: "8%", y: "15%" }} shape="circle" />
      <FloatingElement delay={1.2} size={30} position={{ x: "85%", y: "25%" }} shape="square" />
      <FloatingElement delay={0.8} size={35} position={{ x: "12%", y: "75%" }} shape="triangle" />
      <FloatingElement delay={1.5} size={45} position={{ x: "88%", y: "70%" }} shape="circle" />
      <FloatingElement delay={0.3} size={25} position={{ x: "50%", y: "5%" }} shape="square" />
      <FloatingElement delay={1.8} size={38} position={{ x: "75%", y: "50%" }} shape="triangle" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">Crafted Solutions</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Each project represents a journey from problem to solution, transforming challenges into scalable impact
          </p>
        </motion.div>

        {/* Project cards as floating islands */}
        <div className="relative h-96 md:h-[700px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            "Every great product starts with understanding the problem deeply"
          </blockquote>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/30 transition-all"
          >
            Let's build something together
            <ExternalLinkIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Transition element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-lg text-white/60 italic">Scaling impact through thoughtful engineering</p>
      </motion.div>
    </section>
  )
}
