import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Briefcase, GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "B.Tech, Computer Science & Engineering",
    org: "Your College Name",
    desc: "Currently pursuing my undergraduate degree with a CGPA of 8.5/10. Coursework: Data Structures, Operating Systems, DBMS, Computer Networks, Machine Learning.",
    tag: "education",
    accent: "from-primary to-accent-purple",
    stats: [
      { k: "CGPA", v: "8.5" },
      { k: "Year", v: "3rd" },
    ],
  },
  {
    icon: Briefcase,
    period: "Summer 2024",
    title: "Software Development Intern",
    org: "Tech Startup Pvt. Ltd.",
    desc: "Built and shipped 3 production features for a SaaS dashboard using React and Node.js. Improved API response times by 40% via query optimization.",
    tag: "internship",
    accent: "from-accent-blue to-primary",
    stats: [
      { k: "Shipped", v: "3" },
      { k: "Perf", v: "+40%" },
    ],
  },
  {
    icon: Award,
    period: "2023",
    title: "Hackathon Finalist · Smart India Hackathon",
    org: "Top 10 out of 1200+ teams",
    desc: "Designed an AI-driven crop disease detection app for farmers. Recognized for innovation and real-world impact.",
    tag: "achievement",
    accent: "from-accent-purple to-accent-blue",
    stats: [
      { k: "Rank", v: "Top 10" },
      { k: "Teams", v: "1200+" },
    ],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-[300px] w-[300px] rounded-full bg-accent-purple/10 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              04 · the journey
            </span>
          </motion.div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
            Chapters of <span className="text-gradient animate-gradient">growth</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A timeline of milestones — every line of code, every late night, every lesson
            shaped the developer I'm becoming.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Static rail */}
          <div className="absolute left-6 top-0 h-full w-px bg-border/40 md:left-1/2 md:-translate-x-1/2" />
          {/* Animated progress rail */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-accent-purple to-accent-blue shadow-[0_0_20px_var(--primary)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {items.map((it, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative pl-20 md:pl-0"
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 + 0.2, type: "spring" }}
                    className="absolute left-6 top-6 -translate-x-1/2 md:left-1/2"
                  >
                    <div className="relative">
                      {/* pulsing ring */}
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${it.accent} shadow-glow ring-4 ring-background`}
                      >
                        <it.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div
                    className={`md:w-[calc(50%-3rem)] ${
                      isRight ? "md:ml-auto" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative"
                    >
                      {/* gradient border glow */}
                      <div
                        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${it.accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60`}
                      />
                      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-7 backdrop-blur-xl">
                        {/* corner decoration */}
                        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150" />

                        {/* header row */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                              {it.period}
                            </p>
                          </div>
                          <span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {it.tag}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary md:text-2xl">
                          {it.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-foreground/70">
                          {it.org}
                          <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {it.desc}
                        </p>

                        {/* stats */}
                        <div className="mt-5 flex gap-3 border-t border-border/50 pt-4">
                          {it.stats.map((s) => (
                            <div
                              key={s.k}
                              className="flex-1 rounded-lg border border-border/40 bg-background/30 px-3 py-2"
                            >
                              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                {s.k}
                              </p>
                              <p className="font-display text-lg font-bold text-gradient">
                                {s.v}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* bottom accent */}
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r ${it.accent} transition-transform duration-500 group-hover:scale-x-100`}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Endpoint */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mt-16 flex justify-center"
          >
            <div className="absolute left-6 top-0 -translate-x-1/2 md:left-1/2">
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-purple/40" />
                <div className="relative h-4 w-4 rounded-full bg-gradient-primary shadow-glow" />
              </div>
            </div>
            <div className="ml-20 md:ml-0 md:mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                · to be continued ·
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
