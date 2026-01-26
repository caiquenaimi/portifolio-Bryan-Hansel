"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const freelaImages = [
  "/freela1.jpg",
  "/freela2.jpg",
  "/freela3.jpg",
  "/freela4.jpg",
  "/freela5.png",
];

// Duplicamos a lista para o carrossel não ter fim (infinito real)
const duplicatedImages = [...freelaImages, ...freelaImages, ...freelaImages];

export function Freelas() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="freelas"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 text-accent text-sm tracking-[0.3em] uppercase font-bold">
              <span className="w-8 h-px bg-accent" />
              <span>Job Opportunity</span>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
              Também atendo <br />
              <span className="text-accent italic">como freela.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Precisa de um projeto pontual, identidade visual ou automação
              inteligente? Estou disponível para transformar sua ideia em
              impacto&nbsp;real.
            </p>
          </motion.div>
        </div>

        {/* Carrossel Infinito sem Gap */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div
            animate={{ x: [0, "-50%"] }} // Move metade da largura total (que é duplicada)
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="flex gap-4 md:gap-8 flex-nowrap w-max"
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={index}
                className="relative h-[300px] md:h-[400px] w-[250px] md:w-[350px] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 group bg-neutral-900"
              >
                <Image
                  src={src}
                  alt={`Freela ${index}`}
                  fill
                  sizes="(max-width: 768px) 250px, 350px"
                  // Voltamos para object-cover para unificar o tamanho visual das artes
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-16 md:mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contato"
              onClick={(e) => handleScroll(e, "contato")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-accent text-accent-foreground px-8 py-4 md:px-12 md:py-6 rounded-full text-xl md:text-2xl font-bold transition-transform group cursor-pointer"
            >
              Bora fechar um projeto?
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
