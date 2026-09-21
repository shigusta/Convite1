"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function ScrollHint() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 80) setVisible(false);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="pointer-events-none fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full bg-cream/85 px-5 py-2 text-charcoal shadow-md"
        >
          <span className="font-display text-sm">Role para descer</span>
          <motion.span
            className="text-2xl leading-none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}