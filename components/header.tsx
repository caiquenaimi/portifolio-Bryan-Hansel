"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight hover:text-accent transition-colors"
          >
            [SEU NOME]
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-foreground"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <span className="font-[family-name:var(--font-heading)] text-xl font-bold">
                  [SEU NOME]
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-[family-name:var(--font-heading)] text-4xl font-bold hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-12 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4">
                  Vamos conversar?
                </p>
                <a
                  href="mailto:seu@email.com"
                  className="text-accent font-medium"
                >
                  seu@email.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
