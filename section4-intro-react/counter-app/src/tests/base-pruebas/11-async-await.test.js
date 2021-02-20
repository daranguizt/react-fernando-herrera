const { getImagen } = require("../../base-pruebas/11-async-await");

jest.setTimeout(10000);

describe('async await fetch test', () => {
    test('should return img url', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);

    })
});