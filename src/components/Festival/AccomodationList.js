import React from 'react';
import AccomodationCard from './AccomodationCard';

const AccomodationList = props => {
    const {festival,accomodations, accomodationNoAirbnb} = props;

    return (
            <div className="accomodation-container">
              {accomodations ? //accomodationNoAirbnb
                accomodations.map(acco => 
                <AccomodationCard
                  accomodation={acco}
                  festival={festival}
                />)
              :
              accomodations.map(acco =>
              <AccomodationCard
                  accomodationAirbnb={acco}
                  festival={festival}
              />)
              }
          </div>
    )
}

export default AccomodationList;