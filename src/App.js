import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';
import APropos from './components/APropos/APropos';
import Panier from './components/Panier/Panier';
import Footer from './components/Footer/Footer';


import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Festivals} />
        <Route path="/Festivals/:festivalsIndex" />
        <Route path="/Artistes" />
        <Route path="/Artistes/:artistesIndex" />
        <Route path="/A-propos" component={APropos} />
        <Route path="/Panier" component={Panier} /> 
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
