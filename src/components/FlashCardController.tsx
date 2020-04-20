import React, { useState } from 'react';
import { FlashCard } from './FlashCard/FlashCard';
import { Button } from './Button';
import { Rune } from '../classes/Rune';

interface IFlashCardControllerProps {
  runes: Rune[];
}

export const FlashCardController = ({ runes }: IFlashCardControllerProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const rune = runes[activeIndex];
  const runeCount = runes.length - 1;

  const handlePrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(runeCount);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const handleNext = () => {
    if (activeIndex === runeCount) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div>
      <FlashCard key={rune.name} rune={rune} />
      <span className="flex pt-4 justify-between items-center">
        <Button
          variant="outlined"
          text="Back"
          onClick={handlePrevious}
          classes={['w-2/5']}
        />
        <div>{`${activeIndex + 1} of ${runes.length}`}</div>
        <Button
          variant="primary"
          text="Next"
          onClick={handleNext}
          classes={['w-2/5']}
        />
      </span>
    </div>
  );
};
