import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InitiativeCounter from './components/pages/InitiativeCounter';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Reference from './components/pages/Reference';
import Spells from './components/pages/Spells';
import SpellDesc from './components/spells/SpellDesc';
import Conditions from './components/pages/Conditions';
import Home from './components/pages/Home';
import Weapons from './components/pages/Weapons';
import WeaponsDesc from './components/weapons/WeaponsDesc';
import NPCGen from './components/npcgen/NPCGen';

import Test from './components/pages/Test'

import './App.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import InitState from './context/init/InitState';

const App = () => {
  // MaterialCSS Init
  useEffect(() => {
    // Enables materialize CSS javascript functions
    M.AutoInit();
    // eslint-disable-next-line
  }, []);
  return (
    <InitState>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <main>
              <div className='container'>
                <Route exact path='/' component={Home} />
                <Route
                  exact
                  path='/init'
                  component={InitiativeCounter}
                  title='Initiative Counter'
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/ref' component={Reference} />
                <Route exact path='/conditions' component={Conditions} />
                <Route exact path='/npc-gen' component={NPCGen} />
                <Route exact path='/spells/' component={Spells} />
                <Route exact path='/spells/desc/:id' component={SpellDesc} />
                <Route exact path='/weapons/' component={Weapons} />
                <Route exact path='/weapons/desc/:slug' component={WeaponsDesc} />
              </div>
            </main>
          </Switch>
          {/* <footer className="page-footer">© 2019 Copyright DnDToolKit</footer> */}
        </div>
      </Router>
    </InitState>
  );
};

export default App;
