import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './ArtistItem.css';
import Icon from '../img/icon-titre.png'

class ArtistItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='ArtistItem-container'>
                <div className='artist-card'>
                    <div className= "card-title">
                        <img 
                            src={ Icon }
                            alt= "icon-titre"
                            />
                        <h5>{this.props.name}</h5>
                    </div>
                    <img 
                        src= {this.props.image_url}
                        className= 'artist-image'
                        alt= {this.props.name}
                    />
                </div>
            </div>
    
        )
    }
}




export default ArtistItem;