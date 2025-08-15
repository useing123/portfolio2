import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section with Background */}
      <div className="relative h-screen p-inset">
        <div className="relative h-full w-full">
          <Background src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4" placeholder="/background.png" />
          <Hero />
        </div>
      </div>

      <Introduction />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </main>
  )
}
