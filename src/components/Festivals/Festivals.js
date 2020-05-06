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

        axios.get('https://api-festit.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            setFestivals(data)
        })
    }


    //filtering genre
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
    const filterGenre = (genre) => {
        if(genre === 'Tous') {
            refreshFestivals()
        } else {
            // const idfestival = festivals.map(festival => festival.idfestival);
            axios.get(`https://api-festit.herokuapp.com/api/festival/${genre}`)
            .then(response => response.data)
            .then(data => {
                setFestivals(data)
            })
        }
    }


    //filtering location
    //all locations
    const  [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            setLocation(data.map(festival => festival.country))
        })
    }, [])

    //filter location
    const filterLocation = (location) => {

        // const locationFest = festivals.filter(festival => festival.country.includes(location));
        if(location ==="Partout") {
            refreshFestivals()
        } else {
            axios.get(`https://api-festit.herokuapp.com/api/festival/${location}`)
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
        axios.get('https://api-festit.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            setDate(data.map(festival => festival.startDate))
        })
    }, [])

    //filter Date
    const filterDate = (date) => {
        // const dateFest = festivals.filter(festival => festival.startDate.includes(date));
        if(date ==="N'importe quand") {
            refreshFestivals()
        } else {
            axios.get(`https://api-festit.herokuapp.com/api/festival/${date}`)
            .then(response => response.data)
            .then(data => {
                setFestivals(data)
            })
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