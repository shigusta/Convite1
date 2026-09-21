"use client";

import { motion } from "framer-motion";
import Animal from "./Animal";

const animals = [
  {
    emoji: "🦁",
    name: "Leão",
    phrase: "Rooar! Bem-vindo(a)!",
    sound: "/sounds/leao.mp3",
    idleAnimation: { animate: { rotate: [0, -6, 0, 6, 0] }, duration: 5 },
  },
  {
    emoji: "🐘",
    name: "Elefante",
    phrase: "Prooot! Que alegria te ver!",
    sound: "/sounds/elephant.mp3",
    idleAnimation: { animate: { x: [0, 4, 0, -4, 0] }, duration: 6 },
  },
  {
    emoji: "🦒",
    name: "Girafa",
    phrase: "Vem, a festa vai ser linda!",
    idleAnimation: { animate: { y: [0, -6, 0] }, duration: 4 },
  },
  {
    emoji: "🦓",
    name: "Zebra",
    phrase: "Já separei minha roupa listrada!",
    idleAnimation: { animate: { rotate: [0, 5, 0, -5, 0] }, duration: 4.5 },
  },
  {
    emoji: "🐒",
    name: "Macaco",
    phrase: "Uhh uhh! Bora pular de alegria!",
    sound: "/sounds/macaco.mp3",
    idleAnimation: { animate: { y: [0, -12, 0] }, duration: 1.6 },
  },
  {
    emoji: "🦜",
    name: "Papagaio",
    phrase: "Oliver faz aniversário! Oliver faz aniversário!",
    sound: "/sounds/parrot.mp3",
    idleAnimation: { animate: { rotate: [0, 10, 0, -10, 0] }, duration: 2.2 },
  },
  {
    emoji: "🐢",
    name: "Tartaruga",
    phrase: "Devagar, mas chegando cheia de amor!",
    idleAnimation: { animate: { y: [0, -3, 0] }, duration: 5.5 },
  },
  {
    emoji: "🐊",
    name: "Jacaré",
    phrase: "Vou nadar até lá de tão animado!",
    idleAnimation: { animate: { x: [0, -5, 0] }, duration: 7 },
  },
];

export default function Animals() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full bg-gradient-to-b from-cream to-leaf-light/30 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
          Os amigos da arca já estão te esperando!
        </h2>
        <p className="mt-3 text-charcoal/70">Toque em cada um deles ✨</p>

        <div className="mt-14 grid grid-cols-4 place-items-center gap-x-1 gap-y-8 sm:gap-x-4 sm:gap-y-14">
          {animals.map((animal) => (
            <Animal key={animal.name} {...animal} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}