import React from "react";
import axios from "axios";
import Slider from "react-slick";
import './SliderContainer.css';

class SliderContainer extends React.Component {
  state = {
    festivals: []
  };

  componentDidMount() {
    axios
      .get("https://api-festival.herokuapp.com/api/festival")
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
      autoplay: false,
      autoplaySpeed: 6500,
      speed:1300
    };

    const { festivals } = this.state;

    return (
        <Slider className='slidercontainer' {...settings} ref={slider => (this.slider = slider)}>
          {festivals.slice(0, 3).map((festival, index) => (
            <div className="slide" key={index}>
              <img src={festival.image1} alt={festival.name} />
              <div className="inner">
                <div className="name">
                  <span className="line" />
                  <h3>{festival.name}</h3>
                </div>
                <button className="button">En savoir plus</button>
              </div>
            </div>
          ))}
        </Slider>
    );
  }
}

export default SliderContainer;