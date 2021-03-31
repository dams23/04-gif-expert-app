import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';
describe('Pruebas sobre el componente AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    test('debe de mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe evaluar los cambios en el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    test('No debe de postear la info con submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Han Solo';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('')
    });

});