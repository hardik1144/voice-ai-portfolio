'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ChevronRight } from 'lucide-react'
import { personalInfo, heroBadges, pipelineSteps } from '@/data/portfolio-data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden"
    >
      {/* Top line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center">

        {/* Photo */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/hardik-sharma.jpg"
                  alt="Hardik Sharma"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-900" />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div {...fadeUp(0.05)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open to Voice AI / GenAI Roles
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4"
        >
          <span className="text-white">Hardik</span>{' '}
          <span className="gradient-text">Sharma</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl font-medium text-slate-400 mb-6 tracking-wide"
        >
          Voice AI & GenAI Developer &nbsp;·&nbsp; Full-Stack Engineer
        </motion.p>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.3)}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white max-w-3xl leading-snug mb-5"
        >
          {personalInfo.headline}
        </motion.h2>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-8"
        >
          {personalInfo.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => scrollTo('#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-glow-cyan hover:opacity-90 transition-opacity"
          >
            View Projects
            <ChevronRight className="w-4 h-4" />
          </button>
          <a
            href={personalInfo.resumeUrl}
            download="HardikSharma-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl font-semibold text-sm hover:bg-white/[0.07] transition-colors border border-white/10"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-slate-300 rounded-xl font-semibold text-sm hover:bg-white/[0.07] transition-colors border border-white/10"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Tech badges */}
        <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2 justify-center mb-16 max-w-3xl">
          {heroBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.05 }}
              className="tech-chip"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Pipeline visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-5xl"
        >
          <div className="glass-card rounded-2xl p-6 border border-white/[0.07]">
            {/* Label */}
            <p className="text-[11px] font-mono text-slate-500 text-center mb-4 tracking-widest uppercase">
              Voice Agent Pipeline
            </p>

            {/* Pipeline cards — horizontal on large, vertical on small */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
              {pipelineSteps.map((step, i) => (
                <div key={step.id} className="flex flex-col sm:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className={`flex flex-col items-center justify-center gap-1.5 px-3 py-3 rounded-xl border border-white/10 bg-white/[0.03] min-w-[80px] cursor-default
                      hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-lg shadow-sm`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-medium text-slate-300 text-center leading-tight whitespace-nowrap">
                      {step.label}
                    </span>
                  </motion.div>

                  {/* Arrow connector */}
                  {i < pipelineSteps.length - 1 && (
                    <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 my-1 sm:my-0 sm:mx-0.5">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-600 flow-arrow sm:rotate-0 rotate-90">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sub-label */}
            <p className="text-[10px] text-slate-600 text-center mt-4 font-mono">
              LiveKit · OpenAI · ElevenLabs · Google Calendar · GoHighLevel · n8n
            </p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-10"
        >
          <button
            onClick={() => scrollTo('#about')}
            className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
