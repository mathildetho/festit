import React from 'react';

class ArtistFilterGenre extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {genres} = this.props;
        return genres.map((genre) =>
        <option key={genre.idstyle} value={genre.name}>{genre.name}</option>
        )
    }
}

export default ArtistFilterGenre;