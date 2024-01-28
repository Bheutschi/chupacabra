const addNumberTest = require('./addNumber');
test('Add 1 + 2 should return 3', () => {
    const result = addNumberTest(1, 2);
    expect(result).toBe(3);
});