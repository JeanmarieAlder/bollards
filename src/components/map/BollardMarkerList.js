import React from 'react'
import BollardMarker from './BollardMarker';

const BollardMarkerList = ({bollardMarkers}) => {
    return (
        <div>
            {
                bollardMarkers.map((marker, i) => {
                    return (
                        <BollardMarker key={bollardMarkers[i].id} bollard={bollardMarkers[i]} />
                    );
                } )
            }
        </div>
    )
};

export default BollardMarkerList;
