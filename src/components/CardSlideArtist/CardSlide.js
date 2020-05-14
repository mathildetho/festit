import React from 'react';
import Slider from "react-slick";
import './CardSlide.css';
import Icon from '../../img/icon-titre.png';


class CardSlide extends React.Component {
    handleCard = (id) => {
        this.props.history.push(`/Artistes/${id}`)
    }
      
    render() {
        const settings = {
            className: "center",
            centerMode: false,
            infinite:false,
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
                        slidesToScroll: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true
                    },  
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
        };

        const {artists} = this.props;
        return (
            <div className='Container'>
                {artists.length >0 ? (
                    <Slider {...settings}>
                        {artists.map((artist) => (
                            <button 
                                className= "Slide" 
                                key={artist.idartist} 
                                onClick={() => this.handleCard(artist.idartist)}
                            > 
                            <div 
                                className='artistCard'
                                style={{ background: `center /cover no-repeat url('${artist.image_url}')` }}
                            >
                                <div className= 'artistCard-title'>
                                    <img
                                        src={Icon}
                                        alt='icon-titre'
                                        className='icon-titre'
                                    />
                                    <h5 className='artistCard-name'>{artist.name}</h5>
                                </div>
                            </div>
                            </button>
                        ))}
                    </Slider>
                )
                :
                <p className='no-festival'>Désolé, pour le moment, nous n'avons pas d'artistes disponible pour ce que vous recherchez.</p>}
            </div>
        );
        
    }
}
export default CardSlide;