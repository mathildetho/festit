import React from 'react';
import ArtistDescription from './ArtistDescription';
import FestivalsContainer from './FestivalsContainer';


const ArtistCard = (props) => {
    const {artist, genre} = props;
    return(
        <div className="description">
            <div className= "containerimg">
                <div className= 'purpleop' />
                <img 
                    className='img-desc'
                    src={artist.image_url}
                    alt= 'img-artist'
                />    
            </div>
            <div className= 'desccontent'>
            <ArtistDescription 
                artist= {artist}
                genre= {genre}
                {...props}
            />

            <FestivalsContainer 
                artist={artist}
                {...props}
                 
            />  
            </div>
        </div>
    )
}

export default ArtistCard;