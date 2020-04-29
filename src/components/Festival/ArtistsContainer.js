import React, { useEffect, useState } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import axios from "axios";
import Icon from "../../img/icon-titre.png";
import "./ArtistsContainer.css";


const ArtistsContainer = () => {
    const [artists, setArtists] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://api-festit.herokuapp.com/api/artists")
        .then(response => response.data)
        .then(data => {
          setArtists(data);
        });
    });
  
    return (
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          media={{
            "@media (max-width: 900px)": {
              width: '50%',
              height: "300px"
            },
            "@media (min-width: 900px)": {
              width: "90%",
              height: "50vh"
            }
          }}
        >

            <div className="btn-coverflow">
              <div className='img-artist' alt='artist' /> 
              <div className="artist-name">
                <img src={Icon} alt="icon-titre" className="icon-titre" />
                <h5>Steve Aoki</h5>
              </div>
            </div>
            <div className="btn-coverflow">
              <div className='img-artist' alt='artist' /> 
              <div className="artist-name">
                <img src={Icon} alt="icon-titre" className="icon-titre" />
                <h5>Beyoncé</h5>
              </div>
            </div>
            <div className="btn-coverflow">
              <div className='img-artist' alt='artist' /> 
              <div className="artist-name">
                <img src={Icon} alt="icon-titre" className="icon-titre" />
                <h5>Rihanna</h5>
              </div>
            </div>
            <div className="btn-coverflow">
              <div className='img-artist' alt='artist' /> 
              <div className="artist-name">
                <img src={Icon} alt="icon-titre" className="icon-titre" />
                <h5>artist name</h5>
              </div>
            </div>

          {/* {artists.map(artist => (
            <button key={artist.idartist} className="btn-coverflow">
              <div className="artist-name">
                <img src={Icon} alt="icon-titre" className="icon-titre" />
                <h5>{artist.name}</h5>
              </div>
              <div
                className="img-coverflow"
                src={artist.image_url}
                alt={artist.name}
                data-action="/Artistes/{artist.idartist}"
              />
            </button>
          ))} */}

        </Coverflow>
      </StyleRoot>
    );
};
  
export default ArtistsContainer;