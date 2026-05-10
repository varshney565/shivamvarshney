import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RobotGreeting({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000)
    return () => clearTimeout(t)
  }, [onDone])

  useEffect(() => {
    const canvas = document.getElementById('robot-canvas')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    // ────── Canvas Sizing (responsive) ──────
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()
      const w = Math.round(rect.width)
      const h = Math.round(rect.height)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // ────── roundRect polyfill ──────
    if (!ctx.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r = 10) {
        this.beginPath()
        this.moveTo(x + r, y)
        this.arcTo(x + w, y, x + w, y + h, r)
        this.arcTo(x + w, y + h, x, y + h, r)
        this.arcTo(x, y + h, x, y, r)
        this.arcTo(x, y, x + w, y, r)
        this.closePath()
      }
    }

    // ────── Get robot color from CSS ──────
    const getRobotColor = () => {
      return getComputedStyle(document.documentElement).getPropertyValue('--robot-color').trim() || '#25d366'
    }

    let mouse = { x: 0, y: 0 }
    let target = { x: 0, y: 0 }
    let blink = 0
    let time = 0
    let clickCount = 0
    let lastClick = 0
    let angryUntil = 0
    let collapseUntil = 0
    let laughUntil = 0
    let mouthMode = 'smile'
    let mouthUntil = 0
    let blinkTrigger = Math.random() * 200 + 100

    const updateTarget = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      target.x = (clientX - cx) / (rect.width / 2)
      target.y = (clientY - cy) / (rect.height / 2)
      target.x = Math.max(-1, Math.min(1, target.x))
      target.y = Math.max(-1, Math.min(1, target.y))
    }

    canvas.addEventListener('mousemove', (e) => {
      updateTarget(e.clientX, e.clientY)
    })

    canvas.addEventListener('mouseleave', () => {
      target.x = 0
      target.y = 0
    })

    function draw() {
      time += 0.05
      mouse.x += (target.x - mouse.x) * 0.1
      mouse.y += (target.y - mouse.y) * 0.1

      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const cx = w / 2
      const cy = h / 2 + 20

      ctx.clearRect(0, 0, w, h)

      const now = Date.now()
      if (now < collapseUntil) {
        canvas.style.opacity = '0'
        requestAnimationFrame(draw)
        return
      }
      canvas.style.opacity = '1'

      const isAngry = now < angryUntil
      const isLaughing = now < laughUntil
      canvas.classList.toggle('robot-canvas-angry', isAngry)

      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.1)'
      ctx.beginPath()
      ctx.ellipse(cx, cy + 90, 40 + Math.sin(time) * 5, 10, 0, 0, Math.PI * 2)
      ctx.fill()

      const floatY = Math.sin(time) * 8
      const robotColor = getRobotColor()

      // Body
      const bodyX = cx + mouse.x * 5
      const bodyY = cy + floatY + 30

      let bodyGrad = ctx.createRadialGradient(bodyX - 20, bodyY - 20, 10, bodyX, bodyY, 60)
      bodyGrad.addColorStop(0, '#ffffff')
      bodyGrad.addColorStop(1, '#d1d9e6')

      ctx.fillStyle = bodyGrad
      ctx.beginPath()
      ctx.ellipse(bodyX, bodyY, 50, 45, 0, 0, Math.PI * 2)
      ctx.fill()

      // Logo
      const logoX = bodyX + mouse.x * 10
      const logoY = bodyY + mouse.y * 5
      ctx.fillStyle = robotColor
      ctx.shadowBlur = 12
      ctx.shadowColor = robotColor
      ctx.beginPath()
      ctx.arc(logoX, logoY, 15, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(logoX - 3, logoY - 3, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      // Head
      const headX = cx + mouse.x * 25
      const headY = cy + floatY - 50 + mouse.y * 15

      let headGrad = ctx.createRadialGradient(headX - 30, headY - 20, 20, headX, headY, 80)
      headGrad.addColorStop(0, '#ffffff')
      headGrad.addColorStop(1, '#cbd5e1')

      ctx.fillStyle = headGrad
      ctx.beginPath()
      ctx.roundRect(headX - 60, headY - 45, 120, 90, 40)
      ctx.fill()

      // Face panel
      const faceX = headX + mouse.x * 10
      const faceY = headY + mouse.y * 8
      const faceHeight = 60

      ctx.fillStyle = '#0f172a'
      ctx.beginPath()
      ctx.roundRect(faceX - 45, faceY - faceHeight / 2, 90, faceHeight, 22)
      ctx.fill()

      // Blink logic (deterministic within frame)
      blinkTrigger -= 1
      if (blinkTrigger < 0) {
        blink = 1
        blinkTrigger = Math.random() * 250 + 150
      }
      if (blink > 0) blink -= 0.12

      // Eyes
      const eyeY = faceY + mouse.y * 5 - 2
      const eyeColor = isAngry ? '#ff4d4d' : robotColor
      ctx.fillStyle = eyeColor
      ctx.shadowBlur = 10
      ctx.shadowColor = eyeColor

      if (blink <= 0.15) {
        ctx.beginPath()
        ctx.ellipse(faceX - 22 + mouse.x * 5, eyeY, 7, 10, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(faceX + 22 + mouse.x * 5, eyeY, 7, 10, 0, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0

      // Mouth
      if (Date.now() > mouthUntil) mouthMode = 'smile'
      ctx.strokeStyle = eyeColor
      ctx.lineWidth = 4
      const mouthFloat = mouse.y * 6
      const baseY = faceY + 14 + mouthFloat

      if (mouthMode === 'sad') {
        ctx.beginPath()
        ctx.moveTo(faceX - 18, baseY + 8)
        ctx.quadraticCurveTo(faceX, baseY - 2, faceX + 18, baseY + 8)
        ctx.stroke()
      } else if (mouthMode === 'wow') {
        ctx.beginPath()
        ctx.arc(faceX, baseY + 4, 6, 0, Math.PI * 2)
        ctx.stroke()
      } else if (mouthMode === 'oh') {
        ctx.beginPath()
        ctx.arc(faceX, baseY + 4, 4, 0, Math.PI * 2)
        ctx.stroke()
      } else {
        const smileDepth = (isLaughing ? 12 : 8) + Math.abs(mouse.y * 4)
        ctx.beginPath()
        ctx.moveTo(faceX - 18, baseY)
        ctx.quadraticCurveTo(faceX, baseY + smileDepth, faceX + 18, baseY)
        ctx.stroke()
      }

      // Antennas
      ctx.strokeStyle = '#cbd5e1'
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.moveTo(headX - 40, headY - 40)
      ctx.lineTo(headX - 55, headY - 65)
      ctx.moveTo(headX + 40, headY - 40)
      ctx.lineTo(headX + 55, headY - 65)
      ctx.stroke()

      requestAnimationFrame(draw)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    draw()

    // Click interactions
    canvas.addEventListener('click', () => {
      const now = Date.now()
      if (now - lastClick > 1500) clickCount = 0
      clickCount += 1
      lastClick = now

      const funTexts = ['You tickle me', 'Haha', 'Nice', 'Okay', 'Wow', 'Ah']
      const angryTexts = ["Enough!", "I'm angry", 'Stop', 'Sad']
      const collapseTexts = ['Ouch!', "I'm done"]

      if (clickCount >= 8) {
        angryUntil = now + 1200
        collapseUntil = now + 1200
        clickCount = 0
        canvas.classList.add('robot-canvas-collapse')
        setTimeout(() => {
          canvas.classList.remove('robot-canvas-collapse')
          canvas.classList.remove('robot-canvas-reappear')
          void canvas.offsetWidth
          canvas.classList.add('robot-canvas-reappear')
          emitBubbles(14, 'burst')
          setTimeout(() => canvas.classList.remove('robot-canvas-reappear'), 600)
        }, 1200)
        emitBubbles(18, 'burst')
        mouthMode = 'oh'
        mouthUntil = now + 1400
        emitPop(collapseTexts[Math.floor(Math.random() * collapseTexts.length)], 1400)
        return
      }

      if (clickCount >= 5) {
        angryUntil = now + 1500
        mouthMode = 'sad'
        mouthUntil = now + 1500
        emitBubbles(8, 'angry')
        emitPop(angryTexts[Math.floor(Math.random() * angryTexts.length)], 1500)
      } else {
        laughUntil = now + 1200
        mouthMode = Math.random() > 0.6 ? 'wow' : 'smile'
        mouthUntil = now + 1200
        emitBubbles(4)
        emitPop(funTexts[Math.floor(Math.random() * funTexts.length)], 1200)
      }

      canvas.classList.remove('robot-canvas-fun')
      void canvas.offsetWidth
      canvas.classList.add('robot-canvas-fun')
      setTimeout(() => canvas.classList.remove('robot-canvas-fun'), 600)
    })

    function emitPop(text, duration) {
      const card = canvas.closest('.robot-card')
      if (!card) return
      const pop = document.createElement('span')
      pop.className = 'robot-pop'
      pop.textContent = text
      card.appendChild(pop)
      setTimeout(() => pop.remove(), duration || 1200)
    }

    function emitBubbles(count, tone) {
      const card = canvas.closest('.robot-card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radius = Math.min(rect.width, rect.height) * 0.48
      for (let i = 0; i < count; i += 1) {
        const bubble = document.createElement('span')
        bubble.className = tone === 'angry' ? 'robot-bubble robot-bubble-angry' : 'robot-bubble'
        if (tone === 'burst') {
          const angle = (Math.PI * 2 * i) / count + Math.random() * 0.2
          bubble.style.left = `${centerX + Math.cos(angle) * radius}px`
          bubble.style.top = `${centerY + Math.sin(angle) * radius}px`
        } else {
          bubble.style.left = `${40 + Math.random() * 40}%`
          bubble.style.top = `${30 + Math.random() * 40}%`
        }
        bubble.style.width = `${8 + Math.random() * 8}px`
        bubble.style.height = bubble.style.width
        card.appendChild(bubble)
        setTimeout(() => bubble.remove(), 900)
      }
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div style={{ background: '#070b1c' }} className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          width: 620,
          height: 620,
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -45%)',
          background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(6,182,212,0.06) 34%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ y: 44, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-7 rounded-[28px] border border-green-500/35 bg-[#0b1222]/95 px-7 py-4 backdrop-blur-md robot-card"
          style={{ boxShadow: '0 0 50px rgba(34,197,94,0.12)' }}
        >
          <p className="font-mono text-center text-2xl font-bold text-green-400">Hi there! 👋</p>
          <p className="mt-0.5 text-center font-mono text-sm text-slate-500">systems online. let's go.</p>
          <div className="absolute left-1/2 -bottom-[12px] h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-green-500/35" />
          <div className="absolute left-1/2 -bottom-[10px] h-0 w-0 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#0b1222]" />

          <div className="robot-glow"></div>
          <canvas
            id="robot-canvas"
            className="rounded-lg"
            style={{ height: '200px', width: '100%', cursor: 'pointer' }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        :root {
          --robot-color: #25d366;
          --body-white: #f8fafc;
          --bg: #0f172a;
        }

        .robot-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(15px);
          overflow: hidden;
        }

        #robot-canvas {
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
        }

        .robot-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, var(--robot-color), transparent 70%);
          opacity: 0.1;
          pointer-events: none;
          z-index: 0;
          display: block;
        }

        .robot-canvas-fun {
          animation: robot-bounce 0.6s ease;
        }

        .robot-canvas-angry {
          filter: drop-shadow(0 10px 20px rgba(255, 70, 70, 0.35));
        }

        .robot-canvas-collapse {
          animation: robot-collapse 1.2s ease forwards;
        }

        .robot-canvas-reappear {
          animation: robot-reappear 0.6s ease;
        }

        .robot-bubble {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(37, 211, 102, 0.2));
          opacity: 0;
          pointer-events: none;
          animation: robot-bubble 0.9s ease forwards;
          z-index: 2;
        }

        .robot-bubble.robot-bubble-angry {
          background: radial-gradient(circle at 30% 30%, rgba(255, 210, 210, 0.9), rgba(255, 70, 70, 0.35));
        }

        .robot-pop {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          letter-spacing: 0.4px;
          padding: 4px 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.32);
          color: #eafff6;
          animation: robot-pop 0.9s ease forwards;
          pointer-events: none;
          z-index: 2;
        }

        @keyframes robot-bounce {
          0% { transform: scale(1); }
          35% { transform: scale(1.04); }
          70% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }

        @keyframes robot-collapse {
          0% { opacity: 1; transform: scale(1); }
          40% { opacity: 0.2; transform: scale(0.94); }
          100% { opacity: 0; transform: scale(0.9); }
        }

        @keyframes robot-reappear {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes robot-bubble {
          0% { opacity: 0; transform: translateY(0) scale(0.6); }
          40% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-16px) scale(1.1); }
        }

        @keyframes robot-pop {
          0% { opacity: 0; transform: translate(-50%, 6px); }
          30% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, -12px); }
        }
      `}</style>
    </div>
  )
}
