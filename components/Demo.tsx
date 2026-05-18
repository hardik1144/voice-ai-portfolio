'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image, Lock, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { demoSamples } from '@/data/portfolio-data'

const typeConfig = {
  video: { icon: Play, label: 'Demo Video', bg: 'bg-cyan-500/10', color: 'text-cyan-400' },
  screenshot: { icon: Image, label: 'Screenshot', bg: 'bg-blue-500/10', color: 'text-blue-400' },
  redacted: { icon: Lock, label: 'Redacted', bg: 'bg-slate-500/10', color: 'text-slate-400' },
}

const accentBorder: Record<string, string> = {
  cyan: 'border-cyan-500/25 hover:border-cyan-500/50',
  blue: 'border-blue-500/25 hover:border-blue-500/50',
  violet: 'border-violet-500/25 hover:border-violet-500/50',
  purple: 'border-purple-500/25 hover:border-purple-500/50',
  pink: 'border-pink-500/25 hover:border-pink-500/50',
}

const accentGradient: Record<string, string> = {
  cyan: 'from-cyan-500 to-blue-500',
  blue: 'from-blue-500 to-indigo-500',
  violet: 'from-violet-500 to-purple-500',
  purple: 'from-purple-500 to-pink-500',
  pink: 'from-pink-500 to-rose-500',
}

function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex)
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-md p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <div className="relative w-full max-w-6xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <motion.img
          key={idx}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[idx]}
          alt={`Screenshot ${idx + 1}`}
          className="w-full rounded-2xl shadow-2xl object-contain"
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>,
    document.body
  )
}

function ScreenshotPreview({ screenshots, title }: { screenshots: string[]; title: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  const open = (idx: number) => { setLightboxIndex(idx); setLightboxOpen(true) }

  return (
    <>
      <div
        className="relative h-44 border-b border-white/[0.05] overflow-hidden cursor-zoom-in bg-black/20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => open(0)}
      >
        {screenshots.length === 1 ? (
          <img src={screenshots[0]} alt={title} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex h-full">
            <img src={screenshots[0]} alt={`${title} 1`} className="w-1/2 h-full object-cover object-top border-r border-white/10" />
            <img src={screenshots[1]} alt={`${title} 2`} className="w-1/2 h-full object-cover object-top" />
          </div>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2"
            >
              <ZoomIn className="w-5 h-5 text-white" />
              <span className="text-white text-xs font-medium">Click to expand</span>
            </motion.div>
          )}
        </AnimatePresence>

        {screenshots.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">
            {screenshots.length} screenshots
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox images={screenshots} startIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Demo() {
  return (
    <section id="demo" className="relative py-24 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
            Demo Proof & Work Samples
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Live Work{' '}
            <span className="gradient-text">Evidence</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoSamples.map((sample, i) => {
            const config = typeConfig[sample.type as keyof typeof typeConfig]
            const Icon = config.icon
            const screenshots = (sample as { screenshots?: string[] }).screenshots
            const url = (sample as { url?: string }).url

            return (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col ${
                  accentBorder[sample.accent] ?? 'border-white/10'
                }`}
              >
                <div className={`h-1 bg-gradient-to-r ${accentGradient[sample.accent] ?? 'from-cyan-500 to-blue-500'}`} />

                {url ? (
                  <video
                    src={url}
                    controls
                    className="w-full border-b border-white/[0.05] bg-black"
                    style={{ maxHeight: '220px' }}
                  />
                ) : screenshots ? (
                  <ScreenshotPreview screenshots={screenshots} title={sample.title} />
                ) : (
                  <div className="h-44 flex flex-col items-center justify-center gap-3 bg-white/[0.02] border-b border-white/[0.05]">
                    <div className={`w-12 h-12 rounded-2xl ${config.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${config.color}`} />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${config.bg} ${config.color} border-current/20`}>
                      {sample.status}
                    </span>
                  </div>
                )}

                <div className="p-4 flex-1">
                  <span className={`text-[9px] font-semibold uppercase tracking-widest font-mono ${config.color}`}>
                    {config.label}
                  </span>
                  <h3 className="text-white font-semibold text-sm mt-1 mb-1">{sample.title}</h3>
                  <p className="text-slate-500 text-xs">{sample.note}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
