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
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.15)',
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
          <p className="text-xs text-violet-400 font-mono uppercase tracking-widest mb-2">Teaching</p>
          <h2 className="text-4xl font-bold text-white mb-4">Teaching & Mentoring</h2>
          <p className="text-slate-500 mb-14 max-w-xl">
            Tutoring Georgia Tech OMSCS (MS) students in ML, Python, and Math for ML since 2023.
            Previously ran competitive programming workshops and technical events at university.
          </p>
        </FadeUp>

        {/* What I teach */}
        <FadeUp delay={0.1} className="mb-14">
          <p className="text-xs text-slate-600 font-mono uppercase tracking-widest mb-4">What I teach</p>
          <div className="flex flex-wrap gap-2.5">
            {WHAT_I_TEACH.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </FadeUp>

        {/* GDSC Role */}
        <Stagger className="space-y-5 mb-14">
          {ROLES.map(r => (
            <motion.div key={r.title} variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="card-base p-6"
              style={{ boxShadow: `0 0 0 0 ${r.glow}` }}
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
                    <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
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
