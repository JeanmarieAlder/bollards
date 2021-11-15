import React from "react";
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import BollardCardList from "../BollardCardList";
import { test_bollards_list } from "../../tests/TestData";
import { MemoryRouter } from "react-router";

test("Component displays correctly", () => {
    const component = render(
        <MemoryRouter>
            <BollardCardList bollards={test_bollards_list}></BollardCardList>
        </MemoryRouter>
    );
    let tree = component.asFragment();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})


test("persistScrollPosition method calls sessionStorage", () => {
    window.sessionStorage.setItem = jest.fn(() => Promise.resolve())
    const shallowRenderer = new ShallowRenderer();
    const component = shallowRenderer.render(
        <BollardCardList bollards={test_bollards_list}></BollardCardList>
    );
    console.log(component);
    const result = shallowRenderer.getRenderOutput();
    console.log(result);
    const child = result.props.children[0]
    console.log(child);
    child.props.onSelectBollard(42);
    expect(window.sessionStorage.getItem('scroll-position-bollard-id')).toEqual("42");
})