import React from 'react';

const AboutCard = (props) => {
    return (
        <div className="card" >
            <img className="icon-card" src={props.imgsrc} alt={props.title} />
            <div className='text-card' >
                <h4 className='title-card' >{props.title}</h4>
                <p className='desc' >{props.desc}</p>
            </div>
        </div>
    )
}

export default AboutCard;