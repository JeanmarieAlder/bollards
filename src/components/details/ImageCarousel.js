import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Config from '../../Config';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './ImageCarousel.css';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";


const ImageCarousel = ({images}) => {
    const { t } = useTranslation();
    const [autoPlay, setAutoPlay] = useState(true);
    const [showPauseSymbol, setShowPauseSymbol] = useState(false);

    const handleInteraction = () => {
        if (autoPlay) {
          // User has interacted, disable autoPlay
          setAutoPlay(false);
          setShowPauseSymbol(true);
        }
      };

      useEffect(() => {
        // After 2 seconds, hide the pause symbol
        const timeoutId = setTimeout(() => {
          setShowPauseSymbol(false);
        }, 3000);
    
        // Cleanup the timeout on component unmount or when autoPlay is re-enabled
        return () => clearTimeout(timeoutId);
      }, [showPauseSymbol, autoPlay]);

    return (
        <div className="carousel-container" onClick={handleInteraction}>
            <Carousel 
                swipeable={true}
                emulateTouch={true} 
                autoPlay={autoPlay} 
                infiniteLoop={true}
                interval={4000} 
                stopOnHover={false}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={35}
                onSwipeEnd={handleInteraction}
                >
                    
                {
                    images.map((img, i) => {
                        return (
                            <div key={i} className={'carousel-image-div'}>
                                <img 
                                    className={'carousel-image'} 
                                    src={`${Config.STATIC_FILES_URL}/static/img/bollards/${img}`} 
                                    alt='bollard' />
                            </div>
                        )
                    })
                }
            </Carousel>
            {showPauseSymbol && (
                <div className="pause-symbol fade-out">{t("s_stop_auto_scroll")}</div>
            )}
        </div>
        
    )
}

export default ImageCarousel;