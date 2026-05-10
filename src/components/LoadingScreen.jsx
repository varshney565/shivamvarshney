import { useState, useEffect, useRef } from 'react'

const MESSAGES = [
  'Booting portfolio...',
  'Loading cryptographic modules...',
  'Starting peer discovery network...',
  'Mounting consensus engine...',
  'Running key generation protocol...',
  'Verifying Byzantine fault tolerance...',
  'All systems operational.',
]

const TOTAL_MS = 7000

export default function LoadingScreen({ onDone }) {
  const [pct, setPct] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const startRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    startRef.current = Date.now()

    // Smooth continuous progress animation
    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const p = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100))
      setPct(p)
      setMsgIdx(Math.min(MESSAGES.length - 1, Math.floor((p / 100) * MESSAGES.length)))

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setFading(true)
          setTimeout(onDone, 700)
        }, 400)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col justify-center px-8 md:px-28 font-mono select-none"
      style={{ background: '#030306', opacity: fading ? 0 : 1, transition: 'opacity 0.7s ease' }}
    >
      <p className="text-white text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">
        SHIVAM VARSHNEY
      </p>
      <p className="text-xs uppercase tracking-widest mb-14" style={{ color: '#15803d' }}>
        Portfolio v2.0 — System Boot
      </p>

      {/* Continuous progress bar */}
      <div className="max-w-md mb-3">
        <div className="relative h-[3px] rounded-full overflow-hidden" style={{ background: '#0f1d13' }}>
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, #16a34a, #4ade80)',
              boxShadow: '0 0 12px #22c55e88',
              transition: 'width 80ms linear',
            }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-xs" style={{ color: '#15803d' }}>{MESSAGES[msgIdx]}</p>
          <p className="text-xs tabular-nums" style={{ color: '#15803d' }}>{pct}%</p>
        </div>
      </div>
    </div>
  )
}
