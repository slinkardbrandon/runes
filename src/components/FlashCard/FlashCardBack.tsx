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
    <div style={styles} className="font-semibold text-xl">
      {rune.name}
      <hr />
      <span>Aett: {rune.aett?.name}</span>
    </div>
  );
};
