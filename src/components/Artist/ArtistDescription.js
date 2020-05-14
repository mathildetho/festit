import React from 'react';
import './Artist.css';
import icon from '../../img/icon-titre.png';
import genreicon from '../../img/genre.png';


const ArtistDescription =(props) => {
    const {artist, genre} = props;
    const handlereturn = () => {
        props.history.goBack()
    }

    return (
        <div>
            <div className= 'text-desc'>
            <div className='topdesc'>
                            <img src={icon} alt='icon' className='icon-title' />
                            <button className='return' onClick={() => handlereturn()}>Retour</button>
                        </div>
                <div className='text-bloc'>
                    <h2 className="title-desc">{artist && artist.name}</h2>
                    <h4 className='title-desc'>{artist && artist.country}</h4>
                    <div className='icon-text'>
                        <img 
                            className= 'icon-desc' 
                            src= {genreicon} 
                            alt='icon-genre'
                            />
                        <p>{Object.values(genre)}</p>
                    </div>
                    <p className='p-desc'>{artist && artist.description}</p>
                    <div className='video'>
                        <iframe src={artist && artist.embed_video} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>)}

export default ArtistDescription;

