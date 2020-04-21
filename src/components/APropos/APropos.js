import React from 'react';
import './APropos.css';

import icon from '../../img/icon-titre.png';
import AboutConcept from './AboutConcept';
import AboutLineUp from './AboutLineUp';

const APropos = () => {
    return (
        <div className='apropos'>
            <div className='container' >
                <div className='title' >
                    <img className='icon-title' src={icon} alt='icon'/>
                    <h2>À propos</h2>
                </div>
                <AboutConcept />
                <AboutLineUp />
            </div>
        </div>
    )
}

export default APropos;