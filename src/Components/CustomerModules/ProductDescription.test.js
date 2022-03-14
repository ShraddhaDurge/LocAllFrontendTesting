import React from 'react';
import renderer from 'react-test-renderer';
import ProductDescription from './ProductDescription';

it('ProductDescription', () => {
    const tree=renderer.create(<ProductDescription />).toJSON();
    expect(tree).toMatchSnapshot();
})