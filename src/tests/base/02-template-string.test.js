import '@testing-library/jest-dom';

import getGreet from '../../base/02-template-string.js';

describe('Tests file 02-template-string.js', () => {
  test('The getGreet method should return Hello Joalbert', () => {
    const name = 'Joalbert'
    const strGreet = 'Hello Joalbert';

    expect(getGreet(name)).toBe(strGreet);
  });

  test('The getGreet method should return Hello Lisset', () => {
    const strGreet = 'Hello Lisset';
    expect(getGreet()).toBe(strGreet);
  });
});

