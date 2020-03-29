import React, { useEffect, useState } from "react";
import { RuneSystem } from "../classes/RuneSystem";
import { getRandomRune } from "../functions/getRandomRune";
import { Rune } from "../classes/Rune";
import { FlashCard } from "./FlashCard";
import SwipeableViews from "react-swipeable-views";
import { shuffleArray } from "../functions/shuffleArray";

export interface IFlashCardController {
  system: RuneSystem;
}

export const FlashCardController = ({ system }: IFlashCardController) => {
  // const [activeRune, setActiveRune] = useState<Rune>(getRandomRune(system));
  const [runes] = useState<Rune[]>(() => shuffleArray(system.runes));

  return (
    <SwipeableViews>
      <div className="border-solid pt-5 bg-gray-200 h-full">
        <FlashCard rune={runes[0]} />
      </div>
    </SwipeableViews>
  );
};
