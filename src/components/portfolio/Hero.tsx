import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Mail, Sparkles } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import profileImg from "@/assets/profile.jpg";

const ROLES = [
  "Aspiring Software Developer",
  "Problem Solver",
  "Full-Stack Enthusiast",
  "DSA Practitioner",
];

const TECH_TICKER = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind", "Python",
  "C++", "MongoDB", "PostgreSQL", "Docker", "Git", "AWS",
];

function useTyping(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setIdx((idx + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero pt-24"
    >
      {/* Tech grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] animate-aurora" />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent-purple/25 blur-[120px] animate-aurora"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="pointer-events-none absolute left-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-accent-blue/25 blur-[120px] animate-aurora"
        style={{ animationDelay: "6s" }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Avatar with rotating conic ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
          className="mx-auto mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-glow-pulse" />
            <div className="relative h-40 w-40 md:h-48 md:w-48">
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.65 0.22 270), oklch(0.72 0.2 295), oklch(0.7 0.18 240), oklch(0.65 0.22 270))",
                }}
              />
              <div className="absolute inset-[3px] overflow-hidden rounded-full bg-card">
                <img
                  src={profileImg}
                  alt="Portrait of Your Name, B.Tech CSE student and developer"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/40 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <Sparkles className="h-3 w-3 text-primary" />
          Available for internships · Summer 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Hi, I'm{" "}
          <span className="text-gradient animate-gradient relative inline-block">
            Your Name
            <span className="absolute -inset-2 -z-10 bg-gradient-primary opacity-20 blur-2xl" />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 font-mono text-base md:text-xl"
        >
          <span className="text-muted-foreground">B.Tech CSE Student</span>
          <span className="text-primary">|</span>
          <span className="min-h-[1.5em] text-foreground">
            {typed}
            <span className="cursor-blink ml-0.5 text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Passionate about building elegant software, solving real-world problems with code,
          and turning ideas into impactful digital experiences. Currently exploring the
          intersection of web development and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-smooth hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <SocialLinks />
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/30 backdrop-blur"
        >
          {[
            { k: "15+", v: "Projects" },
            { k: "300+", v: "DSA Solved" },
            { k: "8.5", v: "CGPA" },
          ].map((s) => (
            <div key={s.v} className="px-4 py-4">
              <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <a
          href="#about"
          aria-label="Scroll to about"
          className="mt-12 inline-flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <ChevronDown className="h-4 w-4 animate-scroll-hint" />
        </a>
      </div>

      {/* Tech marquee */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-border/50 bg-background/40 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee gap-12 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[...TECH_TICKER, ...TECH_TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="h-1 w-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
