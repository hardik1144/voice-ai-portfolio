'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Download, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s build something{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Open to Voice AI, Conversational AI, GenAI, and AI Automation roles. I&apos;m available for
            full-time positions, contract work, and technical collaboration.
          </p>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Voice AI / GenAI roles
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl border border-white/[0.08] p-8 mb-8 animate-pulse-glow"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">Email</p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">Phone</p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-violet-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Github className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">GitHub</p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  github.com/hardik1144
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-purple-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <Linkedin className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">LinkedIn</p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  linkedin.com/in/hardik-sharma-11a900259
                </p>
              </div>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-glow-cyan hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-card text-slate-300 rounded-xl font-semibold text-sm hover:text-white hover:bg-white/[0.08] transition-all border border-white/10"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-card text-slate-300 rounded-xl font-semibold text-sm hover:text-white hover:bg-white/[0.08] transition-all border border-white/10"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="HardikSharma-Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 glass-card text-slate-300 rounded-xl font-semibold text-sm hover:text-white hover:bg-white/[0.08] transition-all border border-white/10"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
