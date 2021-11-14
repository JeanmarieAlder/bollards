import React from 'react';
import MapPage from '../MapPage';
import { render } from '@testing-library/react'

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

test("Component displays correctly", () => {
    const component = render(
      <MapPage></MapPage>
    );
    let tree = component.asFragment()
    expect(tree).toMatchSnapshot();
});
