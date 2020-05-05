import React, {useEffect, useState} from 'react';
import SliderContainer from './Slider/SliderContainer';
import FestivalsContainer from './FestivalsContainer';
import FestivalFilter from './FestivalFilter';
import axios from 'axios';

const Festivals = (props,history) => {

    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            setFestivals(data)
        })
    }, [])
    

    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/style')
        .then(response => response.data)
        .then(data => {
            setGenres(data)
        })
    }, []);
    
    
    const filterGenre = (e) => {
        const idfestival = festivals.map(festival => festival.idfestival);
        axios.get(`https://api-festit.herokuapp.com/api/festival/${idfestival}/style`)
        .then(response => response.data)
        .then(data => {
            setFestivals(data)
            console.log(data)
        })
    }

    const filterLocation = (location) => {
        const locationFest = festivals.filter(festival => festival.country.includes(location));
        setFestivals(locationFest)
    }

    const filterDate = (date) => {
        const dateFest = festivals.filter(festival => festival.startDate.includes(date));
        setFestivals(dateFest)
    }

    return (
        <div>
            <SliderContainer />
            <FestivalFilter 
                festivals={festivals}
                filterGenre={filterGenre} 
                filterLocation={filterLocation}
                filterDate={filterDate}
                genres={genres}
            />
            <FestivalsContainer
                {...props} 
                festivals={festivals} 
                />
        </div>
    )
}

export default Festivals;