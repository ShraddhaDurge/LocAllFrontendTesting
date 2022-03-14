import React from 'react';
import renderer from 'react-test-renderer';
import VendorHome from './VendorHome';

it('VendorHome', () => {
    const tree=renderer.create(<VendorHome />).toJSON();
    expect(tree).toMatchSnapshot();
})