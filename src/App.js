import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';
import APropos from './components/APropos/APropos';
import Footer from './components/Footer/Footer';
import Festival from './components/Festival/Festival';
import ScrollToTop from './components/ScrollTopTop';

import {Switch, Route} from 'react-router-dom';
import Artists from './components/Artists';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Festivals} />
        <Route path="/Festival/:idfestival" component={Festival} />
        <Route exact path="/Artistes" component={Artists}/>
        <Route path="/Artistes/:artistesIndex" />
        <Route path="/A-propos" component={APropos} />
        <Route path="/Panier" /> 
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
