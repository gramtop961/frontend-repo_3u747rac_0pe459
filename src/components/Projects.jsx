import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Instagram Reels Downloader',
    repo: 'GINGKA-HAGANE-1/Instagram-reels-downloader',
    desc: 'Tooling to fetch and save Instagram Reels with a clean UI and robust handling.'
  },
  {
    name: 'Iterative Methods Calculator',
    repo: 'GINGKA-HAGANE-1/Iterative-Methods-Calculator',
    desc: 'Math utilities and visualizations for iterative numerical methods.'
  },
  {
    name: 'Gingkafy',
    repo: 'GINGKA-HAGANE-1/Gingkafy',
    desc: 'A creative project exploring modern web patterns and interactions.'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-[#03050b] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(16,185,129,0.1),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-emerald-100/80">Select work at the intersection of security and experience</p>
          </div>
          <a
            href="https://github.com/GINGKA-HAGANE-1"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
          >
            View all on GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.repo}
              href={`https://github.com/${p.repo}`}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <ExternalLink className="h-4 w-4 text-emerald-300" />
                </div>
                <p className="mt-2 text-sm text-emerald-100/80">{p.desc}</p>
                <div className="mt-4 inline-flex text-xs text-emerald-200 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                  {p.repo}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
