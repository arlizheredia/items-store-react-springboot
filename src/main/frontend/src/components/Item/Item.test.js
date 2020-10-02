import React from 'react';
import {configure, mount} from 'enzyme';
import Item from "./Item";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Item', () => {
    let wrapper;
    const item = {id: '0', name: 'name', cost: '12.20', department: 'Department', category: 'Category'};

    beforeEach(() => {
        wrapper = mount(<Item item={item}/>);
    });

    it('should create', () => {
        expect(wrapper).not.toBeNull();
    })

    it('should have ListItem component', () => {
        expect(wrapper.find('li.MuiListItem-container').length).toBe(1);
    })

    it('should have item in props', () => {
        expect(wrapper.prop('item')).toEqual(item);
    })
});
