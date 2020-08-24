import React from 'react';

class ArtistFilterGenre extends React.Component {
    render() {
        const {genres} = this.props;
        return genres.map((genre) =>
        <option key={genre.idstyle} value={genre.idstyle}>{genre.name}</option>
        )
    }
}

export default ArtistFilterGenre;