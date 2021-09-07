import { Marker } from "react-leaflet"
import React, {useState} from 'react';
import BollardPopup from "./BollardPopup";

const BollardMarker = ({bollard}) => {

    const [clicked, setClicked] = useState(false);

    const onClickMarker = (e) => {
        if(!clicked) setClicked(true)
    };

    return (
        <Marker 
            position={[bollard.b_lat, bollard.b_lng]}
            eventHandlers={{
                click: onClickMarker
            }}
        >
            <BollardPopup 
                clicked={clicked}
                id={bollard.id}
                b_number={bollard.b_number} 
                b_letter={bollard.b_letter} 
                b_name={bollard.b_name}
                image_icon={bollard.image_icon}></BollardPopup>
        </Marker>
    )
}

export default BollardMarker;