import React, { useState, useEffect } from 'react';
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import axios from 'axios';
import Icon from "../../img/icon-titre.png";
import './FestivalsContainer.css'


  const FestivalsContainer = (props) => {
     
      const [festivals, setFestivals]= useState([]);

      console.log(props.match.params.name, "ok");
      useEffect(() => {
          const idArtist = props.match.params.id;
         axios
          .get(`https://api-festit.herokuapp.com/api/artists/${idArtist}/festival`)
          .then(response=> response.data)
          .then(data => {
              setFestivals(data);
          });
      }, []);

   


    return(
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
                    height: "30vh"
                  }
                }}
              >
          {festivals.map(festival => (
              
                <div className="btn-coverflow">
                  <img className='img-artist' src={festival.image1} alt='artist' /> 
                  <div className="artist-name">
                    <img src={Icon} alt="icon-titre" className="icon-titre" />
                    <h5>{festival.name}</h5>
                  </div>
                </div>
              
          ))}
          </Coverflow>
      </StyleRoot>
    );
};
export default FestivalsContainer;