"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-sky-light to-cream overflow-hidden flex items-center px-6 py-24">
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-12 sm:flex-row sm:gap-16">
        {/* Texto da história */}
        <div className="flex flex-1 flex-col gap-6 text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl text-charcoal sm:text-3xl"
          >
            Há 1 ano, chegou ao mundo um pequeno explorador chamado Oliver.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-charcoal/80 sm:text-xl"
          >
            E agora chegou a hora de embarcar em uma aventura muito especial...
          </motion.p>
        </div>

        {/* Polaroid com a foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex-shrink-0 rounded-sm bg-cream p-3 pb-8 shadow-xl"
        >
          <div className="relative h-56 w-48 overflow-hidden rounded-sm bg-leaf-light/40 sm:h-64 sm:w-56">
                <Image src="/images/oliver-historia.jpg" alt="Oliver" fill className="object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Folhas decorativas flutuando */}
      <motion.div
        className="absolute -left-6 top-1/4 text-6xl opacity-30"
        animate={{ y: [0, 15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute -right-4 bottom-1/4 text-5xl opacity-30"
        animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🌿
      </motion.div>
    </section>
  );
}