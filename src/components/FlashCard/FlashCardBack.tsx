import React from "react";
import { Rune } from "../../classes/Rune";

interface IFlashCardBack {
  rune: Rune;
  flipped: boolean;
}

export const FlashCardBack = ({ flipped, rune }: IFlashCardBack) => {
  const styles = {
    display: flipped ? undefined : "none"
  };

  console.log(rune);

  return (
    <div style={styles} className="font-semibold text-xl">
      {rune.name}
    </div>
  );
};
