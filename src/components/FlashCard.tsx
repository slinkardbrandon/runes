import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { Rune } from "../classes/Rune";

export interface IFlashCard {
  rune: Rune;
}

export const FlashCard = (props: IFlashCard) => {
  const { rune } = props;
  const [flipped, setFlipped] = React.useState(false);

  const frontStyles = {
    display: flipped ? "none" : undefined
  };
  const backStyles = {
    display: flipped ? undefined : "none"
  };

  return (
    <div
      className="bg-white border-gray-700 m-5 p-5 pt-12 pb-12 flex justify-center hover:shadow-xl cursor-pointer"
      aria-role="button"
      onClick={() => setFlipped(!flipped)}
    >
      <img style={frontStyles} alt={rune.name} src={rune.imageUrl}></img>
      <div style={backStyles}>back</div>
    </div>
  );
};
