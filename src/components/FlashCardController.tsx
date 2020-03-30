import React, { useState, useContext } from "react";
import { RuneSystem } from "../classes/RuneSystem";
import { Rune } from "../classes/Rune";
import { FlashCard } from "./FlashCard/FlashCard";
import { shuffleArray } from "../functions/shuffleArray";
import { Button } from "./Button";
import { Select } from "./Select";
import { RuneSystemContext } from "../RuneSystemContext";
import { ElderFuthark } from "../classes/ElderFuthark";

export const FlashCardController = () => {
  const runeSystems = useContext(RuneSystemContext);
  const [system, setSystem] = React.useState<RuneSystem>(
    runeSystems.find(system => system.name === "Elder Futhark") as RuneSystem
  );
  const [runes, setRunes] = useState<Rune[]>(() => shuffleArray(system.runes));
  React.useEffect(() => {
    setRunes(shuffleArray(system.runes));
  }, [system.runes]);

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
  const handleDropdownChange = (event: React.ChangeEvent<any>) => {
    const elderFuthark = new ElderFuthark();

    switch (event.target.value) {
      // since there is only one rune system currently, these can both fall back
      // to the elderFuthark option
      case elderFuthark.name:
      default:
        return setSystem(elderFuthark);
    }
  };

  return (
    <div className="p-4 bg-gray-200 h-full">
      <span className="flex flex-grow">
        <h1 className="flex w-full flex-grow pb-4 text-2xl">Flash Cards</h1>
        <span className="block w-4/5">
          <Select
            options={runeSystems.map(o => ({ name: o.name, value: o.name }))}
            onChange={handleDropdownChange}
          ></Select>
        </span>
      </span>
      <FlashCard key={rune.name} rune={rune} />
      <span className="flex pt-4 justify-between items-center">
        <Button
          variant="outlined"
          text="Back"
          onClick={handlePrevious}
          classes={["w-2/5"]}
        />
        <div>{`${activeIndex + 1} of ${runes.length}`}</div>
        <Button
          variant="primary"
          text="Next"
          onClick={handleNext}
          classes={["w-2/5"]}
        />
      </span>
    </div>
  );
};
