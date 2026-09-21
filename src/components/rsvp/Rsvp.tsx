"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "55SEUNUMEROAQUI"; // ex: 5561999999999
const MENSAGEM_MODELO = (nome: string, quantidade: string) =>
  `Ola! \u{1F981} Confirmo presenca na festa do Oliver!\nNome: ${nome}\nQuantidade de pessoas: ${quantidade}`;

export default function Rsvp() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("1");
  const [confirmed, setConfirmed] = useState(false);

  const podeEnviar = nome.trim().length > 0;

  function handleConfirmar() {
    if (!podeEnviar) return;

    const texto = MENSAGEM_MODELO(nome.trim(), quantidade);
    const url = `https://wa.me/${556194369912}?text=${encodeURIComponent(texto)}`;

    setConfirmed(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-water-mid/30 to-sky-light/40 px-6 py-24"
    >
      <AnimatePresence mode="wait">
        {!confirmed ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex w-full max-w-sm flex-col items-center gap-6 text-center"
          >
            <p className="font-display text-2xl text-charcoal sm:text-3xl">
              Sua presença é muito importante para nós! 🐾
            </p>

            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-1 text-left">
                <label htmlFor="nome" className="font-display text-sm text-charcoal/70">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="rounded-xl border border-leaf-mid/50 bg-cream px-4 py-3 text-charcoal outline-none focus:border-leaf-deep"
                />
              </div>

              <div className="flex flex-col gap-1 text-left">
                <label htmlFor="quantidade" className="font-display text-sm text-charcoal/70">
                  Quantas pessoas irão?
                </label>
                <input
                  id="quantidade"
                  type="number"
                  min={1}
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  className="rounded-xl border border-leaf-mid/50 bg-cream px-4 py-3 text-charcoal outline-none focus:border-leaf-deep"
                />
              </div>
            </div>

            <motion.button
              type="button"
              onClick={handleConfirmar}
              disabled={!podeEnviar}
              whileHover={podeEnviar ? { scale: 1.04 } : undefined}
              whileTap={podeEnviar ? { scale: 0.96 } : undefined}
              className="mt-2 w-full rounded-full bg-leaf-deep px-8 py-4 font-display text-lg font-semibold text-cream shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
            >
              Confirmar pelo WhatsApp 🐾
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-4 text-center"
          >
            {["🌿", "✨", "🎈", "🌿", "✨"].map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-3xl"
                style={{ left: `${-40 + i * 20}%`, top: "-20%" }}
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 0], y: -60, scale: 1 }}
                transition={{ duration: 1.8, delay: i * 0.1, ease: "easeOut" }}
              >
                {emoji}
              </motion.span>
            ))}

            <p className="font-display text-2xl text-charcoal sm:text-3xl">
              A aventura está completa! 🧡
            </p>
            <p className="text-lg text-charcoal/70">
              Obrigado por confirmar sua presença.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}