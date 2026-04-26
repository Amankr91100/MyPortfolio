import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import profileImg from "@/assets/profile.jpg";

const ROLES = [
  "Aspiring Software Developer",
  "Problem Solver",
  "Full-Stack Enthusiast",
  "DSA Practitioner",
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-gradient animate-gradient">Your Name</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 flex items-center justify-center font-mono text-base md:text-xl"
        >
          <span className="text-muted-foreground">B.Tech CSE Student</span>
          <span className="mx-3 text-primary">|</span>
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
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:shadow-glow hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-smooth hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </motion.div>
      </div>

      {/* floating orbs */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute right-10 bottom-1/4 h-96 w-96 rounded-full bg-accent-blue/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
