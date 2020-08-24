import React from "react";
import Slider from "react-slick";
import "./CardSlide.css";
import Icon from "../../img/icon-titre.png";

const FestivalsContainer= (props)=> {
   const handleCard = idfestival => {
   props.history.push(`/Festival/${idfestival}`);
  };

    const settings = {
      centerMode: false,
      infinite: false,
      dots: true,
      slidesToShow: 4,
      speed: 100,
      rows: 2,
      slidesPerRow: 1,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 3,
            dots: true,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
      <div className="Container">
        {props.festivals.length >=1 ? (
          <Slider {...settings}>
            {props.festivals
              .map(festival => (
                <button
                  className="Slide"
                  key={festival.idfestival}
                  onClick={() => handleCard(festival.idfestival)}
                >
                  <div
                    className="artistCard"
                    style={{
                      background: `center /cover no-repeat url('${
                        festival.image2
                      }')`
                    }}
                  >
                    <div className="artistCard-title">
                      <img src={Icon} alt="icon-titre" className="icon-titre" />
                      <h5 className="artistCard-name">
                        {festival.name}
                      </h5>
                    </div>
                  </div>
                </button>
              ))}
          </Slider>
        )
        :
        <p className='no-festival'>Désolé, pour le moment, nous n'avons pas de festival disponible pour ce que vous recherchez.</p>}
      </div>
    );
  }

export default FestivalsContainer;
