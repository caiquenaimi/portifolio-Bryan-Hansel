"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Manifesto() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/manifesto-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
                <span className="w-8 h-px bg-accent" />
                <span>Manifesto</span>
              </div>

              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Marcas não são
                <br />
                apenas visuais.
                <br />
                <span className="text-accent">São sistemas.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                [Placeholder: Escreva seu manifesto aqui. O que você acredita
                sobre branding? Por que marcas importam? Qual é a sua filosofia
                de trabalho?]
              </p>
              <p>
                [Placeholder: Continue desenvolvendo seu pensamento. Fale sobre
                a importância da estratégia antes do design, sobre entender o
                negócio antes de criar, sobre o impacto real que uma marca bem
                construída pode ter.]
              </p>
              <p>
                [Placeholder: Conclua com uma frase forte que resuma sua visão.
                Algo memorável que conecte com o leitor e deixe uma impressão
                duradoura.]
              </p>

              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-accent" />
                  <span className="font-[family-name:var(--font-heading)] font-bold text-foreground">
                    [Seu Nome]
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
