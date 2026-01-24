"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <div className="relative aspect-square md:aspect-[4/3.5] bg-secondary overflow-hidden rounded-2xl">
            <Image
              src="/profile.jpg"
              alt="Foto do profissional"
              fill
              className="object-cover object-[center_25%] grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
                <span className="w-8 h-px bg-accent" />
                <span>Sobre mim</span>
              </div>

              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Estratégia que conecta,
                <br />
                <span className="text-accent">design que transforma.</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Não acredito em soluções isoladas ou em respostas prontas.
                Acredito em processos bem pensados, conversas honestas e
                decisões sustentáveis, construídas em conjunto. É assim que
                projetos deixam de ser apenas bem executados e passam a
                funcionar de verdade no dia a dia das empresas.
              </p>
              <p>
                Se você valoriza colaboração, clareza e profissionais que somam
                ao time, provavelmente vamos trabalhar bem juntos.
              </p>
              <p>
              Trabalho para somar, organizar e dar clareza, ajudando boas ideias a se transformarem em algo que funcione de verdade no dia a dia.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <span className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-accent">
                  7+
                </span>
                <p className="text-sm text-muted-foreground">
                  Anos de experiência
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-accent">
                  100+
                </span>
                <p className="text-sm text-muted-foreground">
                  Projetos entregues
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-accent">
                  8+
                </span>
                <p className="text-sm text-muted-foreground">Marcas criadas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
