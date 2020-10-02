import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";
import store from "../../redux/store";
import {Provider} from "react-redux";
import {Actions} from "../../redux/actions";

configure({adapter: new Adapter()});

describe('App', () => {
    let wrapper;
    let items = [{id: '0', name: 'name', cost: '12.20', department: 'Department', category: 'Category'}];
    beforeEach(() => {
        store.dispatch(Actions.setItems(items))
        wrapper = mount(<Provider store={store}><App/></Provider>);
    });

    it('should create', () => {
        expect(wrapper).not.toBeNull();
    })

    it('should have Item components in DOM', () => {
        expect(wrapper.find('Item').length).toEqual(items.length);
    })

    it('should have items in props of Items component', () => {
        expect(wrapper.find('Items').prop('items')).toEqual(items);
    })
});
