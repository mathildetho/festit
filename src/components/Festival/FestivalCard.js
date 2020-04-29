import React from 'react';
import FestivalDescription from './FestivalDescription';
import ArtistsContainer from './ArtistsContainer';


const FestivalCard = (props) => {
    const {festivals} = props
    return(
        <div className='description' >
            <img className='img-desc' src='#' alt='img-festival' />
           <div className='desccontent'>
            <FestivalDescription festivals={festivals} /> 
            <ArtistsContainer />
           </div>
        </div>
    )
}

export default FestivalCard;