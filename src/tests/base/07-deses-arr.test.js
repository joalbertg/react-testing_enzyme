import returnArray from '../../base/07-deses-arr';

describe('Test file 07-deses-arr', () => {
  test('Should be a [string, number]', () => {
    const arr = returnArray(); // ['ABC', 123]
    const arrTest = ['ABC', 123];

    const [string, number] = returnArray();

    expect(arr).toEqual(arrTest);

    expect(string).toBe('ABC');
    expect(typeof string).toBe('string');

    expect(number).toBe(123);
    expect(typeof number).toBe('number');
  } );
});

