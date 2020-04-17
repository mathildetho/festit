import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img:true
        }
    }     

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.name}</h3>
                    <img src={this.props.imgFestival} alt={this.props.name} />
                    <button>En savoir plus</button>
                </div>
            </div>
        )
    }
}

export default Slider;