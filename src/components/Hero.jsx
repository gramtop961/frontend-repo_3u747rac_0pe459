import { useState, useEffect, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Shield, Rocket, TerminalSquare } from 'lucide-react'

function HackerTerminal() {
  const script = useMemo(
    () => [
      'monish@neon-core:~$ whoami',
      'monish',
      'monish@neon-core:~$ uname -a',
      'Linux cyber-grid 6.2.0 #1 SMP x86_64 GNU/Linux',
      'monish@neon-core:~$ nmap -sC -sV target',
      'PORT   STATE SERVICE VERSION',
      '80/tcp open  http    nginx 1.23',
      '443/tcp open  https   openresty',
      'monish@neon-core:~$ node secure_api.js --harden',
      '[+] WAF rules updated | CSP enforced | Rate limit active',
      'monish@neon-core:~$ ./deploy --stack full --enable-ids',
      '🚀 Deployed: web · api · db · ids | status: GREEN',
      'monish@neon-core:~$ echo "Future secured."',
      'Future secured.',
    ],
    []
  )

  const [display, setDisplay] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= script.length) return

    const line = script[lineIdx]
    const isCommand = line.startsWith('monish@') || line.startsWith('🚀') || line.startsWith('[+]')

    const timeout = setTimeout(() => {
      setDisplay((prev) => {
        const lines = prev.split('\n')
        const lastLine = lines[lines.length - 1] || ''
        if (charIdx === 0) {
          const prefix = isCommand ? '\\u001b[38;2;100;255;218m' : '\\u001b[38;2;180;200;255m'
          const newLine = `${prefix}${line.slice(0, 1)}\\u001b[0m`
          return lines.length ? `${prev}\n${newLine}` : newLine
        }
        const prefix = isCommand ? '\\u001b[38;2;100;255;218m' : '\\u001b[38;2;180;200;255m'
        const nextLine = `${prefix}${line.slice(0, charIdx + 1)}\\u001b[0m`
        return `${lines.slice(0, -1).join('\n')}${lines.length > 1 ? '\n' : ''}${nextLine}`
      })

      if (charIdx + 1 >= line.length) {
        setLineIdx((i) => i + 1)
        setCharIdx(0)
      } else {
        setCharIdx((c) => c + 1)
      }
    }, Math.max(15, 35 - Math.min(20, line.length / 2)))

    return () => clearTimeout(timeout)
  }, [charIdx, lineIdx, script])

  useEffect(() => {
    if (lineIdx < script.length && charIdx === 0 && display) {
      const pause = setTimeout(() => {
        setCharIdx(0.0001) // kick next tick
      }, 160)
      return () => clearTimeout(pause)
    }
  }, [lineIdx, charIdx, display, script.length])

  return (
    <div className="w-full lg:w-[32rem] xl:w-[36rem] 2xl:w-[42rem] bg-black/70 backdrop-blur-md border border-emerald-500/20 rounded-xl overflow-hidden shadow-[0_0_30px_-5px_rgba(16,185,129,0.35)]">
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 via-emerald-400/10 to-cyan-400/10 border-b border-emerald-500/20">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <div className="ml-auto flex items-center gap-2 text-emerald-300 text-xs">
          <TerminalSquare className="h-4 w-4" />
          <span>neon-terminal</span>
        </div>
      </div>
      <pre className="m-0 p-4 font-mono text-[12px] leading-5 text-emerald-100 whitespace-pre-wrap min-h-[18rem] max-h-[24rem] overflow-y-auto [text-shadow:0_0_8px_rgba(16,185,129,0.35)]">
        {display}
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#04050a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#04050a] via-transparent to-[#04050a]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-sm mb-4">
              <Shield className="h-4 w-4" /> Ethical Hacker • Full‑Stack • Game Dev
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              Hey, I'm Monish
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-100/90 max-w-xl">
              I build secure, futuristic experiences across web and games. Specialized in Ethical Hacking, Pen Testing, and resilient full‑stack systems.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/GINGKA-HAGANE-1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-white shadow-[0_10px_20px_-10px_rgba(16,185,129,0.7)] hover:opacity-90 transition"
              >
                <Rocket className="h-5 w-5" /> View Projects
              </a>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <HackerTerminal />
          </div>
        </div>
      </div>
    </section>
  )
}
