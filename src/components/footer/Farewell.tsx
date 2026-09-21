"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SailingArk from "@/components/ark/SailingArk";

export default function Farewell() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2 }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-mid via-sky-light to-water-deep px-6 py-24"
    >
      {/* Nuvens lentas ao fundo */}
      <motion.div
        className="absolute top-20 left-[-15%] text-5xl opacity-30"
        animate={{ x: ["0%", "140%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.div>

      {/* Foto do Oliver */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mb-10 rounded-sm bg-cream p-3 pb-8 shadow-xl"
      >
        <div className="relative h-56 w-48 overflow-hidden rounded-sm bg-leaf-light/40 sm:h-64 sm:w-56">
          <Image src="/images/oliver-final.jpg" alt="Oliver" fill className="object-cover" />
        </div>
      </motion.div>

      {/* Arca se afastando rumo ao horizonte */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 0.55, x: "30%" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
        className="relative z-10 mb-8"
      >
        <SailingArk />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 font-display text-3xl text-cream drop-shadow-md sm:text-4xl text-center"
      >
        Até lá! 🧡
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-2 text-lg text-cream/90 text-center"
      >
        Esperamos você nessa aventura!
      </motion.p>
    </motion.section>
  );
}