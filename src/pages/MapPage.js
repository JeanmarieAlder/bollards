import * as L from 'leaflet';
import React from 'react';
import { MapContainer } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import MainMap from '../components/map/MainMap';
import './MapPage.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const MapPage = () => {
    let query = useQuery();
    let mapCenter = [
        query.get('lat') || '46.586',
        query.get('lon') || '6.26'
    ]
    let mapZoom = query.get('zoom') || 10;


    /**
     * Get the maximum visible area.
     * @returns latLngBounds: the maximum view bounds
     */
    const getBounds = () => {
        const corner1 = L.latLng(	47.91130, 5.52227 ),
        corner2 = L.latLng(45.66749, 10.64845 );
        return L.latLngBounds(corner1, corner2);
    };

    return (
        <div>
            <MapContainer
                key={"map"}
                className='map-page-div' 
                center={mapCenter} 
                zoom={mapZoom}
                minZoom={9}
                maxBounds={getBounds()} >
                    <MainMap></MainMap>
            </MapContainer>
        </div>
       
    );
};

export default MapPage;