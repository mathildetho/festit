import React from 'react';
import CardSlide from './CardSlideArtist/CardSlide';
import SliderContainerArtists from './SliderContainerArtists';
import ArtistFilter from './ArtistFilter/ArtistFilter';


const Artists = (props, history) => {

    // useEffect(() => {
    //     axios.get('https://api-festival.herokuapp.com/api/artists')
    //     .then(response => response.data)
    //     .then(data => {
    //         setArtists(data)
    //     })
    // }, [])

    // const filterGenre = () => {
    //     axios.get('https://api-festival.herokuapp.com/api/artists/${idartist}/style')
    //     .then(response => response.data)
    //     .then(data => {
    //         setArtists(data)
    //     })
    // }

    const { artists, setArtists } =props;

     return (
        <div>
            <SliderContainerArtists />
            <ArtistFilter 
                // filterGenre={filterGenre} 
            />
            <CardSlide {...props} 
            // artist={artist} 

            />
        </div>
    )
}

export default Artists;