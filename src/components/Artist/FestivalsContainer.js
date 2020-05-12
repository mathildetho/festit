import React, { useState, useEffect } from 'react';
import Coverflow from "react-coverflow";
import axios from 'axios';
import Icon from "../../img/icon-titre.png";
import './FestivalsContainer.css'


  const FestivalsContainer = (props) => {
     
      const [festivals, setFestivals]= useState([]);

      useEffect(() => {
          const idArtist = props.match.params.id;
         axios
          .get(`https://api-festit.herokuapp.com/api/artists/${idArtist}/festival`)
          .then(response=> response.data)
          .then(data => {
              setFestivals(data);
          });
      }, [props.match.params.id]);
      
    return(
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
          {festivals.map(festival => (
              
                <div className="btn-coverflow" key={festival.idfestival}>
                  <img className='img-artist' src={festival.image1} alt='artist' /> 
                  <div className="artist-name">
                    <img src={Icon} alt="icon-titre" className="icon-titre" />
                    <h5>{festival.name}</h5>
                  </div>
                </div>
              
          ))}
          </Coverflow>
    );
};
export default FestivalsContainer;