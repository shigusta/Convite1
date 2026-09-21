"use client";

import { useState } from "react";
import { isSoundOn, setSoundOn } from "@/lib/sound";

export default function SoundToggle() {
  const [on, setOn] = useState(isSoundOn());

  function toggle() {
    const next = !on;
    setSoundOn(next);
    setOn(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Desligar sons" : "Ligar sons"}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream/90 text-xl shadow-md backdrop-blur"
    >
      {on ? "🔊" : "🔇"}
    </button>
  );
}