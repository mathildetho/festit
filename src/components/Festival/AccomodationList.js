import React from 'react';
import AccomodationCard from './AccomodationCard';

const AccomodationList = props => {
    const {festival,accomodationAirbnb, accomodationNoAirbnb} = props;

    return (
            <div className="accomodation-container">
              {accomodationNoAirbnb ?
                accomodationNoAirbnb.map((acco, index) => 
                <AccomodationCard
                  key={index}
                  accomodation={acco}
                  festival={festival}
                />)
              :
              accomodationAirbnb.map((acco, index) =>
              <AccomodationCard
                  key={index}
                  accomodationAirbnb={acco}
                  festival={festival}
              />)
              }
          </div>
    )
}

export default AccomodationList;