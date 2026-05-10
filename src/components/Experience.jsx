import { motion } from 'framer-motion'
import { FadeUp, Stagger, itemVariants } from '../utils/motion'

const JOBS = [
  {
    company: 'Antier Solutions',
    role: 'Software Engineer',
    period: 'Jul 2023 – Present',
    duration: '2 yrs 10 mos',
    location: 'Mohali, India',
    accent: 'from-amber-500 to-orange-500',
    projects: [
      {
        name: 'Chain Abstraction — MPC Node',
        file: 'mpc_node.rs',
        tags: ['Rust', 'ADKG', 'Threshold ECDSA', 'libp2p', 'Bitcoin', 'EVM'],
        stat: '50K-capacity signing rounds',
        desc: 'Production MPC threshold signing node for trustless cross-chain swaps. Implemented ADKG on secp256k1, proactive share refresh, VRF leader election, 2/3 quorum Byzantine fault recovery, and libp2p networking (GossipSub + Kademlia + QUIC).',
      },
      {
        name: 'BlockDAG — PHANTOM Consensus',
        file: 'phantom_dag.go',
        tags: ['Go', 'PHANTOM', 'EVM', 'libp2p'],
        stat: '5,000 TPS · 1s block time',
        desc: 'Implemented the PHANTOM consensus algorithm from the research paper — blue/red block coloring, diffAnticone computation, DAG-to-EVM execution bridge. Achieved 5,000 TPS at 1-second block time with 45M gas per block.',
      },
      {
        name: 'Upgradeable Smart Contracts',
        file: 'upgradeable.sol',
        tags: ['Solidity', 'Rust (Ink!)', 'ERC-20', 'ERC-721', 'ERC-1155'],
        stat: 'UUPS proxy pattern',
        desc: 'Built ERC-20, ERC-721, and ERC-1155 upgradeable contracts using the UUPS proxy pattern with storage collision prevention, deployed on both Solidity (EVM) and Rust (Ink!) for custom blockchain runtimes.',
      },
      {
        name: 'Stratum Mining Pool',
        file: 'stratum_pool.go',
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
    projects: [
      {
        name: 'CRM & E-commerce Backend',
        file: 'api_server.js',
        tags: ['Node.js', 'Express.js', 'REST APIs', 'JavaScript'],
        stat: 'Production deployments',
        desc: 'Built back-end systems for CRM and e-commerce applications — REST APIs, database integrations, and server-side business logic in a production environment.',
      },
    ],
  },
]

function WindowCard({ p }) {
  return (
    <motion.div variants={itemVariants} className="card-window group">
      {/* Title bar */}
      <div className="card-window-bar">
        <div className="window-controls">
          <span className="window-dot window-dot-red" />
          <span className="window-dot window-dot-yellow" />
          <span className="window-dot window-dot-green" />
        </div>
        <span className="text-slate-600 ml-1">{p.file}</span>
        <span className="ml-auto text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
          {p.stat}
        </span>
      </div>
      {/* Body */}
      <div className="p-5">
        <h4 className="text-white font-semibold text-sm tracking-tight mb-2.5">{p.name}</h4>
        <p className="text-slate-500 text-sm leading-relaxed mb-3">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t => (
            <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-500 border border-white/[0.06]">
              {t}
            </span>
          ))}
        </div>
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
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-orange-500/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {JOBS.map((job, ji) => (
              <FadeUp key={job.company} delay={ji * 0.1}>
                <div className="md:pl-24 relative">
                  <div className={`hidden md:flex absolute left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${job.accent} items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]`}>
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
                    {job.projects.map(p => <WindowCard key={p.name} p={p} />)}
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
