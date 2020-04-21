import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Festivals} />
        <Route path="/Festivals" component={Festivals} />
        <Route path="/Festivals/:festivalsIndex" />
        <Route path="/Artistes" />
        <Route path="/Artistes/:artistesIndex" />
        <Route path="/A-propos"  />
        <Route path="/Panier" /> 
      </Switch>
    </div>
  );
}

export default App;
