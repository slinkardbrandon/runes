import React, { useEffect, useState } from "react";
import { RuneSystem } from "../classes/RuneSystem";
import { getRandomRune } from "../functions/getRandomRune";
import { Rune } from "../classes/Rune";
import { FlashCard } from "./FlashCard";

export interface IFlashCardController {
  system: RuneSystem;
}

export const FlashCardController = ({ system }: IFlashCardController) => {
  const [activeRune, setActiveRune] = useState<Rune>(getRandomRune(system));

  return (
    <div className="">
      <FlashCard rune={activeRune} />
    </div>
  );
};
