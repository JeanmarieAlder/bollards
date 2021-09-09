import L from 'leaflet'
import imgMarkerFields from "../../../assets/img/marker_fields.png"
import imgMarkerForest from "../../../assets/img/marker_forest.png"
import imgMarkerCustom from "../../../assets/img/marker_custom.png"
import imgMarkerPlain from "../../../assets/img/marker_plain.png"
import imgMarkerSwamp from "../../../assets/img/marker_swamp.png"
import imgMarkerRocky from "../../../assets/img/marker_rocky.png"
import imgMarkerSpecial from "../../../assets/img/marker_special.png"

const BollardIcon = L.Icon.extend({
    options: {
        iconSize:     [31, 39], // size of the icon
        iconAnchor:   [15, 39], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
    }
  });

export const markerFields = new BollardIcon({
    iconUrl: imgMarkerFields
});
export const markerForest = new BollardIcon({
  iconUrl: imgMarkerForest
});
export const markerRocky = new BollardIcon({
  iconUrl: imgMarkerRocky
});
export const markerCustom = new BollardIcon({
  iconUrl: imgMarkerCustom
});
export const markerPlain = new BollardIcon({
  iconUrl: imgMarkerPlain
});
export const markerSwamp = new BollardIcon({
  iconUrl: imgMarkerSwamp
});
export const markerSpecial = new BollardIcon({
  iconUrl: imgMarkerSpecial
});