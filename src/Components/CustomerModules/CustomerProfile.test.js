import React from 'react';
import renderer from 'react-test-renderer';
import CustomerProfile from './CustomerProfile';

it('CustomerProfile', () => {
    const tree=renderer.create(<CustomerProfile />).toJSON();
    expect(tree).toMatchSnapshot();
})