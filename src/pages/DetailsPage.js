import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Config from '../Config';
import { fetchDataApi } from '../utils/FetchData';
import './DetailsPage.css';
import ImageCarousel from '../components/details/ImageCarousel';
import BollardMarkerList from '../components/map/BollardMarkerList';
import CurrentBollardMarker from '../components/details/CurrentBollardMarker';
import CustomMapButton from '../components/details/CustomMapButton';
import { useTranslation } from 'react-i18next';


const DetailsPage = () => {
    let { t } = useTranslation();
    let { bollard_id } = useParams();
    let [bollard, setBollard] = useState();

    useEffect(() => {
        fetchDataApi(`bollards/details/${bollard_id}`, setBollard);
    }, [bollard_id])
    return (
        bollard ? (
            <div className='details-page-div row'>
                <div className='details-logo-div col-md-6'>
                    <img className='details-logo' src={`${Config.STATIC_FILES_URL}/static/img/bollards_icon/${bollard.image_icon}`} alt='bollard' />
                </div>
                <div className='details-title col-md-6 p-2'>
                    <h1>No {bollard.b_number}{bollard.b_letter}</h1>
                    <h4>{bollard.b_name}</h4>
                    <h5>{ t("s_" + bollard.b_type)}</h5>
                    <div className='details-comment'>
                        <p>{bollard.comment}</p>
                    </div>
                </div>
                <div className='details-images'>
                    <ImageCarousel images={bollard.images}></ImageCarousel>
                </div>
                <div className='details-map-div'>
                    <MapContainer 
                        className='details-map' 
                        center={[bollard.b_lat, bollard.b_lng]} 
                        zoom={15}
                        dragging={!L.Browser.mobile}
                        tap={!L.Browser.mobile} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.geo.admin.ch/en/about-swiss-geoportal/impressum.html#copyright">geo.admin.ch</a> contributors'
                            url="https://wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
                        />
                        <CurrentBollardMarker bollard={bollard}></CurrentBollardMarker>
                        <BollardMarkerList bollardMarkers={bollard.neighbours}></BollardMarkerList>
                        <CustomMapButton ></CustomMapButton>
                    </MapContainer>
                </div>
            </div>
            
        ) : (
            <div className="bollard-loading-div">
                <div className="spinner-grow text-secondary" role="status">
                </div>
            </div>
        )
            
    )
}

export default DetailsPage;