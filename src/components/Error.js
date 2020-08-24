import React from 'react';
import {Link} from 'react-router-dom';
import './Error.css';

const Error = () => {
     return (
        <div className='error'>
                <div className='title-error' >
                    <h2>ERREUR 404</h2>
                    <p>On dirait que vous êtes perdu.</p>
                    <p>Revenons à vos festivals préférés.</p>
                    <Link className='back' to='/'>Retour au site</Link>
                </div>
        </div>
    )
}

export default Error;