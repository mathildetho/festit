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
        <Route exact path="/Festivals" component={Festivals} />
        <Route path="/Festivals/:festivalsIndex" />
        <Route exact path="/Artists" component={Artists} />
        <Route path="/Artists/:id" component={Festivals}/>
        <Route exact path="/A-propos" component={APropos} />
        <Route exact path="/Panier" /> 
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
