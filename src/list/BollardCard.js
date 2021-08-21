import React, {useState} from 'react';
import './BollardCard.css';

const BollardCard = ({bollard}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <div className='card bollard-card'>
            {
                imageLoaded ? null :
                <div className="img-loading-div">
                    <div className="spinner-grow text-secondary" role="status">
                    </div>
                </div>
            }
            <img className='img-preview' alt='bollard' src={`/static/img/bollards_icon/${bollard.image_icon}`} onLoad={() => setImageLoaded(true)}/>
            <div className='card-body bollard-card-text-div'>
                <h2 className="card-title">No {bollard.b_number}{bollard.b_letter}</h2>
                <p className="card-text"><i>{bollard.b_name === '' ? 'Unnamed' : bollard.b_name}</i></p>
            </div>
        </div>
    );
}

export default BollardCard;