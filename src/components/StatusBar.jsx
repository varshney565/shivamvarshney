export default function StatusBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-white/[0.05] bg-[#070b1c]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4 text-[11px] font-mono text-slate-600">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
          <span>currently: building MPC &amp; DAG consensus at Antier Solutions</span>
        </div>
        <span className="hidden md:block">est. 2023 · mohali, india</span>
      </div>
    </div>
  )
}
