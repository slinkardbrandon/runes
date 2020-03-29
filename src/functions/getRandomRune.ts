import { RuneSystem } from "../classes/RuneSystem";
import { getNumberBetween } from "./getNumberBetween";
import { Rune } from "../classes/Rune";

export const getRandomRune = (runeSystem: RuneSystem): Rune => {
  /**
   * Get a number between 1 & the total length, since we always subtract 1
   * after we get the random numeric value
   */
  const randomNumber = getNumberBetween(1, runeSystem.runes.length);
  return runeSystem.runes[randomNumber - 1];
};
