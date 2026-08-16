import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Layers,
  Bot,
  GitBranch,
  Cloud,
} from "lucide-react";

type Skill = {
  name: string;
  slug?: string;
  color: string;
  initial?: string;
};

type Category = {
  title: string;
  icon: React.ElementType;
  accent: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Languages",
    icon: Code2,
    accent: "from-primary to-accent-blue",
    skills: [
      { name: "C", slug: "c", color: "A8B9CC" },
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
    ],
  },
  {
    title: "Frameworks & Technologies",
    icon: Layers,
    accent: "from-accent-blue to-accent-purple",
    skills: [
      { name: "React.js", slug: "react", color: "61DAFB" },
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Express.js", slug: "express", color: "FFFFFF" },
      { name: "Redux", slug: "redux", color: "764ABC" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Firebase", slug: "firebase", color: "FFCA28" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    title: "Generative AI & Tools",
    icon: Bot,
    accent: "from-accent-purple to-primary",
    skills: [
      { name: "OpenAI API", slug: "openai", color: "FFFFFF" },
      { name: "LangChain", slug: "langchain", color: "1C3C3C" },
      { name: "Prompt Engineering", color: "F59E0B", initial: "PE" },
      { name: "AI Agents", color: "10B981", initial: "AI" },
      { name: "E2B Sandbox", color: "6366F1", initial: "E2" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    accent: "from-primary to-accent-blue",
    skills: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
    ],
  },
  {
    title: "Cloud & Hosting",
    icon: Cloud,
    accent: "from-accent-blue to-primary",
    skills: [
      { name: "Vercel", slug: "vercel", color: "FFFFFF" },
      { name: "Netlify", slug: "netlify", color: "00D4AA" },
      { name: "Render", slug: "render", color: "FFFFFF" },
    ],
  },
];

function SkillCard({ s }: { s: Skill }) {
  const iconSrc = s.slug
    ? `https://cdn.simpleicons.org/${s.slug}/${s.color}`
    : null;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
    >
      {/* glow halo */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: `#${s.color}` }}
      />

      <div className="relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-card/40 p-5 backdrop-blur-xl transition-smooth hover:border-white/20">
        {/* icon */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125"
            style={{ background: `#${s.color}` }}
          />
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={`${s.name} logo`}
              loading="lazy"
              className="relative h-9 w-9 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          ) : (
            <div
              className="relative flex h-10 w-10 items-center justify-center rounded-lg font-display text-sm font-bold text-primary-foreground"
              style={{ background: `#${s.color}` }}
            >
              {s.initial}
            </div>
          )}
        </div>

        <span className="text-center font-display text-sm font-semibold tracking-wide">
          {s.name}
        </span>

        {/* bottom accent bar */}
        <div
          className="absolute inset-x-4 bottom-0 h-px origin-center scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{
            background: `linear-gradient(90deg, transparent, #${s.color}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

function CategoryBlock({ c, i }: { c: Category; i: number }) {
  const Icon = c.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-xl transition-smooth hover:border-border">
        {/* shimmer sweep */}
        <div className="shimmer-overlay absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* header */}
        <div className="mb-5 flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-primary-foreground shadow-glow`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">{c.title}</h3>
            <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${c.accent}`} />
          </div>
        </div>

        {/* skills grid */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
          {c.skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + idx * 0.04 + 0.2 }}
            >
              <SkillCard s={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute left-1/4 top-10 h-80 w-80 rounded-full bg-primary/15 blur-[140px]" />
        <div className="animate-aurora absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-accent-purple/15 blur-[140px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Heading */}
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
            Technologies and tools I use to turn ideas into production-ready systems.
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Category blocks */}
        <div className="space-y-6">
          {categories.map((c, i) => (
            <CategoryBlock key={c.title} c={c} i={i} />
          ))}
        </div>

        {/* marquee tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          — always learning · always building —
        </motion.div>
      </div>
    </section>
  );
}
