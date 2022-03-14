import React from 'react';
import renderer from 'react-test-renderer';
import BusinessRegister from './BusinessRegister';

it('BusinessRegister', () => {
    const tree=renderer.create(<BusinessRegister />).toJSON();
    expect(tree).toMatchSnapshot();
})