import React from 'react';
import AboutCard from './AboutCard';

import ben from '../../img/benoit.jpg';
import thom from '../../img/thomas.jpg';
import math from '../../img/mathilde.jpg';

const AboutLineUp = () => {
    const desc1 = 'Joueur de triangle pour l’orchestre  National de Roumanie de 1997 à 2002.';
    const desc2 = 'Passionnée de TrashMetal et de Hardcore depuis sa plus tendre enfance, elle s’est ensuite tourné vers le dev';
    const desc3 = 'Après avoir assisté à un concert de Chantal Goya à l\'âge de 28 ans, Thomas décide de consacrer sa vie à la musique et au développement web.'

    return(
        <div className='aboutcard' >
            <h3>La line-up</h3>
            <div className='cards lineup' >
                <AboutCard 
                    imgsrc={ben} 
                    title='benoit' 
                    desc={desc1}
                    />
                <AboutCard 
                    imgsrc={math} 
                    title='Mathilde'
                    desc={desc2}
                    />
                <AboutCard 
                    imgsrc={thom}
                    title='Thomas'
                    desc={desc3}
                    />
            </div>
        </div>
    )
}

export default AboutLineUp;