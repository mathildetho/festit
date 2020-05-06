import React from 'react';

const FestivalFilterDate = (props) => {
        const { date } = props;
        return date.map((date, index) =>
            <option key={index} value={date} >{date}
            </option>
        )
}

export default FestivalFilterDate;