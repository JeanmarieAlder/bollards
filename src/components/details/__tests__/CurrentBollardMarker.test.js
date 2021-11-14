import React from 'react';
import { MapContainer } from 'react-leaflet';
import renderer from 'react-test-renderer';
import CurrentBollardMarker from '../CurrentBollardMarker';

//jest.mock('leaflet');

test("Component displays correctly", () => {
    const component = renderer.create(
        <div style={{height:'100%'}}>
            <MapContainer style={{height:'100%'}}>
                <CurrentBollardMarker bollard={{
                    b_lat: "46.1", 
                    b_lng: "6.9", 
                    b_type: "Forest", 
                    b_number: 1,
                    b_letter: "a"
                }}/>
            </MapContainer>
        </div>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});