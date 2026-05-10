import { motion } from 'framer-motion'
import { FadeUp, Stagger, itemVariants } from '../utils/motion'

const JOBS = [
  {
    company: 'Antier Solutions',
    role: 'Software Engineer',
    period: 'Jul 2023 – Present',
    duration: '2 yrs 10 mos',
    location: 'Mohali, India',
    accent: 'from-green-500 to-emerald-500',
    dotColor: 'rgba(34,197,94,0.35)',
    projects: [
      {
        name: 'Chain Abstraction — MPC Node',
        tags: ['Rust', 'ADKG', 'Threshold ECDSA', 'libp2p', 'Bitcoin', 'EVM'],
        stat: '50K signing rounds',
        desc: 'Production MPC threshold signing node for trustless cross-chain swaps. Implemented ADKG on secp256k1, proactive share refresh, VRF leader election, 2/3 quorum Byzantine fault recovery, and libp2p networking (GossipSub + Kademlia + QUIC).',
      },
      {
        name: 'BlockDAG — PHANTOM Consensus',
        tags: ['Go', 'PHANTOM', 'EVM', 'libp2p'],
        stat: '5,000 TPS · 1s blocks',
        desc: 'Implemented the PHANTOM consensus algorithm from the research paper — blue/red block coloring, diffAnticone computation, DAG-to-EVM execution bridge. Achieved 5,000 TPS at 1-second block time with 45M gas per block.',
      },
      {
        name: 'Upgradeable Smart Contracts',
        tags: ['Solidity', 'Rust (Ink!)', 'ERC-20', 'ERC-721', 'ERC-1155'],
        stat: 'UUPS proxy pattern',
        desc: 'Built ERC-20, ERC-721, and ERC-1155 upgradeable contracts using the UUPS proxy pattern with storage collision prevention, deployed on both Solidity (EVM) and Rust (Ink!) for custom blockchain runtimes.',
      },
      {
        name: 'Stratum Mining Pool',
        tags: ['Go', 'Stratum Protocol', 'VarDiff', 'Concurrency'],
        stat: 'Production mining pool',
        desc: 'Built a full Stratum mining pool in Go with VarDiff difficulty adjustment, share verification, stale-share detection, and concurrent miner connection management using goroutines.',
      },
    ],
  },
  {
    company: 'Relevel by Unacademy',
    role: 'Back-End Developer',
    period: 'Apr 2022 – Mar 2023',
    duration: '1 year',
    location: 'Remote',
    accent: 'from-cyan-500 to-teal-500',
    dotColor: 'rgba(6,182,212,0.35)',
    projects: [
      {
        name: 'CRM & E-commerce Backend',
        tags: ['Node.js', 'Express.js', 'REST APIs', 'JavaScript'],
        stat: 'Production deployments',
        desc: 'Built back-end systems for CRM and e-commerce applications — REST APIs, database integrations, and server-side business logic in a production environment.',
      },
    ],
  },
]

function ProjectCard({ p }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-xl border border-white/[0.07] p-5 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_8px_40px_rgba(34,197,94,0.07)] hover:-translate-y-0.5"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)' }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="text-white font-semibold text-sm tracking-tight leading-snug">{p.name}</h4>
        <span className="shrink-0 text-[11px] font-mono text-green-400 bg-green-500/10 px-2.5 py-1 rounded-md border border-green-500/20 whitespace-nowrap">
          {p.stat}
        </span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map(t => (
          <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-500 border border-white/[0.06] group-hover:border-white/[0.1] transition-colors">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="section-label">Work</p>
          <h2 className="text-4xl font-bold text-white mb-16">Industry Experience</h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {JOBS.map((job, ji) => (
              <FadeUp key={job.company} delay={ji * 0.1}>
                <div className="md:pl-24 relative">
                  <div
                    className={`hidden md:flex absolute left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${job.accent} items-center justify-center`}
                    style={{ boxShadow: `0 0 20px ${job.dotColor}` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <p className={`text-sm font-medium mt-0.5 bg-gradient-to-r ${job.accent} bg-clip-text text-transparent`}>
                        {job.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-300 font-mono">{job.period}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{job.duration} · {job.location}</p>
                    </div>
                  </div>

                  <Stagger className="space-y-3">
                    {job.projects.map(p => <ProjectCard key={p.name} p={p} />)}
                  </Stagger>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
