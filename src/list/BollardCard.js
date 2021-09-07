import React, {useState} from 'react';
import './BollardCard.css';
import Config from '../Config';
import { Link } from 'react-router-dom';

const BollardCard = ({bollard}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        
            <div className='col-6 col-md-3 bollard-card'>
                <Link to={`/details/${bollard.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='card'>
                    {
                        imageLoaded ? null :
                        <div className="img-loading-div">
                            <div className="spinner-grow text-secondary" role="status">
                            </div>
                        </div>
                    }
                    <img className='img-preview' 
                        alt='bollard' 
                        src={`${Config.STATIC_FILES_URL}/static/img/bollards_icon/${bollard.image_icon}`} onLoad={() => setImageLoaded(true)}/>
                    <div className='card-body bollard-card-text-div'>
                        <h2 className="card-title">No {bollard.b_number}{bollard.b_letter}</h2>
                        <p className="card-text"><i>{bollard.b_name === '' ? '' : bollard.b_name}</i></p>
                    </div>
                </div>
                </Link>  
            </div>
       
    );
}

export default BollardCard;
