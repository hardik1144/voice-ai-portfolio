'use client'

import { motion } from 'framer-motion'
import { Brain, Mic, Layers, Zap } from 'lucide-react'

const cards = [
  {
    icon: Mic,
    title: 'Voice Pipeline Engineering',
    desc: 'STT → LLM → TTS architecture, real-time audio streaming, LiveKit agent development, and voice-first conversation design.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Brain,
    title: 'GenAI Systems',
    desc: 'LangGraph pipelines, multi-phase GenAI workflows, prompt engineering, structured output generation, and agent blueprint tools.',
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Layers,
    title: 'Full-Stack Products',
    desc: 'Next.js dashboards, Supabase backends, ReactFlow visualizations, webhook ingestion, and call analytics interfaces.',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Zap,
    title: 'CRM & Automation',
    desc: 'n8n workflow automation, GoHighLevel CRM integrations, AI-driven lead routing, follow-up sequences, and webhook-based triggers.',
    accent: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building AI that{' '}
            <span className="gradient-text">speaks and acts</span>
          </h2>
          <div className="max-w-3xl space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              I work on Voice AI, Conversational AI, and GenAI products where voice agents are connected with real
              business workflows. My experience spans LiveKit-based agents, Retell/Vapi-style phone agents, custom
              STT → LLM → TTS pipelines, CRM automation, call analytics dashboards, and agent blueprint generation tools.
            </p>
            <p>
              I work on both sides of the problem the{' '}
              <span className="text-cyan-400 font-medium">technical pipeline side</span> (infrastructure, integrations,
              real-time streaming, tool calling, backend APIs) and the{' '}
              <span className="text-violet-400 font-medium">conversation design side</span> (intent taxonomy, prompt
              engineering, fallback logic, flow design, and edge case handling).
            </p>
            <p>
              I build practical, production-connected systems not demos. Everything I&apos;ve built was
              connected to real calendars, real CRMs, and real business workflows.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-2xl p-5 border ${card.border} transition-all duration-300 hover:bg-white/[0.07]`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${card.accent}`} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
