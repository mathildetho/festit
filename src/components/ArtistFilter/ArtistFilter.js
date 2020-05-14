import React from 'react';
import ArtistFilterItem from './ArtistFilterItem';
import ArtistFilterGenre from './ArtistFilterGenre';
import './ArtistFilter.css';
import name from '../../img/artist.png';
import genre from '../../img/genre.png';

function ArtistFilter(props) {
    const {artists, genres, filterGenre, names, filterName}= props;

    return (
        <>
            <h2 className="title-filter">Trouvez votre artiste</h2>
            <div className= 'Filter'>
                <div className='select location'>
                        <img className='icon-desc' src={name} alt='icon-location' />
                        <div className='filter-title'>
                        <h4>Nom de l'artiste</h4>
                    
                        <select 
                            onChange={(e) => filterName(e.target.value)} 
                            className='festival-location'
                        >              
                            <option value="Tous">
                                Tous
                            </option>
                            <ArtistFilterItem
                                names={names}
                                artists={artists}
                            />
                        </select>
                        </div>
                </div>
                <div className='select genre'>
                
                    <img className='icon-desc' src={genre} alt='icon-genre' />
                    <div className='filter-title'>
                    <h4>Genre</h4>
               
                <select 
                    onChange={(e) => filterGenre(e.target.value)}
                    className='genre-list'
                >
                    <option value="Tous">Tous</option>
                    <ArtistFilterGenre 
                        genres={genres}
                />
                </select>
                </div>
            </div>
            </div>
        </>
    );
};

export default ArtistFilter;
