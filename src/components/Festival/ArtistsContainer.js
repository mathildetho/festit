import React, { useEffect, useState } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import axios from "axios";
import Icon from "../../img/icon-titre.png";
import "./ArtistsContainer.css";


const ArtistsContainer = (props) => {
    const [artists, setArtists] = useState([]);
    
    useEffect(() => {
      const idfestival = props.match.params.idfestival;
      axios
        .get(`https://api-festit.herokuapp.com/api/festival/${idfestival}/artists`)
        .then(response => response.data)
        .then(data => {
          setArtists(data);
        });
    }, []);

    const handleCardArtist = id => {
      props.history.push(`/Artistes/${id}`);
     };

    return (
        <Coverflow
                displayQuantityOfSide={2}
                infiniteScroll
                navigation={false}
                enableHeading={false}
                media={{
                  "@media (max-width: 900px)": {
                    height: "30vh"
                  },
                  "@media (min-width: 900px)": {
                    width: "90%",
                    height: "30vh"
                  }
                }}
              >
          {artists.map(artist => (
              
                <div key={artist.idartist} className="btn-coverflow" onClick={() => handleCardArtist(artist.idartist)}>
                  <img className='img-artist' src={artist.image_url} alt='artist' /> 
                  <div className="artist-name">
                    <img src={Icon} alt="icon-titre" className="icon-titre" />
                    <h5>{artist.name}</h5>
                  </div>
                </div>
              
          ))}
          </Coverflow>
    );
};
  
export default ArtistsContainer;