"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, GitBranch, PenTool } from "lucide-react";

/* ===== Inteligência Artificial ===== */
const aiSkills = [
  { name: "Geração de Imagens", icon: Sparkles, desc: "Direção de arte e criação visual generativa." },
  { name: "Automação de Tarefas", icon: Zap, desc: "Otimização de processos e ganhos de eficiência." },
  { name: "Criação de Fluxos", icon: GitBranch, desc: "Arquitetura de sistemas inteligentes e lógica de IA." },
  { name: "Criação de Conteúdo", icon: PenTool, desc: "Estratégia e escala na produção de ativos digitais." },
];

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
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16 md:space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-4 md:space-y-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground text-[10px] md:text-sm tracking-widest uppercase">
              <span className="w-6 md:w-8 h-px bg-accent" />
              <span>Skills & Ferramentas</span>
              <span className="w-6 md:w-8 h-px bg-accent" />
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              O que eu <br />
              <span className="text-accent">domino.</span>
            </h2>
          </div>

          {/* GRID DE IA - Ajustado para 2 colunas no mobile */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-widest uppercase text-muted-foreground">Inteligência Artificial</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {aiSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 md:p-8 bg-background border border-border rounded-xl md:rounded-2xl hover:border-accent/50 transition-all group"
                >
                  <skill.icon className="w-6 h-6 md:w-10 md:h-10 text-accent mb-3 md:mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm md:text-xl font-bold mb-1 md:mb-3">{skill.name}</h3>
                  <p className="text-muted-foreground text-[10px] md:text-sm leading-tight md:leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Estratégia */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-widest uppercase text-muted-foreground">Estratégia & Branding</h3>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {strategicSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                  className="px-3 py-2 md:px-5 md:py-3 border border-border bg-background text-foreground font-[family-name:var(--font-heading)] text-xs md:text-2xl font-bold transition-colors hover:text-accent-foreground"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design & Comunicação Visual - Ajustado para 2 colunas no mobile */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-widest uppercase text-muted-foreground">Design & Comunicação Visual</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {creativeSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ y: -8 }}
                  className="group relative aspect-[4/5] md:aspect-square border border-border p-3 md:p-6 flex flex-col justify-end overflow-hidden bg-gradient-to-br from-background to-secondary"
                >
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 font-[family-name:var(--font-heading)] text-xs md:text-xl font-bold group-hover:text-accent-foreground transition-colors">{skill.title}</span>
                  <p className="relative z-10 text-[10px] md:text-sm text-muted-foreground mt-1 md:mt-2 leading-tight group-hover:text-accent-foreground/80 transition-colors line-clamp-2 md:line-clamp-none">{skill.desc}</p>
                  <span className="relative z-10 text-[8px] md:text-xs text-muted-foreground mt-2 md:mt-4 group-hover:text-accent-foreground/60 transition-colors">{String(index + 1).padStart(2, "0")}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ferramentas */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-widest uppercase text-muted-foreground">Ferramentas & Plataformas</h3>
            <div className="relative overflow-hidden py-4">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex gap-4 md:gap-8 whitespace-nowrap"
              >
                {[...softwares, ...softwares].map((software, index) => (
                  <div key={`${software.name}-${index}`} className="flex items-center gap-2 md:gap-4 px-4 py-2 md:px-6 md:py-4 bg-background border border-border">
                    <span className="font-[family-name:var(--font-heading)] text-sm md:text-3xl font-bold">{software.name}</span>
                    <span className="text-[8px] md:text-xs text-muted-foreground uppercase tracking-wider">{software.category}</span>
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