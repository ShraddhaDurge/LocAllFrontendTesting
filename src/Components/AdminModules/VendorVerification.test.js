import React from 'react';
import renderer from 'react-test-renderer';
import VendorVerification from './VendorVerification';

it('VendorVerification', () => {
    const tree=renderer.create(<VendorVerification />).toJSON();
    expect(tree).toMatchSnapshot();
})