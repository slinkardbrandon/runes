import { RuneSystem } from '../classes/RuneSystem';

export const getRunesForAett = (
  system: RuneSystem,
  aett: 'Freya' | 'Heimdall' | 'Tiwaz' | 'all' = 'all',
) => {
  if (aett === 'all') {
    return system.runes;
  }

  return system.runes.filter(rune => rune.aett.name === aett);
};
