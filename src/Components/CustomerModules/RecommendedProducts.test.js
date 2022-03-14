import React from 'react';
import renderer from 'react-test-renderer';
import RecommendedProducts from './RecommendedProducts';

it('RecommendedProducts', () => {
    const tree=renderer.create(<RecommendedProducts />).toJSON();
    expect(tree).toMatchSnapshot();
})