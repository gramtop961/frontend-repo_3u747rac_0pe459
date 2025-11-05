import Hero from './components/Hero'
import About from './components/About'
import SkillsServices from './components/SkillsServices'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <About />
      <SkillsServices />
      <Projects />
      <footer className="py-10 text-center text-sm text-emerald-100/70 bg-[#04050a] border-t border-white/10">
        <p>
          © {new Date().getFullYear()} Monish • Built with love, security, and futuristic vibes.
          {' '}<a className="underline hover:text-emerald-300" href="https://github.com/GINGKA-HAGANE-1" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  )
}
