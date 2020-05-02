import React from 'react';
import AccomodationCard from './AccomodationCard';

const AccomodationList = props => {
    const {accomodation, accomodationAirbnb} = props;

    return (
            <div className="accomodation-container">
              {accomodation ?
                accomodation.map(acco => 
                <AccomodationCard
                  accomodation={acco}
                />)
              : null }
              {accomodationAirbnb ?
                accomodationAirbnb.map(acco =>
              <AccomodationCard
                  accomodationAirbnb={accomodationAirbnb}
              />)
              : null
              }
          </div>
    )
}

export default AccomodationList;