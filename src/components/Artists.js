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
        axios.get(`${process.env.REACT_APP_LOCALHOST}artists`)
        .then(response => response.data)
        .then(data => {
            setArtists(data)
        })
    }

    //all names
    const [names, setNames] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}artists`)
        .then(response => response.data)
        .then(data => data.map(artist => artist.name).sort())
        .then(data => {
            setNames(data)
        })
    }, []);

    // all genres
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}style`)
        .then(response => response.data)
        .then(data => {
            setGenres(data.sort())
        })
    }, []);
    
    // filtres
    const [filterNames, setFilterNames] = useState([]);
    const [filterStyle, setFilterStyle] = useState([]);
    useEffect(() => {
        filterName()
        filterGenre()
    }, [])

    // permet de comparer les 2 arrays filtres
    const compareArtistFiltered = async (data, nameFilter) => {
        let newArtists = [];
        // si on touche au genre/name : filtre l'array des names/style et voit si le style/name fait parti de l'artiste ou non, push le résultat
        // si ce n'est pas vide affiche l'artiste selon le genre/name sélectionné sinon, affiche un message sans artiste
        if(nameFilter === "genre" ){
            data.map(item =>  filterNames.filter(artist => artist.idartist === item.idartist).map(artist => newArtists.push(artist)))
            setArtists(newArtists)
        } else {
            data.map(item =>  filterStyle.filter(artist => artist.idartist === item.idartist).map(artist => newArtists.push(artist)))
            setArtists(newArtists)
        }
        if(filterStyle.length === 0 && filterNames.length === 0) {
            setArtists(data)
        }
    }

    //filtre en fonction du name
    const filterName = (name) => {
        //si on appuie sur tous et que genre et déjà sur Tous : mets tous les artistes
        //sinon appel api en fonction du name sélectionné, met à jour la liste des artists avec que ce name, met à jour le filtre name et compare
        if(name === "Tous" && filterStyle.length === 0) {
            refreshArtists()
        } else {
            axios.get(`${process.env.REACT_APP_LOCALHOST}artists/${name}`)
                .then(response => response.data)
                .then(data => {
                    setArtists(data)
                    setFilterNames(data)
                    compareArtistFiltered(data, "name")
                }
            )
        }  
    }

    //filtre en fonction du name
    const filterGenre = (genre) => {
        //si on appuie sur tous et que name et déjà sur Tous : mets tous les artistes
        //sinon appel api en fonction du genre sélectionné, met à jour la liste des artists avec ce genre, met à jour le filtre style et compare
        if(genre === "Tous" && filterNames.length === 0) {
            refreshArtists()
        } else {
            axios.get(`${process.env.REACT_APP_LOCALHOST}artists/style/${genre}`)
                .then(response => response.data)
                .then(data => {
                    setArtists(data)
                    setFilterStyle(data)
                    compareArtistFiltered(data, "genre")
                }
            ) 
        }
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