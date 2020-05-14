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

    //all names
    const [names, setNames] = useState([])
    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => data.map(artist => artist.name).sort())
        .then(data => {
            setNames(data)
        })
    }, []);

    // all genres
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/style')
        .then(response => response.data)
        .then(data => {
            setGenres(data.sort())
        })
    }, []);


    // // filtres emeline 
    // // filtre name
    // const filterName = async (name) => {
    //     if(name === 'Tous') {
    //         refreshArtists()
    //     } else {
    //         await axios.get(`https://api-festit.herokuapp.com/api/artists/${name}`)
    //         .then(response => response.data)
    //         .then(data => updateFilterName(data, "name")
    //         )
    //     }
    // }

    // //filtre genre
    // const filterGenre = (genre) => {
    //     if(genre === 'Tous') {
    //         refreshArtists()
    //     } else {
    //         axios.get(`https://api-festit.herokuapp.com/api/artists/style/${genre}`)
    //         .then(response => response.data)
    //         .then(data => updateFilterName(data, "style"))
    //     }
    // }

    // // met à jour directement artists ou non
    // const updateFilterName = async(data, item) => {
    //     // crée en dur 2 datas
    //     const dataName = localStorage.getItem("nameFilter")
    //     const dataStyle = localStorage.getItem("styleFilter")

    //     if(!dataName) {
    //         // met à jour artists si la data est vide
    //         localStorage.setItem('nameFilter', JSON.stringify(data))
    //         setArtists(data)
    //     } else {
    //         if(item === "style") {
    //             localStorage.setItem('styleFilter', JSON.stringify(data))
    //             await compareListArtistFilter()
    //         } else {
    //             localStorage.setItem('nameFilter', JSON.stringify(data))
    //             await compareListArtistFilter()
    //         }
    //     }
        
    //     if(!dataStyle) {
    //         localStorage.setItem('styleFilter', JSON.stringify(data))
    //         setArtists(data)
    //     } else {
    //         if(item === "name") {
    //             localStorage.setItem('nameFilter', JSON.stringify(data))
    //             await compareListArtistFilter()
    //         } else {
    //             localStorage.setItem('styleFilter', JSON.stringify(data))
    //             await compareListArtistFilter()
    //         }
    //     }
    // }

    // const compareListArtistFilter = (item) => {

    //     const parseName = localStorage.getItem("nameFilter")
    //     const parseStyle = localStorage.getItem("styleFilter")
    //     const dataName = JSON.parse(parseName)
    //     const dataStyle = JSON.parse(parseStyle)
    //     if(item === 'name') {
    //         const newArtist = dataName.map(artist => dataStyle.filter(artist2 => artist.idartist === artist2.idartist ))
    //         setArtists(newArtist[0])
    //     } else {
    //         const newArtist = dataStyle.map(artist => dataName.filter(artist2 => artist.idartist === artist2.idartist ))
    //         setArtists(newArtist[0])
    //     }
    // }
    
    
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
            axios.get(`https://api-festit.herokuapp.com/api/artists/${name}`)
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
            axios.get(`https://api-festit.herokuapp.com/api/artists/style/${genre}`)
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