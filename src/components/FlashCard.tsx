import React from "react";
import { Rune } from "../classes/Rune";

export interface IFlashCard {
  rune: Rune;
}

export const FlashCard = (props: IFlashCard) => {
  const [flipped, setFlipped] = React.useState(true);
  const { rune } = props;

  console.log(rune);

  return (
    <div className="">
      <img alt={rune.name} src={rune.imageUrl}></img>
    </div>
  );
};
