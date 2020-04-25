import React from 'react';
import './App.css';
import './assets/main.css';
import { RuneSystem } from './classes/RuneSystem';
import { ElderFuthark } from './classes/ElderFuthark';
import { RuneSystemContext } from './RuneSystemContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FlashCards } from './screens/FlashCards';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ElderFutharkScreen } from './screens/ElderFutharkScreen';
import { Home } from './screens/Home';

function App() {
  const runeSystems: RuneSystem[] = [new ElderFuthark()];

  return (
    <RuneSystemContext.Provider value={runeSystems}>
      <div style={{ minHeight: '100vh' }} className="bg-gray-200">
        <div className="App h-full flex flex-col">
          <Router basename="/" hashType="slash">
            <Header />

            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route path="/flash-cards" component={FlashCards} />
              <Route path="/elder-futhark" component={ElderFutharkScreen} />
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </RuneSystemContext.Provider>
  );
}

export default App;
