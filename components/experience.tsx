"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"
import { CalendarIcon, RocketIcon, PersonIcon, LightningBoltIcon } from "@radix-ui/react-icons"

const experiences = [
  {
    title: "Software Engineer",
    organization: "nFactorial School",
    dates: "Nov 2023 - Present",
    description: "Initially joining as an intern, I developed internal tools and quickly progressed to shipping products on internal landing pages. My work included creating growth-hacking lead magnets, developing invite systems, and implementing AI agent workflows to streamline processes for internal teams.",
    achievements: [
      "Integrated PostHog analytics with UTM tags into the marketing team's business processes to enable data-driven decision-making.",
      "Developed and deployed AI agents to optimize the sales team's workflow.",
    ],
  },
  {
    title: "Chairman",
    organization: "LYSTRA.SU (formerly theHUB students organization)",
    dates: "2022 - June 2024",
    description: "Progressing from a member to Chairman, I led the student organization, managing a core team of nine across marketing and development. My responsibilities included leading the organization's strategy, organizing events, and successfully orchestrating the largest GameJam in Central Asia.",
    achievements: [
      "Launched vguke.thehub.su, an anonymous posting platform that achieved 10-50 daily messages.",
      "Organized and promoted gamejam.su, the largest GameJam in Central Asia.",
      "Hosted numerous meetups and ideathons to foster community engagement.",
      "Contributed to the development of P.Ub, a deep-tech project for offline chat, and developed the organization's landing page.",
    ],
  },
];

const TimelineItem = ({
  experience,
  index,
  isLast,
}: { experience: (typeof experiences)[0]; index: number; isLast: boolean }) => {
  const isMobile = useIsMobile()
  const IconComponent = index % 2 === 0 ? RocketIcon : PersonIcon;
  const color = index % 2 === 0 ? "from-orange-400 to-red-400" : "from-pink-400 to-rose-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : index % 2 === 0 ? -50 : 50, y: isMobile ? 20 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-16`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
        <motion.div
          whileHover={!isMobile ? { scale: 1.02, y: -5 } : {}}
          className="bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
            <span className="text-sm text-gray-500">{experience.dates}</span>
          </div>

          <h3 className="text-2xl font-serif italic text-gray-800 mb-1">{experience.title}</h3>
          <p className="text-gray-600 font-medium mb-3">{experience.organization}</p>
          <p className="text-gray-600 leading-relaxed mb-4">{experience.description}</p>

          <div className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + i * 0.1 }}
                className={`flex items-center gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
                <span className="text-sm text-gray-600">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg z-10`}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
            className="w-1 bg-gradient-to-b from-orange-300 to-pink-300 absolute top-16 bottom-0"
          />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1" />
    </motion.div>
  )
}

const FloatingStar = ({
  delay,
  size,
  position,
}: {
  delay: number
  size: number
  position: { x: string; y: string }
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8 + delay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="text-yellow-300"
        style={{ fontSize: size }}
      >
        ✦
      </motion.div>
    </motion.div>
  )
}

export const Experience = () => {
  const isMobile = useIsMobile()

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-400 via-pink-300 to-orange-200 overflow-hidden py-20">
      {/* Floating stars for dawn atmosphere */}
      {!isMobile && (
        <>
          <FloatingStar delay={0.5} size={20} position={{ x: "10%", y: "15%" }} />
          <FloatingStar delay={1.2} size={16} position={{ x: "85%", y: "25%" }} />
          <FloatingStar delay={0.8} size={24} position={{ x: "15%", y: "60%" }} />
          <FloatingStar delay={1.5} size={18} position={{ x: "80%", y: "70%" }} />
          <FloatingStar delay={0.3} size={22} position={{ x: "50%", y: "10%" }} />
          <FloatingStar delay={1.8} size={14} position={{ x: "75%", y: "45%" }} />
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">My Experience</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            I have a diverse background in web development, with experience in both professional and freelance settings.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Closing thought */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed">
            "The only source of knowledge is experience." - Albert Einstein
          </blockquote>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Transition element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-lg text-white/70 italic">Always learning and growing</p>
      </motion.div>
    </section>
  )
}
