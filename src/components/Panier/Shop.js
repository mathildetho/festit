import React from 'react';
import location from '../../img/location-purple.png';
import date from '../../img/date-purple.png';
import supp from '../../img/delete.png';

const Shop = (props) => {
    const {cart, setCart} = props
    const deleteItem = (name) => {
        const deleteItemArray = cart.filter(item => item.name !== name)
        setCart(deleteItemArray)
    };

    console.log(cart)

    return (
        <>
        {cart.map((item, index) => (
            <div className='product-container' key={index}>
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
                            <p>du {new Date(item.startDate).toLocaleDateString()} au {new Date(item.endDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="choice-product" >
                        <p>Quantité: {item.quantity}</p>
                        <button onClick={() => deleteItem(item.name)}><img className='icon-desc' src={supp} alt='icon-delete'/></button>
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