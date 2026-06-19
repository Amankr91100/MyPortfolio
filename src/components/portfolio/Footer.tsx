import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          &copy; {year} <span className="text-gradient">Aman Kumar</span>. Crafted with code & coffee.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Amankr91100", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/amankr91100/", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Mail, href: "mailto:amankr91100@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-muted-foreground transition-smooth hover:-translate-y-0.5 hover:text-primary"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
