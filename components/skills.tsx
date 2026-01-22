"use client";

import { motion } from "framer-motion";

/* ===== Estratégia & Branding ===== */
const strategicSkills = [
  "Branding & Rebranding",
  "Posicionamento de Marca",
  "Arquitetura de Marca",
  "Storytelling Institucional",
  "Direção Criativa aplicada ao negócio",
  "Comunicação B2B",
  "Tradução de linguagem técnica",
  "Clareza e coerência estratégica",
];

/* ===== Design & Comunicação Visual ===== */
const creativeSkills = [
  {
    title: "Identidade Visual Completa",
    desc: "Construção de sistemas visuais consistentes, funcionais e escaláveis.",
  },
  {
    title: "Design Institucional",
    desc: "Comunicação visual alinhada à estratégia e posicionamento da marca.",
  },
  {
    title: "Design para Mídias Sociais",
    desc: "Conteúdo visual estratégico para presença digital contínua.",
  },
  {
    title: "Materiais Impressos",
    desc: "Peças gráficas pensadas para impacto, clareza e acabamento.",
  },
  {
    title: "Materiais Digitais",
    desc: "Apresentações, PDFs e assets digitais com foco em comunicação.",
  },
  {
    title: "Direção de Imagem",
    desc: "Orientação estética e narrativa para fotos e campanhas.",
  },
  {
    title: "Fotografia Institucional",
    desc: "Imagem corporativa profissional alinhada à identidade da marca.",
  },
  {
    title: "Design Editorial",
    desc: "Organização de conteúdo com hierarquia, ritmo e leitura fluida.",
  },
];

/* ===== Ferramentas & Plataformas ===== */
const softwares = [
  { name: "WordPress", category: "Web" },
  { name: "Elementor Pro", category: "Web" },
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Adobe Illustrator", category: "Design" },
  { name: "Adobe InDesign", category: "Design" },
  { name: "Canva", category: "Uso estratégico" },
  { name: "Gestão com equipes", category: "Colaboração" },
  { name: "Gestão com agências", category: "Colaboração" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              <span>Skills & Ferramentas</span>
              <span className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              O que eu
              <br />
              <span className="text-accent">domino.</span>
            </h2>
          </div>

          {/* Estratégia */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
              Estratégia & Branding
            </h3>
            <div className="flex flex-wrap gap-4">
              {strategicSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                  className="px-6 py-4 border border-border bg-background text-foreground font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold transition-colors hover:text-accent-foreground"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design & Comunicação Visual */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
              Design & Comunicação Visual
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {creativeSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative aspect-square border border-border p-6 flex flex-col justify-end overflow-hidden
                  bg-gradient-to-br from-background to-secondary"
                >
                  {/* textura sutil */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "radial-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "4px 4px",
                    }}
                  />

                  {/* overlay accent */}
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10 font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold group-hover:text-accent-foreground transition-colors">
                    {skill.title}
                  </span>

                  <p className="relative z-10 text-xs text-muted-foreground mt-2 leading-snug group-hover:text-accent-foreground/80 transition-colors">
                    {skill.desc}
                  </p>

                  <span className="relative z-10 text-xs text-muted-foreground mt-4 group-hover:text-accent-foreground/60 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ferramentas */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
              Ferramentas & Plataformas
            </h3>
            <div className="relative overflow-hidden py-4">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...softwares, ...softwares].map((software, index) => (
                  <div
                    key={`${software.name}-${index}`}
                    className="flex items-center gap-4 px-8 py-4 bg-background border border-border"
                  >
                    <span className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold">
                      {software.name}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {software.category}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
