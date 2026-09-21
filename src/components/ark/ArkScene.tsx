"use client";

import { motion } from "framer-motion";
import SailingArk from "./SailingArk";

export default function ArkScene() {
  return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-leaf-light/40 via-sky-mid to-water-deep flex flex-col items-center justify-center px-6"
        >
      {/* Nuvens lentas */}
      <motion.div
        className="absolute top-16 left-[-10%] text-6xl opacity-40"
        animate={{ x: ["0%", "130%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-28 left-[-20%] text-4xl opacity-30"
        animate={{ x: ["0%", "150%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        ☁️
      </motion.div>

      {/* Título */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl text-cream drop-shadow-md sm:text-4xl mb-10 text-center"
      >
        A nossa aventura já tem destino!
      </motion.p>

      {/* Arca navegando */}
      <div className="relative">
        <SailingArk />

        {/* Reflexo na água (espelhado, mais lento e translúcido) */}
        <motion.div
          className="absolute top-full left-0 w-full origin-top opacity-25 [transform:scaleY(-1)] blur-[1px]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 320 210" className="w-72 sm:w-[26rem]" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 130 Q15 165 60 170 L260 170 Q305 165 305 130 L290 95 Q160 115 30 95 Z"
              fill="#c99a5b"
            />
          </svg>
        </motion.div>
      </div>

      {/* Ondas na base */}
      <div className="absolute bottom-0 left-0 h-24 w-full overflow-hidden">
        <motion.div
          className="absolute -left-1/4 bottom-0 h-full w-[150%] rounded-t-[100%] bg-water-mid/60"
          animate={{ x: ["0%", "4%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-1/3 bottom-[-10px] h-full w-[150%] rounded-t-[100%] bg-water-deep/70"
          animate={{ x: ["0%", "-5%", "0%"] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Gotas flutuando (partículas leves) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg opacity-30"
          style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 15}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          💧
        </motion.div>
      ))}
    </motion.section>
  );
}