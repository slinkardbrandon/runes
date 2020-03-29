import React from "react";
import "./App.css";
import "./assets/main.css";
import { Dropdown } from "./components/Dropdown";
import { RuneSystem } from "./classes/RuneSystem";
import { ElderFuthark } from "./classes/ElderFuthark";
import { FlashCardController } from "./components/FlashCardController";

function App() {
  const elderFuthark = new ElderFuthark();
  const runeSystems: Array<RuneSystem> = [elderFuthark];
  const [system, setSystem] = React.useState<RuneSystem>(elderFuthark);

  const handleDropdownChange = (event: React.ChangeEvent<any>) => {
    switch (event.target.value) {
      // since there is only one rune system currently, these can both fall back
      // to the elderFuthark option
      case elderFuthark.name:
      default:
        return setSystem(elderFuthark);
    }
  };

  return (
    <div className="App h-full">
      <header className="flex p-5 align-middle bg-green-900 text-white justify-center">
        <h1 role="banner" className="flex flex-grow font-bold items-center">
          RuneStudy
        </h1>
        <div>
          <Dropdown options={runeSystems} onChange={handleDropdownChange} />
        </div>
      </header>
      <FlashCardController system={system} />
    </div>
  );
}

export default App;
