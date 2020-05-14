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


    // // filtres
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

    // filtre name
    const filterName = async(name) => {
        let newArtist;
        if(filterStyle.length === 0) {
            if(name === 'Tous') {
                refreshArtists()
                setFilterNames([])
                
                console.log('refresh artists', artists, 'names',filterNames)
            } else {
                await axios.get(`https://api-festit.herokuapp.com/api/artists/${name}`)
                .then(response => response.data)
                .then(data => newArtist=data) 
                setArtists(newArtist)
                setFilterNames(artists)

                console.log('new',newArtist)
                console.log('artists',artists)
                console.log('name style=0',filterNames)
            }
        } else {
            newArtist = filterStyle.map(artist => filterNames.filter(artist2 => artist.idartist === artist2.idartist ))
            await axios.get(`https://api-festit.herokuapp.com/api/artists/${name}`)
            .then(response => response.data)
            .then(data => setFilterNames(data))
            setArtists(newArtist)

            console.log('name',filterNames)
            console.log('style',filterStyle)
            console.log('new',newArtist)
        }
    }

    //filtre genre
    const filterGenre = async(genre) => {
        let newArtist;
        if(filterNames.length === 0) {
            if(genre === 'Tous') {
                refreshArtists()
                setFilterStyle([])

                console.log('refresh artists', artists, 'names',filterStyle)
            } else {
                await axios.get(`https://api-festit.herokuapp.com/api/artists/style/${genre}`)
                .then(response => response.data)
                .then(data => newArtist=data) 
                setArtists(newArtist)
                setFilterStyle(artists)

                console.log('new',newArtist)
                console.log('artists',artists)
                console.log('name style=0',filterStyle)
            }
        } else {
            newArtist = filterName.map(artist => filterStyle.filter(artist2 => artist.idartist === artist2.idartist ))
            await axios.get(`https://api-festit.herokuapp.com/api/artists/style/${genre}`)
            .then(response => response.data)
            .then(data => setFilterStyle(data))
            setArtists(newArtist)

            console.log('name',filterStyle)
            console.log('style',filterStyle)
            console.log('new',newArtist)
        }
    }

    // const compareListArtistFilter = async(data) => {
    //     //name
    //     if(filterStyle.length === 0) {
    //         // maj les artists directement + rajoute l'artiste sélectionné dans le filtre des noms
    //         await setArtists(data)
    //         setFilterNames(data)
    //     } else {
    //         // maj le filtre des noms et compare avec filtre genre puis maj les artists
    //         await setFilterNames(data)
    //         const newArtist = filterStyle.map(artist => filterNames.filter(artist2 => artist.idartist === artist2.idartist ))
    //         await setArtists(newArtist)
    //     }

    //     //style
    //     if (filterNames.length === 0) {
    //         await setArtists(data)
    //         setFilterStyle(data)
    //     } else {
    //         await setFilterNames(data)
    //         const newArtist = filterNames.map(artist => filterStyle.filter(artist2 => artist.idartist === artist2.idartist ))
    //         await setArtists(newArtist)
    //     }
    //     console.log('style', filterStyle)
    //     console.log('name', filterNames)
    // }

    
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