import React, { useEffect, useRef, useState} from 'react';
import './BollardCard.css';
import Config from '../Config';
import { Link } from 'react-router-dom';

const BollardCard = ({bollard, onSelectBollard, restoreRef}) => {
    const divRef = useRef(null);
    const bollardRef = bollard.b_number + bollard.b_letter
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        console.log(restoreRef)
        if(!restoreRef){
            return
        }
        console.log("Found the previous bollard man, just dont wanna scroll to it ftm.")
        divRef.current.scrollIntoView({ behavior: 'auto', block: 'center' })
    }, [restoreRef, imageLoaded])

    return (
            <div id={bollardRef} ref={divRef} className='col-6 col-md-3 bollard-card'>
                <Link
                    onClick={() => onSelectBollard(bollard.id)}
                    to={`/details/${bollard.id}`} 
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='card'>
                    {
                        imageLoaded ? null :
                        <div className="img-loading-div">
                            <div className="spinner-grow text-secondary" role="status">
                            </div>
                        </div>
                    }
                    <div>
                    <img className='img-preview' 
                        alt='bollard' 
                        src={`${Config.STATIC_FILES_URL}/static/img/bollards_icon/${bollard.image_icon}`} onLoad={() => setImageLoaded(true)}/>
                    </div>
                    
                    <div className='card-body bollard-card-text-div'>
                        <h2 className="card-title">No {bollardRef}</h2>
                        <p className="card-text"><i>{bollard.b_name === '' ? '' : bollard.b_name}</i></p>
                    </div>
                </div>
                </Link>  
            </div>
       
    );
}

export default BollardCard;
