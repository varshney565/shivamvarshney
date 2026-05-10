import { useState } from 'react'
import { useScroll, motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import CP from './components/CP'
import Teaching from './components/Teaching'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import StatusBar from './components/StatusBar'
import RobotGreeting from './components/RobotGreeting'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-400 origin-left z-[100]"
    />
  )
}

export default function App() {
  const [phase, setPhase] = useState('loading') // 'loading' | 'greeting' | 'main'

  return (
    <div className="bg-[#070b1c] text-slate-100 font-sans overflow-x-hidden">

      {/* Loading → Robot greeting → Portfolio */}
      <AnimatePresence mode="wait">
        {phase === 'loading' && (
          <motion.div key="boot" className="fixed inset-0 z-[200]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}>
            <LoadingScreen onDone={() => setPhase('greeting')} />
          </motion.div>
        )}
        {phase === 'greeting' && (
          <motion.div key="robot" className="fixed inset-0 z-[200]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}>
            <RobotGreeting onDone={() => setPhase('main')} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio slides in from right */}
      <AnimatePresence>
        {phase === 'main' && (
          <motion.div key="main"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <ScrollProgress />
            <StatusBar />
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <Experience />
              <CP />
              <Teaching />
              <Skills />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
