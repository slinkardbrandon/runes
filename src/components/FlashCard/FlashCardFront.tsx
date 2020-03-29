import React from "react";
import { Rune } from "../../classes/Rune";

interface IFlashCardFront {
  rune: Rune;
  flipped: boolean;
}

export const FlashCardFront = ({ flipped, rune }: IFlashCardFront) => {
  const styles = {
    display: flipped ? "none" : undefined
  };

  return (
    <img
      style={{ ...styles, maxHeight: "125px" }}
      alt={rune.name}
      src={rune.imageUrl}
    ></img>
  );
};
