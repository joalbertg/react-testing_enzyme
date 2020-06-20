import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Test file 08-imp-exp', () => {
  test('Should return a hero by id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find(element => element.id === id);

    expect(hero).toEqual(heroData);
  });

  test('Should return undefined if hero by id does not exist', () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test('Should return a vector with DC heroes', () => {
    const owner = 'DC';
    const heroesTest = heroes.filter(element => element.owner === owner);
    const heroesByOwner = getHeroesByOwner(owner);

    expect(heroesByOwner).toEqual(heroesTest);
    expect(heroesByOwner.length).toBe(heroesTest.length);
  });

  test('Should return a vector with Marvel heroes', () => {
    const owner = 'Marvel';
    const heroesTest = heroes.filter(element => element.owner === owner);
    const heroesByOwner = getHeroesByOwner(owner);

    expect(heroesByOwner).toEqual(heroesTest);
    expect(heroesByOwner.length).toBe(heroesTest.length);
  });

});

