import React from 'react';

const FestivalFilterGenre = (props) => {
        const { genres } = props;
        return genres.map(genre =>
        <option key={genre.idstyle} value={genre.name}>{genre.name}</option>
        )
}

export default FestivalFilterGenre;