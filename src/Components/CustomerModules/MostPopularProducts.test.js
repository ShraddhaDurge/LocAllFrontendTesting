import React from 'react';
import renderer from 'react-test-renderer';
import MostPopularProducts from './MostPopularProducts';

it('MostPopularProducts', () => {
    const tree=renderer.create(<MostPopularProducts />).toJSON();
    expect(tree).toMatchSnapshot();
})