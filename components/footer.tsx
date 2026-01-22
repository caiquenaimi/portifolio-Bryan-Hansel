"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
              Bryan Hansel
            </span>
            <span className="text-sm text-muted-foreground">
              Marketing + Design + Branding
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a
              target="blank"
              href="https://www.linkedin.com/in/bryan-hansel-698b11239/"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/_hanselbryan/"
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              target="blank"
              href="https://www.behance.net/BryanHansl"
              className="hover:text-foreground transition-colors"
            >
              Behance
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
