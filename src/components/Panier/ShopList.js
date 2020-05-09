import React from 'react';
import Shop from './Shop';

const ShopList = (props) => {
    const {cart} =props
    return (
        <>
        {cart.length >0 ? 
            <>
                <p className='length-cart'>Vous avez {cart.length} produit dans votre panier</p>
                <Shop 
                    cart={cart}
                />
            </>
            :
            <p className='length-cart'>Votre panier est vide, il est temps d'y remédier !</p>
        }
        </>
    )
}

export default ShopList;