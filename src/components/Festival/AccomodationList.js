import React from 'react';
import AccomodationCard from './AccomodationCard';

const AccomodationList = props => {
    return (
          <div className="accomodation-container">
            {props.img ?
            <div>
              <AccomodationCard img={props.img}/>
              <AccomodationCard img={props.img}/>
              <AccomodationCard img={props.img}/>
            </div>
            : <div>
              <AccomodationCard />
              <AccomodationCard />
              <AccomodationCard />
            </div>}
          </div>
    )
}

export default AccomodationList;