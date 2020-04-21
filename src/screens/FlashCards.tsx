import React from 'react';
import { RuneSystemContext } from '../RuneSystemContext';
import { Select } from '../components/Select';
import { RuneSystem } from '../classes/RuneSystem';
import { Aettir } from '../classes/aettir/Aettir';
import { AettOfFreya } from '../classes/aettir/Freya';
import { AettOfHeimdall } from '../classes/aettir/Heimdall';
import { AettOfTiwaz } from '../classes/aettir/Tiwaz';
import { shuffleArray } from '../functions/shuffleArray';
import { Rune } from '../classes/Rune';
import { FlashCardController } from '../components/FlashCardController';
import { getRunesForAett } from '../functions/getRunesForAett';
import { Gear } from '../components/Gear';
import { Expando } from '../components/Expando';

export const FlashCards = () => {
  const runeSystems = React.useContext(RuneSystemContext);
  const [aett, setAett] = React.useState<Aettir | 'all'>('all');
  const [system] = React.useState<RuneSystem>(
    runeSystems.find(system => system.name === 'Elder Futhark') as RuneSystem,
  );
  const [runes, setRunes] = React.useState<Rune[]>(() =>
    shuffleArray(system.runes),
  );
  const [settingsExpanded, setSettingsExpanded] = React.useState(false);

  React.useEffect(() => {
    if (aett === 'all') {
      setRunes(shuffleArray(system.runes));
    } else {
      setRunes(shuffleArray(getRunesForAett(system, aett.name)));
    }
  }, [system, system.runes, aett]);

  // const elderFuthark = new ElderFuthark();
  const aettOfFreya = new AettOfFreya();
  const aettOfHeimdall = new AettOfHeimdall();
  const aettOfTiwaz = new AettOfTiwaz();

  // const handleRuneSystemChange = (event: React.ChangeEvent<any>) => {
  //   switch (event.target.value) {
  //     // since there is only one rune system currently, these can both fall back
  //     // to the elderFuthark option
  //     case elderFuthark.name:
  //     default:
  //       return setSystem(elderFuthark);
  //   }
  // };

  const handleAettirChange = (event: React.ChangeEvent<any>) => {
    switch (event.target.value) {
      case aettOfFreya.name:
        return setAett(aettOfFreya);
      case aettOfHeimdall.name:
        return setAett(aettOfHeimdall);
      case aettOfTiwaz.name:
        return setAett(aettOfTiwaz);
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
          {/* If I ever implement a second rune system, it should be easy enough to
              re-enable some of the code here, but for now I'll leave it commented since
              it will all get thrown away during webpack minification anyways */}
          {/* <div className="my-3">
            <label className="block">Rune System</label>
            <Select
              options={runeSystems.map(o => ({ name: o.name, value: o.name }))}
              onChange={handleRuneSystemChange}
              wrapperClasses={['w-40']}
            ></Select>
          </div> */}
          <div className="my-3">
            <label className="block">Aett</label>
            <Select
              options={['all', 'Freya', 'Heimdall', 'Tiwaz'].map(v => ({
                name: v,
                value: v,
              }))}
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
