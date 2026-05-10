import { useScroll, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import CP from './components/CP'
import Teaching from './components/Teaching'
import Skills from './components/Skills'
import Contact from './components/Contact'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 origin-left z-[100]"
    />
  )
}

export default function App() {
  return (
    <div className="bg-[#07070d] text-slate-100 font-sans overflow-x-hidden">
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
    </div>
  )
}
