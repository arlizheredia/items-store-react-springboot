import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../../redux/store";
import AddItem from "./AddItem";


// TODO redux-mock-store
configure({adapter: new Adapter()});


describe('AddItem', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AddItem store={store}/>);
    });

    it('should create', () => {
        expect(wrapper).not.toBeNull();
    })
});
