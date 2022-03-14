import React from 'react';
import renderer from 'react-test-renderer';
import VendorDisplayProduct from './VendorDisplayProduct';

it('VendorDisplayProduct', () => {
    const tree=renderer.create(<VendorDisplayProduct />).toJSON();
    expect(tree).toMatchSnapshot();
})