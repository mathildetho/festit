import React from 'react';

const FestivalFilterGenre = (props) => {
        const { festivals }= props;
        return festivals.map(genre =>
        <option key={genre.idstyle} value={genre.name}>{genre.name}</option>
        )
}

export default FestivalFilterGenre;