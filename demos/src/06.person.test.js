const Person = require('./06.person');

describe('Test for Person class', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('john', 42, '1.76');
  });

  test('should return IMC down', () => {
    // AAA => Arrange Act Assert

    // Arrange
    person.weight = 52;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return IMC normal', () => {
    person.weight = 74;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
