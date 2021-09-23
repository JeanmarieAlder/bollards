import React, { useEffect, useState } from 'react';
import './MapPage.css';
import * as L from 'leaflet';
import { MapContainer, TileLayer} from 'react-leaflet'
import { fetchDataApi } from '../utils/FetchData';
import BollardMarkerList from '../components/map/BollardMarkerList';

const MapPage = () => {
    const [bollardsList, setBollardsList] = useState([]);
    useEffect(() => {
        fetchDataApi('bollards/markers', setBollardsList)
        .then((resp) => console.log(resp))
    }, [])

    /**
     * Get the maximum visible area.
     * @returns latLngBounds: the maximum view bounds
     */
    const getBounds = () => {
        const corner1 = L.latLng(	47.91130, 5.52227 ),
        corner2 = L.latLng(45.66749, 10.64845 );
        return L.latLngBounds(corner1, corner2);
    }

    return (
        <div>
            <MapContainer 
                className='map-page-div' 
                center={[46.586, 6.26]} 
                zoom={10}
                minZoom={9}
                maxBounds={getBounds()} >
                <TileLayer
                    attribution='&copy; <a href="https://www.geo.admin.ch/en/about-swiss-geoportal/impressum.html#copyright">geo.admin.ch</a> contributors'
                    url="https://wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
                />
                <BollardMarkerList bollardMarkers={bollardsList}></BollardMarkerList>
            </MapContainer>
        </div>
       
    );
};

export default MapPage;