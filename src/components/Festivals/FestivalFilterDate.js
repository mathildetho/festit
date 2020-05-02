import React from 'react';

const FestivalFilterDate = (props) => {
        const { festivals } = props;
        return festivals.map((festival) =>
            <option key={festival.idfestival} value={festival.startDate} >{festival.startDate}
            </option>
        )
}

export default FestivalFilterDate;