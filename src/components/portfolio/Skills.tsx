import { motion } from "framer-motion";
import { Code, Globe, Wrench, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code,
    accent: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "C++", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", level: 88 },
      { name: "Node.js / Express", level: 80 },
      { name: "HTML / CSS / Tailwind", level: 92 },
      { name: "MongoDB / SQL", level: 72 },
    ],
  },
  {
    title: "Tools & Tech",
    icon: Wrench,
    accent: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Linux / Bash", level: 70 },
      { name: "Docker / CI-CD", level: 60 },
    ],
  },
];

const orbit = ["React", "TS", "Node", "C++", "Py", "Git", "SQL", "AWS"];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-1/3 top-0 h-72 w-72 rounded-full bg-accent-purple/15 blur-[120px] animate-aurora" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-xs">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-primary">// 02. skills</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            My <span className="text-gradient animate-gradient">technical toolkit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A curated stack I reach for when turning ideas into shipped product.
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-smooth hover:shadow-glow"
            >
              {/* gradient border on hover */}
              <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${cat.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`} />
              {/* corner accent */}
              <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${cat.accent} opacity-20 blur-2xl`} />

              <div className="mb-6 flex items-center gap-3">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-lg`}>
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((s, j) => (
                  <div key={s.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + j * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                        className={`relative h-full rounded-full bg-gradient-to-r ${cat.accent}`}
                      >
                        <div className="absolute inset-0 shimmer-overlay" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Orbiting skill chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-20 hidden h-72 w-72 md:block"
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary shadow-glow animate-glow-pulse flex items-center justify-center">
            <span className="font-display text-xl font-bold text-primary-foreground">DEV</span>
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            {orbit.map((tech, i) => {
              const angle = (i / orbit.length) * 2 * Math.PI;
              const r = 130;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <div
                  key={tech}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div className="glass flex h-12 w-12 items-center justify-center rounded-full font-mono text-xs font-semibold shadow-elegant">
                    {tech}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
