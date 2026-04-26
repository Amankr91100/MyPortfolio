import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I write maintainable, scalable code following industry best practices.",
  },
  {
    icon: Lightbulb,
    title: "Curious Mind",
    desc: "Always exploring new tech — from AI to system design.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    desc: "I love building, breaking, and iterating on side projects.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-sm text-primary">// 01. about me</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            A bit about <span className="text-gradient">who I am</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a B.Tech Computer Science student fascinated by how lines of code can
              transform into products that real people use every day. My journey started with
              a single "Hello, World!" and has evolved into a deep passion for{" "}
              <span className="text-foreground">full-stack development</span> and{" "}
              <span className="text-foreground">algorithmic problem solving</span>.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me grinding LeetCode, contributing to
              open-source, or sketching out my next side project. I believe in learning by
              building — and shipping things that matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              {["C++", "JavaScript", "TypeScript", "React", "Node.js", "Python", "DSA", "Git"].map(
                (s) => (
                  <span
                    key={s}
                    className="glass rounded-md px-3 py-1.5 text-muted-foreground"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:col-span-2"
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass rounded-2xl p-5 transition-smooth hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
