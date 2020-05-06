import React from 'react';
import './Artist.css';
import icon from '../../img/icon-titre.png';
import genreicon from '../../img/genre.png';


const ArtistDescription =(props) => {
    const {artist} = props;
    console.log(artist.embed_video);


return (
//     <div className='ArtistDescription'>
//         <img src= {artist.image_url}/>
//         <p>{artist.name}</p>
//         <p>{artist.tracker_count}</p>
//         <div>{artist.music_url}</div>
//         <p>{artist.description}</p>
//         <p>{artist.country}</p>
//         <iframe>{artist.embed_video}</iframe>
        
//     </div>
// )}

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
                <p>{artist.id_style}</p>
            </div>
            <p className='p-desc'>{artist.description}</p>
            
            <iframe width='560' height='315' src={artist.embed_video} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            
        </div>
    </div>
</div>)}

export default ArtistDescription;

