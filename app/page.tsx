import AnimatedBackground from '@/components/AnimatedBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Architecture from '@/components/Architecture'
import TechStack from '@/components/TechStack'
import Demo from '@/components/Demo'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020917]">
      {/* Fixed animated background */}
      <AnimatedBackground />

      {/* Content (all above z-0 background) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <TechStack />
        <Demo />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
