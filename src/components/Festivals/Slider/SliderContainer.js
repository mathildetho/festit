import React from "react";
import axios from "axios";
import Slider from "react-slick";
import './SliderContainer.css';
import { Link } from "react-router-dom";

class SliderContainer extends React.Component {
  state = {
    festivals: []
  };

  componentDidMount() {
    axios
      .get("https://api-festit.herokuapp.com/api/festival")
      .then(res => res.data)
      .then(data => {
        this.setState({ festivals: data });
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

    const { festivals } = this.state;

    return (
        <Slider className='slidercontainer' {...settings} ref={slider => (this.slider = slider)}>
          {festivals.slice(0, 3).map(festival => (
            <div className="slide" key={festival.idfestival}>
              <img src={festival.image1} alt={festival.name} />
              <div className="inner">
                <div className="name">
                  <span className="line" />
                  <h3>{festival.name}</h3>
                </div>
                <Link to={`/Festival/${festival.idfestival}`}><button className="button">En savoir plus</button></Link>
              </div>
            </div>
          ))}
        </Slider>
    );
  }
}

export default SliderContainer;