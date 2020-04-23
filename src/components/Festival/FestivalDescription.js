import React from 'react';
import icon from '../../img/icon-titre.png';
import location from '../../img/location.png';
import genre from '../../img/genre.png';
import date from '../../img/date.png';


const Festival = props => {
    return(
        <div>
            <div className='text-desc' >
                <img src={icon} alt='icon' className='icon-title' />
                <div className='text-bloc' >
                    <h2 className='title-desc' >festival name</h2>
                    <p className='p-desc'>description Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.</p>
                    <div className='icons-ticket'> 
                        <div className='icons'>
                            <div className='icon-text'>
                                <img className='icon-desc' src={location} alt='icon-location' />
                                <p>city, country</p>
                            </div>
                            <div className='icon-text'>
                                <img className='icon-desc' src={date} alt='icon-location' />
                                <p>du date début au date fin</p>
                            </div>
                            <div className='icon-text'>
                                <img className='icon-desc' src={genre} alt='icon-location' />
                                <p>genre</p>
                            </div>
                        </div>
                        <div className='button-ticket'>
                            <button>Acheter un ticket</button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Festival;