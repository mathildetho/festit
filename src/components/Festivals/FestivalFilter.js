import React from 'react';
import FestivalFilterLocation from './FestivalFilterLocation';
import FestivalFilterDate from './FestivalFilterDate';
import FestivalFilterGenre from './FestivalFilterGenre';
import locationimg from '../../img/location.png';
import dateimg from '../../img/date.png';
import genre from '../../img/genre.png';
import './Filter.css';

const FestivalFilter = (props) => {
    const {festivals, filterGenre, filterLocation, filterDate, genres, location, date } = props;

  

    return (
        <>
        <h2 className="title-filter">Trouvez votre festival</h2>
        <div className= 'Filter'>
            <div className='select location'>
                
                    <img className='icon-desc' src={locationimg} alt='icon-location' />
                    <div className='filter-title'>
                    <h4>Emplacement</h4>
                
                    <select onChange={(e) => filterLocation(e.target.value)} 
                        className='festival-location'
                    >              
                        <option 
                       
                        value="Partout">
                            Partout</option>
                        <FestivalFilterLocation 
                            location={location}
                        />
                    </select>
                    </div>
            </div>

            <div className='select date'>
                
                    <img className='icon-desc' src={dateimg} alt='icon-date' />
                    <div className='filter-title'>
                    <h4>Date</h4>
                
                <select onChange={(e) => filterDate(e.target.value)}  className='festival-date'> 
                    <option value="N'importe quand">
                        N'importe quand</option>
                    <FestivalFilterDate 
                        date={date}
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