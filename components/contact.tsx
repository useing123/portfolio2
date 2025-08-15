"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { GitHubLogoIcon, CheckIcon, CopyIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { useIsMobile } from "@/hooks/use-mobile"



const EmailCopyButton = () => {
  const [copied, setCopied] = useState(false)
  const email = "useing322@gmail.com"
  const isMobile = useIsMobile()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 w-full"
    >
      <div className="flex items-center justify-between">
        <div className="text-left">
          <div className="text-white/60 text-sm mb-1">Email</div>
          <div className="text-white font-medium">{email}</div>
        </div>
        <div className="text-white/60 group-hover:text-white transition-colors">
          {copied ? <CheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
        </div>
      </div>

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm"
        >
          Copied!
        </motion.div>
      )}
    </motion.button>
  )
}

export const Contact = () => {
  const isMobile = useIsMobile()

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-orange-200 via-purple-600 to-indigo-900 overflow-hidden py-20">

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">Contact Me</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work. If you have a project in mind, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-3 h-3 bg-green-400 rounded-full"
          />
          <span className="text-white/90 font-medium">Open for opportunities</span>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full"
        >
          {/* GitHub section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <GitHubLogoIcon className="w-6 h-6 text-white" />
              <span className="text-white font-medium">GitHub Profile</span>
            </div>
            <motion.a
              href="https://github.com/useing123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              className="inline-block mt-3 text-white/60 hover:text-white text-sm transition-colors"
            >
              View full profile →
            </motion.a>
          </div>

          <div className="border-t border-white/20 pt-6">
            <EmailCopyButton />
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/20">
            <motion.a
              href="https://github.com/useing123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <GitHubLogoIcon className="w-6 h-6 text-white" />
            </motion.a>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <blockquote className="text-xl md:text-2xl font-serif italic text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
            "Let's build something great together."
          </blockquote>
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
          >
            Start a conversation
          </Button>
        </motion.div>
      </div>

      {/* Floating elements */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-32 right-16 w-12 h-12 bg-purple-300/20 rounded-lg blur-sm"
          />
        </>
      )}
    </section>
  )
}
