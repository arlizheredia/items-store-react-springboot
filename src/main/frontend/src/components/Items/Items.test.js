import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../../redux/store";
import Items from "./Items";
import {Provider} from "react-redux";

configure({adapter: new Adapter()});

describe('Items', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Items/></Provider>);
    });

    test('should create', () => {
        expect(wrapper).not.toBeNull();
    })
});
