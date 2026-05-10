import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const ROLES = ['Blockchain Developer', 'Software Engineer', 'Competitive Programmer', 'Systems Programmer']

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
  return <span className="text-green-400 font-semibold">{text}<span className="cursor-blink" /></span>
}

const BADGES = [
  { label: 'LeetCode Knight', sub: 'Top 3.3%', color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300' },
  { label: 'Antier Solutions', sub: '3+ Years', color: 'border-green-500/30 bg-green-500/10 text-green-300' },
  { label: 'CodeChef 4-Star', sub: 'Rating 1990', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full bg-green-900/10 blur-[160px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-900/8 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-16">

        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Software Engineer at Antier Solutions
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
            className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg"
          >
            Specializing in distributed systems and applied cryptography — MPC threshold signing,
            DAG consensus, and cross-chain protocols shipped to production at scale.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-10 mb-10 pb-8 border-b border-white/[0.06]"
          >
            {[
              { n: '3+', label: 'Years at Antier' },
              { n: 'Knight', label: 'LeetCode Rank' },
              { n: 'Top 3%', label: 'Globally in CP' },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="stat-num">{n}</p>
                <p className="text-xs text-slate-600 font-mono mt-0.5 leading-snug">{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a href="#experience"
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              View Work ↓
            </a>
            <a href="#contact"
              className="px-6 py-3 rounded-xl border border-white/[0.12] hover:border-green-500/40 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/varshney565', label: 'GitHub' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/shivam565/', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:shivamvarshney565@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-lg bg-white/[0.05] hover:bg-green-500/15 border border-white/[0.08] hover:border-green-500/40 flex items-center justify-center text-slate-400 hover:text-green-400 transition-all duration-200">
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col items-center justify-center relative h-[420px]"
        >
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full animated-border spin-slow opacity-70" />
            <div className="absolute inset-3 rounded-full border border-dashed border-green-500/20 spin-slow-rev" />
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#050508] shadow-[0_0_60px_rgba(34,197,94,0.18)] relative z-10">
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  )
}
