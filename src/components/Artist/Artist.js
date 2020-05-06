import React, {useState, useEffect} from 'react';
import ArtistCard from './ArtistCard';
import axios from 'axios';

const Artist = ({match}) => {
    const [artist, setArtist] = useState([])

    useEffect(() => {
        const nameArtist = match.params.name;
        axios.get(`https:api-festit.herokuapp.com/api/artists/${nameArtist}`)
        .then(response => response.data)
        .then(data => {
            setArtist(data[0])
        })
    }, []);


return (

    <div className ='apropos-artist'>
        <div className='container'>
            <ArtistCard 
                artist= {artist}
            />
        </div>
    </div>
)
}

export default Artist;
