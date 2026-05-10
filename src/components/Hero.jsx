import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const ROLES = ['Blockchain Developer', 'CS Educator & Mentor', 'Competitive Programmer', 'Software Engineer']

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const role = ROLES[idx]
    if (!deleting && text.length < role.length) {
      const t = setTimeout(() => setText(role.slice(0, text.length + 1)), 75)
      return () => clearTimeout(t)
    }
    if (!deleting && text.length === role.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 38)
      return () => clearTimeout(t)
    }
    if (deleting && text.length === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % ROLES.length)
    }
  }, [text, deleting, idx])
  return <span className="text-violet-300 font-semibold">{text}<span className="cursor-blink" /></span>
}

const BADGES = [
  { label: 'LeetCode Knight', sub: 'Top 3.3%', color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300' },
  { label: 'Antier Solutions', sub: '3+ Years', color: 'border-violet-500/30 bg-violet-500/10 text-violet-300' },
  { label: 'CodeChef 4-Star', sub: 'Rating 1990', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full bg-violet-700/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-700/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-16">

        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to teaching & mentoring roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-5"
          >
            <span className="text-white block">Shivam</span>
            <span className="gradient-text block">Varshney</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-xl text-slate-400 mb-5 h-8"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-slate-500 text-base leading-relaxed mb-10 max-w-lg"
          >
            Building production blockchain infrastructure at Antier Solutions — MPC cryptography,
            DAG consensus, and cross-chain systems. Teaching ML & algorithms to Georgia Tech OMSCS
            students. Ranked top 2–3% globally on competitive programming platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a href="#experience"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              View Work ↓
            </a>
            <a href="#contact"
              className="px-6 py-3 rounded-xl border border-white/[0.12] hover:border-violet-500/40 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200">
              Get in Touch
            </a>
          </motion.div>

          {/* Minimal icon-only social — just 3 primary links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/varshney565' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/shivam565/' },
              { icon: FaEnvelope, href: 'mailto:shivamvarshney565@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] hover:bg-violet-500/20 border border-white/[0.08] hover:border-violet-500/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
                <Icon size={16} />
              </a>
            ))}
            <span className="text-slate-700 text-xs font-mono ml-2">More links in Contact ↓</span>
          </motion.div>
        </div>

        {/* Right — Avatar + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col items-center justify-center relative h-[420px]"
        >
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full animated-border spin-slow opacity-70" />
            <div className="absolute inset-3 rounded-full border border-dashed border-violet-500/20 spin-slow-rev" />
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#07070d] shadow-[0_0_60px_rgba(139,92,246,0.25)] relative z-10">
              <img src="/portfolio/avatar.jpg" alt="Shivam Varshney"
                className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {BADGES.map((b, i) => (
            <div
              key={b.label}
              className={`absolute border rounded-xl px-4 py-2.5 text-xs font-medium shadow-xl backdrop-blur-sm ${b.color} ${
                i === 0 ? 'float top-8 left-0' :
                i === 1 ? 'float-delayed top-1/2 -right-4 -translate-y-1/2' :
                'float bottom-8 left-0'
              }`}
            >
              <p className="font-semibold">{b.label}</p>
              <p className="opacity-70 text-[10px]">{b.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07070d] to-transparent pointer-events-none" />
    </section>
  )
}
