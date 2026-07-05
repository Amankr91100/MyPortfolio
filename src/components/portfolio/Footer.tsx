import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/Amankr91100", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amankr91100/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:amankr91100@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 py-14">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-8">
          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-display text-2xl font-bold text-gradient">AK</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground tracking-wider">
              BUILDING THINGS THAT MATTER
            </p>
          </motion.div>

          {/* Social links with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/40 text-muted-foreground backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:text-primary hover:shadow-glow"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom row */}
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {year} <span className="text-gradient">Aman Kumar</span>. Crafted with code & coffee.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-4 py-2 text-xs font-mono text-muted-foreground backdrop-blur-sm transition-smooth hover:border-primary/30 hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-primary/5 blur-[80px]" />
    </footer>
  );
}

