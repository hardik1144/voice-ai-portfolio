'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '@/data/portfolio-data'

type Project = (typeof projects)[number]

const accentMap: Record<string, { chip: string; glow: string; tag: string; border: string }> = {
  cyan: {
    chip: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:border-cyan-500/40',
    tag: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    border: 'border-cyan-500/30',
  },
  blue: {
    chip: 'bg-blue-500/10 border-blue-500/25 text-blue-300',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:border-blue-500/40',
    tag: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    border: 'border-blue-500/30',
  },
  violet: {
    chip: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:border-violet-500/40',
    tag: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
    border: 'border-violet-500/30',
  },
  purple: {
    chip: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
    glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:border-purple-500/40',
    tag: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
    border: 'border-purple-500/30',
  },
  emerald: {
    chip: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:border-emerald-500/40',
    tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    border: 'border-emerald-500/30',
  },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const a = accentMap[project.accent] ?? accentMap.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`glass-card rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-300 ${a.glow}`}
    >
      {/* Card header gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${project.accentClass}`} />

      <div className="p-6">
        {/* Category + number */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full border ${a.tag}`}>
            {project.category}
          </span>
          <span className="text-slate-700 text-xs font-mono">0{project.id}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg leading-snug mb-1.5">{project.title}</h3>
        <p className="text-cyan-400/80 text-xs font-medium mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${a.chip}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
            expanded ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              View Details
            </>
          )}
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`mt-4 pt-4 border-t border-white/[0.07]`}>
                <p className="text-[11px] font-mono text-slate-500 tracking-widest uppercase mb-3">
                  What I Built
                </p>
                <ul className="space-y-2">
                  {project.whatIBuilt.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${project.accentClass}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Production-connected{' '}
            <span className="gradient-text">Voice AI Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            Each project below was built with real integrations like calendars, CRMs, and voice pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
