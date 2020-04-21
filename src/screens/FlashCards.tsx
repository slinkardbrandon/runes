import React from 'react';
import { RuneSystemContext } from '../RuneSystemContext';
import { Select } from '../components/Select';
import { RuneSystem } from '../classes/RuneSystem';
import { AettOfFreya } from '../classes/aettir/Freya';
import { AettOfHeimdall } from '../classes/aettir/Heimdall';
import { AettOfTiwaz } from '../classes/aettir/Tiwaz';
import { shuffleArray } from '../functions/shuffleArray';
import { Rune } from '../classes/Rune';
import { FlashCardController } from '../components/FlashCardController';
import { getRunesForAett } from '../functions/getRunesForAett';
import { Gear } from '../components/Gear';
import { Expando } from '../components/Expando';
import { useCookie } from '../hooks/useCookie';

export const FlashCards = () => {
  const aettOfFreya = new AettOfFreya();
  const aettOfHeimdall = new AettOfHeimdall();
  const aettOfTiwaz = new AettOfTiwaz();

  const [aett, setAett] = useCookie('aett', 'all');

  const runeSystems = React.useContext(RuneSystemContext);
  // const [aett, setAett] = React.useState<Aettir | 'all'>('all');
  const [system] = React.useState<RuneSystem>(
    runeSystems.find(system => system.name === 'Elder Futhark') as RuneSystem,
  );
  const [runes, setRunes] = React.useState<Rune[]>(() =>
    shuffleArray(system.runes),
  );
  const [settingsExpanded, setSettingsExpanded] = React.useState(false);

  React.useEffect(() => {
    switch (aett) {
      case aettOfFreya.name:
      case aettOfHeimdall.name:
      case aettOfTiwaz.name:
        return setRunes(shuffleArray(getRunesForAett(system, aett)));
      case 'all':
      default:
        return setRunes(shuffleArray(system.runes));
    }
  }, [
    system,
    system.runes,
    aett,
    aettOfFreya.name,
    aettOfHeimdall.name,
    aettOfTiwaz.name,
  ]);

  const handleAettirChange = (event: React.ChangeEvent<any>) => {
    switch (event.target.value) {
      case aettOfFreya.name:
        return setAett(aettOfFreya.name);
      case aettOfHeimdall.name:
        return setAett(aettOfHeimdall.name);
      case aettOfTiwaz.name:
        return setAett(aettOfTiwaz.name);
      default:
        return setAett('all');
    }
  };

  return (
    <div className="p-4 bg-gray-200 h-full">
      <span className="flex flex-grow">
        <h1 className="flex w-full flex-grow pb-4 text-2xl">Flash Cards</h1>
        <Gear onClick={() => setSettingsExpanded(!settingsExpanded)} />
      </span>
      <Expando expanded={settingsExpanded}>
        <div className="bg-white p-5 mb-3">
          <div className="my-3">
            <label className="block">Aett</label>
            <Select
              options={['all', 'Freya', 'Heimdall', 'Tiwaz'].map(v => ({
                name: v,
                value: v,
              }))}
              value={aett}
              onChange={handleAettirChange}
              wrapperClasses={['w-40']}
            ></Select>
          </div>
        </div>
      </Expando>

      <FlashCardController runes={runes} />
    </div>
  );
};
