"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Delta Facilities",
    segment: "Facilities • Operação intensiva • Comunicação B2B",
    image: "/delta-facilities.jpg",
    about:
      "A Delta Facilities atua no segmento de facilities, com operações complexas, múltiplos serviços e alta dependência de processos bem definidos. O projeto teve como foco traduzir essa estrutura operacional em uma comunicação clara, confiável e alinhada à visão de gestão da empresa.",
    challenge:
      "Organizar informações dispersas, alinhar o discurso institucional e construir uma presença digital que refletisse a maturidade da operação, sem perder clareza para o público final.",
    approach:
      "Atuei de forma próxima à liderança e às equipes internas, conduzindo conversas, levantando dados operacionais e transformando tudo isso em storytelling, arquitetura de conteúdo e design, garantindo coerência entre estratégia, comunicação e execução.",
    link: "https://behance.net/SEU-LINK",
  },
  {
    id: 2,
    name: "NeutroCarbon (ex-GDFLOG)",
    segment: "Logística • Sustentabilidade • Rebranding estratégico",
    image: "/neutrocarbon.jpg",
    about:
      "A GDFLOG era uma empresa de transporte tradicional que decidiu reposicionar sua atuação para um discurso sólido de sustentabilidade e neutralidade de carbono, dando origem à NeutroCarbon.",
    challenge:
      "Realizar um rebranding completo — nome, identidade, discurso e site — sem cair em soluções superficiais ou oportunistas, garantindo coerência entre propósito, operação e comunicação.",
    approach:
      "Conduzi o entendimento profundo do negócio, defini posicionamento, desenvolvi a identidade visual e o site institucional, sempre conectando estratégia e execução.",
    link: "https://behance.net/SEU-LINK",
  },
  {
    id: 3,
    name: "MedRescue",
    segment: "Serviços críticos • Saúde e emergência • Branding sob pressão",
    image: "/medrescue.jpg",
    about:
      "A MedRescue atua em um setor altamente sensível, onde confiança, credibilidade e clareza são indispensáveis. A empresa precisava estruturar toda a sua marca em um curto espaço de tempo.",
    challenge:
      "Criar identidade, posicionamento e materiais institucionais completos em cerca de um mês, mantendo consistência e qualidade mesmo sob forte pressão de prazo.",
    approach:
      "Organizei rapidamente prioridades, defini decisões críticas e conduzi o processo de forma objetiva, equilibrando estratégia e execução para garantir uma base sólida desde o início.",
    link: "https://behance.net/SEU-LINK",
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
