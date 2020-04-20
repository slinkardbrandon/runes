import React from 'react';
import { Rune } from '../../classes/Rune';

interface IFlashCardBack {
  rune: Rune;
  flipped: boolean;
}

export const FlashCardBack = ({ flipped, rune }: IFlashCardBack) => {
  const styles = {
    display: flipped ? undefined : 'none',
  };

  return (
    <div style={styles} className=" text-xl text-center">
      <span className="font-semibold text-2xl">{rune.name}</span>
      <hr />
      <span>Aett: {rune.aett?.name}</span>
    </div>
  );
};
