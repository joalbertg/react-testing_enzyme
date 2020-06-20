import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Tests file 09-promesas', () => {
  test('Should return a async hero', done => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBe(heroes[0]);
        done();
      });
  });

  test('Should return an error if hero by id does not exist', (done) => {
    const id = 10;

    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
});

