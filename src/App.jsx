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

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-400 to-cyan-400 origin-left z-[100]"
    />
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="bg-[#050508] text-slate-100 font-sans overflow-x-hidden">

      {/* Loading screen fades out via AnimatePresence exit */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="boot"
            className="fixed inset-0 z-[200]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <LoadingScreen onDone={() => setLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio slides in from right */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrollProgress />
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
