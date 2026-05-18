'use client'

import { motion } from 'framer-motion'
import { architectureSteps } from '@/data/portfolio-data'

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 px-4">
      {/* Section line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Voice Agent{' '}
            <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            A full-stack, real-time pipeline from the customer&apos;s voice to CRM updates and follow-up automation.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col gap-0">
          {architectureSteps.map((step, i) => (
            <div key={step.title}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                {/* Left: step number + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl border ${step.color} flex items-center justify-center text-xl font-bold shadow-sm z-10 relative`}
                  >
                    {step.icon}
                  </div>
                  {i < architectureSteps.length - 1 && (
                    <div className="w-px flex-1 min-h-[32px] bg-gradient-to-b from-white/10 to-transparent mt-1" />
                  )}
                </div>

                {/* Right: content */}
                <div
                  className={`flex-1 glass-card rounded-xl border ${step.color} p-4 mb-3 hover:bg-white/[0.07] transition-colors group`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                        <span className="text-[10px] font-mono text-slate-600 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                    </div>
                    {/* Step number */}
                    <div className="flex-shrink-0 text-slate-700 text-xs font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Full pipeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 glass-card rounded-2xl border border-white/[0.07] p-5"
        >
          <p className="text-[11px] font-mono text-slate-600 text-center mb-3 tracking-widest uppercase">
            Complete Pipeline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400">
            {architectureSteps.map((step, i) => (
              <span key={step.title} className="flex items-center gap-1.5">
                <span className="text-slate-300 font-medium">{step.title}</span>
                {i < architectureSteps.length - 1 && (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-slate-700 flex-shrink-0 flow-arrow">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
