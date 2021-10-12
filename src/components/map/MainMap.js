import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayersControl, TileLayer, useMapEvents } from 'react-leaflet';
import { fetchDataApi } from '../../utils/FetchData';
import BollardMarkerList from './BollardMarkerList';

const MainMap = () => {

    let { t } = useTranslation();
    const [bollardsList, setBollardsList] = useState([]);
    const [mapTileType, setMapTileType] = useState(localStorage.getItem("mapTileType") || "satellite");

    useEffect(() => {
        fetchDataApi('bollards/markers', setBollardsList)
    }, []);

    useMapEvents({
        baselayerchange: (e) => {
            var typeKey;
            switch(e.name){
                case t("s_map"):
                    typeKey = "map";
                    break;
                case t("s_satellite"):
                default:
                    typeKey = "satellite";
                    break;
            }
            setMapTileType(typeKey);
            localStorage.setItem("mapTileType", typeKey);
        }
    })

    return (
        <>
            <LayersControl collapsed={false} position="topright">
                <LayersControl.BaseLayer checked={mapTileType === "map"} name={t("s_map")}>
                    <TileLayer
                        attribution='&copy; Data: <a href="https://www.swisstopo.admin.ch/en/home.html">swisstopo</a> contributors'
                        url="https://wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer checked={mapTileType === "satellite"} name={t("s_satellite")}>
                    <TileLayer
                        attribution='&copy; Data: <a href="https://www.swisstopo.admin.ch/en/home.html">CNES, Spot Image, swisstopo, NPOC</a>'
                        url="https://wmts20.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
            
            <BollardMarkerList bollardMarkers={bollardsList}></BollardMarkerList>
        </>
        
    )
}

export default MainMap;