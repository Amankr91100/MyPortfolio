import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "B.Tech, Computer Science & Engineering",
    org: "Your College Name",
    desc: "Currently pursuing my undergraduate degree with a CGPA of 8.5/10. Coursework: Data Structures, Operating Systems, DBMS, Computer Networks, Machine Learning.",
  },
  {
    icon: Briefcase,
    period: "Summer 2024",
    title: "Software Development Intern",
    org: "Tech Startup Pvt. Ltd.",
    desc: "Built and shipped 3 production features for a SaaS dashboard using React and Node.js. Improved API response times by 40% via query optimization.",
  },
  {
    icon: Award,
    period: "2023",
    title: "Hackathon Finalist · Smart India Hackathon",
    org: "Top 10 out of 1200+ teams",
    desc: "Designed an AI-driven crop disease detection app for farmers. Recognized for innovation and real-world impact.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-sm text-primary">// 04. journey</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Experience & <span className="text-gradient">education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-accent-purple to-transparent md:left-1/2" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-0"
              >
                <div className="absolute left-5 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                    <it.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div
                  className={`glass rounded-2xl p-6 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? "md:ml-auto" : ""
                  }`}
                >
                  <p className="font-mono text-xs text-primary">{it.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {it.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
