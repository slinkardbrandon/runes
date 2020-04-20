import React from 'react';
import './App.css';
import './assets/main.css';
import { RuneSystem } from './classes/RuneSystem';
import { ElderFuthark } from './classes/ElderFuthark';
import { FlashCardController } from './components/FlashCardController';
import { RuneSystemContext } from './RuneSystemContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const runeSystems: RuneSystem[] = [new ElderFuthark()];

  return (
    <RuneSystemContext.Provider value={runeSystems}>
      <div className="App h-full flex flex-col">
        <Header />
        {/* <header className="flex p-5 align-middle bg-green-900 text-white justify-center">
          <h1 role="banner" className="flex flex-grow font-bold items-center">
            RuneStudy
          </h1>
          <div>=</div>
        </header> */}
        <FlashCardController />
      </div>
      <Footer />
    </RuneSystemContext.Provider>
  );
}

export default App;
