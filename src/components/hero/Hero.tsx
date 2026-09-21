"use client";

import { motion, AnimatePresence } from "framer-motion";
import Ark from "@/components/ark/Ark";

interface HeroProps {
  onEnter: () => void;
  entered: boolean;
}

export default function Hero({ onEnter, entered }: HeroProps) {
  return (
    <AnimatePresence>
      {!entered && (
        <motion.section
          className="fixed inset-0 h-screen w-full overflow-hidden z-20"
          exit={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.6, 0.05, 0.15, 1] }}
        >
          {/* Céu */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-light via-sky-mid to-sky-deep" />

          {/* Montanhas distantes */}
          <div className="absolute bottom-[35%] left-0 w-full h-[25%] bg-sky-deep/40 [clip-path:polygon(0%_100%,10%_40%,25%_70%,40%_20%,55%_60%,70%_30%,85%_65%,100%_45%,100%_100%)]" />

          {/* Água */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-b from-water-mid to-water-deep"
            animate={{ scaleY: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom" }}
          />

          {/* Flash de luz na transição */}
          <motion.div
            className="absolute inset-0 bg-cream pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.1, times: [0, 0.5, 1] }}
          />

          {/* Conteúdo central */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-cream">
            <h1
              className="font-display text-6xl font-bold drop-shadow-md sm:text-7xl"
              style={{ letterSpacing: "0.1em", paddingLeft: "0.1em", fontKerning: "none" }}> 
                OLIVER
             </h1>
            <p className="font-display text-xl sm:text-2xl">
              Meu primeiro aninho
            </p>
            <p className="text-base sm:text-lg">
              Uma aventura está começando...
            </p>

            <div className="mt-4">
              <Ark onEnter={onEnter} />
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}