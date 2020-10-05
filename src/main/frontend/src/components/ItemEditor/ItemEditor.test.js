import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../../redux/store";
import ItemEditor from "./ItemEditor";
import {Provider} from "react-redux";

configure({adapter: new Adapter()});

describe('ItemEditor', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><ItemEditor/></Provider>);
    });

    it('should create', () => {
        expect(wrapper).not.toBeNull();
    })
});
