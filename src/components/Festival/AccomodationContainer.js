import React from 'react';
import AccomodationList from './AccomodationList';

const AccomodationContainer = props => {
    return(
        <div className={props.img ? 'accomodation airbnb-bg': 'accomodation'}>
            <h3>{props.title}</h3>
            {props.subtitle && props.img ? 
            <div>
            <div className='partenariat'>
                <h4>{props.subtitle}</h4>
                <img src={props.img} alt='airbnb-logo' />
            </div> 
            <AccomodationList img={props.img} />
            </div>
            : <AccomodationList />}
        </div>
    )
}

export default AccomodationContainer;