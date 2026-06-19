import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Lightbulb, Rocket, Sparkles, Terminal, Zap } from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Maintainable, scalable architectures following industry best practices.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Lightbulb,
    title: "Curious Mind",
    desc: "Always exploring — from AI agents to distributed system design.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    desc: "I love building, breaking, and iterating on side projects.",
    accent: "from-cyan-400 to-blue-500",
  },
];

const stats = [
  { value: "100+", label: "DSA Solved" },
  { value: "15+", label: "Projects" },
  { value: "8.0", label: "CGPA" },
  { value: "OSS", label: "Contributor" },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 15 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 15 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32">
      {/* decorative glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-[120px] animate-aurora" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent-blue/20 blur-[120px] animate-aurora" />
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
            <span className="text-primary">// 01. about me</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            A bit about <span className="text-gradient animate-gradient">who I am</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Left: Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <TiltCard className="glass relative overflow-hidden rounded-2xl border border-white/10 shadow-elegant">
              {/* terminal header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">~/about-me.sh</span>
                <Terminal className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed md:p-8">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> whoami
                </p>
                <p className="mt-2 text-foreground">
                  → A B.Tech CSE student fascinated by how lines of code transform into
                  products real people use every day. My journey started with a single{" "}
                  <span className="text-primary">"Hello, World!"</span> and evolved into a
                  passion for <span className="text-gradient font-semibold">full-stack development</span>{" "}
                  and <span className="text-gradient font-semibold">algorithmic problem solving</span>.
                </p>

                <p className="mt-5 text-muted-foreground">
                  <span className="text-primary">$</span> cat passions.txt
                </p>
                <p className="mt-2 text-foreground">
                  → When I'm not coding, you'll find me grinding LeetCode, contributing to
                  open-source, or sketching out my next side project. I believe in learning
                  by building — and shipping things that matter.
                </p>

                <p className="mt-5 flex items-center text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="ml-2">_</span>
                  <span className="ml-0.5 inline-block h-4 w-2 bg-primary cursor-blink" />
                </p>
              </div>

              {/* shimmer */}
              <div className="shimmer-overlay absolute inset-0" />
            </TiltCard>

            {/* Stats strip */}
            <div className="mt-6 grid grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass group relative overflow-hidden rounded-xl p-3 text-center transition-smooth hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="font-display text-xl font-bold text-gradient md:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 md:col-span-2"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass group relative overflow-hidden rounded-2xl p-5 transition-smooth hover:shadow-glow"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* gradient accent bar */}
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${h.accent}`} />
                {/* hover glow */}
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${h.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />

                <div className="relative flex items-start gap-4">
                  <div className={`relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${h.accent} text-white shadow-lg`}>
                    <h.icon className="h-5 w-5" />
                    <Zap className="absolute -right-1 -top-1 h-3 w-3 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
