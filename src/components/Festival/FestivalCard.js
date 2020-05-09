import React from 'react';
import FestivalDescription from './FestivalDescription';
import ArtistsContainer from './ArtistsContainer';
import TicketModal from './TicketModal';


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
            <ArtistsContainer 
                festival={festival}
                {...props} 
            />
            <div className='button-ticket'>
               <TicketModal 
                   festival={festival}
               />
           </div>
           </div>
        </div>
    )
}

export default FestivalCard;