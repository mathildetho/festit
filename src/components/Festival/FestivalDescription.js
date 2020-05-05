import React from 'react';
import icon from '../../img/icon-titre.png';
import location from '../../img/location.png';
import genreicon from '../../img/genre.png';
import date from '../../img/date.png';


const Festival = (props) => {
    const {festival, genre} = props;
    const style = genre.map(element => Object.values(element)).join(', ');

    return(
        <div>
            <div className='text-desc' >
                <img src={icon} alt='icon' className='icon-title' />
                <div className='text-bloc' >
                    <h2 className='title-desc' >{festival.name}</h2>
                    <p className='p-desc'>{festival.description} </p>
                        <div className='icons'>
                            <div className='icon-text'>
                                <img className='icon-desc' src={location} alt='icon-location' />
                                <p>{festival.city}, {festival.country}</p>
                            </div>
                            <div className='icon-text'>
                                <img className='icon-desc' src={date} alt='icon-location' />
   
                                <p>du {festival.startDate} au {festival.endDate}</p>
                            </div>
                            <div className='icon-text'>
                                <img className='icon-desc' src={genreicon} alt='icon-location' />
                                <p>{style}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Festival;