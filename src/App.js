import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';
import APropos from './components/APropos/APropos';
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import Artists from './components/Artists';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Festivals} />
        <Route path="/Festivals" component={Festivals} />
        <Route path="/Festivals/:festivalsIndex" />
        <Route path="/Artists" component={Artists} />
        <Route path="/Artists/:artistesIndex" />
        <Route path="/A-propos" component={APropos} />
        <Route path="/Panier" /> 
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
