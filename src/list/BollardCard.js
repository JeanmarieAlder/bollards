import React from 'react';
import imageDefault from '../img/logo.jpeg';
import './BollardCard.css';

const BollardCard = ({bollard}) => {
    return (
        <div className='bollard-card-div'>
            <img className='img-preview' alt='bollard' src={imageDefault} />
            <div className='bollard-card-text-div'>
                <h2>Bollard No {bollard.number}</h2>
                <p><i>{bollard.name === '' ? 'Unnamed' : bollard.name}</i></p>
                <p>{bollard.comment}</p>
            </div>
        </div>
    );
}

export default BollardCard;