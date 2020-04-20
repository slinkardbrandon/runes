import React from 'react';
import './App.css';
import './assets/main.css';
import { RuneSystem } from './classes/RuneSystem';
import { ElderFuthark } from './classes/ElderFuthark';
import { RuneSystemContext } from './RuneSystemContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FlashCards } from './components/screens/FlashCards';

function App() {
  const runeSystems: RuneSystem[] = [new ElderFuthark()];

  return (
    <RuneSystemContext.Provider value={runeSystems}>
      <div className="App h-full flex flex-col">
        <Header />
        {/* TODO: Implement routing */}
        <FlashCards />
      </div>
      <Footer />
    </RuneSystemContext.Provider>
  );
}

export default App;
