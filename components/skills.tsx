"use client";

import { motion } from "framer-motion";

const strategicSkills = [
  "Brand Strategy",
  "Storytelling",
  "Market Research",
  "Positioning",
  "Growth Marketing",
  "Content Strategy",
  "UX Strategy",
  "Customer Journey",
];

const creativeSkills = [
  "Visual Identity",
  "Art Direction",
  "UI Design",
  "Editorial Design",
  "Motion Graphics",
  "Typography",
  "Photography Direction",
  "Presentation Design",
];

const softwares = [
  { name: "Figma", category: "Design" },
  { name: "Adobe Creative Suite", category: "Design" },
  { name: "After Effects", category: "Motion" },
  { name: "Notion", category: "Productivity" },
  { name: "Miro", category: "Collaboration" },
  { name: "Webflow", category: "Development" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Analytics", category: "Data" },
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
          {/* Section Header */}
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

          {/* Strategic Skills - Large Typography */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
              Estratégia
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
                  className="px-6 py-4 border border-border bg-background text-foreground font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold cursor-default transition-colors hover:text-accent-foreground"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Creative Skills - Grid Cards */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
              Criação
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {creativeSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative aspect-square bg-background border border-border p-6 flex flex-col justify-end overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold group-hover:text-accent-foreground transition-colors">
                    {skill}
                  </span>
                  <span className="relative z-10 text-sm text-muted-foreground group-hover:text-accent-foreground/70 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Softwares - Horizontal Scroll */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
              Ferramentas
            </h3>
            <div className="relative overflow-hidden py-4">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
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
