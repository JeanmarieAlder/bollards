import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Config from '../../Config';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './ImageCarousel.css';

const ImageCarousel = ({images}) => {
    return (
        <Carousel 
            swipeable={true} 
            autoPlay={true} 
            infiniteLoop={true}
            interval={5000} 
            stopOnHover={false}
            >
                
            {
                images.map((img, i) => {
                    return (
                        <div key={i} className={'carousel-image-div'}>
                            <img className={'carousel-image'} src={`${Config.STATIC_FILES_URL}/static/img/bollards/${img}`} alt='bollard' />
                        </div>
                    )
                })
            }
            </Carousel>
    )
}

export default ImageCarousel;