import React from 'react';

class ArtistFilterItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       const { names } = this.props;
        return names.map((name, index) =>
            <option key={index} value={name} >{name}
            </option>
        )
    }
}

export default ArtistFilterItem;