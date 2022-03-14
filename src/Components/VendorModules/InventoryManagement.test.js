import React from 'react';
import renderer from 'react-test-renderer';
import InventoryManagement from './InventoryManagement';

it('InventoryManagement', () => {
    const tree=renderer.create(<InventoryManagement />).toJSON();
    expect(tree).toMatchSnapshot();
})