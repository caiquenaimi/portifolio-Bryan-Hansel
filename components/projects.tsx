"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Nome do Projeto 01",
    segment: "B2B • Facilities • Operação Intensiva",
    image: "/project-1.jpg",
    about:
      "[Placeholder: Descreva brevemente o projeto, o cliente e o contexto. O que era a empresa e qual era o momento dela quando vocês começaram a trabalhar juntos.]",
    challenge:
      "[Placeholder: Qual era o principal desafio? Pode ser reposicionamento, falta de identidade, baixa conversão, necessidade de escalar, etc.]",
    approach:
      "[Placeholder: Como você trabalhou? Qual foi sua abordagem estratégica? Destaque o processo e as entregas principais.]",
  },
  {
    id: 2,
    name: "Nome do Projeto 02",
    segment: "Tecnologia • SaaS • Startup",
    image: "/project-2.jpg",
    about:
      "[Placeholder: Descreva brevemente o projeto, o cliente e o contexto. O que era a empresa e qual era o momento dela quando vocês começaram a trabalhar juntos.]",
    challenge:
      "[Placeholder: Qual era o principal desafio? Pode ser reposicionamento, falta de identidade, baixa conversão, necessidade de escalar, etc.]",
    approach:
      "[Placeholder: Como você trabalhou? Qual foi sua abordagem estratégica? Destaque o processo e as entregas principais.]",
  },
  {
    id: 3,
    name: "Nome do Projeto 03",
    segment: "Varejo • E-commerce • Expansão",
    image: "/project-3.jpg",
    about:
      "[Placeholder: Descreva brevemente o projeto, o cliente e o contexto. O que era a empresa e qual era o momento dela quando vocês começaram a trabalhar juntos.]",
    challenge:
      "[Placeholder: Qual era o principal desafio? Pode ser reposicionamento, falta de identidade, baixa conversão, necessidade de escalar, etc.]",
    approach:
      "[Placeholder: Como você trabalhou? Qual foi sua abordagem estratégica? Destaque o processo e as entregas principais.]",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 mb-16"
          >
            <div className="flex items-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              <span>Case Studies</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold tracking-tight">
              Projetos que
              <br />
              <span className="text-accent">contam histórias.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-12"
    >
      {/* Project Image - Full Width */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden group cursor-pointer">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end p-6 md:p-12 lg:p-16">
          <div className="flex items-end justify-between w-full">
            <div className="space-y-2">
              <span className="text-sm text-foreground/70 tracking-widest uppercase">
                {project.segment}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {project.name}
              </h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-accent flex items-center justify-center"
            >
              <ArrowUpRight className="w-8 h-8 text-accent-foreground" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="px-6 md:px-12 lg:px-24">
        <div
          className={`max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12 ${isEven ? "" : "md:flex-row-reverse"}`}
        >
          <div className="space-y-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
              Sobre o Projeto
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.about}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
              O Desafio
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
              Como Trabalhei
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
