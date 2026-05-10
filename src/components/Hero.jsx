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
  return <span className="text-green-400">{text}<span className="cursor-blink" /></span>
}

const BADGES = [
  { label: 'LeetCode Knight', sub: 'Top 3.3%', color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300' },
  { label: 'Antier Solutions', sub: '3+ Years', color: 'border-green-500/30 bg-green-500/10 text-green-300' },
  { label: 'CodeChef 4-Star', sub: 'Rating 1990', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-green-900/8 blur-[180px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-900/6 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-16">

        {/* Left — Text */}
        <div>
          {/* Eyebrow — like "the resident machine" */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-6"
          >
            software engineer · blockchain developer
          </motion.p>

          {/* Massive display serif name */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[1.3] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 700 }}
          >
            <span className="text-white block">Shivam</span>
            <span className="gradient-text block italic">Varshney.</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg font-mono text-slate-500 mb-6 h-7"
          >
            <Typewriter />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
          >
            Specializing in distributed systems and applied cryptography —
            MPC threshold signing, DAG consensus, and cross-chain protocols
            shipped to production at scale.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-10 mb-10 pb-8 border-b border-white/[0.06]"
          >
            {[
              { n: '3+', label: 'Years at Antier' },
              { n: 'Knight', label: 'LeetCode Rank' },
              { n: 'Top 3%', label: 'Globally in CP' },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="stat-num">{n}</p>
                <p className="text-xs text-slate-600 font-mono mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/varshney565', label: 'GitHub' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/shivam565/', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:shivamvarshney565@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-lg bg-white/[0.04] hover:bg-green-500/15 border border-white/[0.07] hover:border-green-500/35 flex items-center justify-center text-slate-500 hover:text-green-400 transition-all duration-200">
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
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#070b1c] shadow-[0_0_60px_rgba(34,197,94,0.15)] relative z-10">
              <img src="/shivamvarshney/avatar.jpg" alt="Shivam Varshney"
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070b1c] to-transparent pointer-events-none" />
    </section>
  )
}
