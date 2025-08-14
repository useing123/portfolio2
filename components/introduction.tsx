"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Years of Experience", value: "2+", delay: 0.2 },
  { label: "Projects Completed", value: "10+", delay: 0.4 },
  { label: "Happy Clients", value: "5+", delay: 0.6 },
]

const FloatingMetric = ({ metric, index }: { metric: (typeof metrics)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: -10 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: metric.delay }}
      className="absolute"
      style={{
        left: `${20 + index * 25}%`,
        top: `${30 + (index % 2) * 40}%`,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3 + index,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-4 py-2 shadow-lg"
      >
        <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
        <div className="text-sm text-gray-600">{metric.label}</div>
      </motion.div>
    </motion.div>
  )
}

const FloatingShape = ({
  delay,
  size,
  position,
}: { delay: number; size: number; position: { x: string; y: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg"
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

export const Introduction = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-white overflow-hidden">
      {/* Floating geometric shapes */}
      <FloatingShape delay={0.5} size={60} position={{ x: "10%", y: "20%" }} />
      <FloatingShape delay={0.8} size={40} position={{ x: "80%", y: "30%" }} />
      <FloatingShape delay={1.1} size={80} position={{ x: "15%", y: "70%" }} />
      <FloatingShape delay={1.4} size={50} position={{ x: "85%", y: "60%" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif italic text-gray-800 mb-6"
        >
          I build beautiful web experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto"
        >
          I'm a passionate frontend developer with a love for creating beautiful and intuitive user interfaces.
        </motion.p>

        {/* Floating metrics */}
        <div className="relative mt-16 h-64">
          {metrics.map((metric, index) => (
            <FloatingMetric key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>

      {/* Transition overlay text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-lg text-gray-500 italic">Design meets code</p>
      </motion.div>
    </section>
  )
}
