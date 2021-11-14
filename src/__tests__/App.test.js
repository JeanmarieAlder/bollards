import React from "react";
import { render } from '@testing-library/react'
import App from "../App";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

test("App displays correctly", () => {
    const component = render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})

test("App displays correctly with map route", () => {
    const component = render(
        <MemoryRouter initialEntries={["/map"]}>
            <App/>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})

test("App displays correctly with details route", () => {
    const component = render(
        <MemoryRouter initialEntries={["/details"]}>
            <App/>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})