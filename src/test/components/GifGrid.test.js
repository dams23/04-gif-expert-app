import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')
describe('Pruebas sobre el componente GifGrid', () => {
    const category = 'Han Solo';
    test('debe mostrar el GifGrid', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid
            category={category}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la data cuando se carguen los gifs con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        },
        {
            id: 'A3C',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'

        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid
            category={category}
        />)
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
