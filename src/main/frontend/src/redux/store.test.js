import {Actions} from "./actions";
import {createStore} from "redux";
import {INITIAL_STATE, reducer} from "./store";

describe('Redux Store', () => {
    let store;
    beforeEach(() => {
         store = createStore(reducer);
    });

    test('should setup store with initial state', () => {

        expect(store.getState()).toEqual(INITIAL_STATE);
    })

    test('should setup store items', () => {
        const items = [{
            id: '0',
            name: 'name',
            cost: '12.20',
            department: 'Department',
            category: 'Category'
        }];
        store.dispatch(Actions.setItems(items));

        expect(store.getState().items).toEqual(items);
    })

    test('should setup store departments', () => {
        const departments = [{
            id: 1,
            name: "Clothing",
            categories: [
                {
                    id: 1,
                    name: "Baby"
                }
            ]
        }];
        store.dispatch(Actions.setDepartments(departments));

        expect(store.getState().departments).toEqual(departments);
    })

});