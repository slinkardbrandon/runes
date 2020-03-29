import React from "react";
import { Rune } from "../../classes/Rune";
import { FlashCardFront } from "./FlashCardFront";
import { FlashCardBack } from "./FlashCardBack";

export interface IFlashCard {
  rune: Rune;
}

export const FlashCard = (props: IFlashCard) => {
  const { rune } = props;
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      role="button"
      style={{ minHeight: "350px" }}
      onClick={() => setFlipped(!flipped)}
      className="bg-white border border-solid border-gray-300 flex items-center content-center justify-center cursor-pointer shadow-md hover:shadow-lg"
    >
      <FlashCardFront rune={rune} flipped={flipped} />
      <FlashCardBack rune={rune} flipped={flipped} />
    </div>
  );
};
