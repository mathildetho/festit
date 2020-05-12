import React from "react";
import axios from "axios";
import Slider from "react-slick";
import './Festivals/Slider/SliderContainer.css';
import { Link } from "react-router-dom";

class SliderContainerArtists extends React.Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("https://api-festit.herokuapp.com/api/artists")
      .then(res => res.data)
      .then(data => {
        this.setState({ artists: data });
      });
  };

  render() {
    const settings = {
      dots: true,
      arrows:false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed:1000
    };

    const { artists } = this.state;

    return (
        <Slider className='slidercontainer' {...settings} ref={slider => (this.slider = slider)}>
          {artists.slice(0, 3).map((artist) => (
            <div className="slide" key={artist.idartist}>
              <img src={artist.image_url} alt={artist.name} />
              <div className="inner">
                <div className="name">
                  <span className="line" />
                  <h3>{artist.name}</h3>
                </div>
                <Link to={`/Artistes/${artist.idartist}`}><button className="button">En savoir plus</button></Link>
              </div>
            </div>
          ))}
        </Slider>
    );
  }
}

export default SliderContainerArtists;