"use client";

export default function RsvpButton() {
  function scrollToRsvp() {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToRsvp}
      aria-label="Ir para confirmação de presença"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full bg-cream/90 px-4 py-2.5 text-sm font-semibold text-charcoal shadow-md backdrop-blur"
    >
      🎈 Confirmar presença
    </button>
  );
}