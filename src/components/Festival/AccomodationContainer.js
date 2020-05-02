import React from 'react';
import AccomodationList from './AccomodationList';

const AccomodationContainer = props => {
    const {accomodations} = props;

    const accomodationAirbnb = accomodations.filter(accomodation => accomodation.airbnb);
    console.log('airbnb', accomodationAirbnb)

    const accomodation = accomodations.filter(accomodation => !accomodation.airbnb);
    console.log('no airbnb', accomodation)

    return(
        <div className={props.img ? 'accomodation airbnb-bg': 'accomodation'}>
            <h3>{props.title}</h3>
            {props.img && accomodationAirbnb ? 
            <>
            <div className='partenariat'>
                <h4>{props.subtitle}</h4>
                <img src={props.img} alt='airbnb-logo' />
            </div> 
            <AccomodationList 
                img={props.img} 
                accomodationAirbnb={accomodationAirbnb}
            />
            </>
            : <AccomodationList 
                accomodation={accomodation}
            />}
        </div>
    )
}

export default AccomodationContainer;