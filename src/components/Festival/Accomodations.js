import React from 'react';
import AccomodationContainer from './AccomodationContainer';
import './Accomodations.css';
import airbnb from '../../img/logo-airbnb.png';

const Accomodations = props => {
    return(
        <div className='accomodations'>
            <AccomodationContainer 
            title="Dormez au coeur de la fête" 
            />
            <AccomodationContainer 
            title="Le luxe à portée de main" 
            subtitle='En partenariat avec'
            img={airbnb}
            />
        </div>
    )
}

export default Accomodations;