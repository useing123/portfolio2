"use client"

import { motion } from "framer-motion"

const thoughtClouds = [
  {
    title: "Frontend",
    content: "I love creating beautiful and intuitive user interfaces with modern frontend technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    position: { x: "15%", y: "20%" },
    delay: 0.2,
  },
  {
    title: "Backend",
    content: "I have experience building scalable and reliable backend systems.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"],
    position: { x: "60%", y: "35%" },
    delay: 0.4,
  },
  {
    title: "Design",
    content: "I have a passion for design and creating visually appealing websites.",
    technologies: ["Figma", "Adobe XD", "Sketch", "UI/UX Design", "Wireframing"],
    position: { x: "25%", y: "65%" },
    delay: 0.6,
  },
]

const FloatingCloud = ({ cloud, index }: { cloud: (typeof thoughtClouds)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: cloud.delay }}
      className="absolute"
      style={{ left: cloud.position.x, top: cloud.position.y }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6 + index * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05, y: -10 }}
        className="group cursor-pointer"
      >
        <div className="bg-white/90 backdrop-blur-lg border border-blue-200/30 rounded-3xl p-6 shadow-2xl max-w-sm hover:shadow-3xl transition-all duration-500">
          <h3 className="text-2xl font-serif italic text-gray-800 mb-3">{cloud.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{cloud.content}</p>

          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {cloud.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100/80 text-blue-700 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FloatingParticle = ({
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6 }}
      transition={{ duration: 2, delay }}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 10, -10, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 8 + delay * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`${color} rounded-full blur-sm`}
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

export const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden py-20">
      {/* Floating particles */}
      <FloatingParticle delay={0.5} size={20} position={{ x: "10%", y: "15%" }} color="bg-blue-300" />
      <FloatingParticle delay={1.2} size={15} position={{ x: "85%", y: "25%" }} color="bg-purple-300" />
      <FloatingParticle delay={0.8} size={25} position={{ x: "5%", y: "50%" }} color="bg-indigo-300" />
      <FloatingParticle delay={1.5} size={18} position={{ x: "90%", y: "60%" }} color="bg-cyan-300" />
      <FloatingParticle delay={0.3} size={22} position={{ x: "12%", y: "80%" }} color="bg-blue-400" />
      <FloatingParticle delay={1.8} size={16} position={{ x: "88%", y: "85%" }} color="bg-purple-400" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif italic text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with a love for creating beautiful and intuitive user interfaces.
          </p>
        </motion.div>

        {/* Floating thought clouds */}
        <div className="relative h-96 md:h-[500px]">
          {thoughtClouds.map((cloud, index) => (
            <FloatingCloud key={cloud.title} cloud={cloud} index={index} />
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
          </blockquote>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Transition element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-lg text-gray-500 italic">Creating beautiful and functional websites</p>
      </motion.div>
    </section>
  )
}
