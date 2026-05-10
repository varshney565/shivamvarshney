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
    color: 'from-green-500 to-emerald-500',
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
                className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-300 border border-green-500/20 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </FadeUp>

        <Stagger className="space-y-5 mb-14">
          {ROLES.map(r => (
            <motion.div
              key={r.title}
              variants={itemVariants}
              className="group relative rounded-xl border border-white/[0.07] p-6 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_8px_40px_rgba(34,197,94,0.07)] hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg">{r.title}</h3>
                  <p className={`text-sm font-medium mt-0.5 bg-gradient-to-r ${r.color} bg-clip-text text-transparent`}>
                    {r.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">{r.period}</span>
              </div>
              <ul className="space-y-2.5">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                    <span className="text-green-500 mt-0.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
