import React from 'react';
import axios from 'axios';
import Artist from '../../img/artist.png';


class ArtistFilterItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        axios.get('https://api-festit.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => {
            this.setState({ artists: data })
        })
    }

    render() {
       const { artists } = this.state;
        return artists.map((artist) =>
            <option key={artist.idartist} value={artist.name} >{artist.name}
            </option>
        )
    }
}

export default ArtistFilterItem;