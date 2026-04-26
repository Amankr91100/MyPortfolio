import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80, "Name is too long"),
  email: z.string().trim().email("Invalid email").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const e: Record<string, string> = {};
      result.error.issues.forEach((iss) => (e[iss.path[0] as string] = iss.message));
      setErrors(e);
      return;
    }
    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-sm text-primary">// 05. contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to internships, collaborations, or just a friendly chat about tech. Drop me a
            message — I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:col-span-2"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "yourname@email.com",
                href: "mailto:yourname@email.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/yourname",
                href: "https://linkedin.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/yourname",
                href: "https://github.com",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="glass space-y-4 rounded-2xl p-6 md:col-span-3"
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-smooth focus:border-primary"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={200}
                className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-smooth focus:border-primary"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Tell me about your project, idea or just say hi..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-smooth focus:border-primary"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-smooth hover:shadow-glow disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
