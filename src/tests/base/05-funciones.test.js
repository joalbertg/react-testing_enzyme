import getUser, { getActiveUser } from '../../base/05-funciones';

describe('Tests file 05-funciones', () => {
  test('The getUser method should be Object', () => {
    expect(typeof getUser()).toBe(typeof {});
  });

  test('The getUser method should be Object String', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'joalbertgonzalez@gmail.com'
    };

    expect(getUser()).toEqual(userTest);
  });

  test('The getActiveUser method should be Object', () => {
    expect(typeof getActiveUser()).toBe(typeof {});
  });

  test('The getActiveUser method should be Object String', () => {
    const username = 'joalbertgonzalez@gmail.com';
    const userTest = {
      uid: 'ABC567',
      username: username
    };

    expect(getActiveUser(username)).toEqual(userTest);
  });
});

