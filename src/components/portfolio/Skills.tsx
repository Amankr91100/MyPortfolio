import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Skill = { name: string; slug: string; color: string };

const skills: Skill[] = [
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css3", color: "1572B6" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Express", slug: "express", color: "FFFFFF" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "FastAPI", slug: "fastapi", color: "009688" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
  { name: "LangChain", slug: "langchain", color: "1C3C3C" },
  { name: "OpenAI", slug: "openai", color: "FFFFFF" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Postman", slug: "postman", color: "FF6C37" },

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-primary/15 blur-[140px] animate-aurora" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-accent-purple/15 blur-[140px] animate-aurora" />
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
            Technologies & tools I build with — every day.
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (i % 10) * 0.05,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* gradient border */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: `radial-gradient(circle at 50% 0%, #${s.color}80, transparent 70%)`,
                }}
              />

              <div className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-5 backdrop-blur-xl transition-smooth group-hover:border-white/20">
                {/* shimmer sweep */}
                <div className="shimmer-overlay absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* glow halo behind icon */}
                <div
                  className="absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-80 group-hover:scale-125"
                  style={{ background: `#${s.color}` }}
                />

                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex h-14 w-14 items-center justify-center"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                    alt={`${s.name} logo`}
                    loading="lazy"
                    className="h-12 w-12 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                  />
                </motion.div>

                <span className="relative font-display text-sm font-semibold tracking-wide">
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
