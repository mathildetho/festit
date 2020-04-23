import React from 'react';
import CardSlide from './CardSlideArtist/CardSlide';
import SliderContainerArtists from './SliderContainerArtists';
import ArtistFilter from './ArtistFilter/ArtistFilter';


const Artists = () => {
    return (
        <div>

            <SliderContainerArtists />
            <ArtistFilter />
            <CardSlide />
        </div>
    )
}

export default Artists;