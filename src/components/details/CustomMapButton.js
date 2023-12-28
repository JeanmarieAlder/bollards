import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import './CustomMapButton.css';

const CustomMapButton = () => {
    const { t } = useTranslation();
    const map = useMap();
    const [zoomLevel, setZoomLevel] = useState(map.getZoom());
    const [latLng, setLatLng] = useState(map.getCenter());

    const mapEvents = useMapEvents({
        zoomend: () => {
            setZoomLevel(mapEvents.getZoom());
        },
        moveend: () => {
            setLatLng(mapEvents.getCenter());
        }
    })
    return (
        <div className={"topright leaflet-top leaflet-right"} style={{height: "80px", width: "200px"}} >
            <div className={"leaflet-control"}>
                <Link to={`/map?zoom=${zoomLevel}&lat=${latLng.lat}&lon=${latLng.lng}`}>
                <Button 
                    id="expand-map-button" 
                    variant="dark" 
                    className="map-expand-button"
                    ><b>{t("s_expand")}</b></Button>
            </Link>
            </div>
        </div>
        
    )
};

export default CustomMapButton;