import React from 'react';
import location from '../../img/location.png';
import arrow from '../../img/arrow.png';

const Shop = (props) => {
    const {cart} = props
    return (
        <>
        {cart.map(item => (
            <div className='product-container'>
                <img src={item.image} alt={item.name} className="img-product" />
                <div className='info-product'>
                    <div className='desc-product'>
                        <div className='title-product'>
                            <h4>{item.name}</h4>
                            <div className='icon-product'>
                                <img src={location} alt='emplacement' />
                                <p>{item.city}, {item.country}</p>
                            </div>
                        </div>
                        <p>{item.description}</p>
                    </div>
                    <div className="choice-product" >
                        <select>
                            <option >date</option>
                        </select>
                        <select>
                            <option >quantité</option>
                        </select>
                        <button><img src='#' alt='delete'/></button>
                    </div>
                    <div className='total' >
                        <h4>Sous-total</h4>
                        <h4>{item.price}€</h4>
                    </div>
                </div>
            </div>
        )) }
        </>
    )
}

export default Shop;