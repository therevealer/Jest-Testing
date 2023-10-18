const add = require('./math')

test('add function should correctly add two numbers', () => {

    expect(add(2, 2)).toBe(4);
    expect(add(6, 1)).toBe(7);
    expect(add(0, 0)).toBe(0);
    expect(add(10, -5)).toBe(5);

});
