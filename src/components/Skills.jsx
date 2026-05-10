import { motion } from 'framer-motion'
import { FadeUp } from '../utils/motion'

const GROUPS = [
  {
    label: 'Languages',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    items: ['Rust', 'Go', 'C++', 'Python', 'JavaScript', 'Solidity'],
  },
  {
    label: 'Core Areas',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    items: ['Distributed Systems', 'Applied Cryptography', 'Protocol Design', 'Blockchain', 'Algorithms', 'OOP & Design Patterns'],
  },
  {
    label: 'Tools & Infra',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    items: ['libp2p', 'Tokio', 'Actix-web', 'gRPC', 'RocksDB', 'Warp'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="section-label">Expertise</p>
          <h2 className="text-4xl font-bold text-white mb-14">Skills</h2>
        </FadeUp>

        <div className="space-y-10">
          {GROUPS.map((g, gi) => (
            <FadeUp key={g.label} delay={gi * 0.08}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start">
                <p className={`text-xs font-mono font-semibold uppercase tracking-widest w-28 shrink-0 pt-2 ${g.color}`}>
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: ii * 0.05 + gi * 0.04, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.06 }}
                      className={`text-sm font-medium px-3.5 py-1.5 rounded-full border cursor-default ${g.bg}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Education */}
        <FadeUp delay={0.3} className="mt-16">
          <div className="card-window">
            <div className="card-window-bar">
              <div className="window-controls">
                <span className="window-dot window-dot-red" />
                <span className="window-dot window-dot-yellow" />
                <span className="window-dot window-dot-green" />
              </div>
              <span className="text-slate-600 ml-1">education.md</span>
              <span className="ml-auto text-slate-600 font-mono text-[11px]">2019 – 2023</span>
            </div>
            <div className="p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-lg">UIET, Kurukshetra University</p>
                <p className="text-slate-400 text-sm mt-0.5">
                  B.Tech — Computer Science & Engineering
                  <span className="ml-2 text-amber-400 font-mono">CGPA 8.23</span>
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
