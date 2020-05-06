import React from 'react';
import AboutCard from './AboutCard';

import love from '../../img/love.png';
import book from '../../img/bookit.png';
import fest from '../../img/festit.png';

const AboutConcept = () => {
    const desc1 = 'Vous cherchez THE festival ? Vous êtes au bon endroit. Fest It est une plateforme qui vous permet de filtrer des festivals du monde entier selon vos envies. Une fois trouvé, vous n\'avez plus qu\'à...';
    const desc2 = 'Réservez votre ticket et même votre hébergement en ligne en quelques clics. Il n\'y aura plus qu\'à attendre avec impatience avant de...';
    const desc3 = 'Profiter à fond de cette expérience et fester comme il se doit, prết à recommencer encore et encore !'

    return(
        <div className='aboutcard' >
            <h3>Le concept Fest It</h3>
            <div className='cards' >
                <AboutCard 
                    imgsrc={love} 
                    title='Love it' 
                    desc={desc1}
                    />
                <AboutCard 
                    imgsrc={book} 
                    title='Book It'
                    desc={desc2}
                    />
                <AboutCard 
                    imgsrc={fest}
                    title='Fest it'
                    desc={desc3}
                    />
            </div>
        </div>
    )
}

export default AboutConcept;