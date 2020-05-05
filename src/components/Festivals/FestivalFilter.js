import React from 'react';
import FestivalFilterLocation from './FestivalFilterLocation';
import FestivalFilterDate from './FestivalFilterDate';
import FestivalFilterGenre from './FestivalFilterGenre';
import location from '../../img/location.png';
import date from '../../img/date.png';
import genre from '../../img/genre.png';
import './Filter.css';

const FestivalFilter = (props) => {
    const {festivals, filterGenre, filterLocation, filterDate, genres } = props;

    return (
        <>
        <h2 className="title-filter">Trouvez votre festival</h2>
        <div className= 'Filter'>
            <div className='select location'>
                
                    <img className='icon-desc' src={location} alt='icon-location' />
                    <div className='filter-title'>
                    <h4>Emplacement</h4>
                
                    <select onChange={(e) => filterLocation(e.target.value)} 
                        className='festival-location'
                    >              
                        <option value="Partout" >
                            Partout</option>
                        <FestivalFilterLocation 
                            festivals={festivals}
                        />
                    </select>
                    </div>
            </div>

            <div className='select date'>
                
                    <img className='icon-desc' src={date} alt='icon-date' />
                    <div className='filter-title'>
                    <h4>Date</h4>
                
                <select onChange={(e) => filterDate(e.target.value)}  className='festival-date'> 
                    <option value="N'importe quand">
                        N'importe quand</option>
                    <FestivalFilterDate 
                        festivals={festivals}
                    />
                </select>
                </div>
            </div>

            <div className='select genre'>
                
                    <img className='icon-desc' src={genre} alt='icon-genre' />
                    <div className='filter-title'>
                    <h4>Genre</h4>
               
                <select onChange={(e) => filterGenre(e.target.value)} className='genre-list'>
                    <option value="Tous">Tous</option>
                    <FestivalFilterGenre 
                        genres={genres}
                    />
                </select>
                </div>
            </div>
        </div>
        </>
    );
}

export default FestivalFilter;