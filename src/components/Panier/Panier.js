import React from 'react';
import './Panier.css';

import icon from '../../img/icon-titre.png';

const Panier = () => {
    return (
        <div className='Panier'>
            <div className='container' >
                <div className='title' >
                    <img className='icon-title' src={icon} alt='icon'/>
                    <h2>Panier</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Panier;