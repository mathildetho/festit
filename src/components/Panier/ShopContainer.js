import React, { useContext } from 'react';
import './Shop.css';

import icon from '../../img/icon-titre.png';
import ShopList from './ShopList';
import ShopTotal from './ShopTotal';
import {ShopContext} from './ShopContext';

const ShopContainer = (props) => {

    // const total = props.cartitems.reduce((acc, curr) => {return curr.amount + acc}, 0)

    const [cart, setCart] = useContext(ShopContext);
    const totalPrice = cart.reduce((acc, curr) => acc+Number(curr.price), 0)

    return (
        <div className='Panier'>
            <div className='container' >
                <div className='title' >
                    <img className='icon-title' src={icon} alt='icon'/>
                    <h2>Panier</h2>
                </div>
                {cart.length >0 ?
                <div className='content-shop'>
                 <ShopList  cart={cart}/>
                 <ShopTotal 
                        cart={cart}
                        totalPrice={totalPrice}
                    />
                </div> 
                :  <div className='content-shop'><ShopList  cart={cart}/></div>
                }
            </div>
        </div>
    )
}

export default ShopContainer;