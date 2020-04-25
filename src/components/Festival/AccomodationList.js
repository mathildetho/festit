import React from 'react';
import AccomodationCard from './AccomodationCard';

const AccomodationList = props => {
    return(
          <div className="accomodation-container">
            <AccomodationCard />
            <AccomodationCard />
            <AccomodationCard />
          </div>
    )
}

export default AccomodationList;