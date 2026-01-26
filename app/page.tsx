import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Manifesto } from "@/components/manifesto";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Freelas } from "@/components/freelas";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Manifesto />
      <Freelas />
      <Contact />
      <Footer />
    </main>
  );
}
