import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';
import APropos from './components/APropos/APropos';
import ShopContainer from './components/Panier/ShopContainer';
import Footer from './components/Footer/Footer';
import Festival from './components/Festival/Festival';
import Error from './components/Error';
import ScrollToTop from './components/ScrollTopTop';

import {Switch, Route} from 'react-router-dom';
import Artists from './components/Artists';
import Artist from './components/Artist/Artist';
import {CartProvider} from './components/Panier/ShopContext';

const App = () => {
  return (
    <CartProvider >
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Festivals} />
          <Route path="/Festival/:idfestival" component={Festival} />
          <Route exact path="/Artistes" component={Artists}/>
          <Route path="/Artistes/:id" component ={Artist} />
          <Route path="/A-propos" component={APropos} />
          <Route path="/Panier" component={ShopContainer}/> 
          <React component={Error} />
        </Switch>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
