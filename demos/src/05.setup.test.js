describe('group 1', () => {
  beforeAll(() => {
    console.log('Before hook');
  });
  afterAll(() => {
    console.log('afterAll hook');
  });
  beforeEach(() => {
    console.log('beforeEach hook');
  });
  afterEach(() => {
    console.log('afterAll hook');
  });

  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('Before hook');
    });

    test('Case 3', () => {
      console.log('Case 3');
      expect(1 + 1).toBe(2);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
