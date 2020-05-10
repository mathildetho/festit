import React from 'react';
import Shop from './Shop';

const ShopList = (props) => {
    const {cart, setCart} =props
    return (
        <>
        {cart.length >0 ? 
            <>
                <p className='length-cart'>Vous avez {cart.length} produit dans votre panier</p>
                <Shop 
                    cart={cart}
                    setCart={setCart}
                />
            </>
            :
            <div>
                <p className='length-cart'>Votre panier est vide, il est temps d'y remédier !</p>
                <img className='gif-cart' src='https://media.giphy.com/media/m6aIggqT7oB4A/source.gif'/>
            </div>
        }
        </>
    )
}

export default ShopList;