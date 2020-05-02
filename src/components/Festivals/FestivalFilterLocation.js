import React from 'react';

const FestivalFilterLocation = (props) => {
       const { festivals } = props;
        return festivals.map((festival) =>
            <option key={festival.idfestival} value={festival.country} >{festival.country}
            </option>
        )
}

export default FestivalFilterLocation;