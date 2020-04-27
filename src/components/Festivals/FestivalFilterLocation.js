import React from 'react';
import axios from 'axios';

class FestivalFilterLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            festivals: [],
        }
    }

    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            this.setState({ festivals: data })
        })
    }

    render() {
       const { festivals } = this.state;
        return festivals.map((festival) =>
            <option key={festival.idfestival} value={festival.country} >{festival.country}
            </option>
        )
    }
}

export default FestivalFilterLocation;