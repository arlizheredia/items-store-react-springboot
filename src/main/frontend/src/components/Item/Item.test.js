import React from 'react';
import {configure} from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Item from "./Item";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Item 1', () => {
    let container;
    beforeEach(() => {
       //jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        const item = {id: '0', name: 'name', cost: '12.20', department: 'Department', category: 'Category'};
        container = shallow(<Item item={item}/>);
    });
    test('Item', () => {
        expect(container).toBeDefined();
    })
});
