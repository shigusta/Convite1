let enabled = true;

export const isSoundOn = () => enabled;
export const setSoundOn = (value: boolean) => {
  enabled = value;
};