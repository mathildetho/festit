import React from 'react';
import AccomodationModal from './AccomodationModal';

const AccomodationCard = props => {
    const {accomodation, accomodationAirbnb} = props;
    console.log(accomodation)
    return(
            <div className="accomodation-content">
            {accomodationAirbnb ? 
                <div className='all-content'>
                    <img src={accomodationAirbnb.image1} alt={accomodationAirbnb.namePackage} className='img-accomodation' />
                    <div className='desc-accomodation'>
                        <h4>{accomodationAirbnb.namePackage}</h4>
                        <p>{accomodationAirbnb.description}</p>
                    </div>
                    <div className='info-accomodation info-airbnb'>
                        <div className='list-info' >
                            <div>
                                <div className='km' >
                                    <p className='number'>{accomodationAirbnb.km}</p>
                                    <p>kms</p>
                                </div>
                                <p>du festival</p>
                            </div>
                            <div className='place'>
                                <p className='number'>{accomodationAirbnb.numberPlace}</p>
                                <p>couchages</p>
                            </div>
                            <div className='available'>
                                <p className='number'>{accomodationAirbnb.placeAvailable}</p>
                                <p>disponibles</p>
                            </div>
                        </div>
                        <AccomodationModal 
                                accomodation={accomodationAirbnb}
                            />
                    </div>
                </div>
                : 
                    <div className='all-content'>
                        <img src={accomodation.image1} alt={accomodation.namePackage} className='img-accomodation' />
                        <div className='desc-accomodation'>
                            <h4>{accomodation.namePackage}</h4>
                            <p>{accomodation.description}</p>
                        </div>
                        <div className='info-accomodation'>
                            <div className='place'>
                                <p className='number'>{accomodation.numberPlace}</p>
                                <p>couchages</p>
                            </div>
                            <div className='available'>
                                <p className='number'>{accomodation.placeAvailable}</p>
                                <p>disponibles</p>
                            </div>
                            <AccomodationModal 
                                accomodation={accomodation}
                            />
                        </div>
                    </div>
                }   
          </div>
    )
}

export default AccomodationCard;