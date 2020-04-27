import React from 'react';
import FestivalFilterLocation from './FestivalFilterLocation';
import FestivalFilterDate from './FestivalFilterDate';
import FestivalFilterGenre from './FestivalFilterGenre';
import './Filter.css';

const FestivalFilter = ({festivals}) => {
    return (
        
        <div className= 'Filter'>
                <select 
                    className='festival-location'
                > 
              
                    <option value="Partout" >
                        Partout</option>
                    <FestivalFilterLocation 
                        festivals={festivals}
                    />
                   
                </select>

                <select className='festival-date'> 
              
                    <option value="N'inporte quand">
                        N'importe quand</option>
                    <FestivalFilterDate />
                   
                </select>

                <select className='genre-list'>
                    <option value="Tous">Tous</option>
                    <FestivalFilterGenre />
                </select>
        </div>
    );
}

export default FestivalFilter;