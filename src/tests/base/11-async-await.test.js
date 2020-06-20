import getImagen from '../../base/11-async-await';

describe('Tests file 11-async-await', () => {
  test('Should return a object type', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });

  test('Should return string with https://', async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});

