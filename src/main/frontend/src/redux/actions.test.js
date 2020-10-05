import {Actions} from "./actions";
import {Types} from "./types";

describe('Redux Actions', () => {

    test('should create setItems action with empty items', () => {
        expect(Actions.setItems([])).toEqual({
            type: Types.SET_ITEMS,
            items: [],
        });
    })

    test('should create setItems action with not empty items', () => {
        const items = [{
            id: '0',
            name: 'name',
            cost: '12.20',
            department: 'Department',
            category: 'Category'
        }];

        expect(Actions.setItems(items)).toEqual({
            type: Types.SET_ITEMS,
            items: items,
        });
    })

    test('should create setDepartments action with empty departments', () => {
        expect(Actions.setDepartments([])).toEqual({
            type: Types.SET_DEPARTMENTS,
            departments: [],
        });
    })

    test('should create setDepartments action with not empty departments', () => {
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

        expect(Actions.setDepartments(departments)).toEqual({
            type: Types.SET_DEPARTMENTS,
            departments: departments
        });
    })
});