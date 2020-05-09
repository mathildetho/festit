import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';
import APropos from './components/APropos/APropos';
import ShopContainer from './components/Panier/ShopContainer';
import Footer from './components/Footer/Footer';
import Festival from './components/Festival/Festival';
import ScrollToTop from './components/ScrollTopTop';

import {Switch, Route} from 'react-router-dom';
import Artists from './components/Artists';
import Artist from './components/Artist/Artist';
import {CartProvider} from './components/Panier/ShopContext';

const App = () => {

  // const [cartItems, setCartItems] = useState([])

  // const addToCart = (key, name, amount) => {
  //   if (cartItems.indexOf(key) < 0) {
  //     const cartItems = cartItems.concat({
  //       key: key,
  //       name: name,
  //       amount: amount
  //     });
  //     setCartItems({ cartItems });
  //   }
  // };
  // a envoyer à la page festival boutton ajouter au panier

  // const removeFromCart = key => {
  //   const cartItems = cartItems.filter(item => item.key !== key);
  //   setCartItems({ cartItems });
  // };
  // a envoyer a la page panier

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Festivals} />
          <Route path="/Festival/:idfestival" component={Festival} />
          <Route exact path="/Artistes" component={Artists}/>
          <Route path="/Artistes/:name" component ={Artist} />
          <Route path="/A-propos" component={APropos} />
          <Route path="/Panier" component={ShopContainer} /> 
        </Switch>
        < Footer />
      </div>
    </CartProvider>
  );
}

export default App;
