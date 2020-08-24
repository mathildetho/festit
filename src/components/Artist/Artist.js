import React, {useState, useEffect} from 'react';
import ArtistCard from './ArtistCard';
import axios from 'axios';

const Artist = (props, history) => {
    const [artist, setArtist] = useState([])

    useEffect(() => {
        const idArtist = props.match.params.id;
        axios.get(`${process.env.REACT_APP_LOCALHOST}artists/id/${idArtist}`)
        .then(response => response.data)
        .then(data => {
            setArtist(data[0])
        })
    }, [props.match.params.id])

    const [genre, setGenre]= useState([])
    useEffect(() => {
        const idArtist = props.match.params.id;
        axios.get(`${process.env.REACT_APP_LOCALHOST}artists/${idArtist}/style`)
        .then(response => response.data)
        .then(data => setGenre(data[0]))
        })

    console.log(genre)

    return (

        <div className ='apropos-artist'>
            <div className='container'>
                <ArtistCard 
                    artist= {artist}
                    genre= {genre}
                    {...props}
                />
            </div>
        </div>
)
}

export default Artist;
