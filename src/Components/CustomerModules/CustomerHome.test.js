import React from 'react';
import renderer from 'react-test-renderer';
import CustomerHome from './CustomerHome';

it('CustomerHome', () => {
    const tree=renderer.create(<CustomerHome />).toJSON();
    expect(tree).toMatchSnapshot();
})