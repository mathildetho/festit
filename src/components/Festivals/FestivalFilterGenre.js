import React from 'react';

const FestivalFilterGenre = (props) => {
        const { genres, filterGenre }= props;
        return genres.map(genre =>
        <option onChange={() => filterGenre(genre.name)} key={genre.idstyle} value={genre.name}>{genre.name}</option>
        )
}

export default FestivalFilterGenre;