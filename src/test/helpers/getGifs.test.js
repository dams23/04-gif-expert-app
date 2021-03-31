import {getGifs} from '../../helpers/getGifs';
describe('Pruebas sobre getGifs', () => {
    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('Star Wars');
        expect(gifs.length).toBe(10);
    });
    test('debe traer un arreglo vacio', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});