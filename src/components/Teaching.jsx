import { motion } from 'framer-motion'
import { FadeUp, Stagger, itemVariants } from '../utils/motion'

const WHAT_I_TEACH = [
  'Machine Learning', 'Python', 'Data Structures & Algorithms',
  'Linear Algebra', 'Probability & Statistics', 'Calculus & Optimization',
  'System Design', 'C++', 'Competitive Programming', 'Interview Prep',
]

const ROLES = [
  {
    title: 'CP Lead — GDSC, UIET KUK',
    subtitle: 'Google Developer Student Club',
    period: 'Aug 2021 – Jun 2022',
    file: 'gdsc_cp_lead.md',
    color: 'from-amber-500 to-orange-500',
    bullets: [
      'Designed a 7-day DSA hackathon (Commit-Ur-Code) — authored all problem sets, mentored participants, and reviewed code across all submissions.',
      'Delivered sessions on C++ STL and Data Structures & Algorithms to club members.',
      'Led technical content for Aawahan\'s TAKNEEK Event — designed questions, quizzes, and programming challenges.',
    ],
  },
]

export default function Teaching() {
  return (
    <section id="teaching" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="section-label">Leadership</p>
          <h2 className="text-4xl font-bold text-white mb-4">Community & Leadership</h2>
          <p className="text-slate-500 mb-14 max-w-xl">
            Ran competitive programming workshops, designed problem sets, and mentored participants
            through university-level technical events.
          </p>
        </FadeUp>

        {/* What I teach */}
        <FadeUp delay={0.1} className="mb-14">
          <p className="text-xs text-slate-600 font-mono uppercase tracking-widest mb-4">Subjects</p>
          <div className="flex flex-wrap gap-2.5">
            {WHAT_I_TEACH.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </FadeUp>

        {/* GDSC Role */}
        <Stagger className="space-y-5 mb-14">
          {ROLES.map(r => (
            <motion.div key={r.title} variants={itemVariants} className="card-window group">
              {/* Title bar */}
              <div className="card-window-bar">
                <div className="window-controls">
                  <span className="window-dot window-dot-red" />
                  <span className="window-dot window-dot-yellow" />
                  <span className="window-dot window-dot-green" />
                </div>
                <span className="text-slate-600 ml-1">{r.file}</span>
                <span className="ml-auto text-slate-500 font-mono text-[11px]">{r.period}</span>
              </div>
              {/* Body */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-0.5">{r.title}</h3>
                <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${r.color} bg-clip-text text-transparent`}>
                  {r.subtitle}
                </p>
                <ul className="space-y-2.5">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                      <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
