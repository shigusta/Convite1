"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { isSoundOn } from "@/lib/sound";

const MAX_SOUND_MS = 2000; // tempo máximo do som, em milissegundos
interface AnimalProps {
  emoji: string;
  name: string;
  phrase: string;
  sound?: string;
  idleAnimation: {
    animate: { x?: number[]; y?: number[]; rotate?: number[] };
    duration: number;
  };
}

export default function Animal({ emoji, name, phrase, sound, idleAnimation }: AnimalProps) {
  const [showPhrase, setShowPhrase] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function stopWithFade(audio: HTMLAudioElement) {
    let step = 0;
    fadeRef.current = setInterval(() => {
      step += 1;
      audio.volume = Math.max(0, 1 - step / 8);
      if (step >= 8) {
        if (fadeRef.current) clearInterval(fadeRef.current);
        audio.pause();
        audio.volume = 1;
      }
    }, 40);
  }

  function playSound() {
    if (!sound || !isSoundOn()) return;
    if (!audioRef.current) audioRef.current = new Audio(sound);
    const audio = audioRef.current;

    if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
    if (fadeRef.current) clearInterval(fadeRef.current);

    audio.volume = 1;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    stopTimerRef.current = setTimeout(() => stopWithFade(audio), MAX_SOUND_MS);
  }

  function handleInteract() {
    playSound();
    setShowPhrase(true);
    setTimeout(() => setShowPhrase(false), 2000);
  }

  return (
    <div className="relative flex flex-col items-center gap-2">
      <motion.button
        type="button"
        onClick={handleInteract}
        aria-label={name}
        className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-leaf-light/40 text-3xl xs:h-20 xs:w-20 xs:text-4xl sm:h-28 sm:w-28 sm:text-6xl"
        animate={idleAnimation.animate}
        transition={{
          duration: idleAnimation.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileTap={{ scale: 0.85, rotate: 0 }}
      >
        {emoji}
      </motion.button>

      <span className="font-display text-sm text-charcoal/70">{name}</span>

      {showPhrase && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -top-10 left-1/2 z-20 w-max max-w-[38vw] -translate-x-1/2 rounded-2xl bg-cream px-3 py-1.5 text-center text-[10px] font-semibold leading-tight text-charcoal shadow-md sm:max-w-none sm:whitespace-nowrap sm:text-xs"
        >
          {phrase}
        </motion.div>
      )}
    </div>
  );
}