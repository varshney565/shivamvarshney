import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#cp' },
  { label: 'Leadership', href: '#teaching' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-8 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#07070d]/90 backdrop-blur-xl border-b border-white/[0.06]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm font-bold tracking-tight text-slate-300 hover:text-white transition-colors">
          <span className="text-slate-600">&lt;</span>
          <span className="gradient-text">SV</span>
          <span className="text-slate-600"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
          <a href="mailto:shivamvarshney565@gmail.com"
            className="text-sm px-4 py-2 rounded-lg bg-green-500/15 hover:bg-green-500/25 border border-green-500/30 hover:border-green-500/40 text-green-400 font-medium transition-all duration-200">
            Hire me
          </a>
        </div>

        <button className="md:hidden p-1 flex flex-col gap-1.5" onClick={() => setOpen(v => !v)}>
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0d0d14] border-b border-white/[0.06] px-6 pb-5"
          >
            {LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="block py-2.5 text-sm text-slate-400 hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
