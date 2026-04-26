import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — B.Tech CSE Student & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a B.Tech Computer Science student & aspiring software developer. Projects, skills and experience in full-stack web development and DSA.",
      },
      { property: "og:title", content: "Your Name — Developer Portfolio" },
      {
        property: "og:description",
        content: "B.Tech CSE student building modern web apps and solving problems with code.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
