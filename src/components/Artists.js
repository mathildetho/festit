import React, { useState, useEffect } from 'react';
import CardSlide from './CardSlideArtist/CardSlide';
import SliderContainerArtists from './SliderContainerArtists';
import ArtistFilter from './ArtistFilter/ArtistFilter';

import axios from 'axios';


const Artists = (props, history) => {

    // all artists
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        refreshArtists()
    }, [])

    const refreshArtists = () => {
        axios.get('https://api-festit.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => {
            setArtists(data)
        })
    }


    // filtering name
    // all names
    const [names, setNames] = useState([])
    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => data.map(artist => artist.name).sort())
        .then(data => {
            setNames(data)
        })
    }, []);

    //filter name
    const filterName = (name) => {
        axios.get(`https://api-festit.herokuapp.com/api/artists/${name}`)
        .then(response => response.data)
        .then(data => {
            setNames(data)
        })
    }

    // filtering genre
    // all genres
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/style')
        .then(response => response.data)
        .then(data => {
            setGenres(data)
        })
    }, []);

    //filter genre
    const filterGenre = (idartist) => {
        axios.get(`https://api-festit.herokuapp.com/api/artists/${idartist}/style`)
        .then(response => response.data)
        .then(data => {
            setArtists(data)
        })
    }

     return (
        <div>
            <SliderContainerArtists />
            <ArtistFilter 
                genres={genres}
                filterGenre={filterGenre}
                names={names}
                filterName={filterName}
            />
            <CardSlide 
                {...props} 
                artists={artists}
            />
        </div>
    )
}

export default Artists;