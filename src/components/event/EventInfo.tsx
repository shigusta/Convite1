"use client";

import { motion } from "framer-motion";

const DATA = "[DATA]";
const HORARIO = "[HORÁRIO]";
const LOCAL = "[LOCAL]";
const ENDERECO = "[ENDEREÇO]";

export default function EventInfo() {
  const mapsUrl = `https://www.google.com/maps?q=-15.47964096069336,-47.60033416748047&z=17&hl=pt-BR${encodeURIComponent(ENDERECO)}`;

  const items = [
    { icon: "🎂", label: "1º aniversário do Oliver" },
    { icon: "📅", label: "08/11/2026 (Domingo)" },
    { icon: "⏰", label: '14:00h' },
    { icon: "📍", label: "Quadra 80, Casa 01 - Jardim Paquetá (Espaço:Mandacaru)" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-cream to-sky-light/40 px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl text-charcoal sm:text-4xl mb-12 text-center"
      >
        A festa vai ser assim:
      </motion.h2>

      <div className="flex w-full max-w-md flex-col gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex items-center gap-4 rounded-2xl bg-cream/80 px-6 py-4 shadow-md backdrop-blur-sm"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="font-display text-lg text-charcoal sm:text-xl">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="mt-10 rounded-full bg-water-mid px-8 py-3 font-display text-lg font-semibold text-cream shadow-lg"
      >
        🗺️ Como chegar
      </motion.a>
    </motion.section>
  );
}