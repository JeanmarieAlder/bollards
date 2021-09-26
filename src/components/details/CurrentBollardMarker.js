import React, { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet';
import { getMarkerByType } from '../../utils/map/MarkerUtils';

const CurrentBollardMarker = ({ bollard }) => {
    const leafletRef = useRef();
    useEffect(() => {
        leafletRef.current.openPopup();
    }, [bollard])
    return (
        <Marker ref={leafletRef} position={[bollard.b_lat, bollard.b_lng]} icon={getMarkerByType(bollard.b_type)}>
            <Popup>
                <h2>No {bollard.b_number}{bollard.b_letter}</h2>
            </Popup>
        </Marker>
    )
};

export default CurrentBollardMarker;