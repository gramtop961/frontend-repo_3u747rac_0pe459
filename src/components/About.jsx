export default function About() {
  return (
    <section id="about" className="relative py-20 bg-[#05070f] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <p className="mt-3 text-emerald-100/80">
              Ethical Hacker | Full‑Stack Developer | Game Developer
            </p>
          </div>
          <div className="lg:col-span-2 space-y-6 text-emerald-100/90">
            <p>
              I'm a passionate tech enthusiast with expertise in Web Development, Full Stack Development, and Game Development. My skills extend to cybersecurity, where I specialize in Ethical Hacking and Penetration Testing. I create secure, efficient, and innovative solutions while maintaining the highest standards of web security and user experience.
            </p>
            <p>
              I began my journey in technology at a young age, driven by curiosity about how the digital world works. Through years of hands‑on practice and continuous learning, I've built a strong foundation across front‑end, back‑end, and security disciplines.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-emerald-100/80">
                Inspired by Sundar Pichai, I aim to become a transformative leader who drives innovation that positively impacts global communities—delivering secure, reliable, and delightful technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
