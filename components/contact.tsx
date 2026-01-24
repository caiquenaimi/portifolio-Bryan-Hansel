"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Check } from "lucide-react";
import { useState } from "react";

// Ícone do Behance em SVG para consistência visual
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 14.4h-5.486c.214 1.13.926 1.914 2.103 1.914 1.101 0 1.73-.44 1.93-1.02h2.077c-.457 1.614-1.954 2.786-4.007 2.786-2.756 0-4.272-1.956-4.272-4.143 0-2.143 1.445-4.143 3.918-4.143 2.345 0 3.737 1.888 3.737 4.041 0 .147-.013.313-.013.565zm-2.235-1.474c-.027-1.13-.841-1.748-1.762-1.748-1.075 0-1.723.633-1.895 1.748h3.657zM6.666 18H0V6h6.85c2.155 0 3.613 1.082 3.613 3.102 0 1.054-.454 1.91-1.402 2.327.948.298 1.647 1.144 1.647 2.442 0 2.459-1.556 4.129-4.042 4.129zm-3.332-6.47h2.86c1.04 0 1.602-.468 1.602-1.277 0-.794-.562-1.171-1.602-1.171H3.334v2.448zm0 4.545h3.111c1.103 0 1.752-.572 1.752-1.417 0-.818-.649-1.372-1.752-1.372H3.334v2.789zM21.257 8.333h-3.958V9.6h3.958V8.333z" />
  </svg>
);

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "bryanhnsl@gmail.com";

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contato via Portfólio");
    window.location.href = `mailto:${email}?subject=${subject}`;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contato" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-muted-foreground text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              <span>Contato</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Vamos construir<br />
              <span className="text-accent">algo juntos?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Estou sempre aberto a novos desafios e parcerias estratégicas.
              Sinta-se à vontade para me chamar em qualquer uma das plataformas abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <motion.button
              onClick={handleContact}
              whileHover={{ y: -8 }}
              className="group p-8 bg-background border border-border hover:border-accent transition-colors text-left w-full"
            >
              <div className="flex items-start justify-between mb-6">
                <Mail className="w-8 h-8 text-accent" />
                {copied ? <Check className="w-6 h-6 text-green-500" /> : <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">{copied ? "Copiado!" : email}</p>
            </motion.button>

            {/* LinkedIn */}
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
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">/bryan-hansel</p>
            </motion.a>

            {/* Behance com Ícone SVG */}
            <motion.a
              href="https://www.behance.net/BryanHansl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group p-8 bg-background border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <BehanceIcon className="w-8 h-8 text-accent" />
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Behance</h3>
              <p className="text-muted-foreground">/BryanHansl</p>
            </motion.a>
          </div>

          <motion.button
            onClick={handleContact}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="block w-full p-8 md:p-12 bg-accent text-accent-foreground text-center group"
          >
            <span className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold inline-flex items-center gap-4">
              {copied ? "Email copiado!" : "Começar uma conversa"}
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}