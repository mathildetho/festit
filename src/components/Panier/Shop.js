import React from 'react';
import location from '../../img/location.png';
import arrow from '../../img/arrow.png';

const Shop = (props) => {

    return (
            <div className='product-container'>
                <div className="img-product" />
                <div className='info-product'>
                    <div className='desc-product'>
                        <div className='title-product'>
                            <h4>product name</h4>
                            <div className='icon-product'>
                                <img src={location} alt='emplacement' />
                                <p>city, country</p>
                            </div>
                        </div>
                        <p>Description product Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.</p>
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
                        <h4>000€</h4>
                    </div>
                </div>
            </div>
    )
}

export default Shop;