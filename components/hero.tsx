"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
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
            <span className="text-foreground">Construo marcas</span>
            <br />
            <span className="text-foreground">que geram</span>
            <br />
            <span className="text-accent">resultados.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Profissional pleno de estratégia, design e branding. Atuo de ponta
            a ponta — da estratégia à execução — transformando negócios em
            marcas memoráveis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary transition-colors"
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
