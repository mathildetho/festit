import React, {useState, useEffect} from 'react';
import './Festival.css';
import FestivalCard from './FestivalCard';
import Accomodations from './Accomodations';
import axios from 'axios';

const Festival = (props, history) => {
    const [festival, setFestival] = useState([])

    useEffect(() => {
        const idfestival = props.match.params.idfestival;
        axios.get(`https://api-festit.herokuapp.com/api/festival/${idfestival}`)
        .then(response => response.data)
        .then(data => {
            setFestival(data[0])
        })
    }, [props.match.params.idfestival])

    const [genre, setGenre] = useState([])

    useEffect(() => {
        const idfestival = props.match.params.idfestival;
        axios.get(`https://api-festit.herokuapp.com/api/festival/${idfestival}/style`)
        .then(response => response.data)
        .then(data => {
            setGenre(data)
        })
    }, [props.match.params.idfestival])

    return(
        <div className='apropos festival'>
        <div className='container' >
            <FestivalCard 
                festival={festival} 
                genre={genre}
            />
            <Accomodations 
                {...props} 
                festival={festival} 
            />
        </div>
    </div>
    )
}

export default Festival;