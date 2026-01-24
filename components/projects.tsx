"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Delta Facilities",
    segment: "Facilities • Operação intensiva • Comunicação B2B",
    image: "/delta-facilities.jpg",
    about:
      "Empresa de facilities com operação complexa e múltiplos serviços. O trabalho teve foco em organizar a comunicação para refletir a maturidade da gestão e da operação.",
    challenge:
      "Transformar informações dispersas em um discurso claro, confiável e funcional sem simplificar demais uma operação que é, por natureza, complexa.",
    approach:
      "Atuação próxima à liderança, com autonomia para decidir caminhos. Conduzi conversas, organizei dados operacionais e traduzi a visão dos sócios em direção estratégica, conteúdo e design, sempre mantendo coerência entre discurso e execução.",
    result:
      "Mais clareza na comunicação, decisões mais seguras ao longo do processo e uma base de marketing preparada para sustentar crescimento.",
    link: "https://behance.net/SEU-LINK",
  },
  {
    id: 2,
    name: "NeutroCarbon (ex-GDFLOG)",
    segment: "Logística • Sustentabilidade • Rebranding estratégico",
    image: "/neutrocarbon.jpg",
    about:
      "Empresa do setor logístico que passou por uma mudança estratégica para atuar com foco em sustentabilidade e neutralidade de carbono. O projeto surgiu a partir de uma oportunidade clara de mercado, mas com tempo extremamente curto para execução.",
    challenge:
      "Conduzir uma virada completa de posicionamento — marca, discurso e presença digital — em ritmo acelerado, garantindo coerência estratégica e credibilidade suficiente para sustentar conversas com investidores.",
    approach:
      "Atuei liderando o projeto de ponta a ponta, estruturando rapidamente o novo posicionamento e traduzindo essa virada em identidade visual e site. Decisões focadas em clareza, timing e viabilidade, equilibrando velocidade com consistência estratégica.",
    result:
      "A nova marca permitiu um posicionamento competitivo, fortalecendo a narrativa do negócio e contribuindo diretamente para a validação da proposta junto a investidores em um curto espaço de tempo.",
    link: "https://behance.net/SEU-LINK",
  },
  {
    id: 3,
    name: "MedRescue",
    segment: "Serviços críticos • Saúde e emergência • Branding sob pressão",
    image: "/medrescue.jpg",
    about:
      "A MedRescue atua em um setor altamente sensível, onde confiança, clareza e rapidez são essenciais. O projeto envolveu a construção da marca e de sua comunicação em um contexto com múltiplos serviços e públicos distintos.",
    challenge:
      "Conectar diferentes ecossistemas — saúde, resgate, engenharia ocupacional e soluções tecnológicas — em uma única marca, sem gerar ruído. Era fundamental criar uma lógica clara que organizasse a comunicação sem diluir o posicionamento.",
    approach:
      "Estruturei a marca a partir de uma arquitetura visual e conceitual, definindo papéis claros para cada ecossistema e diretrizes de uso. O foco foi um sistema simples de entender, fácil de aplicar e consistente em todos os pontos de contato.",
    result:
      "Uma marca organizada e coerente, capaz de comunicar serviços complexos de forma clara, sem perder identidade ou confiança — tanto em ambientes institucionais quanto operacionais.",
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const baseImage = project.image.replace(".jpg", "");
  const image2 = `${baseImage}2.jpg`;
  const image3 = `${baseImage}3.jpg`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* COLUNA ESQUERDA — IMAGENS */}
        <div className="space-y-6">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={image2}
                alt={`${project.name} - imagem 2`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={image3}
                alt={`${project.name} - imagem 3`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — TEXTO */}
        <div className="flex flex-col h-full">
          {/* Header fixo no topo */}
          <div className="space-y-4 mb-10">
            <span className="text-sm tracking-widest uppercase text-muted-foreground">
              O projeto
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-accent">
              {project.name}
            </h3>
            <p className="text-sm tracking-widest uppercase text-foreground/70">
              {project.segment}
            </p>
          </div>

          {/* O GRID COM ALTURA TOTAL: 
      'grid-rows-2' ou 'flex-1 grid' garante que ele ocupe o espaço até o fim das imagens */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            <div className="space-y-3">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
                Sobre o Projeto
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.about}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
                O Desafio
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
                Como Trabalhei
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.approach}
              </p>
            </div>

            {/* O RESULTADO DENTRO DO GRID E ALINHADO NA BASE:
        'self-end' faz ele colar no fundo da célula, alinhando com a imagem. */}
            <div className="self-end p-6 bg-accent/5 rounded-2xl border border-accent/10">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent mb-2">
                O Resultado
              </h4>
              <p className="text-foreground leading-relaxed text-sm font-medium">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
