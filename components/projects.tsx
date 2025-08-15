"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const projects = [
  {
    title: "Duken.ai - online stores builder",
    description: "An AI-powered website builder that adapts to user preferences.",
    technologies: ["React", "NextJS", "FSD", "Node.js", "Go", "AWS", "GCP", "serverless", "postegresql", "microservices", "langchain", "langsmith", "langfuse"],
    github: "https://github.com/useing123",
    demo: "https://duken.ai/?utm_medium=ossein",
    image: "/duken.png",
  },
  {
    title: "nFactorial Academy - UNT prep B2C",
    description: "Developed an invite system for a growth strategy, which increased the number of daily active users from ~5-50 to ~50-450.",
    technologies: ["React", "NextJS", "FastAPI", "digital ocean"],
    github: "https://github.com/useing123",
    demo: "https://www.nfactorial.academy/invite",
    image: "/nfactorial_academy.png",
  },
  {
    title: "nFactorial School - Growth Marketing Team",
    description: "Integrated PostHog for analytics collection to optimize performance marketing campaigns, achieving over 300% ROAS. Also shipped internal products to optimize the sales department's workflow.",
    technologies: ["React", "NextJS", "framer", "serverless", "vercel", "posthogjs"],
    github: "https://github.com/useing123",
    demo: "https://www.nfactorial.school/?utm_medium=ossein",
    image: "/nfactorial_school.png",
  },
  {
    title: "NOMAD GAMEJAM 2024",
    description: "The largest GameJam in Central Asia, with over 100 teams, 350 participants, and 38 submitted projects.",
    technologies: ["HTML", "CSS", "JS", "Promoting", "Organizing"],
    github: "https://github.com/useing123/gamejam2024",
    demo: "https://www.gamejam.su/ru",
    image: "/nomad_gamejam.png",
  },
  {
    title: "Mangai.me online mangas generation project",
    description: "An online application for generating mangas.",
    technologies: ["Nuxt", "Fastapi", "Openai", "Stable Diffusion", "MongoDB"],
    github: "https://github.com/useing123/mangai-mangas",
    demo: "https://n17r2023project.vercel.app/",
    image: "/mangai.png",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="absolute"
      style={{
        left: `${10 + (index % 3) * 30}%`,
        top: `${10 + Math.floor(index / 3) * 40}%`,
      }}
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
          {/* Image */}
          <div className="relative w-full h-40 mb-4 rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-serif italic text-gray-800 mb-1">{project.title}</h3>
            </div>
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center`}
            >
              <div className="w-6 h-6 bg-white/30 rounded-lg" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
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
              className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all`}
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Demo
            </a>
          </div>
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
            <ProjectCard key={project.title} project={project} index={index} />
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
