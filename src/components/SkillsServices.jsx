import { Code, Database, Globe, Gamepad2, ShieldCheck, Layers } from 'lucide-react'

export default function SkillsServices() {
  const skills = [
    { title: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Responsive Design', 'API Integration', 'MongoDB', 'MySQL'] },
    { title: 'Game Development', items: ['Unity Engine', 'C# Programming', 'Game Design', '2D/3D Development'] },
    { title: 'Cybersecurity', items: ['Penetration Testing', 'Network Security', 'Security Auditing', 'Vulnerability Assessment'] },
  ]

  const services = [
    { icon: Globe, title: 'Full‑Stack Development', desc: 'From idea to production: front‑end, APIs, databases, deployment.' },
    { icon: Layers, title: 'Responsive Design', desc: 'Pixel‑perfect, adaptive layouts optimized for all devices.' },
    { icon: Code, title: 'API Integration', desc: 'Robust integration with external services and micro‑APIs.' },
    { icon: Database, title: 'Database Management', desc: 'Schema design, performance tuning, and backups.' },
    { icon: Gamepad2, title: 'Unity Game Dev', desc: '2D/3D gameplay, mechanics, levels, and polish.' },
    { icon: ShieldCheck, title: 'Security Services', desc: 'Pen‑testing, auditing, remediation, and incident response.' },
  ]

  return (
    <section id="skills" className="relative py-20 bg-[#04060d] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Services</h2>
            <p className="mt-3 text-emerald-100/80">High‑impact capabilities and offerings</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/7 hover:border-emerald-500/30 transition">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{title}</h4>
                      <p className="text-sm text-emerald-100/80">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
