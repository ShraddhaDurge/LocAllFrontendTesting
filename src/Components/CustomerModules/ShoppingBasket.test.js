import React from 'react';
import renderer from 'react-test-renderer';
import ShoppingBasket from './ShoppingBasket';

it('ShoppingBasket', () => {
    const tree=renderer.create(<ShoppingBasket />).toJSON();
    expect(tree).toMatchSnapshot();
})