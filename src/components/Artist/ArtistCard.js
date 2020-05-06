import React from 'react';
import ArtistDescription from './ArtistDescription';


const ArtistCard = ({artist}) => {

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
                
                />
            </div>
        </div>
    )
}

export default ArtistCard;