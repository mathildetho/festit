import React from 'react';
import './Festival.css';
import FestivalCard from './FestivalCard';

const Festival = props => {
    return(
        <div className='apropos festival'>
        <div className='container' >
            <FestivalCard />
        </div>
    </div>
    )
}

export default Festival;