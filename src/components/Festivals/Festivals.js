import React, {useEffect, useState} from 'react';
import SliderContainer from './Slider/SliderContainer';
import FestivalsContainer from './FestivalsContainer';
import FestivalFilter from './FestivalFilter';
import axios from 'axios';

const Festivals = (props,history) => {
    //all festivals
    const [festivals, setFestivals] = useState([]);
    useEffect(() => {
        refreshFestivals()
    }, [])
    
    const refreshFestivals = () => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}festival`)
        .then(response => response.data)
        .then(data => {
            setFestivals(data)
        })
    }

    //filtering genre
    // all genres
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}style`)
        .then(response => response.data)
        .then(data => {
            setGenres(data)
        })
    }, []);

    //filter genre
    const filterGenre = (genre) => {
        if(genre === 'Tous') {
            refreshFestivals()
        } else {
            axios.get(`${process.env.REACT_APP_LOCALHOST}festival/style/${genre}`)
            .then(response => response.data)
            .then(data => {
                // filterLocations.length === 0 ? 
                setFestivals(data)
                // :
                // setFilterGenre(data)
                compareListFestivalFilter()
            })
        }

    }

    const compareListFestivalFilter = () => {
        // filterLocations / filterDate / filterGenre


        //let newFilter = [];

        // if (filterGenre.length !== 0) {

        // }
        

        // filterLocation.map(festival => filterDate.map(festival2 => filterGenre.map(festival3 => )))


        // setFestivals(newFilter)

        
    }


    //filtering location
    //all locations
    const  [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get('${process.env.REACT_APP_LOCALHOST}festival')
        .then(response => response.data)
        .then(data => data.map(festival => festival.country).sort())
        .then(data => {
            setLocation([...new Set(data)])
        })
    }, [])

    //filter location
    const filterLocation = (location) => {
        if(location ==="Partout") {
            refreshFestivals()
        } else {
            axios.get(`${process.env.REACT_APP_LOCALHOST}festival/country/${location}`)
            .then(response => response.data)
            .then(data => {
                setFestivals(data)
            })
        }
    }

    //filtering date
    //all dates
    const  [date, setDate] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}festival`)
        .then(response => response.data)
        // .then(data => data.map(festival => {
        //     const startDate = new Date(festival.startDate)
        //     return startDate.getFullYear()
        // }).sort())
        .then(data => data.map(festival => festival.startDate).sort())
        .then(data => {
            setDate([...new Set(data)])
        })
    }, [])

    //filter Date
    const filterDate = (date) => {
        if(date ==="N'importe quand") {
            refreshFestivals()
        } else {
            // const year = festivals.filter(festival => festival.startDate.includes(date))
            // setFestivals(year)
            axios.get(`${process.env.REACT_APP_LOCALHOST}festival/date/${date}`)
            .then(response => response.data)
            .then(data => {setFestivals(data)})
        }
    }




    return (
        <div>
            <SliderContainer />
            <FestivalFilter 
                festivals={festivals}
                filterGenre={filterGenre} 
                filterLocation={filterLocation}
                filterDate={filterDate}
                location={location}
                genres={genres}
                date={date}
            />
            <FestivalsContainer
                {...props} 
                festivals={festivals} 
            />
        </div>
    )
}

export default Festivals;