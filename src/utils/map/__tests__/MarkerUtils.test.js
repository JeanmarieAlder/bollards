import { getMarkerByType } from "../MarkerUtils"
import * as Icons from '../../../components/shared/map/CustomMarkerIcons';


test('Fields marker returns correct path', () => {
    const testMarker = getMarkerByType('Fields');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_fields.png');
})

test('Forest marker returns correct path', () => {
    const testMarker = getMarkerByType('Forest');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_forest.png');
})

test('Rocky marker returns correct path', () => {
    const testMarker = getMarkerByType('Rocky');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_rocky.png');
})

test('Custom marker returns correct path', () => {
    const testMarker = getMarkerByType('Custom');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_custom.png');
})

test('Plain marker returns correct path', () => {
    const testMarker = getMarkerByType('Plain');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_plain.png');
})

test('Swamp marker returns correct path', () => {
    const testMarker = getMarkerByType('Swamp');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_swamp.png');
})

test('Special marker returns correct path', () => {
    const testMarker = getMarkerByType('Special');
    expect(testMarker).toBeDefined();
    expect(testMarker.options.iconUrl).toEqual('marker_special.png');
})
