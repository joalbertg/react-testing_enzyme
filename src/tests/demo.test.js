describe('Tests file demo.test.js', () => {
  test('Should be equal strings', () => {
    // 1. Initialization
    const message_1 = 'Hello World';

    // 2. Stimulus
    const message_2 = `Hello World`;

    // 3.  Observer Behavior
    expect(message_1).toBe(message_2);
  });
});

