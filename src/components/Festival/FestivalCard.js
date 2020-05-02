import React from 'react';
import FestivalDescription from './FestivalDescription';
import ArtistsContainer from './ArtistsContainer';


const FestivalCard = (props) => {
    const {festival, genre} = props
    return(
        <div className='description' >
            <div className='containerimg'>
                <div className='purpleop' />
                <img className='img-desc' src={festival.image1} alt='img-festival' />
            </div>
           <div className='desccontent'>
            <FestivalDescription 
                festival={festival} 
                genre={genre}
            /> 
            <ArtistsContainer />
            <div className='button-ticket'>
               <button>Acheter un ticket</button>
           </div>
           </div>
        </div>
    )
}

export default FestivalCard;