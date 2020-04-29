import React, {useState, useEffect} from 'react';
import './Festival.css';
import FestivalCard from './FestivalCard';
import Accomodations from './Accomodations';
import axios from 'axios';

const Festival = props => {
    const [festivals, setFestivals] = useState([])

    useEffect(() => {
        const idFestival = props.match.params.idfestival;
        axios.get(`https://api-festit.herokuapp.com/api/festival/${idFestival}`)
        .then(response => response.data)
        .then(data => {
            setFestivals(data)
        })
    }, [])

    console.log(festivals)

    return(
        <div className='apropos festival'>
        <div className='container' >
            <FestivalCard 
                festivals={festivals} 
            />
            <Accomodations 
                festivals={festivals} 
            />
        </div>
    </div>
    )
}

export default Festival;