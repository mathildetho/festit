import React from 'react';

const FestivalFilterLocation = (props) => {
    const { location } = props;
    return location.map((country, index) => (
        <option key={index} value={country} >{country}
        </option>
    ))
}

export default FestivalFilterLocation;