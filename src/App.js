import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Festivals from './components/Festivals/Festivals';
import APropos from './components/APropos/APropos';
import ShopContainer from './components/Panier/ShopContainer';
import Footer from './components/Footer/Footer';


import {Switch, Route} from 'react-router-dom';

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
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Festivals} />
        <Route path="/Festivals/:festivalsIndex" />
        <Route path="/Artistes" />
        <Route path="/Artistes/:artistesIndex" />
        <Route path="/A-propos" component={APropos} />
        <Route path="/Panier" component={ShopContainer} /> 
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
