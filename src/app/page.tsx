"use client";

import { useState } from "react";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";
import Animals from "@/components/animals/Animals";
import ArkScene from "@/components/ark/ArkScene";
import WeatherTransition from "@/components/weather/WeatherTransition";
import EventInfo from "@/components/event/EventInfo";
import BirthdayNumber from "@/components/birthday/BirthdayNumber";
import Rsvp from "@/components/rsvp/Rsvp";
import Farewell from "@/components/footer/Farewell";
import SoundToggle from "@/components/ui/SoundToggle";
import ScrollHint from "@/components/ui/ScrollHint";
import RsvpButton from "@/components/ui/RsvpButton";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main>
          <Hero
          entered={entered}
          onEnter={() => {
            window.scrollTo(0, 0);
          setEntered(true);
          }}
      />
      {entered && <SoundToggle />}
      {entered && <ScrollHint />}
      {entered && <RsvpButton />}
      <Story />
      <Animals />
      <ArkScene />
      <BirthdayNumber />
      <WeatherTransition />
      <EventInfo />
      <Rsvp />
      <Farewell />
    </main>
  );
}