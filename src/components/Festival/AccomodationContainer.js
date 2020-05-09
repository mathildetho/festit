import React from 'react';
import AccomodationList from './AccomodationList';

const AccomodationContainer = props => {
    const {festival,accomodationAirbnb, accomodationNoAirbnb} = props;

    return(
        <div className={props.img ? 'accomodation airbnb-bg': 'accomodation'}>
            <h3>{props.title}</h3>
            {accomodationAirbnb ? 
            <>
            <div className='partenariat'>
                <h4>{props.subtitle}</h4>
                <img src={props.img} alt='airbnb-logo' />
            </div> 
            <AccomodationList 
                img={props.img} 
                accomodationAirbnb={accomodationAirbnb}
                festival={festival}
            />
            </>
            : <AccomodationList 
                accomodationNoAirbnb={accomodationNoAirbnb}
                festival={festival}
            />}
        </div>
    )
}

export default AccomodationContainer;