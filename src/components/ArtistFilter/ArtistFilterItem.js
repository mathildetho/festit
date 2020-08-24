import React from 'react';

class ArtistFilterItem extends React.Component {
    render() {
       const { names } = this.props;
        return names.map((name, index) =>
            <option key={index} value={name} >{name}
            </option>
        )
    }
}

export default ArtistFilterItem;