import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../../redux/store";
import UpdateItem from "./UpdateItem";

configure({adapter: new Adapter()});

describe('UpdateItem', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UpdateItem store={store}/>);
    });

    it('should create', () => {
        expect(wrapper).not.toBeNull();
    })
});
