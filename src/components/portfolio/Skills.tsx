import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Skill = {
  name: string;
  slug: string;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS", slug: "css", color: "1572B6" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Express", slug: "express", color: "FFFFFF" },
  { name: "FastAPI", slug: "fastapi", color: "009688" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
  { name: "LangChain", slug: "langchain", color: "1C3C3C" },
  { name: "OpenAI", slug: "openai", color: "FFFFFF" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Postman", slug: "postman", color: "FF6C37" },
];

function SkillCard({ s, i }: { s: Skill; i: number }) {
  const iconSrc = `https://cdn.simpleicons.org/${s.slug}/${s.color}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: i * 0.03 + 0.1,
        duration: 0.4,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.16] hover:bg-card/80">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <img
            src={iconSrc}
            alt={`${s.name} logo`}
            loading="lazy"
            className="relative h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <span className="text-center font-display text-sm font-medium tracking-wide text-foreground/90">
          {s.name}
        </span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

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
            Technologies and tools I use to turn ideas into production-ready systems.
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="rounded-3xl border border-white/[0.08] bg-card/40 p-6 backdrop-blur-xl"
        >
          <div className="relative grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
            {skills.map((s, i) => (
              <SkillCard key={s.name} s={s} i={i} />
            ))}
          </div>
        </motion.div>

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
