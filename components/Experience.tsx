'use client'

import { motion } from 'framer-motion'
import { experienceHighlights } from '@/data/portfolio-data'

const accentStyles: Record<string, { glow: string; border: string; bg: string; dot: string }> = {
  cyan: {
    glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
    border: 'hover:border-cyan-500/40',
    bg: 'group-hover:bg-cyan-500/10',
    dot: 'bg-cyan-400',
  },
  blue: {
    glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
    border: 'hover:border-blue-500/40',
    bg: 'group-hover:bg-blue-500/10',
    dot: 'bg-blue-400',
  },
  indigo: {
    glow: 'hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]',
    border: 'hover:border-indigo-500/40',
    bg: 'group-hover:bg-indigo-500/10',
    dot: 'bg-indigo-400',
  },
  violet: {
    glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]',
    border: 'hover:border-violet-500/40',
    bg: 'group-hover:bg-violet-500/10',
    dot: 'bg-violet-400',
  },
  purple: {
    glow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
    border: 'hover:border-purple-500/40',
    bg: 'group-hover:bg-purple-500/10',
    dot: 'bg-purple-400',
  },
  pink: {
    glow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]',
    border: 'hover:border-pink-500/40',
    bg: 'group-hover:bg-pink-500/10',
    dot: 'bg-pink-400',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What I&apos;ve{' '}
            <span className="gradient-text">Shipped</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {experienceHighlights.map((item, i) => {
            const a = accentStyles[item.accent] ?? accentStyles.cyan
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={`glass-card group rounded-2xl border border-white/[0.07] p-4 transition-all duration-300 ${a.border} ${a.glow}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl bg-white/[0.04] ${a.bg} transition-colors flex items-center justify-center text-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${a.dot}`} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
