import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../../redux/store";
import Items from "./Items";

configure({adapter: new Adapter()});

describe('Items', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Items store={store}/>);
    });

    test('should create', () => {
        expect(wrapper).not.toBeNull();
    })
});
