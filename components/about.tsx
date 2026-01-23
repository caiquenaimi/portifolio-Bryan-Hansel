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
  /* 1. Alinha o container da foto com a primeira linha de texto */
  className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start"
>
  {/* 2. Reduzi drasticamente a altura (aspect-video invertido ou square) para cortar a camiseta */}
  <div className="relative aspect-square md:aspect-[4/3.5] bg-secondary overflow-hidden rounded-2xl">
    <Image
      src="/profile.jpg"
      alt="Foto do profissional"
      fill
      /* 3. O ajuste "object-[center_25%]" sobe a foto, escondendo o teto e cortando a camiseta */
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
                [Placeholder: Escreva aqui uma breve introdução pessoal.
                Destaque sua trajetória, valores e o que te move como
                profissional. Seja direto e humano.]
              </p>
              <p>
                [Placeholder: Fale sobre sua visão de negócio e como você
                entrega valor para as empresas. Mencione sua experiência com B2B
                e os resultados que já alcançou.]
              </p>
              <p>
                [Placeholder: Conclua com o que te diferencia — sua abordagem
                estratégica, sua capacidade de ver o todo, ou sua experiência
                multidisciplinar.]
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
