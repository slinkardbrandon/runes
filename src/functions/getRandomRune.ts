import { RuneSystem } from "../classes/RuneSystem";
import { getNumberBetween } from "./getNumberBetween";
import { Rune } from "../classes/Rune";

export const getRandomRune = (runeSystem: RuneSystem): Rune => {
  const randomNumber = getNumberBetween(0, runeSystem.runes.length);
  return runeSystem.runes[randomNumber];
};
