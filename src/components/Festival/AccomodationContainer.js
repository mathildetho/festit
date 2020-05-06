import React from 'react';
import AccomodationList from './AccomodationList';

const AccomodationContainer = props => {
    const {festival,accomodations, accomodationNoAirbnb} = props;

    // const accomodationAirbnb = accomodations.filter(accomodation => accomodation.airbnb);
    // const accomodation = accomodations.filter(accomodation => !accomodation.airbnb);

    return(
        <div className={props.img ? 'accomodation airbnb-bg': 'accomodation'}>
            <h3>{props.title}</h3>
            {accomodationNoAirbnb ? 
            <>
            <div className='partenariat'>
                <h4>{props.subtitle}</h4>
                <img src={props.img} alt='airbnb-logo' />
            </div> 
            <AccomodationList 
                img={props.img} 
                accomodations={accomodations}
                festival={festival}
            />
            </>
            : <AccomodationList 
                accomodations={accomodations}
                festival={festival}
                //accomodationNoAirbnb={accomodationNoAirbnb}
            />}
        </div>
    )
}

export default AccomodationContainer;