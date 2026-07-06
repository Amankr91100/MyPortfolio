import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Code2, Download, Mail, Sparkles, Zap } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import amanProfile from "@/assets/aman-profile.png.asset.json";

const ROLES = [
  "Aspiring Software Developer",
  "Problem Solver",
  "Full-Stack Enthusiast",
  "DSA Practitioner",
];

const TECH_TICKER = [
  "React", "TypeScript", "Node.js", "Tailwind", "Python",
  "C++", "MongoDB", "Express", "Git", "JavaScript",
];

const FLOATING_BADGES = [
  { label: "{ }", x: "8%", y: "22%", delay: 0 },
  { label: "</>", x: "88%", y: "18%", delay: 1.2 },
  { label: "λ", x: "6%", y: "68%", delay: 2.4 },
  { label: "⚡", x: "92%", y: "62%", delay: 0.6 },
  { label: "#!", x: "12%", y: "44%", delay: 1.8 },
  { label: "→", x: "90%", y: "40%", delay: 3 },
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
  const sectionRef = useRef<HTMLElement | null>(null);

  // Parallax cursor tracking
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const blob1X = useTransform(sx, (v) => v * 30);
  const blob1Y = useTransform(sy, (v) => v * 30);
  const blob2X = useTransform(sx, (v) => v * -40);
  const blob2Y = useTransform(sy, (v) => v * -40);
  const tiltX = useTransform(sy, (v) => v * -8);
  const tiltY = useTransform(sx, (v) => v * 8);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const headline = "Aman Kumar".split("");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero pt-24"
    >
      {/* Tech grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      {/* Aurora blobs — parallax */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] animate-aurora"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y, animationDelay: "3s" }}
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent-purple/25 blur-[120px] animate-aurora"
      />
      <motion.div
        style={{ x: blob1X, y: blob2Y, animationDelay: "6s" }}
        className="pointer-events-none absolute left-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-accent-blue/25 blur-[120px] animate-aurora"
      />

      {/* Floating code badges */}
      {FLOATING_BADGES.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0.4, 0.7],
            scale: 1,
            y: [0, -14, 0, 14, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: b.delay },
            scale: { duration: 0.8, delay: b.delay },
            y: { duration: 8, delay: b.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ left: b.x, top: b.y }}
          className="pointer-events-none absolute hidden font-mono text-2xl text-primary/60 md:block"
        >
          {b.label}
        </motion.div>
      ))}

      <motion.div
        style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
        className="container relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Avatar with rotating conic ring + orbiting dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
          className="mx-auto mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-glow-pulse" />
            {/* Orbit ring */}
            <div className="absolute -inset-6 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: "20s" }}>
              <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow" />
              <div className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-purple" />
            </div>
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
                  src={amanProfile.url}
                  alt="Portrait of Aman Kumar, B.Tech CSE student and developer"
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

        {/* Headline with per-letter reveal */}
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mr-3 inline-block"
          >
            Hi, I'm
          </motion.span>
          <span className="relative inline-block">
            <span className="text-gradient animate-gradient">
              {headline.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.06,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -inset-2 -z-10 origin-left bg-gradient-primary opacity-20 blur-2xl"
            />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
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
          transition={{ duration: 0.6, delay: 1.25 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Passionate about building elegant software, solving real-world problems with code,
          and turning ideas into impactful digital experiences. Currently exploring the
          intersection of web development and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
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
            download="Aman-Kumar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-smooth hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.55 }}
          className="mt-8"
        >
          <SocialLinks />
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur"
        >
          {[
            { k: "15+", v: "Projects", icon: Code2 },
            { k: "100+", v: "DSA Solved", icon: Zap },
            { k: "8.0", v: "CGPA", icon: Sparkles },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              whileHover={{ y: -4 }}
              className="group relative px-4 py-4"
            >
              <s.icon className="mx-auto mb-1 h-3.5 w-3.5 text-primary/70 transition-colors group-hover:text-primary" />
              <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
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
      </motion.div>

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
