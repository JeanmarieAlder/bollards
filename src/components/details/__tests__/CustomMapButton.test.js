import { render } from '@testing-library/react';
import React from 'react';
import { MapContainer } from 'react-leaflet';
import { BrowserRouter } from 'react-router-dom';
import CustomMapButton from '../CustomMapButton';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str,
        i18n: {
          ...jest.requireActual('react-i18next'),
          on: () => {}
        },
      };
    },
  }));

function mockFunction() {
    const original = jest.requireActual('react-router-dom');
    return {
        ...original,
        useLocation: () => ({
        pathname: '/another-route',
        search: '',
        hash: '',
        state: null,
        key: '5nvxpbdafa',
        })
    };
} 

jest.mock('react-router-dom', () => mockFunction());

test("Component displays correctly", () => {
    const component = render(
        <BrowserRouter>
            <MapContainer 
                style={{height:'100%'}}
                center={[46.12, 7.12]} 
                zoom={15}>
                <CustomMapButton></CustomMapButton>
            </MapContainer>
        </BrowserRouter>
        
      );
      let tree = component.asFragment();
      expect(tree).toMatchSnapshot();
});