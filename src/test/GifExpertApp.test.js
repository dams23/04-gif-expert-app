import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GitExpertApp'

describe('pruebas sobre el componente GifExpertApp', () => {
    test('debe coincidir con el snap', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Star Wars', 'Han Solo'];
        const wrapper = shallow(<GifExpertApp
            defaultCategories={categories}
        />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});