import React, {useEffect, useState} from 'react';
import SliderContainer from './Slider/SliderContainer';
import FestivalsContainer from './FestivalsContainer';
import FestivalFilter from './FestivalFilter';
import axios from 'axios';

const Festivals = (props,history) => {

    const [festivals, setFestivals] = useState([])

    useEffect(() => {
        axios.get('https://api-festit.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            setFestivals(data)
        })
    }, [])

    // const filterGenre = () => {
    //     axios.get(`https://api-festit.herokuapp.com/api/festival/${idfestival}/style`)
    //     .then(response => response.data)
    //     .then(data => {
    //         setFestivals(data)
    //     })
    // }

    return (
        <div>
            <SliderContainer />
            <FestivalFilter 
                festivals={festivals}
                setFestivals={setFestivals}
               // filterGenre={filterGenre} 
            />
            <FestivalsContainer
                {...props} 
                festivals={festivals} 
                />
        </div>
    )
}

export default Festivals;