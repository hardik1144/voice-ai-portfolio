import { Cpu } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-10 px-4 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + name */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Cpu className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-slate-400 text-sm font-medium">
            Built by{' '}
            <span className="text-white font-semibold">Hardik Sharma</span>
            {' '}—{' '}
            <span className="gradient-text-cyan-blue font-medium">Voice AI & GenAI Portfolio</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <a href="mailto:hardik17022003@gmail.com" className="hover:text-slate-400 transition-colors">
            hardik17022003@gmail.com
          </a>
          <span>·</span>
          <a
            href="https://github.com/hardik1144"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/hardik-sharma-11a900259"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
    </footer>
  )
}
