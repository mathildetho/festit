import React from 'react';
import AboutCard from './AboutCard';

import love from '../../img/love.png';
import book from '../../img/bookit.png';
import fest from '../../img/festit.png';

const AboutConcept = () => {
    const desc1 = 'Vous avez en tête un festival ? Là où vous voulez, on vous emmenera, bla bla blas';
    const desc2 = 'Vous pouvez trouvez votre festival et réservez votre place directement';
    const desc3 = 'Profitez à fond votre festival!'

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