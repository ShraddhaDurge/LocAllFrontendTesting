import React from 'react';
import renderer from 'react-test-renderer';
import ProductCategories from './ProductCategories';

it('ProductCategories', () => {
    const tree=renderer.create(<ProductCategories />).toJSON();
    expect(tree).toMatchSnapshot();
})