import { Marker } from "react-leaflet"
import React, {useState} from 'react';
import BollardPopup from "./BollardPopup";

const BollardMarker = () => {

    const [clicked, setClicked] = useState(false);

    const onClickMarker = (e) => {
        if(!clicked) setClicked(true)
    };

    return (
        <Marker 
            position={[46.64692, 6.28342]}
            eventHandlers={{
                click: onClickMarker
            }}
        >
            <BollardPopup clicked={clicked} b_number={20} b_letter={''} b_name={"La Roche Champion du coin"}></BollardPopup>
        </Marker>
    )
}

export default BollardMarker;