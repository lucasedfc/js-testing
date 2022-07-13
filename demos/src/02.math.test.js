const { divide, sum, multiply } = require('./02.math');

describe(('test for math'), () => {
  describe(('test for sum method'), () => {
    test('add 1 + 3 shoud return 4', () => {
      const res = sum(1, 3);
      expect(res).toBe(4);
    });
  });

  describe(('test for divide method'), () => {
    test('divide 4 with 2 shoud return 2', () => {
      const res = divide(4, 2);
      expect(res).toBe(2);
    });

    test('divide 4 with 0 shoud return 0', () => {
      const res = divide(4, 0);
      expect(res).toBeNull();
    });
  });

  describe(('test for multiply method'), () => {
    test('multiply 4 with 2 shoud return 8', () => {
      const res = multiply(4, 2);
      expect(res).toBe(8);
    });
  });
});
