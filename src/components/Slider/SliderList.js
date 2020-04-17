import React from 'react';
import axios from 'axios';
import Slider from './Slider'

class SliderList extends React.Component {
    state = {
        festivals : []
    }

    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/festival')
        .then(res => res.data)
        .then(data => {
            this.setState({festivals : data})
        })
    }

    render() {
        const {festivals} = this.state;
        return (
            <div>
                {festivals.map(festival =>
                    <Slider 
                        key={festival.idfestival}
                        name={festival.name}
                        imgFestival={festival.image1}
                        description={festival.description}
                    />
                )}
            </div>
        )
    }
}

export default SliderList;