import React from 'react'
import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

import './BollardPopup.css'

const BollardPopup = ({clicked, b_number, b_letter, b_name}) => {
    return (
        <Popup>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>
                    <div className='popup-image-div'>
                        {
                            clicked ? (
                                <img
                                    className='popup-image'
                                    src='https://bollards.ch/static/img/bollards_icon/e29b594d3a24e099.jpg'
                                    alt='bollard'
                                ></img>
                            ) : null
                        }
                    </div>
                    <div className='popup-number'>
                        <h2>No {b_number}{b_letter}</h2>
                    </div>
                    <div className='popup-name'>
                        {b_name}
                    </div>
                </span>
                
            </Link>
            
        </Popup>
    )
}

export default BollardPopup;