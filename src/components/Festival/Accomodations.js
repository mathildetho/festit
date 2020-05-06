import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AccomodationContainer from './AccomodationContainer';
import './Accomodations.css';
import airbnb from '../../img/logo-airbnb.png';

const Accomodations = props => {
    const [accomodations, setAccomodations] = useState([]);
    useEffect(() => {
        const idfestival = props.match.params.idfestival;
        axios.get(`https://api-festit.herokuapp.com/api/accomodation/festival/${idfestival}`)
        .then(response => response.data)
        .then(data => {
            setAccomodations(data)
        })
    }, [props.match.params.idfestival])

    const accomodationNoAirbnb = accomodations.filter(accomodation => !accomodation.airbnb)

    return(
        <div className='accomodations'>
            {accomodationNoAirbnb ?
                <AccomodationContainer 
                title="Dormez au coeur de la fête (ticket compris)" 
                accomodations={accomodations}
                />
                :
                <AccomodationContainer 
                title="Le luxe à portée de main" 
                subtitle='En partenariat avec'
                img={airbnb}
                accomodations={accomodations}
                />}
        </div>
    )
}

export default Accomodations;