import React from 'react'
import BollardMarker from './BollardMarker';
import * as Icons from '../shared/map/CustomMarkerIcons'

const BollardMarkerList = ({bollardMarkers}) => {

    const getMarkerIcon = (b_type) => {
        switch(b_type) {
            case 'Forest':
                return Icons.markerForest;
            case 'Fields':
                return Icons.markerFields;
            case 'Rocky':
                return Icons.markerRocky;
            case 'Custom':
                return Icons.markerCustom;
            case 'Plain':
                return Icons.markerPlain;
            case 'Swamp':
                return Icons.markerSwamp;
            default:
                return Icons.markerSpecial;
        }
    };

    return (
        <div>
            {
                bollardMarkers.map((marker, i) => {
                    const markerIcon = getMarkerIcon(marker.b_type);
                    return (
                        <BollardMarker key={bollardMarkers[i].id} bollard={bollardMarkers[i]} markerIcon={markerIcon} />
                    );
                } )
            }
        </div>
    )
};

export default BollardMarkerList;
