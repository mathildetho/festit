import React from 'react';
import './ArtistList.css';
import ArtistItem from './ArtistItem';
/*import { Link } from 'react-router-dom';*/
import axios from 'axios';

class ArtistList extends React.Component {

state = {
    artist: []
}
componentDidMount() {
    axios.get('https://api-festit.herokuapp.com/api/artists')
    .then(response => response.data)
    .then(data => {
        this.setState({artist: data})
    })
}
    render() {
        return (
            <div className= "ArtistList-container">
                <div className='oneArtist-container'>
                    {this.state.artist.map((item, index) =>
                    <ArtistItem 
                    key= {index}
                    idartist= {item.idartist}
                    name= {item.name}
                    image_url= {item.image_url}
                    />
                    )}
                </div>

            </div>
        )
    }
}

export default ArtistList;