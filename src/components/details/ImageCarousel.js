import React from 'react';
import Config from '../../Config';
import './ImageCarousel.css'

const ImageCarousel = ({images}) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    images.map((_, i) => {
                        return(
                            <button 
                                key={i}
                                type="button" 
                                data-bs-target="#carouselExampleIndicators" 
                                data-bs-slide-to={i}
                                className={i === 0 ? "active" : ""}
                                aria-current={i === 0 ? "true" : ""}
                                aria-label={`Slide ${i}`}
                            ></button>
                        )
                        
                    })
                }
            </div>
            <div className="carousel-inner">
                {
                    images.map((img, i) => {
                        return (
                            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                                <img src={`${Config.STATIC_FILES_URL}/static/img/bollards/${img}`} className="bollard-image" alt={img}/>
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ImageCarousel;