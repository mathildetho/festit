import React from 'react';
import AboutCard from './AboutCard';

import ben from '../../img/benoit.jpg';
import thom from '../../img/thomas.png';
import math from '../../img/mathilde.jpg';

const AboutLineUp = () => {
    const desc1 = 'Après 8 ans dans le secteur bancaire, Benoît, par son appétit d\'apprendre, décide de se tourner vers ce qu\'il aime et devient développeur web front-end.';
    const desc2 = 'Passionnée par le design et le web, c\'est tout naturellement qu\'elle se spécialise vers le développement web afin de faire d\'une pierre deux coups.';
    const desc3 = 'Afin de libérer sa créativité et faire de son métier une passion, Thomas se convertit en tant que développeur web fullstack.'

    const link1 = 'https://www.linkedin.com/in/benoitgrand/';
    const link2 = 'https://www.linkedin.com/in/mathilde-thoraninth/';
    const link3 = 'https://www.linkedin.com/in/thomas-lachieze/'

    return(
        <div className='aboutcard' >
            <h3>La line-up</h3>
            <div className='cards lineup' >
                <AboutCard 
                    imgsrc={ben} 
                    title='Benoit' 
                    desc={desc1}
                    link={link1}
                    />
                <AboutCard 
                    imgsrc={math} 
                    title='Mathilde'
                    desc={desc2}
                    link={link2}
                    />
                <AboutCard 
                    imgsrc={thom}
                    title='Thomas'
                    desc={desc3}
                    link={link3}
                    />
            </div>
        </div>
    )
}

export default AboutLineUp;