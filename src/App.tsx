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

function App() {
  const runeSystems: RuneSystem[] = [new ElderFuthark()];

  return (
    <RuneSystemContext.Provider value={runeSystems}>
      <div style={{ minHeight: '100vh' }} className="bg-gray-200">
        <div className="App h-full flex flex-col">
          <Router basename="/" hashType="slash">
            <Header />

            {/* Routes live here */}
            <Switch>
              <Route path="/flash-cards" component={FlashCards} />
              <Route path="/elder-futhark" component={ElderFutharkScreen} />
              {/* Due to how react router handles pattern matching,
              the default route, commonly associated with "home" should live
              last, this is because the router accepts the first matching partial
              so that it can easily support sub-routes, etc. */}
              <Route exact path="/">
                {/* TODO: Setup some wizard that asks for user input the
                first time they use the website, store the data in a cookie
                or local storage, then pull that data on the other pages. */}
                <div>home</div>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </RuneSystemContext.Provider>
  );
}

export default App;
