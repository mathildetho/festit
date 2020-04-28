import React from 'react';
import './Festival.css';
import FestivalCard from './FestivalCard';
import Accomodations from './Accomodations';

const Festival = props => {
    return(
        <div className='apropos festival'>
        <div className='container' >
            <FestivalCard />
            <Accomodations />
        </div>
    </div>
    )
}

export default Festival;