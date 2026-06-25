import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { useState, type MouseEvent } from "react";

const projects = [
  {
    num: "01",
    title: "CivicSync",
    tagline: "AI Civic Intelligence",
    desc: "Developed responsive admin dashboards during a national-level hackathon, enabling real-time tracking and visualization of civic workforce activities — improving monitoring efficiency by 30%. Integrated 8+ RESTful APIs and collaborated on an AI-driven workforce management platform using Scikit-learn for intelligent task allocation.",
    tech: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "Scikit-learn"],
    github: "https://github.com/Amankr91100/CivicSync",
    demo: "https://civicsync-ai.vercel.app/",
    accent: "from-primary via-accent-purple to-accent-blue",
    year: "2025",
    status: "Live",
  },
  {
    num: "02",
    title: "DocQuery AI",
    tagline: "RAG-Based Document Chatbot",
    desc: "Engineered a RAG-based AI chatbot delivering accurate, context-aware responses with response latency under 1 second. Built a document ingestion pipeline using chunking and embeddings, improving retrieval accuracy by 30% through prompt optimization and semantic search.",
    tech: ["LangChain", "OpenAI API", "FAISS", "Pinecone"],
    github: "https://github.com/Amankr91100/DocQuery-AI",
    demo: "https://doc-query-ai-zeta.vercel.app/",
    accent: "from-accent-blue via-primary to-accent-purple",
    year: "2025",
    status: "Live",
  },
  {
    num: "03",
    title: "Readify",
    tagline: "AI Smart Reading Platform",
    desc: "Architected an AI-powered reading platform with a bookshelf-style UI to upload, organize, and interact with digital books. Integrated LLM-driven summarization, key insights, and 'Chat with Book' (RAG Q&A) — reducing reading time by 40%. Scalable backend with Supabase + PostgreSQL, semantic search, and real-time reading progress tracking.",
    tech: ["React", "Supabase", "PostgreSQL", "OpenAI API"],
    github: "https://github.com/Amankr91100/Readify-AI",
    demo: "https://readify-ai-three.vercel.app/",
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
              className="group/link flex items-center gap-2 font-mono text-xs text-muted-foreground transition-smooth hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>source</span>
              <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover/link:w-6" />
            </a>
            <a
              href={p.demo}
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
            href="#"
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
