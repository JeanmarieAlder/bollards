import React from 'react';
import { render } from '@testing-library/react'
import { MapContainer } from 'react-leaflet';
import CurrentBollardMarker from '../CurrentBollardMarker';

test("Component displays correctly", () => {
    const component = render(
        <MapContainer style={{height:'100%'}}>
            <CurrentBollardMarker bollard={{
                b_lat: "46.1", 
                b_lng: "6.9", 
                b_type: "Forest", 
                b_number: 1,
                b_letter: "a"
            }}/>
        </MapContainer>
      );
      let tree = component.asFragment();
      expect(tree).toMatchSnapshot();
});