import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si'
import { FadeUp } from '../utils/motion'

const ALL_LINKS = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/varshney565', sub: 'varshney565' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam565/', sub: 'shivam565' },
  { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/shivam565/', sub: 'Knight · 1964+' },
  { icon: SiCodechef, label: 'CodeChef', href: 'https://www.codechef.com/users/shivamloop', sub: '4-Star · 1990' },
  { icon: SiCodeforces, label: 'Codeforces', href: 'https://codeforces.com/profile/shivamvarshney_', sub: 'Specialist · 1579' },
  { icon: SiGeeksforgeeks, label: 'GeeksForGeeks', href: 'https://auth.geeksforgeeks.org/user/varshney565/profile', sub: 'Top 2% · 1925+' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-700/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="section-label mb-4">Let's connect</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Open to great<br />
            <span className="gradient-text">opportunities.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">
            Teaching roles, mentorship, or interesting engineering problems — reach out.
          </p>
          <motion.a
            href="mailto:shivamvarshney565@gmail.com"
            whileHover={{ scale: 1.03, boxShadow: '0 0 70px rgba(139,92,246,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-all duration-200"
          >
            shivamvarshney565@gmail.com
          </motion.a>
        </FadeUp>

        {/* All links in one place */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {ALL_LINKS.map(({ icon: Icon, label, href, sub }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="card-base flex items-center gap-4 p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-slate-400 shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-slate-600 text-xs truncate">{sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
