import React from 'react'
import BollardMarker from './BollardMarker';
import { getMarkerByType } from '../../utils/map/MarkerUtils';

const BollardMarkerList = ({bollardMarkers}) => {

    return (
        <div>
            {
                bollardMarkers.map((marker, i) => {
                    return (
                        <BollardMarker key={bollardMarkers[i].id} bollard={bollardMarkers[i]} markerIcon={getMarkerByType(marker.b_type)} />
                    );
                } )
            }
        </div>
    )
};

export default BollardMarkerList;
