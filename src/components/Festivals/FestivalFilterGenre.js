import React from 'react';
import axios from 'axios';

class FestivalFilterGenre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        }
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/style')
        .then(response=> response.data)
        .then(data => {
            this.setState({ genres: data })
        })
    }

    render() {
        const { genres }= this.state;
        return genres.map(genre =>
        <option key={genre.idstyle} value={genre.name}>{genre.name}</option>
        )
    }
}

export default FestivalFilterGenre;