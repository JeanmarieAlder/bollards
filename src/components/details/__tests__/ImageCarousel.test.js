import React from 'react';
import ImageCarousel from '../ImageCarousel';
import renderer from 'react-test-renderer';


test("Component displays correctly", () => {
    const component = renderer.create(
        <ImageCarousel images={['b9909a2f9d33190c.jpg']}/>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

test("Component displays correctly with multiple pictures", () => {
    const component = renderer.create(
        <ImageCarousel images={['b9909a2f9d33190c.jpg', '4e5809202f8beb95.jpg']}/>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});