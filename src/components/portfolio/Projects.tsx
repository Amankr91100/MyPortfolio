import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DevConnect",
    desc: "A full-stack social platform for developers to share projects, follow each other and discover open-source opportunities.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
    gradient: "from-primary/30 to-accent-purple/30",
  },
  {
    title: "AlgoVisualizer",
    desc: "Interactive web app that visualizes sorting and pathfinding algorithms in real-time. Built to help students learn DSA.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
    gradient: "from-accent-blue/30 to-primary/30",
  },
  {
    title: "TaskFlow AI",
    desc: "AI-powered task manager that breaks goals into subtasks, schedules them and gives daily summaries via email.",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    github: "#",
    demo: "#",
    gradient: "from-accent-purple/30 to-accent-blue/30",
  },
  {
    title: "Campus Hub",
    desc: "Centralized portal for college students — notes sharing, event calendar, and a peer-to-peer doubt-solving forum.",
    tech: ["React", "Express", "MySQL"],
    github: "#",
    demo: "#",
    gradient: "from-primary/30 to-accent-blue/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-sm text-primary">// 03. projects</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur transition-smooth hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow"
            >
              <div
                className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.gradient} opacity-50 blur-3xl transition-smooth group-hover:opacity-90`}
              />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold transition-smooth group-hover:text-gradient">
                    {p.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      aria-label="GitHub"
                      className="rounded-lg p-2 text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={p.demo}
                      aria-label="Live demo"
                      className="rounded-lg p-2 text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mb-5 leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
