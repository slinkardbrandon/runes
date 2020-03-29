import React, { useState } from "react";
import { RuneSystem } from "../classes/RuneSystem";
import { Rune } from "../classes/Rune";
import { FlashCard } from "./FlashCard/FlashCard";
import { shuffleArray } from "../functions/shuffleArray";

export interface IFlashCardController {
  system: RuneSystem;
}

export const FlashCardController = ({ system }: IFlashCardController) => {
  const [runes] = useState<Rune[]>(() => shuffleArray(system.runes));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const rune = runes[activeIndex];

  const handlePrevious = () => {};
  const handleNext = () => {
    if (activeIndex === runes.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="p-4 bg-gray-200 h-full">
      <FlashCard key={rune.name} rune={rune} />
    </div>
  );
};
