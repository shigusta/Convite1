type Listener = (on: boolean) => void;
let enabled = true;
const listeners = new Set<Listener>();

export const isSoundOn = () => enabled;
export const setSoundOn = (value: boolean) => {
  enabled = value;
 listeners.forEach((l) => l(value)); 
};
export const onSoundChange = (listener: Listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
};