import React from 'react';
import renderer from 'react-test-renderer';
import DisplayImage from './DisplayImage';

it('DisplayImage', () => {
    const tree=renderer.create(<DisplayImage />).toJSON();
    expect(tree).toMatchSnapshot();
})