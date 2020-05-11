import React from 'react';
import axios from 'axios';

class ArtistFilterGenre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: []
        }
    }
    componentDidMount() {
        axios.get('https://api-festit.herokuapp.com/api/style')
        .then(response=> response.data)
        .then(data => {
            this.setState({ style: data })
        })
    }

    render() {
        const { style }= this.state;
        return style.map((oneStyle) =>
        <option key={oneStyle.idstyle} value={oneStyle.name}>{oneStyle.name}</option>
        )
    }
}

export default ArtistFilterGenre;