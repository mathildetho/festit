import React from 'react';
import ShopModal from './ShopModal';

const ShopTotal = (props) => {
    const {totalPrice} = props;
    return (
            <div className='totalpay'>
                <div className='total total-all' >
                    <h4>Total</h4>
                    <h4>{totalPrice}€</h4>
                </div>
                <ShopModal 
                    totalPrice={totalPrice}
                />
            </div>
    )
}

export default ShopTotal;