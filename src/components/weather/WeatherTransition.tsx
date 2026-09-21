"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const RAINDROPS = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 10) * 0.15,
  duration: 0.7 + (i % 5) * 0.15,
  height: 14 + (i % 4) * 6,
}));

export default function WeatherTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cor do céu: nublado/escuro -> claro e ensolarado
  const skyColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#7a8a94", "#66798a", "#a8d8ef", "#cfeaf7"]
  );

  // Nuvens: presentes e escuras no início, dissipando no final
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.55, 0.85], [1, 1, 0.15]);
  const cloudY = useTransform(scrollYProgress, [0.6, 1], [0, -40]);

  // Chuva: aumenta, fica forte, depois some
  const rainOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.45, 0.65],
    [0, 1, 1, 0]
  );

  // Arco-íris: aparece depois da chuva passar
  const rainbowOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const rainbowScale = useTransform(scrollYProgress, [0.55, 0.8], [0.85, 1]);

  // Sol: aparece por último
  const sunOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  const sunScale = useTransform(scrollYProgress, [0.75, 1], [0.6, 1]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: skyColor }}
      >
        {/* Nuvens */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: cloudOpacity, y: cloudY }}
        >
          <div className="absolute top-[12%] left-[10%] h-24 w-64 rounded-full bg-charcoal/30 blur-2xl" />
          <div className="absolute top-[8%] left-[45%] h-28 w-72 rounded-full bg-charcoal/40 blur-2xl" />
          <div className="absolute top-[15%] left-[65%] h-20 w-56 rounded-full bg-charcoal/25 blur-2xl" />
        </motion.div>

        {/* Chuva */}
        <motion.div className="absolute inset-0" style={{ opacity: rainOpacity }}>
          {/* Relâmpago */}
          <div
            className="pointer-events-none absolute inset-0 bg-[#eaf2ff] motion-reduce:hidden"
            style={{ animation: "lightning 8s linear infinite" }}
          />
          {RAINDROPS.map((drop, i) => (
            <span
              key={i}
              className="absolute top-0 w-[2px] rounded-full bg-cream/60"
              style={{
                left: `${drop.left}%`,
                height: `${drop.height}px`,
                animation: `rainfall ${drop.duration}s linear ${drop.delay}s infinite`,
              }}
            />
          ))}
        </motion.div>

        {/* Arco-íris */}
        <motion.svg
          viewBox="0 0 400 220"
          className="absolute bottom-0 w-[90%] max-w-xl"
          style={{ opacity: rainbowOpacity, scale: rainbowScale }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {[
            "var(--color-rainbow-red)",
            "var(--color-rainbow-orange)",
            "var(--color-rainbow-yellow)",
            "var(--color-rainbow-green)",
            "var(--color-rainbow-blue)",
            "var(--color-rainbow-purple)",
          ].map((color, i) => (
            <path
              key={color}
              d={`M ${20 + i * 14} 200 A ${180 - i * 14} ${180 - i * 14} 0 0 1 ${380 - i * 14} 200`}
              fill="none"
              stroke={color}
              strokeWidth="12"
              strokeLinecap="round"
            />
          ))}
        </motion.svg>

        {/* Sol */}
        <motion.div
          className="absolute top-[15%] right-[15%] h-24 w-24 rounded-full sm:h-32 sm:w-32"
          style={{
            opacity: sunOpacity,
            scale: sunScale,
            background: "radial-gradient(circle, var(--color-sun) 40%, var(--color-sun-glow) 100%)",
            boxShadow: "0 0 60px var(--color-sun-glow)",
          }}
        />
      </motion.div>
    </div>
  );
}