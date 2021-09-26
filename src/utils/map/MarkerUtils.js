import * as Icons from '../../components/shared/map/CustomMarkerIcons';


export function getMarkerByType(b_type) {
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