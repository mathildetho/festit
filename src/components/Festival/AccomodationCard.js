import React from 'react';

const AccomodationCard = props => {
    return(
          <div className="accomodation-content">
            <div className='all-content'>
                <div src='' alt='img' className='img-accomodation' />

            <div className='desc-accomodation'>
                <h4>Nom hébergement</h4>
                <p>description hebergement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className='info-accomodation'>
                <div className='place'>
                    <p className='number'>0</p>
                    <p>couchages</p>
                </div>
                <div className='available'>
                    <p className='number'>0</p>
                    <p>disponibles</p>
                </div>
                <button>Réserver</button>
            </div>
            </div>
          </div>
    )
}

export default AccomodationCard;