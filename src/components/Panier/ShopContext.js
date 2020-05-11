import React, {useState} from 'react';

//https://www.youtube.com/watch?v=hhAT0CJDWqM
//context
export const ShopContext = React.createContext();

//provider
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <ShopContext.Provider value={[cart, setCart]}>
      {props.children}
    </ShopContext.Provider>
  )
}