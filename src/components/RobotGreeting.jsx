import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RobotGreeting({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div style={{ background: '#070b1c' }} className="fixed inset-0 flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        width: 400, height: 400,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -40%)',
        background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 65%)'
      }} />

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        {/* Speech bubble */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-4 px-8 py-4 rounded-2xl border border-green-500/40 bg-[#0d1425]"
          style={{ boxShadow: '0 0 40px rgba(34,197,94,0.14)' }}
        >
          <p className="font-mono text-green-400 text-2xl font-bold text-center">Hi there! 👋</p>
          <p className="font-mono text-slate-500 text-sm text-center mt-0.5">systems online. let's go.</p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[13px] w-0 h-0
            border-l-[13px] border-r-[13px] border-t-[13px]
            border-l-transparent border-r-transparent border-t-green-500/40" />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[11px] w-0 h-0
            border-l-[11px] border-r-[11px] border-t-[11px]
            border-l-transparent border-r-transparent border-t-[#0d1425]" />
        </motion.div>

        {/* Robot SVG */}
        <svg
          width="190" height="240"
          viewBox="0 0 180 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible', filter: 'drop-shadow(0 0 22px rgba(34,197,94,0.13))' }}
        >
          <defs>
            <filter id="glow-r" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Whole-body gentle bob */}
          <motion.g
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* ── Antenna ── */}
            <line x1="90" y1="18" x2="90" y2="36" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <motion.circle cx="90" cy="12" r="7" fill="#22c55e" filter="url(#glow-r)"
              animate={{ opacity: [1, 0.2, 1], r: [7, 5, 7] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }} />

            {/* ── Head ── */}
            <rect x="36" y="36" width="108" height="66" rx="13" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />

            {/* Ear bolts */}
            <circle cx="36" cy="65" r="5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.3" />
            <circle cx="144" cy="65" r="5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.3" />

            {/* Visor screen */}
            <rect x="47" y="46" width="86" height="45" rx="7" fill="#030912" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />

            {/* Left eye */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.07, 1, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, times: [0, 0.38, 0.43, 0.48, 1] }}
              style={{ transformOrigin: '68px 61px' }}
            >
              <rect x="55" y="52" width="26" height="18" rx="4" fill="#22c55e" filter="url(#glow-r)" />
              <rect x="63" y="58" width="7" height="7" rx="2" fill="#070b1c" />
            </motion.g>

            {/* Right eye */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.07, 1, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, times: [0, 0.38, 0.43, 0.48, 1] }}
              style={{ transformOrigin: '112px 61px' }}
            >
              <rect x="99" y="52" width="26" height="18" rx="4" fill="#22c55e" filter="url(#glow-r)" />
              <rect x="107" y="58" width="7" height="7" rx="2" fill="#070b1c" />
            </motion.g>

            {/* Mouth — smile arc */}
            <path d="M 62 78 Q 90 92 118 78" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" filter="url(#glow-r)" />

            {/* ── Neck ── */}
            <rect x="78" y="102" width="24" height="15" rx="4" fill="#0d1425" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
            {/* Neck ridges */}
            <line x1="84" y1="106" x2="84" y2="113" stroke="#22c55e" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="90" y1="106" x2="90" y2="113" stroke="#22c55e" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="96" y1="106" x2="96" y2="113" stroke="#22c55e" strokeOpacity="0.25" strokeWidth="1" />

            {/* ── Body ── */}
            <rect x="20" y="117" width="140" height="74" rx="13" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />

            {/* Chest screen */}
            <rect x="34" y="129" width="112" height="50" rx="7" fill="#030912" stroke="#22c55e" strokeOpacity="0.22" strokeWidth="1" />

            {/* 5 pulsing chest lights */}
            {[54, 72, 90, 108, 126].map((cx, i) => (
              <motion.circle key={cx} cx={cx} cy={148} r={5.5}
                fill={i === 2 ? '#06b6d4' : '#22c55e'}
                filter="url(#glow-r)"
                animate={{ opacity: [0.9, 0.15, 0.9] }}
                transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.17 }}
              />
            ))}

            {/* Chest scan bar */}
            <rect x="38" y="162" width="104" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.07" />
            <motion.rect y="162" width="38" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.7"
              animate={{ x: [38, 104, 38] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />

            {/* Shoulder panel lines */}
            <line x1="20" y1="130" x2="20" y2="140" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />
            <line x1="160" y1="130" x2="160" y2="140" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />

            {/* ── Left arm — waving ── */}
            <g transform="translate(20,117)">
              <motion.g
                animate={{ rotate: [0, -50, 6, -46, 0] }}
                transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '0px 0px' }}
              >
                <rect x="-19" y="0" width="19" height="52" rx="9.5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />
                {/* Wrist joint */}
                <rect x="-19" y="50" width="19" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.25" />
                {/* Hand */}
                <rect x="-18" y="54" width="17" height="22" rx="8.5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />
                {/* Knuckle lines */}
                <line x1="-13" y1="62" x2="-13" y2="68" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="-8" y1="62" x2="-8" y2="68" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />
              </motion.g>
            </g>

            {/* ── Right arm — gentle idle sway ── */}
            <g transform="translate(160,117)">
              <motion.g
                animate={{ rotate: [0, 10, 0, -5, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '0px 0px' }}
              >
                <rect x="0" y="0" width="19" height="52" rx="9.5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />
                <rect x="0" y="50" width="19" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.25" />
                <rect x="1" y="54" width="17" height="22" rx="8.5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />
                <line x1="7" y1="62" x2="7" y2="68" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="12" y1="62" x2="12" y2="68" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" />
              </motion.g>
            </g>

            {/* ── Legs ── */}
            <rect x="38" y="191" width="36" height="22" rx="10" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="106" y="191" width="36" height="22" rx="10" fill="#0d1425" stroke="#22c55e" strokeWidth="1.5" />

            {/* ── Feet ── */}
            <rect x="30" y="209" width="50" height="13" rx="6.5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.3" />
            <rect x="100" y="209" width="50" height="13" rx="6.5" fill="#0d1425" stroke="#22c55e" strokeWidth="1.3" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}
