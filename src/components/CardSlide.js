import React from 'react';
import Slider from "react-slick";
import axios from 'axios';



class CardSlide extends React.Component {
    
    state= {
        artist : []
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => {
            this.setState({artists: data})
        })
    }
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 2
          };

        const {artists} = this.state;

        return (
            <div className= 'container'>
                <Slider {...settings}>
                    {artists.map((artist, index) => (
                        <div className= "Slide" key= {index}>
                        <img src= {artist.image_url} alt= {artist.name}/>
                        </div>
                    ))}
                
                </Slider>
            </div>
        );
        
    }
}
export default CardSlide;