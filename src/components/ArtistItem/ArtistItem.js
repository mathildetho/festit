import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './ArtistItem.css';
import Icon from '../img/icon-titre.png'

class ArtistItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let img= this.props.image_url;
        return (
            <div className='ArtistItem-container'>
                <div className='artist-card'
                     style={{ background: `center /cover no-repeat url('${img}')` }}>
                
                    <div className= "card-title">
                        <img 
                            src={ Icon }
                            alt= "icon-titre"
                                />
                        <h5>{this.props.name}</h5>
                    </div>
                </div>
                    
                
            </div>
    
        )
    }
}




export default ArtistItem;