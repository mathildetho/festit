import React from 'react';
import location from '../../img/location.png';
import date from '../../img/date.png';

const Shop = (props) => {
    const {cart} = props
    const startDate = new Date(cart.map(item=>item.startDate))
    const endDate = new Date(cart.map(item=>item.endDate))
    console.log(startDate)
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
                                <img src={location} alt='emplacement' className='icon-desc'/>
                                <p>{item.city}, {item.country}</p>
                            </div>
                        </div>
                        <p>{item.description}</p>
                        <div className='icon-date'>
                            <img src={date} alt='date' className='icon-desc'/>
                            <p>du {startDate.toLocaleDateString()} au {endDate.toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="choice-product" >
                        <p>Quantité: {item.quantity}</p>
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