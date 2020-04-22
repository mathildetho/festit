import React from 'react';
import ArtistFilterItem from './ArtistFilterItem';


function ArtistFilter() {
    return (
        <div>
            <form>
                <label>Nom de l'artiste</label>
                <select>
                    <option value="any">Tous</option>
                    <ArtistFilterItem />
                </select>
            </form>
        </div>
    );
}







export default ArtistFilter;
