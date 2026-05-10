const ITEMS = [
  'Rust', 'Go', 'C++', 'Python', 'Solidity', 'libp2p', 'ADKG',
  'Threshold ECDSA', 'BlockDAG', 'PHANTOM Consensus', 'MPC',
  'LeetCode Knight', 'CodeChef 4-Star', 'Tokio', 'Actix-web',
  'Competitive Programming', 'Machine Learning', 'System Design',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-5 bg-white/[0.015]">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#07070d] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#07070d] to-transparent pointer-events-none" />

      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-sm font-mono text-slate-600 hover:text-slate-400 transition-colors cursor-default px-4">
            {item}
            <span className="text-violet-700">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
