import {getGifs} from '../helpers/getGifs';

describe('tests on getGifs', () => {
    test('should retrieve 10 elements', async () => {
        const gifs = await getGifs('hehehe');
        expect(gifs.length).toBe(10);
    });
    test('should retrieve 0 elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});