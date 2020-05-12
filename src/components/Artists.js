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

    const [filterNames, setFilterNames] = useState([]);
    const [filterStyle, setFilterStyle] = useState([]);

    
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
        if(name === 'Tous') {
            refreshArtists()
        } else {
            axios.get(`https://api-festit.herokuapp.com/api/artists/${name}`)
            .then(response => response.data)
            .then(data => {
                filterStyle.length !== 0 ?
                setArtists(data)
                :
                setFilterNames(data)
                compareListArtistFilter();
            })
        }
    }

    // filtering genre
    // all genres
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/style')
        .then(response => response.data)
        .then(data => {
            setGenres(data.sort())
        })
    }, []);

    //filter genre
    const filterGenre = (genre) => {
        if(genre === 'Tous') {
            refreshArtists()
        } else {
            axios.get(`https://api-festit.herokuapp.com/api/artists/style/${genre}`)
            .then(response => response.data)
            .then(data => {
                filterNames.length == 0 ?
                setArtists(data)
                :
                setFilterStyle(data)
                compareListArtistFilter()
            })
        }
    }

    const compareListArtistFilter = () => {
        let newFilter = [];
        if(filterNames.length !== 0) {
            filterStyle.map(artist => filterNames.map(artist2 => newFilter.push(artist2)))
            setArtists(newFilter)
        }
        if(filterStyle.length !== 0) {
            filterNames.map(artist => filterStyle.map(artist2 => newFilter.push(artist2)))
            setArtists(newFilter)
        }
    }

    console.log('style',filterStyle)
    console.log('name', filterNames)


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