import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 88 },
      { name: "Node.js / Express", level: 80 },
      { name: "HTML / CSS / Tailwind", level: 92 },
      { name: "MongoDB / SQL", level: 72 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Linux / Bash", level: 70 },
      { name: "Docker / CI-CD", level: 60 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-sm text-primary">// 02. skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            My <span className="text-gradient">technical toolkit</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 transition-smooth hover:shadow-glow"
            >
              <h3 className="mb-6 font-display text-lg font-semibold">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
