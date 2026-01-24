"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
            <span className="w-12 h-px bg-accent" />
            <span>Marketing + Design + Branding</span>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance">
            <span className="text-foreground">Conecto visão</span>
            <br />
            <span className="text-foreground">e execução</span>
            <br />
            <span className="text-foreground">para dar clareza a</span>
            <br />
            <span className="text-accent">projetos.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Trabalho ao lado de equipes, gestores e lideranças quando o cenário
            ainda está em construção, estratégias que precisam ganhar forma,
            comunicação que precisa fazer sentido e decisões que exigem mais
            contexto do que pressa. Meu papel é organizar informações, conectar
            pontos e ajudar boas ideias a se tornarem executáveis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projetos"
              onClick={(e) => handleScroll(e, "projetos")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contato"
              onClick={(e) => handleScroll(e, "contato")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary transition-colors cursor-pointer"
            >
              Entrar em Contato
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}