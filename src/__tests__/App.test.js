import React from "react";
import { render } from '@testing-library/react';
import App from "../App";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

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

test("App displays correctly", () => {
    const component = render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    expect(tree).toMatchSnapshot();
})

test("App displays correctly with map route", () => {
    const component = render(
        <MemoryRouter initialEntries={["/map"]}>
            <App/>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    expect(tree).toMatchSnapshot();
})

test("App displays correctly with details route", () => {
    const component = render(
        <MemoryRouter initialEntries={["/details"]}>
            <App/>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    expect(tree).toMatchSnapshot();
})