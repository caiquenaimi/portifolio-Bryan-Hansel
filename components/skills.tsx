"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, GitBranch, PenTool, Layout, Box, Layers, Users, MousePointer2 } from "lucide-react";

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
  { title: "Identidade Visual Completa", desc: "Sistemas visuais consistentes, funcionais e escaláveis." },
  { title: "Design Institucional", desc: "Comunicação visual alinhada à estratégia da marca." },
  { title: "Design para Mídias Sociais", desc: "Conteúdo visual estratégico para presença digital." },
  { title: "Materiais Impressos", desc: "Peças gráficas pensadas para impacto e acabamento." },
  { title: "Materiais Digitais", desc: "Apresentações e assets digitais com foco em performance." },
  { title: "Direção de Imagem", desc: "Orientação estética e narrativa para fotos e campanhas." },
  { title: "Fotografia Institucional", desc: "Imagem corporativa profissional alinhada à marca." },
  { title: "Design Editorial", desc: "Organização de conteúdo com hierarquia e leitura fluida." },
];

/* ===== Ferramentas & Plataformas (TODAS RECUPERADAS) ===== */
const softwares = [
  { name: "WordPress", category: "Web", icon: Layout },
  { name: "Elementor Pro", category: "Web", icon: MousePointer2 },
  { name: "Adobe Photoshop", category: "Design", icon: Layers },
  { name: "Adobe Illustrator", category: "Design", icon: Layers },
  { name: "Adobe InDesign", category: "Design", icon: Layers },
  { name: "Canva", category: "Uso estratégico", icon: PenTool },
  { name: "Gestão com equipes", category: "Colaboração", icon: Users },
  { name: "Gestão com agências", category: "Colaboração", icon: Users },
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
          className="space-y-16 md:space-y-24"
        >
          {/* Header principal */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground text-[10px] md:text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              <span>Expertise & Inovação</span>
              <span className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              O que eu <br /> <span className="text-accent">domino.</span>
            </h2>
          </div>

          {/* GRID DE IA */}
          <div className="space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-[0.3em] uppercase text-muted-foreground">Inteligência Artificial</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {aiSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-5 md:p-8 bg-background border border-border rounded-xl md:rounded-2xl hover:border-accent/50 transition-all group"
                >
                  <skill.icon className="w-6 h-6 md:w-10 md:h-10 text-accent mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm md:text-xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-[10px] md:text-sm leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ESTRATÉGIA */}
          <div className="space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-[0.3em] uppercase text-muted-foreground">Estratégia & Branding</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {strategicSkills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                  className="px-4 py-3 md:px-6 md:py-4 border border-border bg-background font-[family-name:var(--font-heading)] text-xs md:text-2xl font-bold transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* DESIGN & COMUNICAÇÃO VISUAL */}
          <div className="space-y-8">
            <h3 className="text-[10px] md:text-sm tracking-[0.3em] uppercase text-muted-foreground">Design & Comunicação Visual</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {creativeSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ y: -8 }}
                  className="group relative aspect-[4/5] md:aspect-square border border-border p-4 md:p-6 flex flex-col justify-end overflow-hidden bg-gradient-to-br from-background to-secondary"
                >
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 font-[family-name:var(--font-heading)] text-xs md:text-xl font-bold group-hover:text-accent-foreground transition-colors">{skill.title}</span>
                  <p className="relative z-10 text-[10px] md:text-sm text-muted-foreground mt-1 md:mt-2 leading-tight group-hover:text-accent-foreground/80 transition-colors line-clamp-2 md:line-clamp-none">{skill.desc}</p>
                  <span className="relative z-10 text-[8px] md:text-xs text-muted-foreground mt-3 md:mt-4 group-hover:text-accent-foreground/60 transition-colors">{String(index + 1).padStart(2, "0")}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FERRAMENTAS & PLATAFORMAS (TODAS AQUI AGORA) */}
          <div className="space-y-8 pb-10">
            <h3 className="text-[10px] md:text-sm tracking-[0.3em] uppercase text-muted-foreground">Ecossistema de Ferramentas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {softwares.map((sw, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ borderColor: "var(--accent)" }}
                  className="group flex flex-col gap-4 p-4 md:p-6 bg-background/40 border border-border/50 backdrop-blur-sm transition-all relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/5 rounded-full group-hover:bg-accent/20 transition-colors" />
                  <div className="flex justify-between items-start">
                    <sw.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
                    <span className="text-[8px] md:text-[10px] text-zinc-600 uppercase tracking-tighter">{sw.category}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-[family-name:var(--font-heading)] text-sm md:text-lg font-bold block leading-tight">
                      {sw.name}
                    </span>
                    <div className="w-0 group-hover:w-full h-px bg-accent transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}