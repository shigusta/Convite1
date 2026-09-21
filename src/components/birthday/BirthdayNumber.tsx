"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FLOATERS = [
  { emoji: "🎈", left: 12, top: 20, duration: 6, delay: 0 },
  { emoji: "🎈", left: 82, top: 15, duration: 7, delay: 0.5 },
  { emoji: "🌿", left: 8, top: 70, duration: 5, delay: 1 },
  { emoji: "🌿", left: 88, top: 68, duration: 6.5, delay: 0.3 },
  { emoji: "✨", left: 20, top: 45, duration: 4, delay: 0.8 },
  { emoji: "✨", left: 75, top: 40, duration: 4.5, delay: 1.2 },
];

export default function BirthdayNumber() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-light/40 to-leaf-light/40 px-6"
    >
      {FLOATERS.map((f, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl opacity-40 sm:text-4xl"
          style={{ left: `${f.left}%`, top: `${f.top}%` }}
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: f.duration, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
        >
          {f.emoji}
        </motion.span>
      ))}+
+      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#7a8a94]" />
       <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-10"></div>
      <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display text-[8rem] font-bold leading-none text-sun drop-shadow-lg sm:text-[11rem]"
          style={{ WebkitTextStroke: "3px var(--color-wood)" }}
        >
          1
        </motion.div>

        {/* Foto do Oliver */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="rounded-sm bg-cream p-3 pb-8 shadow-xl"
        >
          <div className="relative h-56 w-48 overflow-hidden rounded-sm bg-leaf-light/40 sm:h-64 sm:w-56">
                   <Image src="/images/oliver-1ano.jpg" alt="Oliver" fill className="object-cover" />
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-8 font-display text-2xl text-charcoal sm:text-3xl text-center"
      >
        O Oliver vai completar 1 ano! 🎉
      </motion.p>
    </motion.section>
  );
}