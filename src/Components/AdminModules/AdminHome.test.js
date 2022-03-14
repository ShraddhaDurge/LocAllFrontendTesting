import React from 'react';
import renderer from 'react-test-renderer';
import AdminHome from './AdminHome';

it('AdminHome', () => {
    const tree=renderer.create(<AdminHome />).toJSON();
    expect(tree).toMatchSnapshot();
})