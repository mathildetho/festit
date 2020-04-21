import React from 'react';
import ArtistItem from'./ArtistItem';
import { Slide } from 'react-slideshow-image';
import ArtistList from './ArtistList';
import './ArtistSlide.css';
import axios from 'axios'



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
class ArtistSlide extends React.Component {
    state = {
        artist: []
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => {
            this.setState({artist: data})
        })
    }
    
    render() {
        return(
            <div className= 'containerSlide'>
                <Slide {...proprietes}>
                        <div className= 'each-slide'>
                            
                            <div>
                                <img 
                                    src= {this.props.image_url}
                                    alt= {this.props.name}
                                    className='slider-img' />
                                    
                            </div>
                        </div>
                        <div className= 'each-slide'>
                            <div>
                                <img 
                                    src= {this.props.image_url}
                                    alt= {this.props.name}
                                    className='slider-img'  />
                            </div>
                        </div>
                        <div className= 'each-slide'>
                            <div>
                                <img 
                                    src= {this.props.image_url}
                                    alt={this.props.name}
                                    className='slider-img'  />
                            </div>
                        </div>
                        <div className= 'each-slide'>
                            <div>
                                <img 
                                    src= {this.props.image_url}
                                    alt={this.props.name}
                                    className='slider-img'  />
                            </div>
                        </div>
                        <div className= 'each-slide'>
                            <div>
                                <img 
                                    src= {this.props.image_url}
                                    alt={this.props.name} 
                                    className='slider-img' />
                            </div>
                        </div>
                </Slide>
            </div>
        )
    }   
}

export default ArtistSlide;

    
