import React from "react";
import BollardCardListFiltered from "../BollardCardListFiltered";
import { render } from '@testing-library/react'
import { test_bollards_list_filtered } from "../../tests/TestData";
import { MemoryRouter } from "react-router";


test("Component displays correctly with correct data", () => {
    const component = render(
        <MemoryRouter>
            <BollardCardListFiltered bollards={test_bollards_list_filtered}></BollardCardListFiltered>
        </MemoryRouter> 
    );
    let tree = component.asFragment();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})

test("Component displays correctly without data", () => {
    const component = render(
        <MemoryRouter>
            <BollardCardListFiltered bollards={[[],[]]}></BollardCardListFiltered>
        </MemoryRouter> 
    );
    let tree = component.asFragment();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})