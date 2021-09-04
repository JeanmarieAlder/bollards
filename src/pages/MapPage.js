import React, { useEffect, useState } from 'react';
import './MapPage.css';
import { MapContainer, TileLayer} from 'react-leaflet'
import { fetchDataApi } from '../utils/FetchData';
import BollardMarkerList from '../components/map/BollardMarkerList';

const MapPage = () => {
    const [bollardsList, setBollardsList] = useState([]);
    useEffect(() => {
        fetchDataApi('bollards/markers', setBollardsList)
        .then((resp) => console.log(resp))
    }, [])
    return (
        <div>
            <MapContainer className='map-page-div' center={[46.64692, 6.28342]} zoom={13}>
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