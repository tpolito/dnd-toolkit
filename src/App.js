import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InitiativeCounter from './components/pages/InitiativeCounter';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Reference from './components/pages/Reference';
import Spells from './components/pages/Spells';
import SpellDesc from './components/pages/SpellDesc';
import Conditions from './components/pages/Conditions';
import Home from './components/pages/Home';

import './App.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import InitState from './context/InitState';

const App = () => {
  // MaterialCSS Init
  useEffect(() => {
    M.AutoInit();
    // eslint-disable-next-line
  }, []);
  return (
    <InitState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/init" component={InitiativeCounter} />
              <Route exact path="/about" component={About} />
              <Route exact path="/ref" component={Reference} />
              <Route exact path="/conditions" component={Conditions} />
              <Route exact path="/spells/:page" component={Spells} />
              <Route exact path="/spells/desc/:slug" component={SpellDesc} />
            </div>
          </Switch>
          <footer className="right">© 2019 Copyright DnDToolKit</footer>
        </div>
      </Router>
    </InitState>
  );
};

export default App;
