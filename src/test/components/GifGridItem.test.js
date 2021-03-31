import React from 'react'
import  GifGridItem  from '../../components/GifGridItem'
import { shallow } from 'enzyme'

describe('Pruebas en el Item', () => {
    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(< GifGridItem 
        title={title} 
        url={url}
        />)
    test('debe mostrar el GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un parrfo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className') 
        expect(className.includes('animate__fadeInDownBig')).toBe(true);
    });
    
    
})
