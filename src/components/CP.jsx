import { motion } from 'framer-motion'
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si'
import { FadeUp } from '../utils/motion'

const PLATFORMS = [
  {
    icon: SiLeetcode, name: 'LeetCode', rank: 'Knight', rating: '1964+',
    meta: 'Top 3.3%', href: 'https://leetcode.com/shivam565/',
    color: '#f0a500', glowClass: 'glow-yellow',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/25',
    gradientFrom: 'from-yellow-500/10', barPct: 57,
    notes: ['#887 — LeetCode Biweekly Contest 102', '19,000+ participants'],
    size: 'large',
  },
  {
    icon: SiCodechef, name: 'CodeChef', rank: '4-Star', rating: '1990',
    meta: 'Top 5%', href: 'https://www.codechef.com/users/shivamloop',
    color: '#d97706', glowClass: 'glow-yellow',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
    gradientFrom: 'from-amber-500/10', barPct: 66,
    notes: ['Div2 Ranks: #286, #237, #305', 'Div3 Global Rank: #30'],
    size: 'small',
  },
  {
    icon: SiCodeforces, name: 'Codeforces', rank: 'Specialist', rating: '1579',
    meta: null, href: 'https://codeforces.com/profile/shivamvarshney_',
    color: '#60a5fa', glowClass: 'glow-blue',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
    gradientFrom: 'from-blue-500/10', barPct: 53,
    notes: ['Div2 #1710 · Div4 #1036 · Div3 #1343'],
    size: 'small',
  },
  {
    icon: SiGeeksforgeeks, name: 'GeeksForGeeks', rank: 'Top 2%', rating: '1925+',
    meta: 'Top 2%', href: 'https://auth.geeksforgeeks.org/user/varshney565/profile',
    color: '#4ade80', glowClass: 'glow-green',
    badge: 'bg-green-500/10 text-green-400 border-green-500/25',
    gradientFrom: 'from-green-500/10', barPct: 65,
    notes: ['Global Rank #7 — Weekly Contest 101', '2,000+ participants'],
    size: 'large',
  },
]

const HIGHLIGHTS = [
  { event: 'Google KickStart Round A', rank: '#1,280', total: '30,000+ participants' },
  { event: 'Google KickStart Round B', rank: '#1,323', total: '30,000+ participants' },
  { event: 'Blind Coding Contest · UIET KUK', rank: '#1', total: 'University-wide winner' },
]

function PlatformCard({ p, className = '' }) {
  const isLarge = p.size === 'large'
  return (
    <motion.a
      href={p.href} target="_blank" rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden card-glass p-6 flex flex-col gap-4 group ${className}`}
    >
      {/* Corner gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-bl ${p.gradientFrom} to-transparent opacity-40 group-hover:opacity-70 transition-opacity`} />

      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08]" style={{ background: `${p.color}18` }}>
            <p.icon size={20} style={{ color: p.color }} />
          </div>
          <span className="text-slate-400 text-sm font-medium">{p.name}</span>
        </div>
        {p.meta && (
          <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${p.badge}`}>{p.meta}</span>
        )}
      </div>

      <div className="relative z-10">
        <p className={`font-extrabold text-white ${isLarge ? 'text-5xl' : 'text-4xl'} ${p.glowClass}`}>
          {p.rank}
        </p>
        <p className="text-xl font-mono mt-1 font-bold" style={{ color: p.color }}>{p.rating}</p>
      </div>

      <div className="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden relative z-10">
        <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${p.color}aa, ${p.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${p.barPct}%` }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="space-y-1 relative z-10">
        {p.notes.map(n => (
          <p key={n} className="text-xs text-slate-600 group-hover:text-slate-500 transition-colors">{n}</p>
        ))}
      </div>
    </motion.a>
  )
}

export default function CP() {
  const [lc, cc, cf, gfg] = PLATFORMS
  return (
    <section id="cp" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <FadeUp>
          <span className="section-label">Competitive Programming</span>
          <h2 className="section-title mb-4">Rankings & <span className="gradient-text">Achievements</span></h2>
          <p className="text-slate-500 mb-14 max-w-xl text-lg">
            Top 2–3% globally. The depth of algorithmic thinking directly shapes how I teach.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PlatformCard p={lc} className="md:col-span-2" />
            <PlatformCard p={cc} />
          </div>
        </FadeUp>
        <FadeUp delay={0.2} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PlatformCard p={cf} />
            <PlatformCard p={gfg} className="md:col-span-2" />
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-xs text-slate-700 font-mono uppercase tracking-widest mb-5">Notable contest results</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {HIGHLIGHTS.map(h => (
              <motion.div key={h.event} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                className="card-glass p-6 group">
                <p className="text-4xl font-extrabold gradient-text mb-3 glow-violet">{h.rank}</p>
                <p className="text-white text-sm font-semibold leading-snug mb-1">{h.event}</p>
                <p className="text-slate-600 text-xs group-hover:text-slate-500 transition-colors">{h.total}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
