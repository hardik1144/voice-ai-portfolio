'use client'

import { motion } from 'framer-motion'
import { techStackGroups } from '@/data/portfolio-data'

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-3">Tools & Technologies</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStackGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              whileHover={{ y: -3 }}
              className={`glass-card rounded-2xl border ${group.borderClass} p-5 transition-all duration-300 hover:bg-white/[0.06]`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`font-semibold text-sm ${group.labelClass}`}>{group.category}</h3>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-colors cursor-default ${group.chipClass}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
