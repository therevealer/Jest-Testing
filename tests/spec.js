const findNum = require('../array')

describe("find the Largest Number", () => {

    it('should find the largest number in an array of positive numbers', () => {
        const numbers = [2, 5, 1, 8, 3];
        expect(findNum(numbers)).toBe(8);
    })

    it('should find the largest number in an array of negative numbers', () => {
        const numbers = [-2, -5, -1, -8, -3];
        expect(findNum(numbers)).toBe(-1);
      });

    it('should find the largest number in an array with a single number', () => {
        const numbers = [25];
        expect(findNum(numbers)).toBe(25);
    })
})