import React from 'react';
import AboutCard from './AboutCard';

import love from '../../img/love.png';
import book from '../../img/bookit.png';
import fest from '../../img/festit.png';

const AboutContainer = () => {
    const desc1 = 'Vous avez en tête un festival ? Là où vous voulez, on vous emmenera, bla bla blas';
    const desc2 = 'Vous pouvez trouvez votre festival et réservez votre place directement';
    const desc3 = 'Profitez à fond votre festival!'

    return(
        <div className='aboutcard' >
            <h3>Concept</h3>
            <div className='cards' >
                <AboutCard 
                    imgsrc={love} 
                    title='Love it' 
                    desc={desc1}
                    />
                <AboutCard 
                    imgsrc={book} 
                    title='Love it'
                    desc={desc2}
                    />
                <AboutCard 
                    imgsrc={fest}
                    title='Love it'
                    desc={desc3}
                    />
            </div>
        </div>
    )
}

export default AboutContainer;