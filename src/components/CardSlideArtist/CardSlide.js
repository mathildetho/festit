import React from 'react';
import Slider from "react-slick";
import axios from 'axios';
import './CardSlide.css';
import Icon from '../../img/icon-titre.png';
import Genre from '../../img/genre.png';


class CardSlide extends React.Component {
    
    state= {
        artist : [],
        displayArtist: ''
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => {
            this.setState({artists: data})
        })
    }

    handleCard = (name) => {
        this.props.history.push(`/Artists/${name}`)
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
            slidesToScroll: 4     
        };

        const {artists} = this.state;


        return (
            <div className='Container'>
                {artists && <Slider {...settings}>
                    {artists.filter(artist => artist).map((artist, index) => (
                        <button className= "Slide" key= {index} onClick={() => this.handleCard(artist.name)}> 
                            <div className='artistCard'
                                 style={{ background: `center /cover no-repeat url('${artist.image_url}')` }}>
                                <div className= 'artistCard-title'>
                                <img
                                    src= { Icon }
                                    alt='icon-titre'
                                    className='icon-titre'
                                />
                                <h5 className='artistCard-name'><bold>{artist.name}</bold></h5>
                                </div>
                                <div className ='artist-genre'>
                                <img 
                                    src= { Genre }
                                    alt=' icon-genre'
                                    className='icon-titre'
                                />
                                </div>
                                
                           
                           
                            </div>
                        </button>
                    
                ))}
                
                </Slider>}
            </div>
            
        );
        
    }
}
export default CardSlide;