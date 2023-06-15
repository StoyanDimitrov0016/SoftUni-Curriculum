const { expect } = require('chai');
const { sum } = require('./sum');

describe('sum', () => {
    it('should return the sum of numbers in an array', () => {
        const result = sum([1, 2, 3, 4, 5]);
        expect(result).to.equal(15);
    });

    it('should return 0 for an empty array', () => {
        const result = sum([]);
        expect(result).to.equal(0);
    });

    it('should handle negative numbers', () => {
        const result = sum([-1, -2, -3]);
        expect(result).to.equal(-6);
    });

    it('should handle floating point numbers', () => {
        const result = sum([1.5, 2.3, 3.7]);
        expect(result).to.equal(7.5);
    });

    it('should handle a single number in the array', () => {
        const result = sum([10]);
        expect(result).to.equal(10);
    });

    it('should return 0 when called with an empty array', () => {
        const result = sum([]);
        expect(result).to.equal(0);
    });
});
