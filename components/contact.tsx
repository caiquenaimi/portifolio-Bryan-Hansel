"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              <span>Contato</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Vamos construir
              <br />
              <span className="text-accent">algo juntos?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              [Placeholder: Escreva uma frase convidativa para contato. Seja
              direto sobre como você prefere ser abordado e o que espera de uma
              conversa inicial.]
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <motion.a
              href="mailto:bryanhnsl@gmail.com"
              whileHover={{ y: -8 }}
              className="group p-8 bg-background border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <Mail className="w-8 h-8 text-accent" />
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
                Email
              </h3>
              <p className="text-muted-foreground">bryanhnsl@gmail.com</p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/bryan-hansel-698b11239/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group p-8 bg-background border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <Linkedin className="w-8 h-8 text-accent" />
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
                LinkedIn
              </h3>
              <p className="text-muted-foreground">/bryan-hansel</p>
            </motion.a>

            {/* Instagram Card */}
            <motion.a
              href="https://www.instagram.com/_hanselbryan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group p-8 bg-background border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <Instagram className="w-8 h-8 text-accent" />
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
                Instagram
              </h3>
              <p className="text-muted-foreground">@_hanselbryan</p>
            </motion.a>
          </div>

          {/* Big CTA */}
          <motion.a
            href="mailto:bryanhnsl@gmail.com"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="block w-full p-8 md:p-12 bg-accent text-accent-foreground text-center group"
          >
            <span className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold inline-flex items-center gap-4">
              Começar uma conversa
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
