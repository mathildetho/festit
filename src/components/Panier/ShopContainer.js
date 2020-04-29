import React from 'react';
import './Shop.css';

import icon from '../../img/icon-titre.png';
import ShopList from './ShopList';
import ShopTotal from './ShopTotal';

const ShopContainer = (props) => {

    // const total = props.cartitems.reduce((acc, curr) => {return curr.amount + acc}, 0)

    return (
        <div className='Panier'>
            <div className='container' >
                <div className='title' >
                    <img className='icon-title' src={icon} alt='icon'/>
                    <h2>Panier</h2>
                </div>
                <div className='content-shop'>
                    <ShopList  />
                    <ShopTotal />
                </div>
            </div>
        </div>
    )
}

export default ShopContainer;