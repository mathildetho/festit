import React from 'react';
import FestivalFilterLocation from './FestivalFilterLocation';
import FestivalFilterDate from './FestivalFilterDate';
import FestivalFilterGenre from './FestivalFilterGenre';
import './Filter.css';

const FestivalFilter = (props) => {
    const {festivals, filterGenre, genres } = props;

    return (
        
        <div className= 'Filter'>
            <div className='select'>
                <select 
                    className='festival-location'
                > 
              
                    <option value="Partout" >
                        Partout</option>
                    <FestivalFilterLocation 
                        festivals={festivals}
                    />
                   
                </select>
            </div>
            <div className='select'>
                <select className='festival-date'> 
              
                    <option value="N'importe quand">
                        N'importe quand</option>
                    <FestivalFilterDate 
                        festivals={festivals}
                    />
                   
                </select>
            </div>
            <div className='select'>
                <select onChange={(e) => filterGenre(e.target.value)} className='genre-list'>
                    <option value="Tous">Tous</option>
                    <FestivalFilterGenre 
                        genres={genres}
                    />
                </select>
            </div>
        </div>
    );
}

export default FestivalFilter;