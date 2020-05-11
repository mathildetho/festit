import React from 'react';
import './Artist.css';
import icon from '../../img/icon-titre.png';
import genreicon from '../../img/genre.png';


const ArtistDescription =(props) => {
    const {artist, genre} = props;
 


return (
<div>
    <div className= 'text_desc'>
        <img src={icon} alt='icon' className='icon-title'/>
        <div className='text-bloc'>
            <h2 className="title-desc">{artist.name}</h2>
            <h4 className='title-desc'>{artist.country}</h4>
            <div className='icon-text'>
                <img 
                    className= 'icon-desc' 
                    src= {genreicon} 
                    alt='icon-genre'
                    />
                <p></p>
            </div>
            <p className='p-desc'>{artist.description}</p>
            
            <iframe width='560' height='315' src={artist.embed_video} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            
        </div>
    </div>
</div>)}

export default ArtistDescription;

