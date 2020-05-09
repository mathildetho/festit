import React from 'react';
import arrow from '../../img/arrow.png';

const ShopTotal = (props) => {
    const {totalPrice} = props;
    console.log(totalPrice)
    return (
            <div className='totalpay'>
                <div className='total total-all' >
                    <h4>Total</h4>
                    <h4>{totalPrice}€</h4>
                </div>
                <button>Paiement<img src={arrow} alt='paiement' className='arrow-pay'/></button>
            </div>
    )
}

export default ShopTotal;