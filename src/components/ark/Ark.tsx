"use client";

import { motion } from "framer-motion";

interface ArkProps {
  onEnter?: () => void;
}

export default function Ark({ onEnter }: ArkProps) {
  return (
    <motion.button
      type="button"
      onClick={onEnter}
      aria-label="Entrar na Arca"
      className="group relative cursor-pointer bg-transparent border-none p-0"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg
        viewBox="0 0 320 210"
        className="w-80 sm:w-[26rem] drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Casco da arca (curvo, maciço) */}
        <path
          d="M15 130 Q15 165 60 170 L260 170 Q305 165 305 130 L290 95 Q160 115 30 95 Z"
          fill="#c99a5b"
          stroke="#8b6244"
          strokeWidth="3"
        />
        {/* Pranchas horizontais do casco */}
        <g stroke="#8b6244" strokeWidth="1.5" opacity="0.55">
          <path d="M22 112 Q160 132 298 112" fill="none" />
          <path d="M18 126 Q160 148 302 126" fill="none" />
          <path d="M22 142 Q160 165 298 142" fill="none" />
          <path d="M35 158 Q160 178 285 158" fill="none" />
        </g>
        {/* Borda superior do casco */}
        <path d="M28 96 Q160 118 292 96" fill="none" stroke="#8b6244" strokeWidth="3" strokeLinecap="round" />

        {/* Cabine (casinha) */}
        <rect
          x="95"
          y="60"
          width="130"
          height="45"
          fill="#e8c88f"
          stroke="#8b6244"
          strokeWidth="3"
        />
        {/* Pranchas da cabine */}
        <g stroke="#8b6244" strokeWidth="1" opacity="0.4">
          <line x1="95" y1="75" x2="225" y2="75" />
          <line x1="95" y1="90" x2="225" y2="90" />
        </g>

        {/* Telhado triangular */}
        <path
          d="M85 62 L160 20 L235 62 Z"
          fill="#a97c50"
          stroke="#6b4a30"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Textura do telhado */}
        <g stroke="#6b4a30" strokeWidth="1" opacity="0.4">
          <line x1="102" y1="52" x2="218" y2="52" />
          <line x1="118" y1="40" x2="202" y2="40" />
        </g>

        {/* Porta central com o texto */}
        <rect
          x="140"
          y="72"
          width="40"
          height="33"
          rx="6"
          fill="#6b4a30"
          stroke="#4a3320"
          strokeWidth="2.5"
        />
        <text
          x="160"
          y="86"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fill="#fdf6ec"
          fontFamily="var(--font-display)"
        >
          <tspan x="160" dy="0">Entrar</tspan>
          <tspan x="160" dy="8">na Arca</tspan>
        </text>
        <circle cx="172" cy="90" r="1.5" fill="#e8c88f" />

        {/* Reflexo na água (sutil) */}
        <ellipse cx="160" cy="188" rx="140" ry="9" fill="#2e7d78" opacity="0.25" />
      </svg>
    </motion.button>
  );
}