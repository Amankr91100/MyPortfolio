import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { useState, type MouseEvent } from "react";

const projects = [
  {
    num: "01",
    title: "DocSphere",
    tagline: "Enterprise RAG Assistant",
    desc: "Engineered a context-aware enterprise knowledge assistant enabling HR and employees to retrieve information from internal documents through semantic search and Top-5 cosine-similarity retrieval. Built a multi-PDF RAG pipeline with OpenAI embeddings, page-level parsing, source citations, and exact-page navigation. Designed 2-role RBAC with JWT, protected REST APIs, an admin dashboard for document management, and persistent conversation handling with context-grounded follow-ups.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI", "RAG", "JWT"],
    github: "https://github.com/Amankr91100/enterprise-ai-assistant",
    demo: "https://enterprise-ai-assistant-frontend-auaz.onrender.com",
    accent: "from-primary via-accent-purple to-accent-blue",
    year: "2026",
    status: "Live",
  },
  {
    num: "02",
    title: "InterviewIQ",
    tagline: "AI Mock Interview Platform",
    desc: "Architected an AI-powered interview preparation platform generating 5 role-specific technical/HR questions with progressive difficulty and 90–150 sec timed voice/text interviews. Implemented AI-driven evaluation across 3 performance metrics with 0–10 scoring, personalized feedback, and question-level analytics. Built a workflow with resume analysis, secure authentication, credit-based access, Razorpay payments, interview history, and PDF reports.",
    tech: ["React", "Node.js", "MongoDB", "OpenRouter", "Firebase", "Razorpay"],
    github: "https://github.com/Amankr91100/interviewIQ",
    demo: "https://interviewiq-client-9k8e.onrender.com/",
    accent: "from-accent-blue via-primary to-accent-purple",
    year: "2026",
    status: "Live",
  },
  {
    num: "03",
    title: "CivicSync",
    tagline: "Smart Workforce Management",
    desc: "Built responsive React.js dashboards for real-time workforce monitoring, task tracking, performance visualization, and geo-tagged field activity analysis. Integrated 8+ RESTful APIs using Node.js and FastAPI for workforce, task, and activity management. Developed PostgreSQL-backed services and applied Scikit-learn models for intelligent task allocation and worker performance scoring.",
    tech: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "Scikit-learn"],
    github: "https://github.com/Amankr91100/CivicSync",
    demo: "https://civicsync-ai.vercel.app/",
    accent: "from-accent-purple via-accent-blue to-primary",
    year: "2025",
    status: "Live",
  },
];

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition-colors duration-500 group-hover:border-border">

        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Top bar: number + status */}
        <div className="relative flex items-center justify-between border-b border-border/50 px-7 py-4">
          <div className="flex items-center gap-3">
            <span className={`font-mono text-xs bg-gradient-to-r ${p.accent} bg-clip-text text-transparent font-bold`}>
              {p.num}
            </span>
            <span className="font-mono text-xs text-muted-foreground">— {p.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">{p.status}</span>
          </div>
        </div>

        {/* Body */}
        <div className="relative p-7">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <motion.h3
                animate={{ y: hovered ? -2 : 0 }}
                transition={{ duration: 0.4 }}
                className="font-display text-3xl font-bold tracking-tight"
              >
                {p.title}
              </motion.h3>
              <p className={`mt-1 text-sm bg-gradient-to-r ${p.accent} bg-clip-text text-transparent font-medium`}>
                {p.tagline}
              </p>
            </div>
            <motion.a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              animate={{ rotate: hovered ? 0 : -45 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-primary-foreground shadow-glow`}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.a>
          </div>

          <p className="mb-6 leading-relaxed text-muted-foreground">{p.desc}</p>

          {/* Tech chips */}
          <div className="mb-6 flex flex-wrap gap-2">
            {p.tech.map((t, idx) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + idx * 0.05 + 0.3 }}
                className="rounded-full border border-border/60 bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-smooth hover:border-primary/50 hover:text-foreground"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between border-t border-border/50 pt-5">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-xs text-muted-foreground transition-smooth hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>source</span>
              <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover/link:w-6" />
            </a>
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-xs text-foreground"
            >
              <span>view case study</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Animated bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className={`absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r ${p.accent}`}
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">03.</span> selected works
              </p>
            </div>
            <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Things I've
              <br />
              <span className="text-gradient animate-gradient">brought to life.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-right">
            A curated collection of products I've designed, engineered and shipped — built with care, obsession and a lot of late-night coffee.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="font-mono text-sm text-muted-foreground">— more on the way —</p>
          <a
            href="https://github.com/Amankr91100"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 backdrop-blur transition-smooth hover:border-primary/50 hover:shadow-glow"
          >
            <Github className="h-4 w-4" />
            <span className="font-mono text-sm">explore all repositories</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
